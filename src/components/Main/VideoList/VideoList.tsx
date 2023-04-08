import './VideoList.scss';
import videoList from '../../../video.json';
import { MovieCard } from '../MovieCard/MovieCard';
import React from 'react';

export const VideoList = () => {
  const totalVideos = videoList.length;
  const [loadPerOne, setLoadPerOne] = React.useState(3);
  return (
    <>
      <h1 className="video-list__title">Video Overview</h1>
      <div className="video-list">
        {videoList.slice(0, loadPerOne ).map(item => (
          <div
            key={item.id}
            className="video-list__list-item"
          >
            <MovieCard videoSrc={item.videoUrl} />
          </div>
        ))}
      </div>
      {loadPerOne <totalVideos && (
      <button
        className="video-list__button"
        onClick={() => {
          setLoadPerOne(3 + loadPerOne)
        }}
      >Load more </button>)}
    </>
  );
};
