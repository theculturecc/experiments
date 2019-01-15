import styled, { keyframes } from 'styled-components';

/*
 Vanilla JS & CSS version of this animation is available at:
 https://codepen.io/xavxyz/pen/NeOrZj
*/

const timeToDegreesFactory = timeMax => time => {
  const degreesMax = 360 * (1 - 1 / timeMax);

  return (time * degreesMax) / timeMax;
};

const hoursToDegrees = timeToDegreesFactory(23);
const minOrSecToDegrees = timeToDegreesFactory(59);

export default (/*{ hours = 0, minutes = 0, seconds = 0 }*/) => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <Svg
      viewBox="0 0 2200 2200"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-labelledby="title"
    >
      <title id="title">
        The Culture logo, three concentric 3/4-circles rotating with the time
        (hours, minutes, seconds).
      </title>
      {/* Hours */}
      <ThreeQuarter
        initialAngle={hoursToDegrees(hours)}
        timeCycle={86400}
        totalLength={4713}
        d="M392.9 392.9C2.36 783.41 2.36 1416.57 392.9 1807.1c390.52 390.53 1023.68 390.53 1414.2 0 390.53-390.52 390.53-1023.68 0-1414.2"
      />
      {/* Minutes */}
      <ThreeQuarter
        initialAngle={minOrSecToDegrees(minutes)}
        timeCycle={3600}
        totalLength={2945}
        d="M1541.94 658.06c244.08 244.08 244.08 639.8 0 883.88-244.08 244.08-639.8 244.08-883.88 0-244.08-244.08-244.08-639.8 0-883.88"
      />
      {/* Seconds */}
      <ThreeQuarter
        initialAngle={minOrSecToDegrees(seconds)}
        timeCycle={60}
        totalLength={1178}
        d="M923.22 923.22c-97.63 97.63-97.63 255.93 0 353.56s255.93 97.63 353.56 0 97.63-255.93 0-353.56"
      />
    </Svg>
  );
};

const Svg = styled.svg`
  fill: none;
  stroke: #282725;
  stroke-width: 200;

  width: 150px;

  /* Larger than iphone 5s */
  @media (min-width: 350px) {
    width: 160px;
  }
  /* Larger than iphone 6 */
  @media (min-width: 400px) {
    width: 165px;
  }
  /* Larger than iphone 6 plus */
  @media (min-width: 550px) {
    width: 220px;
  }
`;

const makeTime = keyframes`
  from {
    transform: rotate(var(--initial-angle));
  }
  to {
    transform: rotate(calc(var(--initial-angle) + 360deg));
  }
`;

const drawPath = keyframes`
  0% {
    stroke-dasharray: 0 var(--total-length);
  }
  100% {
    opacity: 1;
    stroke-dasharray: var(--total-length) 0;
  }
`;

const ThreeQuarter = styled.path`
  transform-origin: 1100px 1100px;
  --initial-angle: ${props => props.initialAngle || 0}deg;
  --total-length: ${props => props.totalLength};
  animation: ${drawPath} 0.6s ease-out forwards 0.2s,
    ${makeTime} ${props => props.timeCycle}s linear infinite;
  stroke-dashoffset: var(--total-length);
  stroke-dasharray: 0 var(--total-length);
  opacity: 0;
`;
