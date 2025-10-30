import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary shadow-md">
        <Image
          src="/logos/logo-1.png"
          alt="Clean and Green Shuttle Service Logo"
          width={32}
          height={32}
          priority
          className="rounded-full object-contain"
        />
      </div>
      <span className="font-bold text-lg hidden sm:inline-block">Clean & Green</span>
    </div>
  );
};

export default Logo;
