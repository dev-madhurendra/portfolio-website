import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDiv, Popup } from '../../../utils/styled';
import { socialMediaData, userData } from '../../../services/mocks/mocks';
import { SOCIAL_MEDIA_COMPONENT } from '../../../utils/constants';

const SocialMediaIcons = () => {
  const [popupVisible, setPopupVisible] = useState<string | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (platform: string) => {
    if (popupVisible === platform) {
      setPopupVisible(null);
    } else {
      setPopupVisible(platform);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setPopupVisible(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <IconDiv data-testid={SOCIAL_MEDIA_COMPONENT}>
      {socialMediaData.map(({ platform, icon, color, link }) => (
        <div
          key={platform}
          style={{ position: 'relative', display: 'inline-block' }}
          ref={popupVisible === platform ? popupRef : null}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              if (['github', 'instagram', 'twitter'].includes(platform)) {
                handleClick(platform);
              } else {
                window.open(link, '_blank');
              }
            }}
          >
            <FontAwesomeIcon icon={icon} style={{ color }} className="wave" />
          </a>
          {popupVisible === platform && (
            <Popup>
              <p>
                <strong>Personal:</strong>{' '}
                <a href={userData[platform]?.personalLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={userData[platform]?.icon} className='wave' />
                </a>
              </p>
              <p>
                <strong>Organization:</strong>{' '}
                <a href={userData[platform]?.orgLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={userData[platform]?.icon} className='wave' />
                </a>
              </p>
            </Popup>
          )}
        </div>
      ))}
    </IconDiv>
  );
};

export default SocialMediaIcons;
