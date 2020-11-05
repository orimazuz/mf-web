import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

class HeroSection extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='hero-container'>
        <video src='/videos/mf-clip.mp4' autoPlay loop muted />
        <h1>THE MIND'S DESIRE</h1>
        <p>Debut Album Out Now!</p>
        <Link to='/listen' className='album-link'>
          <img className='album-artwork' src='/images/mind-art.jpg' alt='Artwork'/>
        </Link>
      </div>
    );
  }
}

export default HeroSection;
