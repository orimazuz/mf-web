import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css'

class Bio extends React.Component {
    componentDidMount() {
        this.props.cs();
    }

    render() {
    return (
                <div className='info-page'>
                <div className='info-body'>
                    <h1>About</h1>
                    <p>
                        Mental Fracture is a progressive rock band from Rishon LeZion, Israel.
                        Beginning with influences like Dream Theater, Opeth, Porcupine Tree and many more, their music evolved into something more interesting and unique. 
                        The band members wear their influences on their sleeves, playing complex, energetic, and heavy music, never afraid to incorporate a new, different kind of weirdness in their music.
                        </p>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                            src='https://firebasestorage.googleapis.com/v0/b/mental-fracture-web.appspot.com/o/2014.JPG?alt=media&token=f06b712b-9ec7-4821-a979-7c8c30d5d8ef'
                            text="Mental Fracture performing in 2014"
                            />
                        </ul>
                    </div>
                    <h1>The Mind's Desire</h1>
                    <p>
                        A debut EP, “The Mind’s Desire”, was released in February 2019, featuring 5 songs, all of which recorded in Ori’s bedroom.
                        The songs vary constantly and change their genre, gliding through jazz, oriental music and synth, yet always coming back to fierce, energetic rock and metal.
                        Its lyrics take on the concept of creation, and the mind wanting to break free so that it may leave an everlasting mark on this world.
                    </p>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                            src='https://firebasestorage.googleapis.com/v0/b/mental-fracture-web.appspot.com/o/mind-art.jpg?alt=media&token=578fad6c-c8ee-4c59-bd63-9638e494d8a5'
                            text="The Mind's Desire"
                            />
                        </ul>
                    </div>
                    <p>
                        The album is self-produced and self-released and available on all streaming platforms. Two video clips were shot during the making of the EP, one for the title track - The Mind’s Desire, and the other one for the second track - Genesis. The videos show the actual recording process.
                    </p>
                    <p>
                        An up and coming self-produced full length album is soon to be released, containing all-new material, is soon to be announced and released.
                    </p>
                    <h1>Band Members</h1>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                            src='https://firebasestorage.googleapis.com/v0/b/mental-fracture-web.appspot.com/o/ori.jpg?alt=media&token=2710cc00-3118-4926-948f-b6901fa0bc98'
                            text='Vocals & Keyboards'
                            label='Ori Mazuz'
                            />
                            <CardItem
                            src='https://firebasestorage.googleapis.com/v0/b/mental-fracture-web.appspot.com/o/yogev.jpg?alt=media&token=0bd5f4a1-464e-46c1-8720-a2f0f0b27b35'
                            text='Guitars'
                            label='Yogev Shpilman'
                            />
                            <CardItem
                            src='https://firebasestorage.googleapis.com/v0/b/mental-fracture-web.appspot.com/o/chai.jpg?alt=media&token=5d891f6a-af09-46de-9cbd-27834e0cb951'
                            text='Drums'
                            label='Chai Maller'
                            />
                            <CardItem
                            src='https://firebasestorage.googleapis.com/v0/b/mental-fracture-web.appspot.com/o/philip.jpg?alt=media&token=0f0d89f1-db31-4e29-b7ae-0095ed090979'
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