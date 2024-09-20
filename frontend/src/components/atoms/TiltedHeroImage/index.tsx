import React, { useState } from 'react';
import HeroSectionImage from '../../../../public/png/profile-pic.png'
import './App.css'; 
import { HERO_SECTION_IMAGE } from '../../../utils/constants';
import { tiltedImageStyle } from '../../../services/mocks/mocks';

const TiltedHeroImage = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  
  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    
    const tiltX = (x - 0.5) * 30;
    const tiltY = (y - 0.5) * 30;

    setTilt({ x: tiltX, y: tiltY });
  };

  return (
    <div
      className="tilt-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })} 
    >
      <img
        src={HeroSectionImage}
        alt={HERO_SECTION_IMAGE}
        style={tiltedImageStyle(tilt.x, tilt.y)}
      />
    </div>
  );
};

export default TiltedHeroImage;
