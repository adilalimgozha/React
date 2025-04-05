'use client';

import { useEffect, useState } from 'react';

type CountdownProps = {
  targetTime: number; // Time in seconds
};

const Countdown = ({ targetTime }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(targetTime);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop countdown when it reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [timeLeft]);

  // Format time (MM:SS)
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="text-2xl font-bold text-center bg-gray-800 text-white px-4 py-2 rounded-lg">
      {formatTime(timeLeft)}
    </div>
  );
};

export default Countdown;
