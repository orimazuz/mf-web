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
import HeroSection from './components/HeroSection';
import firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: "AIzaSyDGlZSbFjTjcJQ6uKEISzbJHMe-blQKX3o",
  authDomain: "mental-fracture-web.firebaseapp.com",
  databaseURL: "https://mental-fracture-web.firebaseio.com",
  projectId: "mental-fracture-web",
  storageBucket: "mental-fracture-web.appspot.com",
  messagingSenderId: "642099386814",
  appId: "1:642099386814:web:98108dc813f85e299201ef",
  measurementId: "G-C0FHP1PGGM"
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroMode: true,
      title: "",
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

  render () {
    return (
        <Router>
          <Navbar/>
          <div className='page-wrap'>
            <HeroSection title={this.state.title} heroMode={this.state.heroMode} cs={() => {this.changeSection("LISTEN", false)}}/>
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
