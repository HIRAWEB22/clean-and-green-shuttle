
import Image from 'next/image';
import { ShieldCheck, UserCheck, Video, Wrench, Accessibility, Volume2, Dog } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/home/animated-section';

const safetyFeatures = [
    {
        icon: <UserCheck className="h-10 w-10 text-primary" />,
        title: 'Professional & Vetted Drivers',
        description: 'All our drivers undergo rigorous background checks, extensive training, and regular performance reviews to ensure professional and safe conduct.',
    },
    {
        icon: <Video className="h-10 w-10 text-primary" />,
        title: 'Real-Time Monitoring',
        description: 'Our fleet is equipped with GPS tracking and on-board cameras, monitored from a central control room to ensure route compliance and immediate response.',
    },
    {
        icon: <Wrench className="h-10 w-10 text-primary" />,
        title: 'Regular Vehicle Maintenance',
        description: 'Our shuttles undergo daily inspections and scheduled preventative maintenance to meet the highest safety standards and ensure vehicle reliability.',
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: 'Health & Hygiene',
        description: 'Enhanced cleaning and sanitation protocols are in effect on all shuttles to ensure a healthy and comfortable environment for our passengers.',
    },
];

const accessibilityFeatures = [
    {
        icon: <Accessibility className="h-10 w-10 text-primary" />,
        title: 'Wheelchair Accessibility',
        description: 'All our shuttles are equipped with automated ramps and designated spaces to comfortably and safely accommodate passengers with wheelchairs.',
    },
    {
        icon: <Volume2 className="h-10 w-10 text-primary" />,
        title: 'Audible Stop Announcements',
        description: 'To assist visually impaired passengers, our shuttles feature an automated system that announces upcoming stops clearly.',
    },
    {
        icon: <Dog className="h-10 w-10 text-primary" />,
        title: 'Service Animals Welcome',
        description: 'Certified service animals are welcome on all our shuttles, ensuring that everyone can travel with the assistance they need.',
    },
];

export default function SafetyPage() {
  return (
    <>
      <AnimatedSection as="section" className="relative h-[60vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/bus.png"
          alt="Interior of a clean, modern shuttle bus"
          data-ai-hint="bus interior"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mt-2 animate-fade-in-down">
                Safety & Accessibility for All
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto animate-fade-in-down [animation-delay:0.3s]">
                Your well-being is our top priority. We are committed to providing a secure, reliable, and inclusive transportation experience for every member of our community.
            </p>
        </div>
      </AnimatedSection>
      
      <AnimatedSection as="section" className="py-16 md:py-24 bg-background">
        <div className="container text-center max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight">Our Commitment to Safety</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We implement a multi-layered safety protocol to ensure peace of mind on every journey. From our drivers to our vehicles, every aspect is held to the highest standard.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                {safetyFeatures.map(item => (
                    <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <CardHeader className="items-center">
                            <div className="p-4 bg-secondary rounded-full">
                                {item.icon}
                            </div>
                            <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-16 md:py-24 bg-secondary">
        <div className="container text-center max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight">Accessible to Everyone</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                The Clean and Green Shuttle Service is designed to be inclusive and accessible for all members of our community, regardless of physical ability.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {accessibilityFeatures.map(item => (
                    <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <CardHeader className="items-center">
                            <div className="p-4 bg-background rounded-full">
                                {item.icon}
                            </div>
                            <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </AnimatedSection>
    </>
  );
}
