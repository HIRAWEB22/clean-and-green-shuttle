import Image from 'next/image';
import imageData from '@/lib/placeholder-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

const images: Record<string, ImagePlaceholder> = imageData.placeholderImages.reduce(
  (acc, img) => {
    acc[img.id] = img;
    return acc;
  },
  {} as Record<string, ImagePlaceholder>
);

const Logo = () => {
  const logoImage = images['clean-and-green-logo'];

  if (!logoImage) {
    return <span className="text-xl font-bold">Clean &amp; Green</span>;
  }

  return (
    <Image
      src={logoImage.imageUrl}
      alt={logoImage.description}
      data-ai-hint={logoImage.imageHint}
      width={140}
      height={35}
      priority
      style={{
        width: 'auto',
        height: 'auto',
      }}
    />
  );
};

export default Logo;
