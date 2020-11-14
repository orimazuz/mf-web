import React from 'react';
import '../../App.css';
import ImageGallery from 'react-image-gallery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import firebase from 'firebase/app'
import '@firebase/storage';

class Gallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      files: [],
      images: [],
      urls: [],
      filesLoaded: false,
      imagesLoaded: false,
    };
    this.setImage = this._setImage.bind(this);
    this.setFiles = this._setFiles.bind(this);
    this.storage = firebase.storage().ref('/Gallery/');
    this.getFiles();
  }

  _setFiles(files)
  {
    this.setState({files: files.items.slice()});
    this.setState({filesLoaded: true});
  }

  _setImage(url) {
    const images = this.state.images.slice();
    const urls = this.state.urls.slice();
    if (!urls.includes(url))
    {
      urls.push(url);
      images.push({
        thumbnail: url,
        original: url,
        renderItem: this._renderImage.bind(this),
      });
      this.setState({imagesLoaded: true});
      this.setState({images: images, urls: urls});
    }
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

  getFiles() {
    this.storage.list().then(this.setFiles);
  }

  getImages() {
    this.state.files.forEach(file => file.getDownloadURL().then(this.setImage).catch(function(error) {console.log(error);}));
  }

  render() {
    this.props.cs();
    if (this.state.filesLoaded && !this.state.imagesLoaded)
    {
      this.getImages();
    }
  return (
            <div className='info-page'>
            <div className='info-body'>
            <ImageGallery
              items={this.state.images}
            />
            </div>
            </div>
  );
  }
}

export default Gallery;