import './VideoFon.scss';
import React, { useRef } from 'react';

type Props = {
  videoSrc: string;
};

export const VideoFon: React.FC<Props> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className='video-fon'>
      <h1 className='video-fon__title'> SHIMMER</h1>
      <video
        loop
        muted
        className='video-fon__video'
        ref={videoRef}
        src={videoSrc}
        controls={false}
        onLoadedMetadata={playVideo} 
      />
    </div>
  );
};
