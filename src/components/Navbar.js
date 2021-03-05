import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { BsCloud } from 'react-icons/bs';
import { GiShurikenAperture, GiJamesBondAperture } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#b73225' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/cloud-computing-template/' className='navbar-logo' onClick={closeMobileMenu}>
              <BsCloud className='navbar-icon' />
              Cloud Computing
            </Link>
            <IconContext.Provider value={{ color: '#fff' }}>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <GiJamesBondAperture  /> : <GiShurikenAperture />}
            </div>
            </IconContext.Provider>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/cloud-computing-template/' className='nav-links' onClick={closeMobileMenu}>
                  Ana Sayfa
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/cloud-computing-template/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Servisler
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/cloud-computing-template/learnmore'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Daha Fazlası
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/cloud-computing-template/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>ÜYE OL</Button>
                  </Link>
                ) : (
                  <Link to='/cloud-computing-template/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      ÜYE OL
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;