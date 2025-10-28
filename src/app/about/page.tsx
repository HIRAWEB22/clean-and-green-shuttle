
import Image from 'next/image';
import {
  Heart,
  Globe,
  DollarSign,
  Accessibility,
  Shield,
  Coins,
  CheckCircle,
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
    icon: <Coins className="h-8 w-8 text-primary" />,
    title: 'Affordability',
    description:
      'High travel costs create a financial burden on students, limiting their campus activities and participation.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Safety & Health',
    description:
      'Reliance on external public transport poses health risks and safety concerns, especially for female students.',
  },
  {
    icon: <Accessibility className="h-8 w-8 text-primary" />,
    title: 'Accessibility',
    description:
      'The "last-mile" gap between public transport and campus facilities hinders access for many students, including those with disabilities.',
  },
];

const solutions = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'People',
    description:
      'Enhancing student well-being, safety, and equitable access for all, including those with disabilities.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Planet',
    description:
      'Reducing our carbon footprint and contributing to a sustainable campus environment for future generations.',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
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
        <div className="container text-center max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight">The Challenge</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Our campus community faces key transportation issues that impact student life.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                {challenges.map(item => (
                    <div key={item.title} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full mt-1">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight">Our Solution: A Triple Bottom Line</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Our electric fleet delivers social, environmental, and financial benefits.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                {solutions.map(item => (
                    <div key={item.title} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full mt-1">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="bg-card p-10 rounded-xl shadow-lg border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  To provide safe, reliable, and sustainable transportation that enhances campus accessibility and student well-being.
                </p>
              </div>
               <div className="border-t md:border-l md:border-t-0 md:pl-8 pt-8 md:pt-0">
                 <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  To be a leader in campus mobility by creating an innovative, eco-friendly transit system that serves as a model for universities worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
