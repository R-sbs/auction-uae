'use client';
import React, { useState, useEffect, useCallback } from 'react';

// Define the type for the time left object
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Define the props for the CountdownTimer component
interface CountdownTimerProps {
  endDate: string; // endDate will be a string representing the target date
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endDate }) => {

  // Memoize the calculateTimeLeft function with useCallback
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = new Date();
    const end = new Date(endDate);
    const difference = end.getTime() - now.getTime();  // Use .getTime() to get the timestamp

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, [endDate]);  // The function depends on endDate, so it's included here

  // Use the timeLeft type defined earlier
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the timer on unmount
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);  // No need to include endDate here since it's a dependency of calculateTimeLeft

  return (
    <p className="text-base font-bold text-gray-500">
      Countdown: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </p>
  );
};

export default CountdownTimer;