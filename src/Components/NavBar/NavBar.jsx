import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { motion } from 'motion/react';
import styles from './NavBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavBar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white ${styles.nav}`}>
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: -50 }} // الوضع الأولي
      animate={{ opacity: 1, y: 0 }}   // الحالة النهائية
      transition={{ duration: 0.5 }}   // مدة الحركة
    >
      {/* Logo Section */}
      <NavLink to="/" className="navbar-brand">
        <img src={logo} alt="logo" className={styles.logo} />
      </NavLink>
    </motion.div>

    {/* Toggler Button for Small Screens */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navigation Links */}
    <div className={`collapse navbar-collapse ${styles.navCollapse}`} id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink to="/Features" className={`nav-link ${styles.navLink}`}>
            Features
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Pricing" className={`nav-link ${styles.navLink}`}>
            Pricing
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Resources" className={`nav-link ${styles.navLink}`}>
            Resources
          </NavLink>
        </li>
      </ul>

      {/* Login/Signup Buttons */}
      <div className="d-flex">
        <Link to="/Login" className={`btn btn-outline-primary me-2 ${styles.loginButton}`}>
          Login
        </Link>
        <Link to="/SignUp" className={`rounded-pill ${styles.signUp}`}>
          SignUp
        </Link>
      </div>
    </div>
  </div>
</nav>

  );
};

export default NavBar;
