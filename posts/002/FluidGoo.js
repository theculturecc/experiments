import React from 'react';

const baseGradient = ['#ABDCFF', '#0396FF'];

export default function FluidGoo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%">
      <linearGradient
        id="gradient"
        x1="300"
        y1="0"
        x2="300"
        y2="400"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.5" stopColor={baseGradient[0]} />
        <stop offset="0.8" stopColor={baseGradient[1]} />
      </linearGradient>
      <clipPath id="bowl-cut">
        <rect x="200" y="220" width="200" height="100" />
      </clipPath>
      <circle
        clipPath="url(#bowl-cut)"
        cx={300}
        cy={200}
        r={100}
        fill="url(#gradient)"
      />
    </svg>
  );
}
