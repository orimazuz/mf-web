import React from 'react';
import '../../App.css';
import ImageGallery from 'react-image-gallery';

class Videos extends React.Component {
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
            <h1>VIDEOS</h1>
            </div>
            <div className='info-body'>
            {/* <div className='video-container'> */}
            {/* <iframe className="mf-video" title="Mental Fracture Playlist" src="https://www.youtube.com/embed/videoseries?list=PLItZLsLdjgz1iRFsZQfYOyuNaT2T6C9jD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe> */}
            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              items={[{
                        thumbnail: '/images/ori.jpg',
                        embedUrl: 'https://www.youtube.com/embed/8RPZoOERhdY',
                        thumbnailLabel: "Poetic Hate Live",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: '/images/chai.jpg',
                        embedUrl: 'https://www.youtube.com/embed/6pAw-igfpu0',
                        thumbnailLabel: "Summer Dies Live",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: '/images/yogev.jpg',
                        embedUrl: 'https://www.youtube.com/embed/X5nJJDJcJHg',
                        thumbnailLabel: "The Mind's Desire Official Vieo",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: '/images/philip.jpg',
                        embedUrl: 'https://www.youtube.com/embed/-UVwl1bZKQM',
                        thumbnailLabel: "Genesis Official Vieo",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: '/images/2014.JPG',
                        embedUrl: 'https://www.youtube.com/embed/zq7kmmO2zuc',
                        thumbnailLabel: "Genesis Live 2010",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                    ]}
            />
            {/* </div> */}
            </div>
            </div>
            </div>
  );
  }
}

export default Videos;