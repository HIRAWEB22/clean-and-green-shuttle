
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatedCounter } from '@/components/animated-counter';
import imageData from '@/lib/placeholder-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { ImpactCarousel } from '@/components/home/impact-carousel';

const images: Record<string, ImagePlaceholder> =
  imageData.placeholderImages.reduce((acc, img) => {
    acc[img.id] = img;
    return acc;
  }, {} as Record<string, ImagePlaceholder>);

const heroImage = images['hero-shuttle'];

const fleet = [
  {
    name: 'Main Campus Loop',
    description:
      'Our primary shuttle connecting all major academic buildings, libraries, and student centers.',
    image: images['shuttle-main-campus'],
    features: [
      'High-frequency service',
      'Connects all major buildings',
      'Runs every 10 minutes',
    ],
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Computer Science Student',
    quote:
      'The shuttle service is a lifesaver! I can track it in real-time and never have to worry about being late for class.',
    avatar: images['testimonial-1'],
  },
  {
    name: 'Rahul Verma',
    role: 'Business Administration Student',
    quote:
      "It's so convenient and affordable. Plus, it feels good to know I'm contributing to a greener campus. The app is super easy to use!",
    avatar: images['testimonial-2'],
  },
  {
    name: 'Anjali Mehta',
    role: 'Arts & Humanities Student',
    quote:
      'I feel much safer commuting within the campus, especially during the evenings. The tracking feature gives me and my parents peace of mind.',
    avatar: images['testimonial-3'],
  },
];

const impactSlides = [
  images['hero-shuttle'],
  images['shuttle-main-campus'],
  images['shuttle-in-city'],
].filter(Boolean);


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
            The future of campus mobility is here. Clean, efficient, and always
            on time.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          >
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
              State-of-the-art electric shuttles for a modern campus
              experience.
            </p>
          </div>
          <div className="flex justify-center">
            {fleet.map(shuttle => (
              <Card
                key={shuttle.name}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-2xl"
              >
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
      <section className="relative py-20 md:py-28 text-white">
        <ImpactCarousel slides={impactSlides} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Collective Impact
          </h2>
          <p className="mt-4 text-lg text-neutral-200 max-w-2xl mx-auto">
            Every ride contributes to a cleaner, greener campus for everyone.
          </p>
          <div className="mt-8 bg-white/20 backdrop-blur-sm p-8 rounded-lg shadow-xl inline-block">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-100">
              CO₂ Saved (in kg)
            </p>
            <div className="text-6xl md:text-7xl font-bold text-white mt-2">
              <AnimatedCounter targetValue={12543} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Students Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from students who love our shuttle service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <Card
                key={testimonial.name}
                className="flex flex-col justify-between"
              >
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center">
                    {testimonial.avatar && (
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.avatar.imageUrl}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.avatar.imageHint}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className="ml-4">
                      <CardTitle className="text-base">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
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
