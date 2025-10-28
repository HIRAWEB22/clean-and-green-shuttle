import { AiOptimizerForm } from "@/components/ai-optimizer-form";

export default function AdminPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          AI Route Optimization
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Automatically optimize shuttle routes based on real-time passenger
          demand and traffic conditions.
        </p>
      </div>

      <AiOptimizerForm />
    </div>
  );
}
