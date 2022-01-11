import React from 'react';
import './HeroSection.css';
import Video from './Video';
// import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class HeroSection extends React.Component {
  renderHero() {
    if (this.props.heroMode) {
        return (
        <>
            <h2>Disaccord coming out on 3.3.2022</h2>
            <a href="https://emubands.ffm.to/disaccord">
                        <LazyLoadImage className='album-artwork' src='https://firebasestorage.googleapis.com/v0/b/mental-fracture-web.appspot.com/o/Disaccord%2FMentalFracture_album_v7.png?alt=media&token=853b2500-972d-4427-96a2-a7755c2600bc' alt='Artwork'/>
            </a>
        </>
        );
    }
    return;
  }

  render () {
      return (
        <div className={this.props.heroMode ? 'hero-container' : 'title-container'}>
            <Video src='https://firebasestorage.googleapis.com/v0/b/mental-fracture-web.appspot.com/o/mf-title-720-h264.mp4?alt=media&token=099a03bd-737f-4e24-b82d-6d5159ae8552' 
              thumb='https://firebasestorage.googleapis.com/v0/b/mental-fracture-web.appspot.com/o/video-thumb.png?alt=media&token=d2b5d969-1102-4db0-b9ed-368876c1d794'
              autoPlay="autoplay" loop="loop" muted="muted" />
            <div className="title">
                <h1>{this.props.title}</h1>
                {this.renderHero()}        
            </div>
        </div>
      );
  }
}

export default HeroSection;