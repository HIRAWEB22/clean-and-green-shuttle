import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary p-2 shadow-md">
        <Image
          src="/logos/main-logo.png"
          alt="Clean and Green Shuttle Service Logo"
          width={48}
          height={48}
          priority
          className="object-contain"
        />
      </div>
      <span className="font-bold text-xl hidden sm:inline-block">Clean & Green</span>
    </div>
  );
};

export default Logo;
