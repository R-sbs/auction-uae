import { useEffect, useState } from 'react';

// Function to calculate remaining start time
const StartTime = ({ startDate }: { startDate: string }) => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    // Calculate time difference between current time and start date
    const calculateTime = () => {
      const startDateTime = new Date(startDate);
      const timeNow = new Date();

      const timeDifference = startDateTime.getTime() - timeNow.getTime();

      // If the auction has already started, set timeRemaining to 0
      if (timeDifference <= 0) {
        setTimeRemaining("");
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      // Only show seconds if there are less than 5 minutes remaining
      if (days === 0 && hours === 0 && minutes < 5) {
        setTimeRemaining(`Starts In ${minutes} minutes ${seconds} seconds`);
      } else {
        setTimeRemaining(
          `Starts In ${days} days ${hours} hours ${minutes} minutes`
        );
      }
    };

    // Call calculateTime immediately and then every second
    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, [startDate]);

  return <span className="text=base-xs pointer-events-none">{timeRemaining}</span>;
};

export default StartTime;
