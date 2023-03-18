import { useState, useEffect } from "react";
import './css/Clock.css';
export default function CLock() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  },[]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="digital-clock">
      <span>{hours < 10 ? `0${hours}` : hours}</span>:
      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
      <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
}