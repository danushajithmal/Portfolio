import React from "react";
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../icons/logo.png'

function Footer() {
    return (
        <>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div>
                                <img src={Logo} width='150px'/>
                                <p class="mb-30 footer-desc">This is my Personal website <br/> Thank you!</p>
                            </div>
                        </div>
                        <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
                            <div class="">
                                <h4>Quick Link</h4>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#" class="text-decoration-none">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">My Experience</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">About</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">Contact Me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div>
                                <h4>Service</h4>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#" class="text-decoration-none">Marketing</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">Branding</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-decoration-none">Graphics Design</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div>
                                <h4>Newsletter</h4>
                                <div>
                                    <label for="Newsletter" class="form-label">Subscribe To Our Newsletter</label>
                                    <input type="text" class="form-control" Placeholder="Enter Your Email"/>
                                        <button class="btn btn-danger mt-3">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </footer>
        </>
    )
}

export default Footer