import React from 'react';
import '../../App.css';
import ImageGallery from 'react-image-gallery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import firebase from 'firebase/app'
import '@firebase/storage';

function renderImage(item) {
  return (
    <div className="img-container">
      <LazyLoadImage className="lzy-img"
        alt={item.alt}
        src={item.original}
      />
    </div>
  );
}

async function getImageUrls() {
  let files = await firebase.storage().ref('/Gallery/').list();
  let imageUrls = await Promise.all(files.items.map(file => file.getDownloadURL()));

  return imageUrls;
}

export default function Gallery({ cs }) {
  let [images, setImages] = React.useState([]);

  React.useEffect(cs, [cs]);

  React.useEffect(() => {
    getImageUrls().then((imageUrls) => setImages(imageUrls.map(imageUrl => {
      return {
        thumbnail: imageUrl,
        original: imageUrl,
        renderItem: renderImage
      }
    })));
  }, [setImages]);

  return (
    <div className='info-page'>
      <div className='info-body'>
        <ImageGallery
          items={images}
        />
      </div>
    </div>
  );
}