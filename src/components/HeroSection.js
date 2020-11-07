import React from 'react';
import './HeroSection.css';
import Video from './Video';
import { Link } from 'react-router-dom';

class HeroSection extends React.Component {
  renderHome() {
    if (this.props.heroMode) {
      return this.renderHero();
    }
    return;
  }

  renderHero() {
    return (
      <>
        <h2>Debut Album Out Now!</h2>
          <Link to='/listen' className='album-link' onClick={() => {this.changeSection("LISTEN", false)}}>
              <img className='album-artwork' src='/images/mind-art.jpg' alt='Artwork'/>
          </Link>
      </>
    );
  }

  render () {
      return (
        <div className={this.props.heroMode ? 'hero-container' : 'title-container'}>
            <Video src='/videos/mf-title-720.mp4' thumb='/images/video-thumb.png' autoPlay="autoplay" loop="loop" muted="muted" />
            <div className="titel">
                <h1>{this.props.title}</h1>
                {this.renderHome()}        
            </div>
        </div>
      );
  }
}

export default HeroSection;