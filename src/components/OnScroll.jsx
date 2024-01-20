import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const OnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(isVisible) => {
        setIsVisible(isVisible);
      }}
    >
      <div className='animate-zoomInOut'>{isVisible ? children : null}</div>
    </VisibilitySensor>
  );
};

export default OnScroll;
