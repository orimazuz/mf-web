import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <Zoom>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <LazyLoadImage className='cards__item__img'
              alt={props.label}
              src={props.src}
                />
          </figure>
          </Zoom>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
