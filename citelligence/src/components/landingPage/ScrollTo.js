import { useRef } from 'react';
import PropTypes from 'prop-types';

const ScrollTo = ({ targetId, children }) => {
  const scrollToRef = useRef(null);

  const handleClick = () => {
      console.log(targetId)
    const targetElement = document.getElementById(targetId);
    console.log(targetElement)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={scrollToRef} onClick={handleClick}>
      {children}
    </div>
  );
};

ScrollTo.propTypes = {
  targetId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollTo;
