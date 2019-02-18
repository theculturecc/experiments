import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { TimeContext } from './TimeProvider';

export default function Time() {
  const { hours, minutes, seconds } = useContext(TimeContext);

  return (
    <>
      {/* no time.split(':').map(...) in the name of clarity */}
      <Appear key={`h-${hours}`}>{hours}</Appear>:
      <Appear key={`m-${minutes}`}>{minutes}</Appear>:
      <Appear key={`s-${seconds}`}>{seconds}</Appear>
    </>
  );
}

const appearIn = keyframes`
  to { opacity: 1; }
`;

const Appear = styled.span`
  animation: ${appearIn} 0.3s ease-in forwards;
  opacity: 0.6;
`;
