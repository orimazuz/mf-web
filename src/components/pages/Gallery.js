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

  getImages() {
    let images = [];
    const years = ['2020', '2019', '2014'];
    const numImages = [52, 23, 10];
    for (let i = 0; i < years.length; i++)
    {
      for (let j = 1; j <= numImages[i]; j++)
      {
        const file = '/images/gallery/' + years[i] + '-' + j.toString() + '.jpg';
        images.push({
          thumbnail: file,
          original: file,
        });
      }
    }
    return images;
  }

  render() {
    this.props.cs();
  return (
            <div className='info-page'>
            <div className='info-body'>
            <ImageGallery
              items={this.getImages()}
            />
            </div>
            </div>
  );
  }
}

export default Gallery;