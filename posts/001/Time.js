import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useInterval from './useInterval';

export default function Time() {
  const [date, forceUpdateToNewDate] = useState(new Date());

  useInterval(() => {
    forceUpdateToNewDate(new Date());
  }, 1000);

  const localizedDate = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

  const [time, meridiem] = localizedDate.split(' ');
  const [hours, minutes, seconds] = time.split(':');

  return (
    <>
      <Appear key={`h-${hours}`}>{hours}</Appear>:
      <Appear key={`m-${minutes}`}>{minutes}</Appear>:
      <Appear key={`s-${seconds}`}>{seconds}</Appear>{' '}
      <Appear key={meridiem}>{meridiem}</Appear>
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
