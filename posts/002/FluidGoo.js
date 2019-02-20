import React from 'react';

function Bowl({ cutStart, cutHeight, fill, children }) {
  const cx = 300;

  return (
    <>
      <filter id={`goo--${cutStart}`} colorInterpolationFilters="sRGB">
        <feGaussianBlur in="SourceGraphic" stdDeviation="7 7" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 70 -9"
          result="cm"
        />
        <feComposite in="SourceGraphic" in2="cm" />
      </filter>
      <clipPath id={`bowl-cut--${cutStart}`}>
        <rect
          x="200"
          y={cutStart}
          width="200"
          height={cutHeight || 100}
          fill="none"
        />
      </clipPath>
      <g filter={`url(#goo--${cutStart})`} fill={fill}>
        <circle
          cx={cx}
          cy={200}
          r={100}
          clipPath={`url(#bowl-cut--${cutStart})`}
        />
        <g transform={`translate(${cx} ${cutStart})`}>{children}</g>
      </g>
    </>
  );
}

export default function FluidGoo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%">
      <Bowl fill="hsl(205, 100%, 44%)" cutStart={190} cutHeight={60}>
        <circle cx={-60} cy={5} r={20} />
      </Bowl>
      <Bowl fill="hsl(205, 100%, 64%)" cutStart={220} cutHeight={60}>
        <circle cx={40} cy={-25} r={15} />
      </Bowl>
      <Bowl fill="hsl(205, 100%, 84%)" cutStart={260}>
        <circle cx={-30} cy={-50} r={10} />
        <circle cx={-10} cy={-30} r={5} />
      </Bowl>
    </svg>
  );
}
