import React from 'react';
import './MovieCard.scss';
type Props = {
  videoSrc: string;
};
export const MovieCard: React.FC<Props> = ({videoSrc}) => {

  const playVideo = (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    event.preventDefault();
    event.stopPropagation();
    const videoElement = event.currentTarget;
    videoElement.pause();
    videoElement.currentTime = 0;
  };

  return (
    <div className="video-card">
      <video
        src={videoSrc}
        muted
        controls={true}
        onLoadedMetadata={playVideo}
        className="video-card__video"
      />
    </div>
  );
};
