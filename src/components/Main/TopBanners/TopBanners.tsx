import { IconButton } from '@mui/material';
import './TopBanners.scss';
import { useEffect, useRef, useState } from 'react';
import banners from '../../../banners.json';
type Props = {
  setIsNumberBanner: (arg: number) => void,
};

export const TopBanners: React.FC<Props> = ({ setIsNumberBanner }) => {
  const boxlistRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [disablePrev, setdisablePrev] = useState(false);
  const [disableNext, setdisableNext] = useState(false);
  const [widthOneBanner, setWidthOneBanner] = useState(window.innerWidth);
  let numberBanner: number;

  numberBanner = position / widthOneBanner;
  setIsNumberBanner(++numberBanner);
  const getNext = () => {
    const moveon: number = position + widthOneBanner;

    setdisablePrev(false);

    if (position < (banners.length - 1) * widthOneBanner) {
      setdisableNext(false);
      setPosition(moveon);
    } else {
      setdisableNext(true);
    }
  };

  const getPrev = () => {
    setdisableNext(false);
    if (position > 0) {
      const moveon: number = position - widthOneBanner;

      setdisablePrev(false);
      setPosition(moveon);
    } else {
      setdisablePrev(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (boxlistRef.current) {
        setWidthOneBanner(+boxlistRef.current?.clientWidth);
        setPosition(0);
      }
    })
  }, [widthOneBanner]);

  return (
    <div className="top-banners">
      <div className="top-banners__box-left-button">
        <IconButton
          size="small"
          disabled={disablePrev}
          sx={{ padding: 0 }}
          onClick={getPrev}
        >
          <div className="top-banners__rectangle">
            <div className="top-banners__arrow-left" />
          </div>
        </IconButton>
      </div>


      <div ref={boxlistRef} className="top-banners__box-list">
        <ul
          className="top-banners__list"
          style={{
            transform: `translateX(${-position}px)`,
            transitionDuration: '1000ms',
          }}
        >
          {banners.map(item => (
            <li
              key={item.id}
              className="top-banners__list-item"
            >
              <img
                src={item.imgUrl}
                alt={item.name}
                style={{
                  width: widthOneBanner,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="top-banners__box-right-button">
        <IconButton
          size="small"
          sx={{ padding: 0 }}
          disabled={disableNext}
          onClick={getNext}
        >
          <div className="top-banners__rectangle">
            <div className="top-banners__arrow-right" />
          </div>
        </IconButton>
      </div>
    </div>
  );
};
