import Image from "next/image";
import Link from "next/link";
import { MoveRight, Zap, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedCounter } from "@/components/animated-counter";

const heroImage = PlaceHolderImages.find((img) => img.id === "hero-shuttle");
const testimonialImages = {
    '1': PlaceHolderImages.find((img) => img.id === "testimonial-1"),
    '2': PlaceHolderImages.find((img) => img.id === "testimonial-2"),
    '3': PlaceHolderImages.find((img) => img.id === "testimonial-3"),
};
const fleetImages = {
  'main': PlaceHolderImages.find((img) => img.id === "shuttle-main-campus"),
  'accessibility': PlaceHolderImages.find((img) => img.id === "shuttle-accessibility"),
};

const fleet = [
  {
    name: "Main Campus Loop",
    description: "Our primary shuttle connecting all major academic buildings, libraries, and student centers.",
    image: fleetImages['main'],
    features: ["High-frequency service", "Connects all major buildings", "Runs every 10 minutes"],
  },
  {
    name: "Accessibility Shuttle",
    description: "A dedicated service with wheelchair access and priority seating for students with mobility needs.",
    image: fleetImages['accessibility'],
    features: ["Wheelchair accessible", "On-demand booking available", "Trained assistive staff"],
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Computer Science Student",
    quote: "The shuttle service is a lifesaver! I can track it in real-time and never have to worry about being late for class.",
    avatar: testimonialImages['1']?.imageUrl,
    avatarHint: testimonialImages['1']?.imageHint
  },
  {
    name: "Rahul Verma",
    role: "Business Administration Student",
    quote: "It's so convenient and affordable. Plus, it feels good to know I'm contributing to a greener campus. The app is super easy to use!",
    avatar: testimonialImages['2']?.imageUrl,
    avatarHint: testimonialImages['2']?.imageHint
  },
  {
    name: "Anjali Mehta",
    role: "Arts & Humanities Student",
    quote: "I feel much safer commuting within the campus, especially during the evenings. The tracking feature gives me and my parents peace of mind.",
    avatar: testimonialImages['3']?.imageUrl,
    avatarHint: testimonialImages['3']?.imageHint
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-shadow-lg">
            Clean & Green Shuttle Service
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-8">
            The future of campus mobility is here. Clean, efficient, and always on time.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <Link href="/track">
              Track a Shuttle Now <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Meet Our Fleet Section */}
      <section id="fleet" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Fleet</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art electric shuttles for a modern campus experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {fleet.map((shuttle) => (
              <Card key={shuttle.name} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {shuttle.image && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={shuttle.image.imageUrl}
                      alt={shuttle.image.description}
                      data-ai-hint={shuttle.image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{shuttle.name}</CardTitle>
                  <CardDescription>{shuttle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {shuttle.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full">
                    <Link href="/track">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CO2 Saved Counter Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">Our Collective Impact</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every ride contributes to a cleaner, greener campus for everyone.
          </p>
          <div className="mt-8 bg-card p-8 rounded-lg shadow-xl inline-block">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">CO₂ Saved (in kg)</p>
            <div className="text-6xl md:text-7xl font-bold text-primary mt-2">
              <AnimatedCounter targetValue={12543} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Students Say</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from students who love our shuttle service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col justify-between">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center">
                    {testimonial.avatar && <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>}
                    <div className="ml-4">
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
