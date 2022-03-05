import React from 'react';
import '../../App.css';
import ImageGallery from 'react-image-gallery';

class Videos extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    this.props.cs();
  }


  _renderVideo(item) {
    return (
            <div className='video-container'>
                <iframe className="mf-video"
                  title={item.thumbnailLabel}
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
            <div className='info-page'>
            <div className='info-body'>
            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              items={[{
                        thumbnail: 'http://i3.ytimg.com/vi/2B5dR5w3Ujo/hqdefault.jpg',
                        original: 'http://i3.ytimg.com/vi/2B5dR5w3Ujo/hqdefault.jpg',
                        embedUrl: 'https://www.youtube.com/embed/2B5dR5w3Ujo',
                        thumbnailLabel: "Inception of Fear",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: 'http://i3.ytimg.com/vi/2hAV619CRe0/hqdefault.jpg',
                        original: 'http://i3.ytimg.com/vi/2hAV619CRe0/hqdefault.jpg',
                        embedUrl: 'https://www.youtube.com/embed/2hAV619CRe0',
                        thumbnailLabel: "Concrete Wall",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: 'http://i3.ytimg.com/vi/8RPZoOERhdY/hqdefault.jpg',
                        original: 'http://i3.ytimg.com/vi/8RPZoOERhdY/hqdefault.jpg',
                        embedUrl: 'https://www.youtube.com/embed/8RPZoOERhdY',
                        thumbnailLabel: "Poetic Hate Live",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: 'http://i3.ytimg.com/vi/X5nJJDJcJHg/hqdefault.jpg',
                        original: 'http://i3.ytimg.com/vi/X5nJJDJcJHg/hqdefault.jpg',
                        embedUrl: 'https://www.youtube.com/embed/X5nJJDJcJHg',
                        thumbnailLabel: "The Mind's Desire Official Vieo",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: 'http://i3.ytimg.com/vi/-UVwl1bZKQM/hqdefault.jpg',
                        original: 'http://i3.ytimg.com/vi/-UVwl1bZKQM/hqdefault.jpg',
                        embedUrl: 'https://www.youtube.com/embed/-UVwl1bZKQM',
                        thumbnailLabel: "Genesis Official Vieo",
                        thumbnailClass: "video-thumbnail",
                        renderItem: this._renderVideo.bind(this)
                      },
                      {
                        thumbnail: 'http://i3.ytimg.com/vi/zq7kmmO2zuc/hqdefault.jpg',
                        original: 'http://i3.ytimg.com/vi/zq7kmmO2zuc/hqdefault.jpg',
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