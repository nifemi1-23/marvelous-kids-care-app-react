import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer class="mt-5">
            <img src="/assets/images/Union (3).png"  class="footerUnion" alt="Union" />
            <div class="footerBox">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-12 col-sm-12 footerLeft" >
                            <img src="/assets/images/Footer Logo.png"  alt="Footer Logo" />
                            
                            <h5 class="footerH5 mt-5">
                                Locations: 
                                <span class="footerText">36, Lensbury way Abbey Wood, <br/> London, SE29SY.</span>
                            </h5>
                            <h5 class="footerH5 mt-5">
                                Opening and Closing Hours:
                            </h5>
                            <span class="footerText">Monday - Friday: 07:00 AM - 06:00 PM</span> <br/>
                            <span class="footerText">Morning: 07:00 AM - 01:00 PM</span> <br/>
                            <span class="footerText">Afternoon: 01:00 PM - 06:00 PM</span>
                        </div>
                        <div class="col-lg-7 col-md-12 col-sm-12 mt-5">
                            <div class="row">
                                <div class="col-md-4 mb-5">
                                        <h4 class="footerHead1">
                                            Company
                                        </h4>
                                        <li class="footerLi">
                                            <Link class="footerAnchor" to="/about">Why Us</Link>
                                        </li>
                                        <li class="footerLi">
                                            <Link class="footerAnchor" to="/aoc">Area of Care</Link>
                                        </li>
                                        <li class="footerLi">
                                            <Link class="footerAnchor" href="#">Nanny</Link>
                                        </li>
                                        <li class="footerLi">
                                            <a class="footerAnchor" href="#">Our Environment</a>
                                        </li>
                                        <li class="footerLi">
                                            <a class="footerAnchor" href="#">Our Solution</a>
                                        </li>
                                </div>
                                <div class="col-md-4 mb-5">
                                        <h4 class="footerHead1">
                                            Our Service
                                        </h4>
                                        <li class="footerLi">
                                            <a class="footerAnchor" href="#">Childcare Services</a>
                                        </li>
                                        <li class="footerLi">
                                            <a class="footerAnchor" href="#">Nanny Service On Request</a>
                                        </li>
                                        <li class="footerLi">
                                            <a class="footerAnchor" href="#">Free Tax-Funded Childcare</a>
                                        </li>
                                        <li class="footerLi">
                                            <a class="footerAnchor" href="#">Parent Resources</a>
                                        </li>
                                        <li class="footerLi">
                                            <a class="footerAnchor" href="#">Helpful Articles and Advice</a>
                                        </li>
                                </div>
                                <div class="col-md-4">
                                        <h4 class="footerHead1">
                                            More
                                        </h4>
                                        <li class="footerLi">
                                        <Link class="footerAnchor" to="/FAQ">FAQ</Link>
                                        </li>
                                        <li class="footerLi">
                                            <a class="footerAnchor" href="#">Contact Us</a>
                                        </li>
                                        <li class="footerLi">
                                            <a class="footerAnchor" href="#">Blog</a>
                                        </li>
                                        <li class="footerLi">
                                            <a class="footerAnchor" href="#">Help Center</a>
                                        </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footerBox2">
                        <div class="row">
                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <h6 class="copyright">
                                    @ 2024 Marvellous kids childcare. All rights reserved.
                                </h6>
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <a class="footerAnchor" href="#">Terms</a>
                                        <a class="footerAnchor ms-2" href="#">Privacy</a>
                                        <a class="footerAnchor ms-2" href="#">Contact</a>

                                    </div>
                                    <div class="col-md-6">
                                        <a href="#" class="footericons">
                                            <i class="fa-brands fa-youtube"></i>
                                        </a>
                                        <a href="#" class="footericons ms-3">
                                            <i class="fa-brands fa-facebook"></i>
                                        </a>
                                        <a href="#" class="footericons ms-3">
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="#" class="footericons ms-3">
                                            <i class="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="#" class="footericons ms-3">
                                            <i class="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer