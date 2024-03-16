import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import SVGDATA from '../lottieAnimations/animation.json';

export default function AnimationComponent({ light, setLight, style }) {
  const animationContainer = useRef(null);
  const animation = useRef(null);
  const [playBackwards, setPlayBackwards] = useState(false);

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: SVGDATA,
    });

        if (animation.current) {
            const newDirection = light ? 1 : -1;
            animation.current.setDirection(newDirection);
            animation.current.play();
            setPlayBackwards(!playBackwards);
          }
      

    return () => {
      if (animation.current) {
        animation.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleAnimationToggle = () => {
      if (animation.current) {
        const newDirection = playBackwards ? -1 : 1;
        animation.current.setDirection(newDirection);
        animation.current.play();
        setPlayBackwards(!playBackwards);
      }
    };
  
    handleAnimationToggle();
  }, []);

  const handleAnimationToggle = () => {
    if (animation.current) {
      const newDirection = playBackwards ? -1 : 1;
      animation.current.setDirection(newDirection);
      animation.current.play();
      setPlayBackwards(!playBackwards);
    }
    setLight(!light); // Toggle the light state
  };

  return (
    <div 
      onClick={handleAnimationToggle}
      className={`cursor-pointer ${style}`}
      style={{ width: '40px', height: '40px', paddingBottom: '45px' }}
    >
      <div ref={animationContainer} className="svg-animation"></div>
    </div>
  );
}
