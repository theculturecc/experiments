import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { TimeContext } from './TimeProvider';

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

function useTime(interpolation) {
  const [angle, setAngle] = useState(0);

  const updater = time => {
    setAngle(interpolation(time));
  };

  return [angle, updater];
}

export default function TwentyFourHoursClock({ clockStartDelay = 1300 }) {
  const [hoursAngle, setHoursAngle] = useTime(hoursToDegrees);
  const [minutesAngle, setMinutesAngle] = useTime(minOrSecToDegrees);
  const [secondsAngle, setSecondsAngle] = useTime(minOrSecToDegrees);

  const { hours, minutes, seconds } = useContext(TimeContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHoursAngle(hours);
      setMinutesAngle(minutes);
      setSecondsAngle(seconds);
    }, clockStartDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Svg
      viewBox="0 0 2200 2200"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-labelledby="title"
    >
      <title id="title">
        The Culture logo represented as three concentric 3/4-circles rotating
        with the time (24 hours, 60 minutes, 60 seconds).
      </title>
      {/* Hours */}
      <ThreeQuarter
        angle={hoursAngle}
        animationDuration={1.2}
        animationDelay={0.2}
        timeCycle={86400}
        totalLength={4713}
        d="M392.9 392.9C2.36 783.41 2.36 1416.57 392.9 1807.1c390.52 390.53 1023.68 390.53 1414.2 0 390.53-390.52 390.53-1023.68 0-1414.2"
      />
      {/* Minutes */}
      <ThreeQuarter
        angle={minutesAngle}
        animationDuration={1}
        animationDelay={0.2}
        timeCycle={3600}
        totalLength={2945}
        d="M1541.94 658.06c244.08 244.08 244.08 639.8 0 883.88-244.08 244.08-639.8 244.08-883.88 0-244.08-244.08-244.08-639.8 0-883.88"
      />
      {/* Seconds */}
      <ThreeQuarter
        angle={secondsAngle}
        animationDuration={0.8}
        animationDelay={0.2}
        timeCycle={60}
        totalLength={1178}
        d="M923.22 923.22c-97.63 97.63-97.63 255.93 0 353.56s255.93 97.63 353.56 0 97.63-255.93 0-353.56"
      />
    </Svg>
  );
}

const Svg = styled.svg`
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

const goToTime = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(var(--initial-angle));
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

// prettier-ignore
const ThreeQuarter = styled.path`
  fill: none;
  stroke: #282725;
  stroke-width: 200;
  transform-origin: 1100px 1100px;
  --initial-angle: ${props => props.angle}deg;
  --total-length: ${props => props.totalLength};
  animation:
    ${drawPath} ${props => props.animationDuration}s ease-out forwards ${props => props.animationDelay}s
    ${// add other animation related to time once the clock has been started
      props => props.angle ? css`
      , ${goToTime} 1s cubic-bezier(0.4,-0.6,0.4,1.2) forwards
      , ${makeTime} ${props.timeCycle}s linear 1s infinite
    ` : ""};
  stroke-dashoffset: var(--total-length);
  stroke-dasharray: 0 var(--total-length);
  opacity: 0;
`;
