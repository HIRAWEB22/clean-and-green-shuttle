
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Bus, MapPin, LocateFixed, Clock } from "lucide-react";

import imageData from "@/lib/placeholder-images.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { AnimatedSection } from "@/components/home/animated-section";

const images: Record<string, ImagePlaceholder> =
  imageData.placeholderImages.reduce((acc, img) => {
    acc[img.id] = img;
    return acc;
  }, {} as Record<string, ImagePlaceholder>);

const campusMapImage = images["campus-map"];
const cityMapImage = images["city-map"];

const campusStops = [
  { id: 1, name: "Central Library", position: { x: 15, y: 20 } },
  { id: 2, name: "Engineering Block", position: { x: 40, y: 30 } },
  { id: 3, name: "Science Hub", position: { x: 65, y: 25 } },
  { id: 4, name: "Student Union", position: { x: 80, y: 45 } },
  { id: 5, name: "Arts & Humanities Dept.", position: { x: 60, y: 70 } },
  { id: 6, name: "Sports Complex", position: { x: 30, y: 65 } },
  { id: 7, name: "Main Gate", position: { x: 10, y: 50 } },
];

const campusRoutePath = [
  { x: 15, y: 20 }, { x: 40, y: 30 }, { x: 65, y: 25 }, { x: 80, y: 45 },
  { x: 60, y: 70 }, { x: 30, y: 65 }, { x: 10, y: 50 }, { x: 15, y: 20 },
];

const cityStops = [
    { id: 1, name: "University Campus", position: { x: 10, y: 15 } },
    { id: 2, name: "Saddar BRT Station", position: { x: 35, y: 40 } },
    { id: 3, name: "Blue Area", position: { x: 60, y: 30 } },
    { id: 4, name: "F-10 Markaz", position: { x: 85, y: 55 } },
    { id: 5, name: "G-9 Markaz", position: { x: 55, y: 75 } },
];

const cityRoutePath = [
    { x: 10, y: 15 }, { x: 35, y: 40 }, { x: 60, y: 30 }, { x: 85, y: 55 },
    { x: 55, y: 75 }, { x: 10, y: 15 },
];


type RouteId = "campus" | "city";

const routeData = {
    campus: {
        mapImage: campusMapImage,
        stops: campusStops,
        path: campusRoutePath,
        initialArrivalStop: "Science Hub",
    },
    city: {
        mapImage: cityMapImage,
        stops: cityStops,
        path: cityRoutePath,
        initialArrivalStop: "Blue Area",
    }
}


const SHUTTLE_SPEED = 0.5; // Controls animation speed

