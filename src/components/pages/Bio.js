import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css'

class Bio extends React.Component {
    render() {
        this.props.cs();
    return (
                <div className='info-page'>
                <div className='info-body'>
                    <h1>Who are we</h1>
                    <p>Mental Fracture is a progressive rock and metal band, formed in Rishon LeZion, Israel, in 2010.
                        As high school kids, we listened to bands like Dream Theater, Opeth, Porcupine Tree and many more, that inspired us to write progressive rock music. 
                        In a few years, we wrote and processed many songs, but only in 2019, we managed to record some of them, by ourselves.
                        We wear our influences on our sleeves, playing complex, energetic, and heavy music, never afraid to incorporate a new kind of weirdness in our music. 
                        Our songs vary and constantly changing their genre, featuring Jazz, Oriental music and Synth, surrounded in rock and metal atmosphere.
                        </p>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/2014.jpg'
                            text="Mental Fracture performing in 2014"
                            />
                        </ul>
                    </div>
                    <h1>The Mind's Desire</h1>
                    <p>The debut EP “The Mind’s Desire” came out on February 2019, featuring 5 songs, all of which recorded in Ori’s bedroom. Its lyrics take on the concept of creation, and the mind wanting to break free so that it may leave an everlasting mark on this world.</p>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/mind-art.jpg'
                            text="The Mind's Desire"
                            />
                        </ul>
                    </div>
                    <p>The album is self-produced and self-released and available on all streaming platforms. We shot two video clips, one for the title track - The Mind’s Desire, and the other one for the second track - Genesis. The videos show the actual recording process.  We are currently working on our next releae - an LP with 9 songs packed with progressive goodness.</p>
                    <h1>Band Members</h1>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/ori.jpg'
                            text='Vocals & Keyboards'
                            label='Ori Mazuz'
                            />
                            <CardItem
                            src='images/yogev.jpg'
                            text='Guitars'
                            label='Yogev Shpilman'
                            />
                            <CardItem
                            src='images/chai.jpg'
                            text='Drums'
                            label='Chai Maller'
                            />
                            <CardItem
                            src='images/philip.jpg'
                            text='Bass'
                            label='Philip Tsukerman'
                            />
                        </ul>   
                    </div>
                </div>
                </div>
                );
  }
}

export default Bio;