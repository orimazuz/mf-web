import React from 'react';
import '../../App.css';

export default function Videos() {
  return (
            <div className='page-wrap'>
            <div className='info-page'>
            <div className='info-header'>
            <h1>VIDEOS</h1>
            </div>
            <div className='info-body'>
            <div className='video-container'>
            <iframe className="mf-video" title="Mental Fracture Playlist" src="https://www.youtube.com/embed/videoseries?list=PLItZLsLdjgz1iRFsZQfYOyuNaT2T6C9jD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>
            </div>
            </div>
            </div>
  );
}
