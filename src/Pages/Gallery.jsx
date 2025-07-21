// src/pages/Gallery.jsx
import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import '../styles/gallery.css'; // Optional styling

import red from '../assets/gallery/red.png';
import a1 from '../assets/gallery/a1.jpg';
import a2 from '../assets/gallery/a2.jpg';
import a3 from '../assets/gallery/a3.jpg';
import a4 from '../assets/gallery/a4.jpg';
import a5 from '../assets/gallery/a5.jpeg';
import a6 from '../assets/gallery/a6.jpeg';
import a7 from '../assets/gallery/a7.jpg';
import a8 from '../assets/gallery/a8.jpg';
import a9 from '../assets/gallery/a9.jpg';
import a10 from '../assets/gallery/a10.jpg';
import a11 from '../assets/gallery/a11.jpeg';
import a12 from '../assets/gallery/a12.jpeg';
import a13 from '../assets/gallery/a13.jpeg';
import a14 from '../assets/gallery/a14.jpeg';
import a15 from '../assets/gallery/a15.jpeg';
import a16 from '../assets/gallery/a16.jpeg';
import a17 from '../assets/gallery/a17.jpeg';
import a18 from '../assets/gallery/a18.jpeg';
import a19 from '../assets/gallery/a19.jpeg';
import a20 from '../assets/gallery/a20.jpeg';
import a21 from '../assets/gallery/a21.jpeg';
import a22 from '../assets/gallery/a22.jpeg';
import e1 from '../assets/gallery/e1.png';
import e2 from '../assets/gallery/e2.png';
import e3 from '../assets/gallery/e3.jpeg';
import e4 from '../assets/gallery/e4.jpeg';
import e5 from '../assets/gallery/e5.jpeg';
import g1 from '../assets/gallery/g1.jpeg';
import g2 from '../assets/gallery/g2.jpeg';
import g3 from '../assets/gallery/g3.jpeg';
import g4 from '../assets/gallery/g4.jpeg';
import g5 from '../assets/gallery/g5.jpeg';
import g6 from '../assets/gallery/g6.jpeg';
import g7 from '../assets/gallery/g7.jpg';
import g8 from '../assets/gallery/g8.jpg';
import g9 from '../assets/gallery/g9.jpg';
import g10 from '../assets/gallery/g10.jpg';
import g11 from '../assets/gallery/g11.jpg';
import g12 from '../assets/gallery/g12.jpeg';
import g13 from '../assets/gallery/g13.jpeg';
import g14 from '../assets/gallery/g14.jpeg';
import g15 from '../assets/gallery/g15.jpeg';
import g16 from '../assets/gallery/g16.jpeg';
import g17 from '../assets/gallery/g17.jpeg';
import g18 from '../assets/gallery/g18.jpeg';
import g19 from '../assets/gallery/g19.jpeg';
import g20 from '../assets/gallery/g20.jpeg';
import g21 from '../assets/gallery/g21.jpeg';
import g22 from '../assets/gallery/g22.jpeg';
import g23 from '../assets/gallery/g23.jpeg';
import g24 from '../assets/gallery/g24.jpeg';
import g25 from '../assets/gallery/g25.jpeg';
import g26 from '../assets/gallery/g26.jpeg';
import g27 from '../assets/gallery/g27.jpeg';
import g28 from '../assets/gallery/g28.jpeg';
import g29 from '../assets/gallery/g29.jpeg';
import g30 from '../assets/gallery/g30.jpeg';
import g31 from '../assets/gallery/g31.jpeg';
import g32 from '../assets/gallery/g32.jpeg';
import g33 from '../assets/gallery/g33.jpeg';
import g34 from '../assets/gallery/g34.jpeg';
import g35 from '../assets/gallery/g35.jpeg';
import l1 from '../assets/gallery/l1.jpeg';
import l2 from '../assets/gallery/l2.jpg';
import l3 from '../assets/gallery/l3.jpg';
import l4 from '../assets/gallery/l4.jpg';
import l5 from '../assets/gallery/l5.jpg';
import l6 from '../assets/gallery/l6.jpg';
import l7 from '../assets/gallery/l7.jpg';
import l8 from '../assets/gallery/l8.jpeg';
import l9 from '../assets/gallery/l9.jpeg';
import o1 from '../assets/gallery/o1.jpeg';
import o2 from '../assets/gallery/o2.jpeg';
import p1 from '../assets/gallery/p1.jpg';
import p2 from '../assets/gallery/p2.jpg';
import p3 from '../assets/gallery/p3.jpg';
import p4 from '../assets/gallery/p4.jpg';
import p5 from '../assets/gallery/p5.jpg';
import p6 from '../assets/gallery/p6.jpg';
import p8 from '../assets/gallery/p8.jpg';
import p11 from '../assets/gallery/p11.jpg';



const images = [
  { src: a1},
  { src: a2},
  { src: red,label: 'Alchemy 2025'},
  { src: a3},
  { src: a4},
  { src: a5},
  { src: a6},
  { src: a7},
  { src: a8},
  { src: a9},
  { src: a10},
  { src: a11},
  { src: a12},
  { src: a13},
  { src: a14},
  { src: a15},
  { src: a16},
  { src: a17},
  { src: a18},
  { src: a19},
  { src: a20},
  { src: a21},
  { src: red, label:'Events'},
  { src: a22},
  { src: e1},
  { src: e3},
  { src: e4},
  { src: e5},
  { src: g1},
  { src: red, label:'Intern XP'},
  { src: g2},
  { src: g3},
  { src: g4},
  { src: g5},
  { src: g6},
  { src: g7},
  { src: g8},
  { src: g9},
  { src: g10},
  { src: g11},
  { src: g12},
  { src: g13},
  { src: g14},
  { src: g15},
  { src: g16},
  { src: g17},
  { src: g18},
  { src: g19},
  { src: red, label:'Memories!'},
  { src: g20},
  { src: g21},
  { src: g22},
  { src: g23},
  { src: g24},
  { src: g25},
  { src: g26},
  { src: g27},
  { src: g28},
  { src: g29},
  { src: g30},
  { src: g31},
  { src: g32},
  { src: g33},
  { src: g34},
  { src: g35},
  { src: red, label: 'Leadership Connect'},
  { src: l1},
  { src: l2},
  { src: l3},
  { src: l4},
  { src: l5},
  { src: l6},
  { src: l7},
  { src: l8},
  { src: l9},
  { src: red, label: 'Onboarding'},
  { src: o1},
  { src: o2},
  { src: p1},
  { src: p2},
  { src: red, label: 'Capstone Presentations'},
  { src: p3},
  { src: p4},
  { src: p5},
  { src: p6},
  { src: p8},
  { src: p11}
];


const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    
    <div className="gallery-page ">
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
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={images.map((img) => ({ src: img.src }))}
        />
      )}
    </div>
  );
};

export default Gallery;
