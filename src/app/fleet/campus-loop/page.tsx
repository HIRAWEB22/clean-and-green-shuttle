import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, MapPin } from 'lucide-react';
import { AnimatedSection } from '@/components/home/animated-section';

const features = [
  { text: 'Connects all major academic buildings, libraries, and student centers.' },
  { text: 'High-frequency service runs every 10 minutes during peak hours.' },
  { text: 'Wheelchair accessible for students with disabilities.' },
  { text: 'Zero tailpipe emissions, contributing to cleaner campus air.' },
];

const stops = [
    'Central Library', 'Engineering Block', 'Science Hub', 'Student Union', 'Arts & Humanities', 'Sports Complex'
];

export default function CampusLoopPage() {
  return (
    <AnimatedSection as="div" className="container py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Main Campus Loop
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your reliable, eco-friendly ride across campus. The Main Campus Loop is designed for quick and convenient travel between all essential university locations.
        </p>

        <Card className="mt-8 shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96 w-full">
            <Image
                src="/images/image copy 2.png"
                alt="Main Campus Loop Shuttle"
                data-ai-hint="electric shuttle"
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
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Route & Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2"><Clock className="h-5 w-5 text-primary"/>Operating Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 7:30 AM - 10:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 5:00 PM</p>
                </div>
                 <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2"><MapPin className="h-5 w-5 text-primary"/>Stops</h3>
                  <div className="flex flex-wrap gap-2">
                    {stops.map(stop => (
                        <div key={stop} className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full">
                            {stop}
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}