import { useState } from 'react';
import CampfireScene from './components/CampfireScene';
import PhotoGallery from './components/PhotoGallery';

function App() {
  // Sahne yönetimi: 'hero' (kamp ateşi) veya 'gallery' (fotoğraflar)
  const [scene, setScene] = useState('hero');

  const handleHeartClick = () => {
    // Kalbe tıklandığında sahneyi galeriye çeviriyoruz
    setScene('gallery');
  };

  const handleBackToHero = () => {
    // Galeriden geri dönmek isterse
    setScene('hero');
  };

  return (
    <div style={{ width: '100vw', height: '100svh', position: 'relative', overflow: 'hidden' }}>
      {scene === 'hero' && <CampfireScene onHeartClick={handleHeartClick} />}
      {scene === 'gallery' && <PhotoGallery onBack={handleBackToHero} />}
    </div>
  );
}

export default App;