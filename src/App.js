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

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/listen' component={Listen} />
          <Route path='/bio' component={Bio} />
          <Route path='/shows' component={Shows} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/videos' component={Videos} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
