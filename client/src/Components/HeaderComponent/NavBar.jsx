import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import NavLink from './NavLink'
class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <span class="navbar-brand" href="#">
            ZALIZAN ZOLKIPALI
          </span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link to="/" class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link">About</Link>
                </li>
                <li class="nav-item">
                  <Link to="/works" class="nav-link">Works</Link>
                </li>
                <li class="nav-item">
                  <Link to="/resume" class="nav-link">Resume</Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    )
  }
}
export default NavBar;

