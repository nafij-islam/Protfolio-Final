import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      
      // Chhoto Dot: Eti mouse-er sathe sathe cholbe (No delay)
      gsap.to(mainCursor.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });

      // Baier Ring: Eti ektu deri kore mouse-ke follow korbe (Smooth Delay)
      gsap.to(secondaryCursor.current, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* 1. Main Central Dot */}
      <div
        ref={mainCursor}
        className="fixed top-0 left-0 w-3 h-3 bg-[#1E7EA7] rounded-full pointer-events-none z-[9999]"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* 2. Outer Smooth Ring */}
      <div
        ref={secondaryCursor}
        className="fixed top-0 left-0 w-8 h-8 border-3 border-[#1E7EA7] rounded-full pointer-events-none z-[9998] opacity-50"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;