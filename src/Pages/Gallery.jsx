// src/pages/Gallery.jsx
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import '../styles/gallery.css'; // Optional styling

const images = [
  {
    src: '/images/community.jpg',
    label: 'Community Fair 2025',
  },
  {
    src: '/images/alchemy.jpg',
    label: 'Alchemy 2025',
  },
  {
    src: '/images/yoga.jpg',
    label: 'Yoga Day',
  },
  // Add more images here...
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>Gallery</h1>
        <p>A home for our memories.</p>
      </header>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="gallery-label">{img.label}</div>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;
