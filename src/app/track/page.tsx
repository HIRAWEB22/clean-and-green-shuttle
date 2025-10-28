"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Bus, MapPin, LocateFixed, Clock } from "lucide-react";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const mapImage = PlaceHolderImages.find((img) => img.id === "campus-map");

const stops = [
  { id: 1, name: "Central Library", position: { x: 15, y: 20 } },
  { id: 2, name: "Engineering Block", position: { x: 40, y: 30 } },
  { id: 3, name: "Science Hub", position: { x: 65, y: 25 } },
  { id: 4, name: "Student Union", position: { x: 80, y: 45 } },
  { id: 5, name: "Arts & Humanities Dept.", position: { x: 60, y: 70 } },
  { id: 6, name: "Sports Complex", position: { x: 30, y: 65 } },
  { id: 7, name: "Main Gate", position: { x: 10, y: 50 } },
];

const routePath = [
  { x: 15, y: 20 },
  { x: 40, y: 30 },
  { x: 65, y: 25 },
  { x: 80, y: 45 },
  { x: 60, y: 70 },
  { x: 30, y: 65 },
  { x: 10, y: 50 },
  { x: 15, y: 20 },
];

const SHUTTLE_SPEED = 0.5; // Controls animation speed

export default function TrackPage() {
  const [shuttlePosition, setShuttlePosition] = useState(routePath[0]);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [progress, setProgress] = useState(0);
  const [highlightedStop, setHighlightedStop] = useState<number | null>(null);
  const [arrivalMinutes, setArrivalMinutes] = useState(5);
  const [arrivalSeconds, setArrivalSeconds] = useState(0);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(animateShuttle);
    return () => cancelAnimationFrame(animationFrame);
  }, [currentSegment, progress]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (arrivalSeconds > 0) {
        setArrivalSeconds(arrivalSeconds - 1);
      } else if (arrivalMinutes > 0) {
        setArrivalMinutes(arrivalMinutes - 1);
        setArrivalSeconds(59);
      } else {
        // Reset timer
        setArrivalMinutes(5);
        setArrivalSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [arrivalMinutes, arrivalSeconds]);
  
  const animateShuttle = () => {
    setProgress((prev) => {
      let newProgress = prev + SHUTTLE_SPEED;
      if (newProgress >= 100) {
        setCurrentSegment((prevSegment) => (prevSegment + 1) % (routePath.length - 1));
        return 0;
      }
      return newProgress;
    });

    const start = routePath[currentSegment];
    const end = routePath[(currentSegment + 1) % routePath.length];
    const newX = start.x + (end.x - start.x) * (progress / 100);
    const newY = start.y + (end.y - start.y) * (progress / 100);

    setShuttlePosition({ x: newX, y: newY });
  };

  const findNearestStop = () => {
    // Mock finding nearest stop
    setHighlightedStop(3); // Science Hub
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Live Shuttle Tracker
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Follow the Campus Cruiser in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 shadow-lg">
          <CardContent className="p-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
              {mapImage && (
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  data-ai-hint={mapImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  d={routePath.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  fill="none"
                />
              </svg>
              {/* Stops */}
              {stops.map((stop) => (
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
                      highlightedStop === stop.id && "fill-accent-foreground text-accent"
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
                <p className="text-sm font-medium uppercase text-secondary-foreground">Estimated Arrival at 'Science Hub'</p>
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
                {stops.map((stop, index) => (
                  <li key={stop.id}>
                    <div className={cn("flex items-center gap-3 p-2 rounded-md transition-colors", highlightedStop === stop.id && "bg-accent")}>
                      <Badge variant="secondary" className="text-lg">{stop.id}</Badge>
                      <span className={cn("font-medium", highlightedStop === stop.id && "text-accent-foreground")}>{stop.name}</span>
                    </div>
                    {index < stops.length - 1 && <Separator className="my-2" />}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
