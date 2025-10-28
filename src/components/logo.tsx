import type { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50"
    width={140}
    height={35}
    {...props}
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "hsl(var(--primary))" }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--accent))" }} />
      </linearGradient>
    </defs>
    <g transform="translate(10, 5)">
      <path
        d="M25,0C11.2,0,0,11.2,0,25s11.2,25,25,25s25-11.2,25-25S38.8,0,25,0z M25,45C13.9,45,5,36.1,5,25S13.9,5,25,5s20,8.9,20,20 S36.1,45,25,45z"
        fill="url(#logo-gradient)"
      />
      <path
        d="M25,10c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15S33.3,10,25,10z M25,35c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10 S30.5,35,25,35z"
        fill="url(#logo-gradient)"
      />
      <path
        d="M25,18c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S28.9,18,25,18z"
        fill="white"
      />
    </g>
    <text
      x="60"
      y="33"
      fontFamily="Poppins, sans-serif"
      fontSize="28"
      fontWeight="600"
      fill="hsl(var(--foreground))"
    >
      Campus Cruiser
    </text>
  </svg>
);

export default Logo;
