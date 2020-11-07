import React from 'react';
import './HeroSection.css';
import Video from './Video';
import { Link } from 'react-router-dom';

class HeroSection extends React.Component {
  renderHero() {
    if (this.props.heroMode) {
        return (
        <>
            <h2>Debut Album Out Now!</h2>
            <Link to='/listen' className='album-link' onClick={() => {this.props.cs()}}>
                <img className='album-artwork' src='/images/mind-art.jpg' alt='Artwork'/>
            </Link>
        </>
        );
    }
    return;
  }

  render () {
      return (
        <div className={this.props.heroMode ? 'hero-container' : 'title-container'}>
            <Video src='/videos/mf-title-720-h264.mp4' thumb='/images/video-thumb.png' autoPlay="autoplay" loop="loop" muted="muted" />
            <div className="title">
                <h1>{this.props.title}</h1>
                {this.renderHero()}        
            </div>
        </div>
      );
  }
}

export default HeroSection;