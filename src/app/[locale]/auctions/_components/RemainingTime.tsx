import React, { useEffect, useState } from 'react';

interface RemainingTimeProps {
  endDate: string; // The end date as a string; can be Date if directly passed as a Date object
}

const RemainingTime: React.FC<RemainingTimeProps> = ({ endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    const calculateRemainingTime = () => {
      const timeNow = new Date().getTime(); // Current time in milliseconds
      const endDateTime = new Date(endDate).getTime(); // End date time in milliseconds

      // Check if endDateTime is valid before performing arithmetic
      if (isNaN(endDateTime)) {
        setTimeRemaining("Invalid end date.");
        return;
      }

      // Calculate the difference in milliseconds
      const timeDifference = endDateTime - timeNow;

      // If the time difference is negative, the auction has ended
      if (timeDifference <= 0) {
        setTimeRemaining("Auction has ended.");
        return;
      }

      // Check if the time remaining is within the last 5 minutes (300,000 milliseconds)
      if (timeDifference <= 300000) { // 5 minutes in milliseconds
        const seconds = Math.floor(timeDifference / 1000); // Only show seconds
        setTimeRemaining(`${seconds}s remaining`);
      } else {
        // Calculate remaining days, hours, minutes, and seconds for times greater than 5 minutes
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining(
          `${days > 0 ? `${days}d ` : ""}${hours > 0 ? `${hours}h ` : ""}${minutes > 0 ? `${minutes}m ` : ""}${seconds}s remaining`
        );
      }
    };

    const intervalId = setInterval(calculateRemainingTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [endDate]);

  return <div>{timeRemaining}</div>;
};

export default RemainingTime;
