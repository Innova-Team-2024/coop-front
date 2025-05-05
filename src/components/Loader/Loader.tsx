"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LogoLoader } from "@/public";

const colors = [
  "rgba(253, 35, 28, 1)",
  "rgba(255, 104, 35, 1)",
  "rgba(255, 244, 3, 1)",
  "rgba(99, 179, 58, 1)",
  "rgba(68, 157, 196, 1)",
  "rgba(0, 81, 148, 1)",
  "rgba(124, 67, 137, 1)",
];

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [show, setShow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let index = 0;
  
    const startWave = () => {
      const animateNext = () => {
        setActiveIndex(index);
  
        setTimeout(() => {
          setActiveIndex(-1);
          index = (index + 1) % colors.length;
          animateNext();
        }, 400);
      };
  
      animateNext();
    };
  
    const delayBeforeStart = setTimeout(startWave, 50);
  
    const timeout = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3000);
  
    return () => {
      clearTimeout(timeout);
      clearTimeout(delayBeforeStart);
    };
  }, [onFinish]);
  
  if (!show) return null;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white z-50 fixed top-0 left-0">
      <Image src={LogoLoader} alt="Logo" width={120} height={120} priority />
      <div className="mt-8 flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full ${index === activeIndex ? "bounce-once" : ""}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
