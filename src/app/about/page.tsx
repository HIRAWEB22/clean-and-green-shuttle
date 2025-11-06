
import Image from 'next/image';
import {
  Globe,
  Users,
  Lightbulb,
  Rocket,
  Sparkles,
  Flag,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/home/animated-section';
import Link from 'next/link';


export default function AboutPage() {
  return (
    <>
      <AnimatedSection as="section" className="relative h-[60vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1525923133991-23a5e069c1a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A team working together on a project"
          data-ai-hint="team collaboration"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mt-2 animate-fade-in-down">
                About Clean & Green
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto animate-fade-in-down [animation-delay:0.3s]">
                We are a passionate team dedicated to revolutionizing campus mobility through sustainable and innovative solutions.
            </p>
        </div>
      </AnimatedSection>
      
      <AnimatedSection as="section" className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        To provide a safe, reliable, and eco-friendly transportation service that enhances the university experience for students, faculty, and the broader community. We believe in connecting people and places sustainably.
                    </p>
                    <div className="mt-8 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <Lightbulb className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Innovation</h3>
                                <p className="text-muted-foreground">Leveraging technology to create efficient, user-friendly services.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <Globe className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Sustainability</h3>
                                <p className="text-muted-foreground">Committing to a zero-emissions fleet to protect our environment.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Community</h3>
                                <p className="text-muted-foreground">Building a connected and accessible campus for everyone.</p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl group">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Our Team"
                        data-ai-hint="diverse team meeting"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection as="section" className="py-16 md:py-24 bg-background">
        <div className="container text-center max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight">Our Journey: From Idea to Impact</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our project started with a simple question: How can we make our campus more accessible, sustainable, and connected? This is our story.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-secondary rounded-full">
                            <Sparkles className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="mt-4 text-xl">The Idea (2023)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Born from a need to address rising transport costs and safety concerns, the concept of a dedicated, clean shuttle service was developed.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-secondary rounded-full">
                            <Flag className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="mt-4 text-xl">The Pilot (2024)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">We launched our first electric shuttles, testing routes and gathering invaluable feedback from students and staff to refine our service.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-secondary rounded-full">
                            <Rocket className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="mt-4 text-xl">The Future (2025+)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Our vision is to expand the fleet, integrate AI-powered route optimization, and set a new standard for campus mobility.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight">Interested in the Data?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Our approach is backed by careful planning and analysis. Dive into the details of our strategy, market validation, and alignment with global goals.
            </p>
            <div className="mt-8">
                <Link href="/analysis" className="inline-flex items-center justify-center h-12 px-8 font-medium text-lg text-primary-foreground bg-primary rounded-md shadow-md hover:bg-primary/90 transition-colors">
                    View Strategic Analysis
                </Link>
            </div>
        </div>
      </AnimatedSection>
    </>
  );
}
