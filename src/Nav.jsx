import React from "react";
import './App.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg fixed-top" id="nav">
          <div class="container-fluid">
              <div class="Flex">
              <a class="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a>
              <button class="navbar-toggler collapsed d-lg-none flex-column justify-self-end justify-content-around" id="Togglebtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="toggler-icon top-bar"></span>
                  <span class="toggler-icon bottom-bar"></span>
                  <span class="line"></span>
              </button>
              </div>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul class="navbar-nav" id="nav_ul">
                      <li class="nav-item" id="nav_li">
                          <Link class="nav-link" to="/">Home</Link>
                      </li>
                      <li class="nav-item" id="nav_li">
                          <Link class="nav-link" to="/about">Why Us</Link>
                      </li>
                      <div class="dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Area Of Care
                          </a>
                      
                          <ul class="dropdown-menu">
                          <li><Link class="dropdown-item" to="/aoc">Area Of Care</Link></li>
                          <li><Link class="dropdown-item" to="/Live">Live In Nanny</Link></li>
                          <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                          </ul>
                      </div>
                      <li class="nav-item" id="nav_li">
                          <Link class="nav-link" to="/Space">Our Space</Link>
                      </li>
                      <div class="dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          More
                          </a>
                      
                          <ul class="dropdown-menu">
                          <li><Link class="dropdown-item" to="/More">Our Dream</Link></li>
                          <li><Link class="dropdown-item" to="#">Another action</Link></li>
                          <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                          </ul>
                      </div>
                  </ul>
                  <div class="Navbtn ms-lg-5 ms-md-0 ms-sm-0 me-lg-5 me-md-0 me-sm-0" id="Navbtn">
                      <Link class="btnAnchor" to="/Contact"><button class="btn" id="Navbtn1"><span id="btnTxt">Contact Us</span></button></Link>
                      <Link class="btnAnchor" to="/Join"><button class="btn" id="Navbtn2">Join Now</button></Link>
                  </div>
              </div>
          </div>
      </nav>
    )
}

export default Nav;