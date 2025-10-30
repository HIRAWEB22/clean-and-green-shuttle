import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary p-1 shadow-md">
        <Image
          src="/logos/main-logo.png"
          alt="Clean and Green Shuttle Service Logo"
          width={40}
          height={40}
          priority
          className="object-contain"
        />
      </div>
      <span className="font-bold text-lg hidden sm:inline-block">Clean & Green</span>
    </div>
  );
};

export default Logo;
