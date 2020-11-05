import React from 'react';
import '../../App.css';
import ImageGallery from 'react-image-gallery';

class Gallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }



  _renderVideo(item) {
    return (
            <div className='video-container'>
                <iframe className="mf-video"
                  title={item.description}
                  src={item.embedUrl}
                  frameBorder='0'
                  allowFullScreen
                >
                </iframe>
            </div>
    );
  }

  render() {
  return (
            <div className='page-wrap'>
            <div className='info-page'>
            <div className='info-header'>
            <h1>GALLERY</h1>
            </div>
            <div className='info-body'>
            <ImageGallery
              items={[{
                        thumbnail: '/images/ori.jpg',
                        original: '/images/ori.jpg',
                      },
                      {
                        thumbnail: '/images/chai.jpg',
                        original: '/images/chai.jpg',
                      },
                      {
                        thumbnail: '/images/yogev.jpg',
                        original: '/images/yogev.jpg',
                      },
                      {
                        thumbnail: '/images/philip.jpg',
                        original: '/images/philip.jpg',
                      },
                      {
                        thumbnail: '/images/2014.JPG',
                        original: '/images/2014.JPG',
                      },
                    ]}
            />
            </div>
            </div>
            </div>
  );
  }
}

export default Gallery;