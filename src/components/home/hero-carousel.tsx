
'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type HeroCarouselProps = {
  slides: ImagePlaceholder[];
};

export function HeroCarousel({ slides }: HeroCarouselProps) {
  return (
    <Carousel
      className="absolute inset-0 w-full h-full"
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="h-full">
        {slides.map(
          (slide, index) =>
            slide && (
              <CarouselItem key={index} className="h-full relative">
                <Image
                  src={slide.imageUrl}
                  alt={slide.description}
                  data-ai-hint={slide.imageHint}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={100}
                />
              </CarouselItem>
            )
        )}
      </CarouselContent>
    </Carousel>
  );
}
