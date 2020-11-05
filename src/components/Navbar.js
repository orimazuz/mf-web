import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      click: false,
    }
  }

  closeMobileMenu() {
    this.setState({click: false});
  }

  render () {
  const handleClick = () => this.setState({click: !this.state.click});

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={() => {this.closeMobileMenu()}}>
            Mental Fracture
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/listen'
                className='nav-links'
                onClick={() => {this.closeMobileMenu()}}
              >
                Listen
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/bio' 
                className='nav-links' 
                onClick={() => {this.closeMobileMenu()}}
                >
                Bio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/shows'
                className='nav-links'
                onClick={() => {this.closeMobileMenu()}}
              >
                Shows
              </Link>
            </li>
            <li>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={() => {this.closeMobileMenu()}}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to='/videos'
                className='nav-links'
                onClick={() => {this.closeMobileMenu()}}
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='nav-links'
                onClick={() => {this.closeMobileMenu()}}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
  }
}

export default Navbar;
