import React from 'react';
import '../../App.css';
import ImageGallery from 'react-image-gallery';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Gallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  _renderImage(item) {
    return (
      <div className="img-container">
                <LazyLoadImage className="lzy-img"
                  alt={item.alt}
                  src={item.original}
                />
      </div>
    );
  }

  getImages() {
    let images = [];
    const imagePath = '/images/gallery/'
    const thumbPath = '/images/thumbs/'
    const years = ['2020', '2019', '2014'];
    const numImages = [49, 23, 9];
    for (let i = 0; i < years.length; i++)
    {
      for (let j = 1; j <= numImages[i]; j++)
      {
        const file =  + years[i] + '-' + j.toString() + '.jpg';
        images.push({
          thumbnail: thumbPath + file,
          original: imagePath + file,
          renderItem: this._renderImage.bind(this),
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