import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import WordRotate from './WordRotate';

const OnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(isVisible) => {
        setIsVisible(isVisible);
      }}
    >
      <div>
        <WordRotate>{children}</WordRotate>
      </div>
    </VisibilitySensor>
  );
};

export default OnScroll;
