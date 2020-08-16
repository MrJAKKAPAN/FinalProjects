import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    <div>
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="index3.html" className="nav-link">Home</a>
    </li>
    
  </ul>

  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Messages Dropdown Menu */}
    <li className="nav-item">
      <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i className="fas fa-th-large" /></a>
    </li>
  </ul>
</nav>

    </div>
    );
  }
}

export default Header;
