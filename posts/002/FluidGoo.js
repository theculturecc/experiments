import React from 'react';

function Bowl({ cutStart, cutHeight, fill }) {
  return (
    <>
      <clipPath id={`bowl-cut--${cutStart}`}>
        <rect x="200" y={cutStart} width="200" height={cutHeight || 100} />
      </clipPath>
      <circle
        cx={300}
        cy={200}
        r={100}
        clipPath={`url(#bowl-cut--${cutStart})`}
        fill={fill}
      />
    </>
  );
}

export default function FluidGoo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%">
      <Bowl fill="hsl(205, 100%, 44%)" cutStart={190} cutHeight={60} />
      <Bowl fill="hsl(205, 100%, 64%)" cutStart={220} cutHeight={60} />
      <Bowl fill="hsl(205, 100%, 84%)" cutStart={260} />
    </svg>
  );
}
