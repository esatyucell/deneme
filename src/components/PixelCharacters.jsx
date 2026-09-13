import React from 'react';
import './PixelCharacters.css';

// Stardew Valley tarzı renk paleti
const palette = {
  '0': 'transparent',
  '1': '#111111', // Siyah saç / Ayakkabı
  '2': '#e0a982', // Erkek: Açık esmer/buğday ten
  '3': '#c48962', // Erkek: Ten gölge
  '4': '#fff0e6', // Kız: Çok açık ten
  '5': '#e6d0c3', // Kız: Ten gölge
  '6': '#000000', // Gözler
  '7': '#222222', // Erkek: Siyah tişört
  '8': '#111111', // Erkek: Tişört gölge
  '9': '#8b5a2b', // Kız: Kahverengi hırka
  'A': '#6f4822', // Kız: Hırka gölge
  'B': '#f5f5dc', // Kız: Krem içlik
  'C': '#2c5e4a', // Sandalye Kumaşı (Kamp yeşili)
  'D': '#8b9bb4', // Sandalye Demirleri
  'E': '#2d3748', // Erkek: Koyu gri/lacivert pantolon
  'F': '#3b5998', // Kız: Mavi kot pantolon
  'G': '#1a3d2f', // Sandalye kumaş gölge
  'H': '#617087', // Demir gölge
};

// Erkek Karakter (Kısa dik saç, buğday ten, siyah kıyafet, kamp sandalyesinde)
const boySprite = [
  "0000DCCCCCCD0000",
  "0000DCCCCCCD0000",
  "0000DCCCCCCD0000",
  "0001010101010000", /* Dik (spiky) saç uçları */
  "0011111111110000",
  "0001222222100000",
  "0001262262100000", /* Gözler */
  "0001222222100000",
  "0000333333000000",
  "0000777777000000",
  "000D777777D00000", /* Omuzlar ve sandalye arkalığı */
  "000D777777D00000",
  "00DD777777DD0000", /* Sandalye kollukları başlıyor */
  "0DCG777777GCD000",
  "0D0GEEEEEEG0D000", /* Kucak / Bacaklar başlıyor */
  "0D00EEEEEE00D000",
  "0D00EEEEEE00D000",
  "0D000EEEE000D000",
  "0D0001111000D000", /* Ayakkabılar */
  "0D0000000000D000"  /* Sandalye ön ayakları yere basıyor */
];

// Kız Karakter (Siyah uzun saç, açık ten, kahverengi hırka, kamp sandalyesinde)
const girlSprite = [
  "0000DCCCCCCD0000",
  "0000DCCCCCCD0000",
  "0000DCCCCCCD0000",
  "0000111111000000",
  "0001111111100000",
  "0011444444110000",
  "0011464464110000", /* Gözler */
  "0011444444110000",
  "0011555555110000",
  "001199BB99110000", /* Omuzlardan dökülen uzun saçlar */
  "001D99BB99D10000",
  "001D99BB99D10000",
  "001D99BB99D10000",
  "0D1G99BB99G1D000", /* Kollar ve kucağa dökülen saç uçları */
  "0D01FFFFFF10D000",
  "0D01FFFFFF10D000",
  "0D00FFFFFF00D000",
  "0D000FFFF000D000",
  "0D0001111000D000", /* Ayakkabılar */
  "0D0000000000D000"
];

const PixelRenderer = ({ matrix, className }) => {
  return (
    <svg 
      viewBox="0 0 16 20" 
      className={`pixel-sprite ${className}`}
      style={{ width: '80px', height: '100px', display: 'block' }} /* Çözünürlük hatasını çözen kritik satır */
    >
      {matrix.map((row, y) =>
        row.split('').map((char, x) => {
          if (char === '0') return null;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="1.05"
              height="1.05"
              fill={palette[char]}
            />
          );
        })
      )}
    </svg>
  );
};

const PixelCharacters = () => {
  return (
    <div className="characters-wrapper">
      <PixelRenderer matrix={boySprite} className="boy" />
      <PixelRenderer matrix={girlSprite} className="girl" />
    </div>
  );
};

export default PixelCharacters;