import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="/images/logo.png"
      alt="Clean and Green Shuttle Service Logo"
      width={140}
      height={35}
      priority
      className="dark:invert"
      style={{
        width: 'auto',
        height: 'auto',
      }}
    />
  );
};

export default Logo;
