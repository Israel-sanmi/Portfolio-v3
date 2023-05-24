"use client";

import React, { useState, useEffect } from "react";

function DateTimeComponent() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const formattedDateTime = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(currentDate);
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="text-white text-xs md:text-lg uppercase font-normal">{currentDateTime}</div>;
}

export default DateTimeComponent;
