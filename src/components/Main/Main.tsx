import { useState } from 'react';
import { HotPrices } from './HotPrices/HotPrices';
import './Main.scss';
import { NewModels } from './NewModels/NewModels';
import { Categories } from './Categories/Categories';
import { TopBanners } from './TopBanners/TopBanners';
import banners from '../../banners.json';
import { Banner } from '../../react-app-env';
import { Features } from './Features/Features';
import { VideoFon } from '../VideoFon/VideoFon';
import videofon from '../../video/videofon.mp4';
import { VideoList } from './VideoList/VideoList';

export const Main: React.FC = () => {
  const [isNumberBanner, setIsNumberBanner] = useState(1);

  return (
    <div className="main">
      <h1 className="main__main-title">ЗРОБИ СВОЮ ШКІРУ <span className="main__main-title-filled">СЕКСУАЛЬНОЮ</span> ЗА 2 ХВИЛИНИ З <span className="main__main-title-filled">ШИМЕРОМ</span> ВІД <span className="main__main-title-filled">ROBEAUTY</span></h1>
      <TopBanners
        setIsNumberBanner={setIsNumberBanner}
      />
      <div className="main__small-bars">
        {banners.map((item: Banner) => {
          return (
            <div
              key={item.id}
              className={isNumberBanner === item.id
              ? 'main__bar main__bar--isactive'
              : 'main__bar'}
            />
          )
        })}
      </div>
      <VideoFon videoSrc={videofon} />
      <Features />
      <HotPrices />
      <Categories />
      <VideoList />
      <NewModels />
    </div>
  );
};
