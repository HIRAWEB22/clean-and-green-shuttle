
import Image from 'next/image';
import {
  Heart,
  Globe,
  DollarSign,
  Accessibility,
  Shield,
  Coins,
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
    icon: <Coins className="h-10 w-10 text-primary" />,
    title: 'Affordability',
    description:
      'High travel costs create a financial burden on students, limiting their campus activities and participation.',
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Safety & Health',
    description:
      'Reliance on external public transport poses health risks and safety concerns, especially for female students.',
  },
  {
    icon: <Accessibility className="h-10 w-10 text-primary" />,
    title: 'Accessibility',
    description:
      'The "last-mile" gap between public transport and campus facilities hinders access for many students, including those with disabilities.',
  },
];

const solutions = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'People',
    description:
      'Enhancing student well-being, safety, and equitable access for all, including those with disabilities.',
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Planet',
    description:
      'Reducing our carbon footprint and contributing to a sustainable campus environment for future generations.',
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: 'Profit',
    description:
      'Creating a financially stable, efficient, and scalable service that reduces long-term operational costs.',
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
            About The Clean & Green Initiative
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            A strategic effort to build a safer, more sustainable, and
            inclusive campus for everyone.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">The Challenge</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Our campus community faces several key transportation challenges
              that impact student life and well-being.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map(item => (
              <Card key={item.title} className="text-center shadow-lg">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {item.icon}
                  </div>
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Solution: A Triple Bottom Line</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              The "Clean & Green Shuttle Service" is an electric fleet designed to deliver social, environmental, and financial benefits, creating a sustainable asset for the university.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map(item => (
              <Card key={item.title} className="text-center shadow-lg">
                <CardHeader className="items-center">
                   <div className="bg-primary/10 p-4 rounded-full">
                    {item.icon}
                  </div>
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To provide safe, reliable, and sustainable transportation that enhances campus accessibility and student well-being, fostering a more connected and equitable community.
              </p>
            </div>
            <div className="text-center md:text-left">
               <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To be a leader in campus mobility by creating an innovative, eco-friendly transit system that serves as a model for universities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
