import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import NavLinks from "../../nav";

const Home10Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleSearch, settoggleSearch] = useState(false);
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      {/* Header */}
      <header className={`header header-fixed header-fourteen header-fifteen ent-header ${isScrolled ? 'pharmacy-header' : ''}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/home-1" className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo-01.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home-1" className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
              <NavLinks />
                <li>
                  <div className="dropdown header-dropdown country-flag">
                    <Link
                      className="dropdown-toggle nav-tog"
                      data-bs-toggle="dropdown"
                      to="#"
                    >
                      <ImageWithBasePath src="assets/img/flags/us.png" alt="Img" />
                      English
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item">
                        <ImageWithBasePath src="assets/img/flags/fr.png" alt="Img" />
                        French
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <ImageWithBasePath src="assets/img/flags/es.png" alt="Img" />
                        Spanish
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <ImageWithBasePath src="assets/img/flags/de.png" alt="Img" />
                        German
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="login-link">
                  <Link to="/pages/login-email">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="searchbar">
                <Link to="#"  onClick={()=>settoggleSearch(!toggleSearch)}>
                  <i className="feather icon-search" />
                </Link>
                <div className={`togglesearch ${toggleSearch ? 'd-block': ''}`}>
                  <form action="/patient/search-doctor1">
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <button type="submit" className="btn">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </li>
              <li className="login-in-fourteen">
                <Link to="/login" className="btn reg-btn">
                  <i className="fa-solid fa-lock me-2" />
                  Login
                </Link>
              </li>
              <li className="login-in-fourteen">
                <Link
                  to="/register"
                  className="btn btn-primary reg-btn reg-btn-fourteen"
                >
                  <i className="fa-solid fa-user me-2" />
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* /Header */}
    </div>
  );
};

export default Home10Header;
