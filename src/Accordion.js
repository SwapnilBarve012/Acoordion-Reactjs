import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </div>
          {index === activeIndex && (
            <div className="accordion-content">
              {item.Content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
