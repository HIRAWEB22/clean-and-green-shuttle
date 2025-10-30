import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logos/main-logo.png"
        alt="Clean and Green Shuttle Service Logo"
        width={56}
        height={56}
        priority
        className="h-14 w-14 rounded-full object-cover shadow-md"
      />
      <span className="font-bold text-xl hidden sm:inline-block">Clean & Green</span>
    </div>
  );
};

export default Logo;