export default function TrackPage() {
  const [activeRoute, setActiveRoute] = useState<RouteId>("campus");
  
  const [shuttlePosition, setShuttlePosition] = useState(routeData[activeRoute].path[0]);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [progress, setProgress] = useState(0);
  const [highlightedStop, setHighlightedStop] = useState<number | null>(null);
  const [arrivalMinutes, setArrivalMinutes] = useState(5);
  const [arrivalSeconds, setArrivalSeconds] = useState(0);
  const [arrivalStopName, setArrivalStopName] = useState(routeData[activeRoute].initialArrivalStop);

  const currentRoute = routeData[activeRoute];

  useEffect(() => {
    // Reset animation and states when route changes
    setCurrentSegment(0);
    setProgress(0);
    setShuttlePosition(currentRoute.path[0]);
    setHighlightedStop(null);
    setArrivalStopName(currentRoute.initialArrivalStop);
    const newMinutes = activeRoute === 'campus' ? 5 : 12;
    setArrivalMinutes(newMinutes);
    setArrivalSeconds(0);
  }, [activeRoute, currentRoute]);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(animateShuttle);
    return () => cancelAnimationFrame(animationFrame);
  }, [currentSegment, progress, activeRoute]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (arrivalSeconds > 0) {
        setArrivalSeconds(arrivalSeconds - 1);
      } else if (arrivalMinutes > 0) {
        setArrivalMinutes(arrivalMinutes - 1);
        setArrivalSeconds(59);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [arrivalMinutes, arrivalSeconds]);
  
  const animateShuttle = () => {
    setProgress((prev) => {
      let newProgress = prev + SHUTTLE_SPEED;
      if (newProgress >= 100) {
        setCurrentSegment((prevSegment) => (prevSegment + 1) % (currentRoute.path.length - 1));
        return 0;
      }
      return newProgress;
    });

    const start = currentRoute.path[currentSegment];
    const end = currentRoute.path[(currentSegment + 1) % currentRoute.path.length];
    const newX = start.x + (end.x - start.x) * (progress / 100);
    const newY = start.y + (end.y - start.y) * (progress / 100);

    setShuttlePosition({ x: newX, y: newY });
  };

  const handleStopClick = (stop: typeof currentRoute.stops[0]) => {
    setHighlightedStop(stop.id);
    setArrivalStopName(stop.name);
    // Simulate new arrival time for the selected stop
    setArrivalMinutes(Math.floor(Math.random() * 10) + 2);
    setArrivalSeconds(Math.floor(Math.random() * 60));
  };

  const findNearestStop = () => {
    // Mock finding nearest stop based on active route
    const nearestStopId = activeRoute === 'campus' ? 3 : 2; // Science Hub or Saddar Station
    const nearestStop = currentRoute.stops.find(s => s.id === nearestStopId);
    if (nearestStop) {
        handleStopClick(nearestStop);
    }
  };

  return (
    <AnimatedSection as="div" className="container py-8 md:py-12">
       <Tabs value={activeRoute} onValueChange={(value) => setActiveRoute(value as RouteId)} className="w-full">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold tracking-tight">
                Live Shuttle Tracker
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                Follow the shuttle in real-time on campus or in the city.
                </p>
                <TabsList className="mt-4 mx-auto">
                    <TabsTrigger value="campus">Campus Loop</TabsTrigger>
                    <TabsTrigger value="city">Islamabad City Connect</TabsTrigger>
                </TabsList>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 shadow-lg">
                <CardContent className="p-2">
                    <div className="relative aspect-video w-full overflow-hidden rounded-md">
                    {currentRoute.mapImage && (
                        <Image
                        src={currentRoute.mapImage.imageUrl}
                        alt={currentRoute.mapImage.description}
                        data-ai-hint={currentRoute.mapImage.imageHint}
                        fill
                        className="object-cover"
                        />
                    )}
                    {/* Route line */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                        d={currentRoute.path.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}
                        stroke="hsl(var(--primary))"
                        strokeWidth="0.8"
                        strokeDasharray="2 2"
                        fill="none"
                        />
                    </svg>
                    {/* Stops */}
                    {currentRoute.stops.map((stop) => (
                        <div
                        key={stop.id}
                        className={cn(
                            "absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
                            highlightedStop === stop.id ? "scale-125" : "scale-100"
                        )}
                        style={{ left: `${stop.position.x}%`, top: `${stop.position.y}%` }}
                        >
                        <MapPin
                            className={cn(
                            "h-6 w-6 text-primary-foreground fill-primary drop-shadow-lg",
                            highlightedStop === stop.id && "fill-accent text-accent-foreground"
                            )}
                        />
                        </div>
                    ))}

                    {/* Shuttle */}
                    <div
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 linear"
                        style={{
                        left: `${shuttlePosition.x}%`,
                        top: `${shuttlePosition.y}%`,
                        }}
                    >
                        <div className="relative">
                        <Bus className="h-8 w-8 text-accent-foreground fill-accent drop-shadow-xl animate-pulse" />
                        </div>
                    </div>
                    </div>
                </CardContent>
                </Card>

                <div className="flex flex-col gap-8">
                <Card className="shadow-lg">
                    <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Status
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="text-center bg-secondary p-4 rounded-lg">
                        <p className="text-sm font-medium uppercase text-secondary-foreground truncate">Estimated Arrival at '{arrivalStopName}'</p>
                        <div className="text-4xl font-bold text-primary mt-1">
                        {String(arrivalMinutes).padStart(2, '0')}:{String(arrivalSeconds).padStart(2, '0')}
                        </div>
                    </div>
                    </CardContent>
                </Card>

                <Card className="shadow-lg flex-1">
                    <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Stops
                        </div>
                        <Button variant="ghost" size="sm" onClick={findNearestStop}>
                        <LocateFixed className="h-4 w-4 mr-2" /> Find Nearest
                        </Button>
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <ul className="space-y-3">
                        {currentRoute.stops.map((stop, index) => (
                        <li key={stop.id}>
                            <div
                             onClick={() => handleStopClick(stop)}
                             className={cn(
                                "flex items-center gap-3 p-2 rounded-md transition-colors cursor-pointer hover:bg-muted",
                                highlightedStop === stop.id && "bg-accent hover:bg-accent/90"
                              )}
                            >
                              <Badge variant={highlightedStop === stop.id ? "default" : "secondary"} className="text-lg">{stop.id}</Badge>
                              <span className={cn("font-medium", highlightedStop === stop.id && "text-accent-foreground")}>{stop.name}</span>
                            </div>
                            {index < currentRoute.stops.length - 1 && <Separator className="my-2" />}
                        </li>
                        ))}
                    </ul>
                    </CardContent>
                </Card>
                </div>
            </div>
      </Tabs>
    </AnimatedSection>
  );
}
