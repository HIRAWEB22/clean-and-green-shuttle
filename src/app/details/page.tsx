
import { AnimatedSection } from '@/components/home/animated-section';

export default function DetailsPage() {
  return (
    <AnimatedSection as="div" className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Details Page
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          This is a new page for more details. You can add more content here.
        </p>
      </div>
    </AnimatedSection>
  );
}
