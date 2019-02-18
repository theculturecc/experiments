import React, { createContext, useState } from 'react';
import useInterval from './useInterval';

export const TimeContext = createContext(0);

export default function TicTacProvider({ children }) {
  const [date, forceUpdateToNewDate] = useState(new Date());

  useInterval(() => {
    forceUpdateToNewDate(new Date());
  }, 1000);

  // the time is localized in Dutch format,
  // I'm writing this code from Amsterdam, Netherlands
  const time = date.toLocaleString('nl-NL', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  const [hours, minutes, seconds] = time.split(':');

  return (
    <TimeContext.Provider value={{ hours, minutes, seconds }}>
      {children}
    </TimeContext.Provider>
  );
}
