import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

export default function LottieAnimation({SVGDATA}) {
  const animationContainer = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: SVGDATA,
    });

    return () => {
      if (animation.current) {
        animation.current.destroy();
      }
    };
  }, []);



  return (
    <div 
      className={`cursor-pointer mr-2`}
      style={{ width: '40px', height: '40px', paddingBottom: '45px' }}
    >
      <div ref={animationContainer} className="svg-animation"></div>
    </div>
  );
}
