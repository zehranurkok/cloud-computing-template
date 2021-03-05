import React from 'react';
import './Footer.scss';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { BsCloud  } from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer__container'>
      <section className='footer__subscription'>
        <p className='footer__subscription--heading'>
          Gelişmeleri daha yakından takip etmek için mail sistemimize üye olabilirsin
        </p>
        <p className='footer__subscription--text'>
          İstediğin zaman üyelik sonlandırılır.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer__input'
              name='email'
              type='email'
              placeholder='Email'
            />
            <Button buttonStyle='btn--outline'>Üye Ol</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer__link__wrapper'>
          <div className='footer__link--items'>
            <h2>About Us</h2>
            <Link to='/cloud-computing-template/sign-up'>Kayıt Ol</Link>
            <Link to='#'>Cloud Nedir?</Link>
            <Link to='#'>Cloud Computing Nedir?</Link>
          </div>
          <div className='footer__link--items'>
            <h2>Bize Ulaşın</h2>
            <Link to='#'>İletişim</Link>
            <Link to='#'>Destek</Link>
          </div>
        </div>
        <div className='footer__link__wrapper'>
          <div className='footer__link--items'>
            <h2>Yazılar</h2>
            <Link to='#'>Gelişmeler</Link>
            <Link to='#'>Uygulamalar</Link>
          </div>
          <div className='footer__link--items'>
            <h2>Social Media</h2>
            <Link to='#'>Instagram</Link>
            <Link to='#'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='#' className='social-logo'>
              <BsCloud className='navbar-icon' />
              Cloud Computing
            </Link>
          </div>
          <small className='website-rights'>Cloud Computing © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='#'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/https://www.linkedin.com/in/zehra-nur-k%C3%B6k-010897/?locale=tr_TR'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;