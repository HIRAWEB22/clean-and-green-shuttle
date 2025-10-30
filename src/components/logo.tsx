import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="/logo/logo-1.png"
      alt="Clean and Green Shuttle Service Logo"
      width={140}
      height={35}
      priority
    />
  );
};

export default Logo;
