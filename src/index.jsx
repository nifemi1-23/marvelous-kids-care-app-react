import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
    return (
        <main>
            
            {/* Section 1 */}
            <section class="mt-5">
                <div id="box1">
                    <img class="img1" src="/assets/images/Group 6.jpg" alt="welcome"/>
                    <img class="img2" src="/assets/images/Group 7.png" alt="welcome" />
                    <div class="container">
                        <div class="welcome_box" data-aos="zoom-in-down" data-aos-duration="2000">
                            <div class="theBoxes">
                            
                                <div class="oneBox"></div>
                                <div class="twoBox"></div>
                                <div class="threeBox"></div>
                                <div class="fourBox"></div>
                                <div class="fiveBox"></div>
                                
                            </div>
                            <h4 class="boxT1">Welcome To</h4>
                            <p class="boxT2">Marvellous Kids Childcare & Nanny Services</p>
                            <p class="boxT3">Caring for Your Children, Supporting Your Family.</p>
                            <button class="btn" id="boxBtn">Book a Visit</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section>
            <div class="box2">
                <div class="container">    
                    <div class="row" data-aos="zoom-in-down" data-aos-duration="500">
                        <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000">
                            <h5 class="secH5" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="2000">Marvellous Kids Childcare,</h5>
                            <h3 class="secH3" data-aos="fade-down" data-aos-delay="800" data-aos-duration="2000">Offer Special Care For Your Children</h3>
                            <p class="secP1">
                                We provide quality care for children aged 0-16 years, helping them grow in a safe and nurturing environment.
                                Whether you need full-time childcare or a nanny to support your family, we are here for you.
                                We also offer free tax-funded childcare for eligible 2, 3, and 4-year-olds.
                            </p>
                            <button class="btn" id="secBtn">Explore More</button>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-right" data-aos-duration="500">
                            <img class="secImg" src="/assets/images/Group 4.png" alt="Group4" />
                        </div>
                    </div>
                </div>
            </div>
            <img class="unionImg" src="/assets/images/Union (2).png" alt="Union2" />
            </section>

            {/* Section 3 */}
            <section class="sec3">
                
                <div class="container">
                    <h4 class="sHead1" data-aos="fade-up" data-aos-duration="1000">Area Of Care</h4>
                    <h2 class="sHead2" data-aos="fade-down" data-aos-duration="1000">
                        Providing Good Qualities <br/> For Your Loving Kids
                    </h2>
                    
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12" data-aos="fade-left" data-aos-duration="1000">
                            <div class="card mt-5" id="card1">
                                <div class="card-body">
                                    <h5 class="card-title" id="card_title1">
                                        Free Tax-Funded Childcare for 2, 3, and 4-Year-Olds
                                    </h5>
                                    <p class="card-text" id="card_text1">
                                        At Marvellous Kids Childcare, we <br/>offer free tax-funded childcare for <br/> eligible 2, 3, and 4-year-olds. 
                                        This <br/> allows parents to take advantage of <br/> government support while ensuring <br/> their child receives high-quality
                                        care <br/> and early learning opportunities. <br/> Contact us to find out if you qualify <br/> and how to apply.
                                    </p>
                                    <a href="#" class="card-link">Read More</a>
                                </div>
                            </div>
                            <img src="/assets/images/Rectangle 2.png" class="card-img-top" id="card_img1" alt="..." />
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
                            <div class="card mt-5" id="card2">
                                <div class="card-body">
                                    <h5 class="card-title" id="card_title2">
                                        Childcare Services (Ages 0-16)
                                    </h5>
                                    <p class="card-text" id="card_text2">
                                        We offer childcare services for <br/> children from birth to 16 years old, <br/> ensuring that each age group has the
                                        <br/> care and attention they need. Our <br/> trained staff provide a variety of <br/> activities aimed at helping children
                                        <br/> develop their skills, creativity, and <br/> confidence.
                                    </p>
                                    <a href="#" class="card-link">Read More</a>
                                </div>
                            </div>
                            <img src="/assets/images/image.png" class="card-img-top" id="card_img2" alt="..." />
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
                            <div class="card mt-5" id="card3">
                                <div class="card-body">
                                    <h5 class="card-title" id="card_title3">
                                        Nanny Services on Request
                                    </h5>
                                    <p class="card-text" id="card_text3">
                                        We understand that each family has unique needs, so we offer nanny services upon request. 
                                        Whether you need a live-in nanny or a nanny to <br/> stay with your children until you <br/> return from work, 
                                        we provide <br/> reliable and loving caregivers. Our <br/> nannies are experienced, vetted, and <br/> available for both 
                                        short-term and <br/> long-term care.
                                    </p>
                                    <a href="#" class="card-link">Read More</a>
                                </div>
                            </div>
                            <img src="/assets/images/Rectangle 2 (1).png" class="card-img-top" id="card_img3" alt="..." />
                        </div>
                    </div>
                    <div class="row offset-xl-2">
                        <div class="col-lg-6 col-md-12 col-sm-12" data-aos="flip-right" data-aos-duration="1500">
                            <div class="card mb-sm-5" id="card4">
                                <div class="card-body">
                                    <h5 class="card-title" id="card_title4">
                                        Helpful Articles and Advice
                                    </h5>
                                    <p class="card-text" id="card_text4">
                                        We share tips and resources for <br/> parents looking to balance work, <br/> family, and their child’s <br/> development. 
                                        From managing <br/> childcare schedules to activities you <br/> can try at home, our blog is here to <br/> help.
                                    </p>
                                    <a href="#" class="card-link4">Read More</a>
                                </div>
                            </div>
                            <img src="/assets/images/Rectangle 2 (2).png" class="card-img-top" id="card_img4" alt="..." />
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12" data-aos="flip-left" data-aos-duration="1500">
                            <div class="card" id="card5">
                                <div class="card-body">
                                    <h5 class="card-title" id="card_title5">
                                        Free Tax-Funded Childcare Information
                                    </h5>
                                    <p class="card-text" id="card_text5">
                                        We offer guidance on applying for <br/> free childcare for your 2, 3, and 4-<br/>year-olds. 
                                        Parents may be eligible <br/> for government-funded childcare, <br/> which can significantly reduce the cost of 
                                        early education. To learn more about eligibility, visit the[Government Childcare Page] (link) <br/> or 
                                        contact us for assistance.
                                    </p>
                                    <a href="#" class="card-link5">Read More</a>
                                </div>
                            </div>
                            <img src="/assets/images/Rectangle 2 (3).png" class="card-img-top" id="card_img5" alt="..." />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section class="mt-5">
                <h4 class="sHead1" data-aos="fade-up" data-aos-duration="1000">Our Space</h4>
                <h2 class="sHead2" data-aos="fade-down" data-aos-duration="1000">
                    Explore Our Environment 
                </h2>
                <div class="container">

                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="1200">
                            <img src="/assets/images/Rectangle 6.png" class="gallery" alt="rec6" />
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-down" data-aos-duration="1200">
                            <img src="/assets/images/Rectangle 7.png" class="gallery" alt="rec7" />
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-down" data-aos-duration="1300">
                            <img src="/assets/images/Rectangle 8.png" class="gallery" alt="rec8" />
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="1300">
                            <img src="/assets/images/Rectangle 9.png" class="gallery" alt="rec9" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1300">
                            <img src="/assets/images/Rectangle 10.png" class="gallery" alt="rec10" />
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1300">
                            <img src="/assets/images/Rectangle 11.png" class="gallery" alt="rec11" />
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
                            <img src="/assets/images/Rectangle 12.png" class="gallery" alt="rec12" />
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
                            <img src="/assets/images/Rectangle 13.png" class="gallery" alt="rec13" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                            <img src="/assets/images/Rectangle 14.png" class="gallery" alt="rec14" />
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                            <img src="/assets/images/Rectangle 15.png" class="gallery" alt="rec15" />
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1600">
                            <img src="/assets/images/Rectangle 16.png" class="gallery" alt="rec16" />
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1600">
                            <img src="/assets/images/Rectangle 17.png" class="gallery" alt="rec17" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 */}
            <section class="mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <img class="specImg" src="/assets/images/Group 10.png" alt="group 10" />
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <h5 class="specH5" data-aos="fade-up" data-aos-delay="1700" data-aos-duration="1400">Marvellous Kids Childcare,</h5>
                            <h3 class="specH3" data-aos="fade-down" data-aos-delay="900" data-aos-duration="1400">Offer Special Care For Your Children</h3>
                            <p class="specP1">
                                We provide quality care for children aged 0-16 years, helping them grow in a safe and nurturing environment.
                                Whether you need full-time childcare or a nanny to support your family, we are here for you.
                                We also offer free tax-funded childcare for eligible 2, 3, and 4-year-olds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6 */}
            <section class="sec6">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <img class="icon" src="/assets/images/Icon.png" alt="Icon" />
                            <h5 class="specH6" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1200">Contact Us</h5>
                            <h1 class="sH3"  data-aos="fade-down" data-aos-delay="800" data-aos-duration="1200">You’ve Got Questions 
                                <br/> Feel Free to Ask
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
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                                            <label class="form-check-label" for="gridCheck">
                                                I agree with Terms of Use and Privacy Policy
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-3 mt-2">
                                    <button type="submit" class="btn" id="formBtn">Sign in</button>
                                    </div>
                                </div>
                                {/*
                                
                                
                                
                                */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home;