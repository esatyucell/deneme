import React, { useState } from 'react';
import { memories } from '../data/memories';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const PhotoGallery = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextPhoto = () => {
    if (currentIndex < memories.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const prevPhoto = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextPhoto();
    if (isRightSwipe) prevPhoto();
  };

  return (
    <div className="gallery-overlay" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
      backgroundColor: 'rgba(11, 15, 25, 0.95)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '20px',
      zIndex: 9999
    }}>
      <button onClick={onBack} style={{
        position: 'absolute', top: '20px', right: '20px', 
        background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10000
      }}>
        <X size={36} />
      </button>

      <div 
        className="photo-frame"
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
        style={{
          border: '8px solid #4a3627',
          backgroundColor: '#8b5a2b',
          borderRadius: '4px',
          padding: '12px',
          maxWidth: '100%',
          width: '380px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
          display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}
      >
        <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', backgroundColor: '#000' }}>
          <img 
            src={memories[currentIndex].image} 
            alt="Memory" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        
        <p style={{
          marginTop: '15px', fontSize: '22px', textAlign: 'center', minHeight: '50px',
          color: '#fefae0', textShadow: '1px 1px 0px #000', fontFamily: 'monospace'
        }}>
          {memories[currentIndex].text}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px', alignItems: 'center' }}>
          <button onClick={prevPhoto} disabled={currentIndex === 0} style={{
            background: 'none', border: 'none', color: currentIndex === 0 ? '#555' : 'white', cursor: currentIndex === 0 ? 'default' : 'pointer'
          }}>
             <ChevronLeft size={36} />
          </button>
          <span style={{ fontSize: '20px', color: '#fefae0', fontFamily: 'monospace' }}>{currentIndex + 1} / {memories.length}</span>
          <button onClick={nextPhoto} disabled={currentIndex === memories.length - 1} style={{
            background: 'none', border: 'none', color: currentIndex === memories.length - 1 ? '#555' : 'white', cursor: currentIndex === memories.length - 1 ? 'default' : 'pointer'
          }}>
             <ChevronRight size={36} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;