
"use client";
import Image from 'next/image';
import {
  Globe,
  Users,
  Lightbulb,
  Rocket,
  Sparkles,
  Flag,
  FileCheck,
  Scaling,
  RefreshCw,
  DollarSign,
  BarChart2,
  CheckCircle,
  Leaf,
  Wind,
  Mountain
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/home/animated-section';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/animated-counter';
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { type: "CO₂ Emissions (g/km)", fuel: 147, electric: 0 },
  { type: "Running Cost (per km)", fuel: 8.5, electric: 2.1 },
  { type: "Noise Level (dB)", fuel: 75, electric: 45 },
];

const chartConfig = {
  fuel: { label: "Fuel Vehicle", color: "hsl(var(--muted-foreground))" },
  electric: { label: "Electric Shuttle", color: "hsl(var(--primary))" },
} satisfies ChartConfig;


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
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib.rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Our Team"
                        data-ai-hint="diverse team meeting"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection as="section" className="py-12 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Impact By The Numbers</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to sustainability and efficiency yields measurable results that benefit the entire campus community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <Mountain className="h-8 w-8 text-primary" />
                  <CardTitle className="mt-4">CO₂ Saved (Annually)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold text-primary">
                    <AnimatedCounter targetValue={28} />+ tons
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    Equivalent to planting over 450 trees.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="mt-4">Students Served</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold text-primary">
                    <AnimatedCounter targetValue={5000} />+
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    Providing reliable daily transport across campus.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <Leaf className="h-8 w-8 text-primary" />
                  <CardTitle className="mt-4">Noise Pollution Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold text-primary">
                    <AnimatedCounter targetValue={30} />%
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    Creating a quieter, more peaceful learning environment.
                  </p>
                </CardContent>
              </Card>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection as="section" className="py-12 md:py-20 bg-secondary">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold">A Smarter Choice: Electric vs. Fuel</h2>
                <p className="mt-4 text-muted-foreground text-lg">
                    Our electric shuttles aren't just a green alternative; they're a more efficient and cost-effective one. Here's a direct comparison against traditional fuel-powered vehicles.
                </p>
                <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/20 text-primary p-3 rounded-full">
                            <Mountain className="h-6 w-6"/>
                        </div>
                        <div>
                            <h4 className="font-semibold">Zero Tailpipe Emissions</h4>
                            <p className="text-muted-foreground">By producing no harmful exhaust fumes, our shuttles directly improve campus air quality and reduce our carbon footprint.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/20 text-primary p-3 rounded-full">
                            <DollarSign className="h-6 w-6"/>
                        </div>
                        <div>
                            <h4 className="font-semibold">Significantly Lower Operating Costs</h4>
                            <p className="text-muted-foreground">With cheaper electricity and reduced maintenance needs, our electric fleet is a financially sustainable asset for the university.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Performance Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <RechartsBarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid horizontal={false} />
                    <YAxis
                        dataKey="type"
                        type="category"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                        width={140}
                        className="text-sm text-muted-foreground"
                    />
                    <XAxis type="number" hide />
                    <RechartsBarChart dataKey="fuel" fill="var(--color-fuel)" radius={4} />
                    <RechartsBarChart dataKey="electric" fill="var(--color-electric)" radius={4} />
                    </RechartsBarChart>
                </ChartContainer>
                </CardContent>
            </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Solution: A Triple Bottom Line Framework</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our electric fleet delivers social, environmental, and financial benefits, measured by the Triple Bottom Line (TBL) framework. This positions the project as a strategic asset that reduces long-term costs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Users className="h-10 w-10 text-blue-500" />
                </div>
                <CardTitle className="mt-4 text-xl">People (Well-being)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Enhancing student well-being, safety, and providing equitable access for all, including those with disabilities.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Globe className="h-10 w-10 text-green-500" />
                </div>
                <CardTitle className="mt-4 text-xl">Planet (Sustainability)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reducing our carbon footprint and contributing to a sustainable campus environment for future generations.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                  <DollarSign className="h-10 w-10 text-yellow-500" />
                </div>
                <CardTitle className="mt-4 text-xl">Profit (Financial Stability)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Creating a financially stable, efficient, and scalable service that reduces long-term operational costs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection as="section" className="py-16 md:py-24 bg-secondary">
        <div className="container text-center max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight">Our Journey: From Idea to Impact</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our project follows a clear, phased roadmap to ensure financial success and operational excellence.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                            <FileCheck className="h-10 w-10 text-blue-500" />
                        </div>
                        <CardTitle className="mt-4 text-xl">Phase I: Pilot Program</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Deploy 4 LSVs on high-demand routes, establishing baseline metrics for cost, utilization, and student satisfaction.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
                            <Scaling className="h-10 w-10 text-green-500" />
                        </div>
                        <CardTitle className="mt-4 text-xl">Phase II: Expansion</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Scale the fleet, implement a full multi-level revenue model, and research solar integration to optimize performance.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                            <RefreshCw className="h-10 w-10 text-yellow-500" />
                        </div>
                        <CardTitle className="mt-4 text-xl">Phase III: Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Achieve financial self-sufficiency, explore local manufacturing partnerships, and integrate data into academic research.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-16 md:py-24 bg-background">
        <div className="container">
            <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold tracking-tight">Validation and Precedent</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    The shift to Low-Speed Electric Vehicles is supported by global market trends and a successful local implementation.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
                 <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader>
                         <div className="flex items-center gap-4">
                            <BarChart2 className="h-8 w-8 text-primary" />
                            <CardTitle>Global Market Growth</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">The electric golf cart industry is projected to grow at a CAGR of 8.03% from 2025 to 2034, with the fastest growth in the Asia-Pacific region.</p>
                    </CardContent>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader>
                         <div className="flex items-center gap-4">
                            <CheckCircle className="h-8 w-8 text-green-500" />
                            <CardTitle>Proven Pakistani Model</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">The Aga Khan University Hospital in Karachi successfully implemented a solar-cum-electric shuttle service in 2013, saving 7.1 tons of CO2 annually.</p>
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
