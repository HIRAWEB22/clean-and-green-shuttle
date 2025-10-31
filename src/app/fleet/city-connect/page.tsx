
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, MapPin, Ticket } from 'lucide-react';
import imageData from '@/lib/placeholder-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/home/animated-section';

const images: Record<string, ImagePlaceholder> =
  imageData.placeholderImages.reduce((acc, img) => {
    acc[img.id] = img;
    return acc;
  }, {} as Record<string, ImagePlaceholder>);

const shuttleImage = images['shuttle-in-city'];

const features = [
  { text: 'Connects the university campus to major BRT stations and city hubs.' },
  { text: 'Affordable and accessible for students, staff, and the local community.' },
  { text: 'Spacious, modern electric buses with comfortable seating.' },
  { text: 'Reduces traffic congestion and parking pressure around the campus.' },
];

const stops = [
    'University Campus', 'Saddar BRT Station', 'Blue Area', 'F-10 Markaz', 'G-9 Markaz'
];

export default function CityConnectPage() {
  return (
    <AnimatedSection as="div" className="container py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Islamabad City Connect
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Bridging the gap between campus and city. The City Connect service provides reliable transportation for the entire community, enhancing accessibility for everyone.
        </p>

        <Card className="mt-8 shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96 w-full">
            
              <Image
                src="/images/image copy 3.png"
                alt="Islamabad City Connect Shuttle"
                data-ai-hint="electric bus city"
                fill
                className="object-cover"
              />
            
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key