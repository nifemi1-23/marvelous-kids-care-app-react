import React from 'react'

function Contact() {
    return (
        <main>
            {/* <!-- Section 6 (Contact Section) --> */}
            <section class="sec6" style={{marginTop: "100px"}} data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <img class="icon" src="/assets/images/Icon.png" alt="Icon" />
                            <h5 class="specH6" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1200">Contact Us</h5>
                            <h1 class="sH3"  data-aos="fade-down" data-aos-delay="800" data-aos-duration="1200">You’ve Got Questions 
                                <br /> Feel Free to Ask
                            </h1>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1200">
                            <form class="row g-3" id="secForm">
                                <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="inputFirstName" placeholder="Enter First Name" />
                                </div>
                                <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="inputLastName" placeholder="Enter Last Name" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter Your Email" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPhoneNumber" class="form-label">Phone Number</label>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="dropdown" id="formDrop">
                                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="/assets/images/Image (1).png" alt="circle" />
                                                </a>
                                            
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-9">

                                            <input type="number" class="form-control" id="inputPhoneNumber" placeholder="Enter Phone Number" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="inputMessage" class="form-label">Message</label>
                                    <input type="text" class="form-control" id="inputMessage" placeholder="Enter Your Message" />
                                </div>
                                <div class="row mt-5">
                                    <div class="col-9">
                                        <div class="form-check mt-2">
                                            <input class="form-check-input" style={{border: "2px solid #000"}} type="checkbox" id="gridCheck" />
                                            <label class="form-check-label" for="gridCheck">
                                                I agree with Terms of Use and Privacy Policy
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-3 mt-2">
                                    <button type="submit" class="btn" id="formBtn">Sign in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Section 6 --> */}
        </main>
    )
}

export default Contact;