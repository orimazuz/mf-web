import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <nav className='footer-container'>
        <div className='creds'>&copy;&nbsp;Mental Fracture 2020</div>
        <div className='social-media-wrap'>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/MentalFracture'
              target='_blank'
              referrerPolicy='strict-origin'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link facebook'
              href='http://facebook.com/mentalfracture'
              target='_blank'
              referrerPolicy='strict-origin'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='http://instagram.com/mentalfractureband/'
              target='_blank'
              referrerPolicy='strict-origin'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCWhdDyxXT4PRR8U9yqTSyOw'
              target='_blank'
              referrerPolicy='strict-origin'
              rel='noopener noreferrer'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link spotify'
              href='https://open.spotify.com/artist/0sYaQqCfJvKxyfJWco2t8O'
              target='_blank'
              referrerPolicy='strict-origin'
              rel='noopener noreferrer'
              aria-label='Spotify'
            >
              <i className='fab fa-spotify' />
            </a>
            <a
              className='social-icon-link bandcamp'
              href='https://mentalfracture.bandcamp.com'
              target='_blank'
              referrerPolicy='strict-origin'
              rel='noopener noreferrer'
              aria-label='Bandcamp'
            >
              <i className='fab fa-bandcamp' />
            </a>
        </div>
    </nav>
  );
}

export default Footer;
