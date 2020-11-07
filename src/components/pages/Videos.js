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
    this.props.cs();
  return (
            <div className='info-page'>
            <div className='info-body'>
            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              items={[{
                        thumbnail: 'http://i3.ytimg.com/vi/8RPZoOERhdY/hqdefault.jpg',
                        embedUrl: 'https://www.youtube.com/embed/8RPZoOERhdY',
                        thumbnailLabel: "Poetic Hate Live",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: 'http://i3.ytimg.com/vi/6pAw-igfpu0/hqdefault.jpg',
                        embedUrl: 'https://www.youtube.com/embed/6pAw-igfpu0',
                        thumbnailLabel: "Summer Dies Live",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: 'http://i3.ytimg.com/vi/X5nJJDJcJHg/hqdefault.jpg',
                        embedUrl: 'https://www.youtube.com/embed/X5nJJDJcJHg',
                        thumbnailLabel: "The Mind's Desire Official Vieo",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: 'http://i3.ytimg.com/vi/-UVwl1bZKQM/hqdefault.jpg',
                        embedUrl: 'https://www.youtube.com/embed/-UVwl1bZKQM',
                        thumbnailLabel: "Genesis Official Vieo",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: 'http://i3.ytimg.com/vi/zq7kmmO2zuc/hqdefault.jpg',
                        embedUrl: 'https://www.youtube.com/embed/zq7kmmO2zuc',
                        thumbnailLabel: "Genesis Live 2010",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                    ]}
            />
            </div>
            </div>
  );
  }
}

export default Videos;