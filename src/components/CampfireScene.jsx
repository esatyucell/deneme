import React from 'react';
import HeartButton from './HeartButton';
import PixelCharacters from './PixelCharacters';
import './CampfireScene.css'; // İlgili özel CSS eklenebilir

const CampfireScene = ({ onHeartClick }) => {
  // Rastgele yıldızlar oluşturma
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 60}%`,
    animationDelay: `${Math.random() * 3}s`,
    size: Math.random() > 0.8 ? '3px' : '2px',
  }));

  // Ateş böcekleri
  const fireflies = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 40}%`,
    tx: `${(Math.random() - 0.5) * 100}px`,
    ty: `${(Math.random() - 0.5) * 100 - 50}px`,
    animationDuration: `${4 + Math.random() * 4}s`,
    animationDelay: `${Math.random() * 5}s`,
  }));

  return (
    <div className="scene-container">
      {/* Gökyüzü */}
      <div className="sky">
        {stars.map((star) => (
          <div 
            key={star.id} 
            className="star" 
            style={{ 
              left: star.left, top: star.top, 
              width: star.size, height: star.size, 
              animationDelay: star.animationDelay 
            }} 
          />
        ))}
        <div className="moon" />
      </div>

      {/* Etkileşimli Kalp (Gökyüzünün ortasında veya karakterlerin üstünde) */}
      <div className="heart-wrapper">
        <HeartButton onClick={onHeartClick} />
      </div>

      {/* Yeryüzü ve Karakterler */}
      <div className="ground">
        {fireflies.map((ff) => (
          <div 
            key={ff.id} 
            className="firefly"
            style={{
              left: ff.left, bottom: ff.bottom,
              '--tx': ff.tx, '--ty': ff.ty,
              animationDuration: ff.animationDuration,
              animationDelay: ff.animationDelay
            }}
          />
        ))}
        
        <div className="camp-area">
          <PixelCharacters />
          <div className="campfire">
             {/* Basit CSS ateş animasyonu */}
             <div className="flame flame-1"></div>
             <div className="flame flame-2"></div>
             <div className="flame flame-3"></div>
             <div className="logs"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampfireScene;