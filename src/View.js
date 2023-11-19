import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const View = ({ imageData }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    return `${day} ${month}`;
  };

  return (
    <div className="view-container">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="carousel">
        {imageData.images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="details">
        <p>Location: {imageData.location}</p>
        <p>{formatDate(imageData.startDate)} - {formatDate(imageData.endDate)}</p>
        <p>₹{imageData.priceRange} Night</p>
      </div>
      <ol className="carousel-indicators">
        {imageData.images.map((_, idx) => (
          <li
            key={idx}
            onClick={() => handleSelect(idx)}
            className={index === idx ? 'active' : ''}
          ></li>
        ))}
      </ol>
    </div>
  );
};

export default View;
