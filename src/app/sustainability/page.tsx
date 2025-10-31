
"use client";
import { Leaf, Wind, Mountain } from "lucide-react";
import Image from "next/image";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { AnimatedCounter } from "@/components/animated-counter";
import { AnimatedSection } from "@/components/home/animated-section";

const stats = [
  {
    icon: <Mountain className="h-8 w-8 text-primary" />,
    value: 12543,
    label: "CO₂ Saved (kg)",
    description: "Equivalent to planting 200 trees.",
    decimals: 0,
  },
  {
    icon: <Wind className="h-8 w-8 text-primary" />,
    value: 85,
    label: "Air Quality Improvement",
    description: "AQI score has improved by 15% on campus.",
    decimals: 0,
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    value: 30,
    label: "Noise Pollution Reduction (dB)",
    description: "Creating a quieter, more peaceful learning environment.",
    decimals: 0,
  },
];

const chartData = [
  { type: "CO₂ Emissions (g/km)", fuel: 147, electric: 0 },
  { type: "Running Cost (per km)", fuel: 8.5, electric: 2.1 },
  { type: "Noise Level (dB)", fuel: 75, electric: 45 },
];

const chartConfig = {
  fuel: { label: "Fuel Vehicle", color: "hsl(var(--muted-foreground))" },
  electric: { label: "Electric Shuttle", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

const sdgs = [
    { id: 3, title: "Good Health and Well-being", imageUrl: "/images/heart.png" },
    { id: 11, title: "Sustainable Cities and Communities", imageUrl: "/images/sdg.jpg" },
    { id: 13, title: "Climate Action", imageUrl: "/images/climate.jpg" },
]

export default function SustainabilityPage() {
  return (
    <>
      <AnimatedSection as="section" className="relative h-[70vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/images/image copy 5.png"
          alt="Clean and Green Shuttle Service"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-down" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
            Clean and Green Shuttle Service
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto animate-fade-in-down [animation-delay:0.3s]" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.6)'}}>
            Our shuttle service is more than a ride. It's a promise for a
            sustainable future.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  {stat.icon}
                  <CardTitle className="mt-4">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold text-primary">
                    <AnimatedCounter
                      targetValue={stat.value}
                      decimals={stat.decimals}
                    />
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-12 md:py-20 bg-secondary">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold">Electric vs. Fuel: The Numbers</h2>
                <p className="mt-4 text-muted-foreground text-lg">
                    Our electric shuttles aren't just a green alternative; they're a smarter one. Here's how they stack up against traditional fuel-powered vehicles in key areas.
                </p>
                <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/20 text-primary p-3 rounded-full">
                            <Mountain className="h-6 w-6"/>
                        </div>
                        <div>
                            <h4 className="font-semibold">Zero Tailpipe Emissions</h4>
                            <p className="text-muted-foreground">Our shuttles produce no harmful exhaust fumes, directly improving campus air quality.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/20 text-primary p-3 rounded-full">
                            <Leaf className="h-6 w-6"/>
                        </div>
                        <div>
                            <h4 className="font-semibold">Lower Operating Costs</h4>
                            <p className="text-muted-foreground">Electricity is cheaper than fuel, and EVs require less maintenance, making the service highly efficient.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Performance Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                <ChartContainer config={chartConfig} className="h-[350px] w-full">
                    <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
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
                    <Bar dataKey="fuel" fill="var(--color-fuel)" radius={4} />
                    <Bar dataKey="electric" fill="var(--color-electric)" radius={4} />
                    </BarChart>
                </ChartContainer>
                </CardContent>
            </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="py-12 md:py-20">
        <div className="container text-center">
            <h2 className="text-3xl font-bold">Aligning with Global Goals</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Our initiative actively contributes to the United Nations Sustainable Development Goals (SDGs), making a global impact from our campus.
            </p>
            <div className="mt-10 flex justify-center gap-4 md:gap-8 flex-wrap">
                {sdgs.map(goal => (
                     <div key={goal.id} className="flex flex-col items-center w-32 text-center">
                         <div className="w-28 h-28 flex items-center justify-center p-1 bg-white rounded-md shadow-md hover:scale-105 transition-transform duration-300">
                            <a href={`https://sdgs.un.org/goals/goal${goal.id}`} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                                <Image 
                                    src={goal.imageUrl} 
                                    alt={`SDG ${goal.id}`} 
                                    fill
                                    className="rounded-md object-contain p-2"/>
                            </a>
                        </div>
                        <h4 className="mt-3 font-semibold text-xs h-8">{goal.title}</h4>
                    </div>
                ))}
            </div>
        </div>
      </AnimatedSection>
    </>
  );
}

    