import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const HeartButton = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick();
  };

  return (
    <div 
      className={`pixel-heart-btn ${clicked ? 'exploding' : ''}`}
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        animation: clicked ? 'none' : 'pulseHeart 2s infinite',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <Heart fill="var(--heart-red)" color="var(--heart-red)" size={64} style={{ filter: 'drop-shadow(0px 0px 8px rgba(230, 57, 70, 0.8))' }} />
      <span style={{ fontSize: '24px', letterSpacing: '2px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Bana Dokun</span>
    </div>
  );
};

export default HeartButton;