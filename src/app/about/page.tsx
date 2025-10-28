
import Image from 'next/image';
import {
  DollarSign,
  HeartHandshake,
  ShieldCheck,
  MapPin,
  Users,
  Leaf,
  TrendingUp,
  Target,
  Goal,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import imageData from '@/lib/placeholder-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

const images: Record<string, ImagePlaceholder> =
  imageData.placeholderImages.reduce((acc, img) => {
    acc[img.id] = img;
    return acc;
  }, {} as Record<string, ImagePlaceholder>);

const bannerImage = images['sustainability-banner'];

const challenges = [
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: 'Socio-Economic Burden',
    text: 'High travel costs can be a significant barrier for students, limiting their access to campus facilities and opportunities.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Safety & Health Hazards',
    text: 'Over-reliance on external public transport can expose students to safety risks and public health concerns.',
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: 'The Last-Mile Gap',
    text: 'The distance between public transit stops and campus buildings creates a critical accessibility gap for students.',
  },
];

const solutions = [
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'People (Well-being)',
    text: 'Enhancing student well-being by providing safe, accessible, and affordable on-campus mobility for everyone.',
  },
  {
    icon: <Leaf className="h-10 w-10 text-accent" />,
    title: 'Planet (Sustainability)',
    text: 'Reducing our carbon footprint and promoting environmental responsibility with a zero-emission electric fleet.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: 'Profit (Financial Stability)',
    text: 'Creating a scalable, efficient service that ensures long-term financial health and operational excellence.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[50vh] w-full flex items-center justify-center text-center text-white">
        {bannerImage && (
          <Image
            src={bannerImage.imageUrl}
            alt={bannerImage.description}
            data-ai-hint={bannerImage.imageHint}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-green-900/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            About The Clean & Green Shuttle Service
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Pioneering sustainable and accessible mobility for a better campus
            life.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6 space-y-20">
        <section className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">The Challenge</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Campus mobility presents systemic challenges that affect student
            well-being, safety, and equitable access to education.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {challenges.map(item => (
              <Card key={item.title} className="shadow-lg">
                <CardHeader className="items-center pb-4">
                  {item.icon}
                  <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Solution</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            The Clean & Green Shuttle Service is a strategic initiative built on
            the Triple Bottom Line framework to create holistic value.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {solutions.map(item => (
              <Card key={item.title} className="bg-secondary shadow-lg">
                <CardHeader className="items-center pb-4">
                  {item.icon}
                  <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Our Mission & Vision
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are committed to transforming campus transportation into a
              seamless, sustainable, and inclusive experience for all.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="mt-1 text-muted-foreground">
                  To provide a safe, reliable, and eco-friendly transportation
                  solution that enhances student well-being and promotes a
                  greener campus.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Goal className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="mt-1 text-muted-foreground">
                  To be a leader in sustainable campus mobility, setting a
                  benchmark for innovation, efficiency, and social
                  responsibility in higher education.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
