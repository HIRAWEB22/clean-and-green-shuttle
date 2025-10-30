
import Image from 'next/image';
import {
  Heart,
  Globe,
  DollarSign,
  Accessibility,
  Shield,
  Coins,
  CheckCircle,
  BarChart2,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import imageData from '@/lib/placeholder-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

const images: Record<string, ImagePlaceholder> =
  imageData.placeholderImages.reduce((acc, img) => {
    acc[img.id] = img;
    return acc;
  }, {} as Record<string, ImagePlaceholder>);

const akuhImage = images['akuh-shuttle'];

const challenges = [
  {
    icon: <Coins className="h-10 w-10 text-destructive" />,
    title: 'Socio-Economic Burden',
    description:
      'High travel costs create a financial burden on students, limiting their campus activities and participation in university life.',
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Safety & Public Health',
    description:
      'Reliance on external public transport poses health risks and safety concerns, especially with poor sanitation and overcrowding.',
  },
  {
    icon: <Accessibility className="h-10 w-10 text-accent" />,
    title: 'The Last-Mile Gap',
    description:
      'The distance between public transit stations and central campus facilities hinders timely and equitable access for many students.',
  },
];

const solutions = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'People (Well-being)',
    description:
      'Enhancing student well-being, safety, and providing equitable access for all, including those with disabilities.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Planet (Sustainability)',
    description:
      'Reducing our carbon footprint and contributing to a sustainable campus environment for future generations.',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: 'Profit (Financial Stability)',
    description:
      'Creating a financially stable, efficient, and scalable service that reduces long-term operational costs.',
  },
];

const precedents = [
    {
        icon: <BarChart2 className="h-8 w-8 text-primary" />,
        title: 'Global Market Growth',
        description: 'The electric golf cart industry is projected to grow at a CAGR of 8.03% from 2025 to 2034, with the fastest growth in the Asia-Pacific region.',
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-green-500" />,
        title: 'Proven Pakistani Model',
        description: 'The Aga Khan University Hospital in Karachi successfully implemented a solar-cum-electric shuttle service in 2013, saving 7.1 tons of CO2 annually.',
    }
]

const sdgs = [
    { id: 3, title: "Good Health and Well-being", imageUrl: "/images/heart.png" },
    { id: 7, title: "Affordable and Clean Energy", imageUrl: "/images/sun.jpg" },
    { id: 9, title: "Industry, Innovation, and Infrastructure", imageUrl: "/images/hexa.webp" },
    { id: 11, title: "Sustainable Cities and Communities", imageUrl: "/images/sdg.jpg" },
    { id: 13, title: "Climate Action", imageUrl: "/images/climate.jpg" },
]


export default function AboutPage() {
  return (
    <>
      <section className="relative h-[70vh] w-full flex items-center justify-center text-center text-white overflow-hidden rounded-lg">
        <Image
          src="/images/hero1.png"
          alt="Fleet of new electric shuttles"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 py-8 max-w-4xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg">
            <p className="text-sm uppercase tracking-widest text-primary-foreground/80">
                Campus Transportation: Sustainability and Efficiency
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
                Strategic Analysis of the Clean & Green Shuttle Service
            </h1>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight">Addressing Systemic Deficiencies in Campus Mobility</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Our campus community faces key transportation issues that impact operational efficiency and compromise student well-being.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {challenges.map(item => (
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
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold tracking-tight">Our Solution: A Triple Bottom Line Framework</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our electric fleet delivers social, environmental, and financial benefits, measured by the Triple Bottom Line (TBL) framework. This positions the project as a strategic asset that reduces long-term costs.
                    </p>
                    <div className="mt-8 space-y-6">
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
                <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl group">
                     {akuhImage && (
                        <Image
                            src={akuhImage.imageUrl}
                            alt={akuhImage.description}
                            data-ai-hint={akuhImage.imageHint}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}
                </div>
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-background">
        <div className="container">
            <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold tracking-tight">Validation and Precedent</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    The shift to Low-Speed Electric Vehicles is supported by global market trends and a successful local implementation.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {precedents.map(item => (
                     <Card key={item.title} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <CardHeader>
                             <div className="flex items-center gap-4">
                                {item.icon}
                                <CardTitle>{item.title}</CardTitle>
                            </div>
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
        <div className="container text-center">
            <h2 className="text-3xl font-bold">Alignment with UN Sustainable Development Goals</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Our initiative actively contributes to the United Nations Sustainable Development Goals (SDGs), making a global impact from our campus.
            </p>
            <div className="mt-10 flex justify-center gap-4 md:gap-8 flex-wrap">
                {sdgs.map(goal => (
                    <div key={goal.id} className="flex flex-col items-center max-w-[120px] text-center">
                         <a href={`https://sdgs.un.org/goals/goal${goal.id}`} target="_blank" rel="noopener noreferrer" className="block p-1 bg-background rounded-md shadow-md hover:scale-105 transition-transform duration-300">
                            <Image 
                                src={(goal as any).imageUrl || `https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/E_SDG_Icons-${String(goal.id).padStart(2, '0')}.jpg`}
                                alt={`SDG ${goal.id}`} width={100} height={100} className="rounded-md object-contain"/>
                        </a>
                        <h4 className="mt-3 font-semibold text-xs">{goal.title}</h4>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
