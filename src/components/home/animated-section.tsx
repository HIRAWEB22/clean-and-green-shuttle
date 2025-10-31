
'use client';

import { useRef, useEffect, useState, type ElementType } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
  [key: string]: any; // Allow other props
};

export function AnimatedSection({
  as: Component = 'div',
  className,
  children,
  ...props
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Start animation a bit before it's fully in view
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <Component
      ref={elementRef}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
