import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Bio from './components/pages/Bio';
import Videos from './components/pages/Videos';
import Shows from './components/pages/Shows';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/bio' component={Bio} />
          <Route path='/shows' component={Shows} />
          <Route path='/videos' component={Videos} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
