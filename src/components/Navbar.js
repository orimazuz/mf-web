import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Mental Fracture
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/listen'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Listen
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/bio' className='nav-links' onClick={closeMobileMenu}>
                Bio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/shows'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Shows
              </Link>
            </li>
            <li>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to='/videos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
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

export default Navbar;
