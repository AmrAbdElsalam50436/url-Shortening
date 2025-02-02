import React from 'react';
import styles from './Footer.module.css';
import logo from '../../images/logo.svg';
import Facebook from '../../images/icon-facebook.svg';
import Twitter from '../../images/icon-twitter.svg';
import Pinterest from '../../images/icon-pinterest.svg';
import Instagram from '../../images/icon-instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={`container-fluid ${styles.footer}`}>
      <div className="row py-4 align-items-center">
        {/* Logo Section */}
        <div className="col-md-4 text-center text-md-start d-flex justify-content-center align-items-start">
          <img src={logo} alt="logo" className={styles.logo} />
        </div>


        {/* Navigation Section */}
        <div className="col-md-4 text-center">
          <div className="row">
            <div className="col-4">
              <Link to="/Features" className={`nav-link ${styles.footerLink}`}>
                Features
              </Link>
              <ul className={`${styles.footerList}`}>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div className="col-4">
              <Link to="/Resources" className={`nav-link ${styles.footerLink}`}>
                Resources
              </Link>
              <ul className={`${styles.footerList}`}>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="col-4">
              <Link to="/*" className={`nav-link ${styles.footerLink}`}>
                Company
              </Link>
              <ul className={`${styles.footerList}`}>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="col-md-4 d-flex justify-content-center justify-content-md-center align-items-center gap-3">
          <img src={Facebook} alt="Facebook" className={styles.socialIcon} />
          <img src={Twitter} alt="Twitter" className={styles.socialIcon} />
          <img src={Pinterest} alt="Pinterest" className={styles.socialIcon} />
          <img src={Instagram} alt="Instagram" className={styles.socialIcon} />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
