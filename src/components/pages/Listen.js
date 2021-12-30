import React from 'react';
import '../../App.css';
import { ListenBtn } from '../ListenBtn';

class Listen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            small: false,
        }
        if (window.innerWidth <= 960) {
            this.state.small = true;
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.props.cs();
        window.addEventListener('resize', this.updateDimensions);
    }

    getBandcampPlayer() {
        if (this.state.small) {
            return (<>
                <iframe className="bandcamp-listen-small" title="bandcamp-listen" src="https://bandcamp.com/EmbeddedPlayer/album=475472272/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://mentalfracture.bandcamp.com/album/the-minds-desire">The Mind&#39;s Desire by Mental Fracture</a></iframe>
            </>);
        } else {
            return (<>
                <iframe className="bandcamp-listen-full" title="bandcamp-listen" src="https://bandcamp.com/EmbeddedPlayer/album=475472272/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/" seamless><a href="https://mentalfracture.bandcamp.com/album/the-minds-desire">The Mind&#39;s Desire by Mental Fracture</a></iframe>
            </>);
        }
    }

    updateDimensions() {
        if (window.innerWidth <= 960) {
            if (!this.state.small) {
                this.setState({ small: true });
            }
        } else {
            if (this.state.small) {
                this.setState({ small: false });
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <div className='info-page'>
                <div className='info-body'>
                    <div className='listen-container'>
                        <div className='listen-box'>
                            {this.getBandcampPlayer()}
                        </div>
                        <div className='listen-box'>
                            <ul className='listen-list'>
                                <li>
                                    <ListenBtn
                                        dest="https://open.spotify.com/album/0TdEPoc64exz2Sx3N0UcMU"
                                        type="play"
                                        icon="spotify" />
                                </li>
                                <li>
                                    <ListenBtn
                                        dest="https://music.apple.com/il/album/the-minds-desire/1522361638"
                                        type="play"
                                        icon="apple" />
                                </li>
                                <li>
                                    <ListenBtn
                                        dest="https://mentalfracture.bandcamp.com/releases"
                                        type="download"
                                        icon="bandcamp" />
                                </li>
                                <li>
                                    <ListenBtn
                                        dest="https://www.deezer.com/track/1014327702"
                                        type="play"
                                        icon="deezer" />
                                </li>
                                <li>
                                    <ListenBtn
                                        dest="https://music.youtube.com/playlist?list=OLAK5uy_nj6hqDrqK_3OOVVr1gmYF5aSi8CpDH_90"
                                        type="play"
                                        icon="youtube" />
                                </li>
                                <li>
                                    <ListenBtn
                                        dest="https://play.google.com/store/music/album/?id=Bgpqyxrrsnqd4erxkxcjfv6pm3e"
                                        type="play"
                                        icon="google-play" />
                                </li>
                                <li>
                                    <ListenBtn
                                        dest="https://www.amazon.co.uk/dp/B08CLSFD52?tag=amplink-21"
                                        type="play"
                                        icon="amazon" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Listen;