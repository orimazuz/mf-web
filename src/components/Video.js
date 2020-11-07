import React from 'react';
import './Video.css';

function Video(props) {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const onLoadedData = () => {
      setIsVideoLoaded(true);
    };
  return (
      <>
        <img
          src={props.thumb}
          className="video-thumb tiny"
          alt="thumb"
          style={{ display: isVideoLoaded ? "none" : 1 }}
        />
        <video
          playsInline
          src={props.src}
          onLoadedData={onLoadedData}
          style={{ display: isVideoLoaded ? 1 : 0 }}
          autoPlay={props.autoPlay} 
          loop={props.loop} 
          muted={props.muted}
        />
      </>
    );
  };

  export default Video;