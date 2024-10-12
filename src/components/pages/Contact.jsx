import React, { useEffect, useRef, useState } from "react";
import "./Timer.css";

export const Contact = () => {
  const [time, setTime] = useState({
    hour: "",
    minute: "",
    second: "",
  });
  const [isRunning, setIsRunning] = useState(false);
  const interRaf = useRef(null);

  const handleStart = () => {
    if (time.hour.length === 0 && time.minute.length === 0 && time.second.length === 0) {
      return;
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(interRaf.current);
    setTime({
      hour: "",
      minute: "",
      second: "",
    });
    setIsRunning(false);
    console.log("reset");
  };

  useEffect(() => {
    if (isRunning) {
      interRaf.current = setInterval(() => {
        setTime((preTime) => {
          const copyPrTime = { ...preTime };
          copyPrTime.second--;
          if (copyPrTime.second < 0) {
            copyPrTime.minute--;
            copyPrTime.second = 59;
            if (copyPrTime.minute < 0) {
              copyPrTime.hour--;
              copyPrTime.minute = 59;
              if (copyPrTime.hour < 0) {
                clearInterval(interRaf.current);
                return { hour: "", minute: "", second: "" };
              }
            }
          }
          return copyPrTime;
        });
      }, 1000);
    }
    return () => {
      clearInterval(interRaf.current);
    };
  }, [isRunning]);

  const handleChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0;
    const copyTime = { ...time };
    copyTime[field] = value;
    copyTime.minute += Math.floor(copyTime.second / 60);
    copyTime.second = copyTime.second % 60;
    copyTime.hour += Math.floor(copyTime.minute / 60);
    copyTime.minute = copyTime.minute % 60;
    setTime(copyTime);
    console.log(e.target.value, field);
  };

  return (
    <div className="flex flex-col items-center pt-[7%] h-screen bg-gray-100">
      <div className="flex space-x-2 mb-4">
        <input
          disabled={isRunning}
          value={time.hour}
          onChange={(e) => handleChange(e, "hour")}
          type="text"
          placeholder='HH'
          className="w-16 p-2 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span className="text-xl">:</span>
        <input
          disabled={isRunning}
          value={time.minute}
          onChange={(e) => handleChange(e, "minute")}
          type="text"
          placeholder='MM'
          className="w-16 p-2 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span className="text-xl">:</span>
        <input
          disabled={isRunning}
          value={time.second}
          onChange={(e) => handleChange(e, "second")}
          type="text"
          placeholder='SS'
          className="w-16 p-2 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleStart}
          className={`px-4 py-2 font-semibold text-white rounded-md focus:outline-none ${isRunning ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-green-500 hover:bg-green-400'}`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-400 focus:outline-none"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
