// src/Pages/Gallery.jsx
import React, { useState } from 'react';
import galleryData from '../Data/galleryData.json'; // ✅ Your actual path
import './Gallery.css'; // Make sure to style it accordingly

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const goNext = () => setSelectedIndex((prev) => (prev + 1) % galleryData.length);
  const goPrev = () => setSelectedIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);

  return (
    <div className="gallery-container">
      <div className="image-grid">
        {galleryData.map((img, idx) => (
          <img
            key={idx}
            src={img.url}
            alt={img.alt || 'Gallery Image'}
            className="gallery-image"
            onClick={() => openModal(idx)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryData[selectedIndex].url}
              alt={galleryData[selectedIndex].alt || 'Full Image'}
              className="modal-image"
            />
            <button className="close-button" onClick={closeModal}>×</button>
            <button className="prev-button" onClick={goPrev}>⟨</button>
            <button className="next-button" onClick={goNext}>⟩</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
