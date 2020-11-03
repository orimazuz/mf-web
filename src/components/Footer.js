import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <nav className='footer-container'>
        <div class='social-media-wrap'>
            <a
              class='social-icon-link facebook'
              href='http://facebook.com/mentalfracture'
              target='_blank'
              referrerPolicy='strict-origin'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='http://instagram.com/mentalfractureband/'
              target='_blank'
              referrerPolicy='strict-origin'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCWhdDyxXT4PRR8U9yqTSyOw'
              target='_blank'
              referrerPolicy='strict-origin'
              rel='noopener noreferrer'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link spotify'
              href='https://open.spotify.com/artist/0sYaQqCfJvKxyfJWco2t8O'
              target='_blank'
              referrerPolicy='strict-origin'
              rel='noopener noreferrer'
              aria-label='Spotify'
            >
              <i class='fab fa-spotify' />
            </a>
            <a
              class='social-icon-link bandcamp'
              href='https://mentalfracture.bandcamp.com'
              target='_blank'
              referrerPolicy='strict-origin'
              rel='noopener noreferrer'
              aria-label='Bandcamp'
            >
              <i class='fab fa-bandcamp' />
            </a>
        </div>
    </nav>
  );
}

export default Footer;
