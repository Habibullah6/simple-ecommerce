import React from 'react';
import './Header.css';



const Header = () => {
    return (
<div>

<nav className="navbar navbar-expand-lg bg-success p-3">
  <div className="container-fluid">
    <button className="navbar-toggler border border-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-align-justify"></i>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <span><i className="fab fa-buysellads"></i></span>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white fs-5 fw-bold" href="https://www.youtube.com/" target='blank'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fs-5 fw-bold" href="https://www.facebook.com/" target="blank">Categories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fs-5 fw-bold" href='https://www.fusionbd.com/' target='blank'>Today's Offer</a>
        </li>
      </ul>
      <form className="d-flex me-5">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-warning fw-bold " type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>

</div>
    );
};

export default Header;