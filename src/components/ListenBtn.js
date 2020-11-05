import React from 'react';
import './ListenBtn.css';

const TYPES = ['play', 'download'];
const serviceDict = {
    'spotify': 'spotify',
    'itunes': 'iTunes',
    'apple': 'Music',
    'bandcamp': 'bandcamp',
    'deezer': 'deezer',
    'youtube': 'YouTube Music',
    'google-play': 'Google Play',
    'amazon': 'amazon music'
}

const retText = (type) => {
    if (type === 'play') {
        return (<><i className="fa fa-play"></i>&nbsp;Play</>);
    } else {
        return (<><i className="fa fa-download"></i>&nbsp;Download</>);
    }
};

export const ListenBtn = ({
    dest,
    image,
    icon,
    type,
  }) => {
    const checkButtonStyle = TYPES.includes(type)
      ? type
      : TYPES[0];

    const iconName = "fab fa-" + icon;
    
    return (
        <div className="service">
            <a className="service-link" href={dest} rel="noreferrer noopener" sl-processed="1">
                <div className="image-container">
                    <i className={iconName}/>&nbsp;{serviceDict[icon]}
                </div>
                <div className="link">
                    <div className="button">
                        {retText(checkButtonStyle)}
                    </div>
                </div>
            </a>
        </div>
    );
  };