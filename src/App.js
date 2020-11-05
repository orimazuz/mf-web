import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Bio from './components/pages/Bio';
import Videos from './components/pages/Videos';
import Shows from './components/pages/Shows';
import Contact from './components/pages/Contact';
import Listen from './components/pages/Listen';
import Footer from './components/Footer';
import Gallery from './components/pages/Gallery';
import { Link } from 'react-router-dom';
import './components/HeroSection.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroMode: true,
      title: "THE MIND'S DESIRE",
    };
  }

  changeSection(t, h) {
    if (t !== this.state.title) {
      this.setState({title: t});
    }
    if (h !== this.state.heroMode) {
      this.setState({heroMode: h});
    }
  }

  _renderHome() {
    if (this.state.heroMode) {
      return this._renderHero();
    }
    return;
  }

  _renderHero() {
    return (
      <>
        <h2>Debut Album Out Now!</h2>
          <Link to='/listen' className='album-link' onClick={() => {this.changeSection("LISTEN", false)}}>
              <img className='album-artwork' src='/images/mind-art.jpg' alt='Artwork'/>
          </Link>
      </>
    );
  }

  render () {
    return (
        <Router>
          <Navbar/>
          <div className='page-wrap'>
          <div className={this.state.heroMode ? 'hero-container' : 'title-container'}>
            <video src='/videos/mf-clip.mp4' autoPlay loop muted />
            <div className="titel">
            <h1>{this.state.title}</h1>
            {this._renderHome()}        
            </div>
            </div>
            <Switch>
              <Route path='/' exact><Home cs={() => {this.changeSection("THE MIND'S DESIRE", true)}}/></Route>
              <Route path='/listen'><Listen cs={() => {this.changeSection("LISTEN", false)}}/></Route>
              <Route path='/bio'><Bio cs={() => {this.changeSection("BIO", false)}}/></Route>
              <Route path='/shows'><Shows cs={() => {this.changeSection("SHOWS", false)}}/></Route>
              <Route path='/gallery'><Gallery cs={() => {this.changeSection("GALLERY", false)}}/></Route>
              <Route path='/videos'><Videos cs={() => {this.changeSection("VIDEOS", false)}}/></Route>
              <Route path='/contact'><Contact cs={() => {this.changeSection("CONTACT", false)}}/></Route>
            </Switch>
          </div>
          <Footer />
        </Router>
    );
  }
}

export default App;
