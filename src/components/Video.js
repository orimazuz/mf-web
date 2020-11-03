import React from 'react';
import '../Video.css';

const getVideoSrc = width => {
    if (width >= 1080) return desktopVideo;
    if (width >= 720) return tabletVideo;
    return mobileVideo;
  };

function Video(props) {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const src = getVideoSrc(window.innerWidth);
    const onLoadedData = () => {
      setIsVideoLoaded(true);
    };
  return (
      <div className="container">
        <img
          src={thumb}
          className="video-thumb tiny"
          alt="thumb"
          style={{ opacity: isVideoLoaded ? 0 : 1 }}
        />
        <video
          autoPlay
          playsInline
          muted
          src={src}
          onLoadedData={onLoadedData}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
        />
      </div>
    );
  };

  export default Video;