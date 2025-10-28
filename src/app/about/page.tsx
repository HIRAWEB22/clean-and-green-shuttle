
import Image from 'next/image';
import {
  Users,
  Shield,
  MapPin,
  HeartHandshake,
  Globe,
  TrendingUp,
  Target,
  Lightbulb,
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
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Socio-Economic Burden',
    text: 'High travel costs restrict students\' essential daily activities and create a financial barrier to education.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Safety & Public Health',
    text: 'Reliance on external public transport poses health risks and safety concerns for students.',
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'The Last-Mile Gap',
    text: 'A significant distance between public transit stops and campus facilities hinders timely access to education.',
  },
];

const tripleBottomLine = [
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'People (Well-being)',
    text: 'Enhance student well-being, safety, and equitable access, especially for women and students with disabilities.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Planet (Sustainability)',
    text: 'Contribute to UN SDGs by reducing emissions, promoting clean energy, and building a sustainable campus.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Profit (Financial Stability)',
    text: 'Create a reliable revenue stream through a multi-level model and reduce long-term operational costs.',
  },
];

const roadmapPhases = [
  {
    phase: 1,
    title: "Pilot Program (12 Months)",
    items: ["Deploy 4 LSVs & 2 chargers", "Launch on two high-demand routes", "Establish baseline metrics for cost, ridership, and satisfaction"],
  },
  {
    phase: 2,
    title: "Expansion & Optimization (Years 2-3)",
    items: ["Scale fleet to 8-10 units based on ROI", "Implement multi-level revenue model", "Seek external funding (HEC, UN SDGs)"],
  },
    {
    phase: 3,
    title: "Sustainable Integration (Year 4+)",
    items: ["Achieve full financial self-sufficiency", "Explore local manufacturing partnerships", "Integrate operational data into academic research"],
  },
]

const sdgs = [
    { id: 7, title: "Affordable and Clean Energy" },
    { id: 9, title: "Industry, Innovation, and Infrastructure" },
    { id: 11, title: "Sustainable Cities and Communities" },
    { id: 13, title: "Climate Action" },
]


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
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Strategic Vision
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            A strategic analysis of the Clean and Green Shuttle Service initiative.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4 md:px-6 space-y-16">
        
        {/* Our Mission */}
        <section className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                To address systemic campus mobility challenges through a dedicated fleet of Electric Low-Speed Vehicles (LSVs), enhancing student well-being, promoting environmental sustainability, and ensuring financial stability.
            </p>
        </section>

        {/* The Challenge */}
        <section>
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight">The Challenge</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our campus faces three critical transportation deficiencies that impact student life and operational efficiency.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {challenges.map(challenge => (
                    <Card key={challenge.title} className="text-center shadow-lg">
                         <CardHeader className="flex flex-col items-center">
                            {challenge.icon}
                            <CardTitle className="mt-4">{challenge.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{challenge.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        {/* The Solution */}
         <section className="bg-secondary py-16 rounded-lg">
            <div className="container grid md:grid-cols-2 gap-10 items-center">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={images['shuttle-main-campus'].imageUrl}
                        alt="Clean and Green Shuttle"
                        data-ai-hint={images['shuttle-main-campus'].imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-secondary-foreground">Our Solution: Clean & Green</h2>
                    <p className="mt-4 text-lg text-secondary-foreground">
                        A modern fleet of utility-grade electric golf carts designed to provide safe, efficient, and eco-friendly transportation across campus.
                    </p>
                    <ul className="mt-6 space-y-3 text-secondary-foreground">
                        <li className="flex items-center gap-3"><Lightbulb className="h-5 w-5 text-primary" /> <strong>Zero Emissions:</strong> Improving campus air quality.</li>
                        <li className="flex items-center gap-3"><Lightbulb className="h-5 w-5 text-primary" /> <strong>Low Operating Cost:</strong> Leveraging subsidized electricity.</li>
                        <li className="flex items-center gap-3"><Lightbulb className="h-5 w-5 text-primary" /> <strong>Enhanced Safety:</strong> Low-speed, controlled environment.</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Strategic Framework */}
        <section>
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight">Our Strategic Framework</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    We measure success using the Triple Bottom Line (TBL) to ensure a balanced and sustainable impact.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tripleBottomLine.map(pillar => (
                    <Card key={pillar.title} className="shadow-lg hover:shadow-primary/20 transition-shadow">
                        <CardHeader className="flex flex-row items-start gap-4">
                           {pillar.icon}
                            <CardTitle>{pillar.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{pillar.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
        
        {/* Implementation Roadmap */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Implementation Roadmap</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              A phased approach to ensure financial success and operational excellence.
            </p>
          </div>
          <div className="relative">
             {/* Dashed Line */}
            <div className="absolute left-1/2 -ml-px h-full w-px bg-border border-l-2 border-dashed"></div>

            {roadmapPhases.map((phase, index) => (
              <div key={phase.phase} className="relative mb-12 flex items-center">
                <div className={`absolute left-1/2 -translate-x-1/2 bg-background p-2`}>
                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-md">
                    {phase.phase}
                   </div>
                </div>
                <div className={`w-[calc(50%-3rem)] ${index % 2 === 0 ? 'ml-auto text-left' : 'mr-auto text-right'}`}>
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className={`space-y-2 text-muted-foreground ${index % 2 !== 0 && 'list-inside'}`}>
                           {phase.items.map(item => (
                             <li key={item} className="flex items-center gap-2">
                                <Target className="h-4 w-4 text-primary shrink-0"/>
                                <span>{item}</span>
                             </li>
                           ))}
                        </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>

         {/* SDG Alignment */}
        <section className="text-center py-16 bg-secondary rounded-lg">
            <h2 className="text-3xl font-bold text-secondary-foreground">Alignment with UN SDGs</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Our initiative actively contributes to the United Nations Sustainable Development Goals, making a global impact from our campus.
            </p>
            <div className="mt-10 flex justify-center gap-6 md:gap-10 flex-wrap">
                {sdgs.map(goal => (
                    <div key={goal.id} className="flex flex-col items-center max-w-[150px]">
                        <a href={`https://sdgs.un.org/goals/goal${goal.id}`} target="_blank" rel="noopener noreferrer" className="block transform hover:scale-110 transition-transform">
                            <Image src={`https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/E_SDG_Icons-${String(goal.id).padStart(2, '0')}.jpg`} alt={`SDG ${goal.id}`} width={100} height={100} className="rounded-full shadow-lg"/>
                        </a>
                        <h4 className="mt-4 font-semibold text-sm text-secondary-foreground">{goal.title}</h4>
                    </div>
                ))}
            </div>
        </section>

      </div>
    </>
  );
}
