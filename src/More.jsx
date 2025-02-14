import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function More() {
    return(
        <main>
            {/* <!-- More section 1 Begin--> */}
        <section class="more1">
            <div class="moreBg">
                <div class="container">
                    <h1 class="moreHead1">
                        Where Little Dreams Begin and Families Thrive
                    </h1>
                    <p class="morePara1">
                        Our professional team and flexible services, including trusted nanny support and 
                        free tax-funded childcare for eligible families, are here to make parenting less 
                        stressful and more rewarding.
                    </p>
                </div>
            </div>
        </section>
    {/* <!-- More Section 1 End --> */}

    {/* <!-- More Section 2 Begin --> */}
        <section class="more2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <h5 class="moreHead2" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="2000">We Are Your Trusted Partner</h5>
                            <h3 class="moreHead3" data-aos="fade-down" data-aos-delay="800" data-aos-duration="2000">Finding the Perfect Match</h3>
                            <p class="morePara2">
                                We take the time to match families with the ideal caregiver by considering key factors such as the 
                                child’s age, specific requirements, experience level, and expectations. Our goal is to connect you 
                                with the best-suited childcare professional for your unique needs.
                            </p>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <img class="moreImg1" src="/assets/images/Group 16.png" alt="grp 16" />
                    </div>
                </div>
            </div>
        </section>
    {/* <!-- More Section 1 End --> */}

    {/* <!-- More Section 3 Begin --> */}
        <section class="more3 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <img class="moreImg1" src="/assets/images/Group 16.png" alt="grp 16" />
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h5 class="moreHead2" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="2000">We Are Your Trusted Partner</h5>
                            <h3 class="moreHead3" data-aos="fade-down" data-aos-delay="800" data-aos-duration="2000">Flexible and Reliable Solutions</h3>
                            <p class="morePara2">
                                We offer a wide range of services designed to fit seamlessly into your schedule. Whether you need 
                                part-time, full-time, after-school, weekend, or overnight care, we’ve got you covered. We’re also 
                                available to support families during emergencies, ensuring you always have reliable childcare when 
                                it matters most.
                            </p>
                    </div>
                    
                </div>
                <h6 class="moreHead4 offset-lg-3 mt-5 mb-5">
                    At Marvellous Kids, we are more than just a childcare provider—we are your trusted partner in ensuring your 
                    children are cared for with love, attention, and professionalism.
                </h6>
                <button class="btn offset-lg-5 offset-md-3" id="moreBtn">Book a Visit</button>
            </div>
        </section>
    {/* <!-- More Section 1 End --> */}

    {/* <!-- More Section 4 Begin --> */}
        <section class="more4 mt-5">
           <div class="container">
                <h4 class="moreHead5" data-aos="fade-up" data-aos-duration="1000">Area Of Care</h4>
                <h2 class="moreHead6" data-aos="fade-down" data-aos-duration="1000">
                    We Are More Than Just A  Childcare Provider
                </h2>
                <p class="morePara3">
                    At Marvellous Kids Childcare and Nanny Services, we make finding reliable childcare simple and stress-free. 
                    By sharing your specific requirements, we connect you with experienced caregivers tailored to your needs. 
                    Here’s how we cater to various childcare situations:
                </p>


                <div class="row mt-5" id="moreCardRow">
                    <div class="col-xl-3 col-lg-6 col-md-12 col-sm-12 mb-5 mt-5" data-aos="fade-left" data-aos-duration="1000">
                        <div class="card mt-5" id="moreCard1">
                            <div class="card-body">
                                <h5 class="card-title" id="moreCard_title">
                                    Bilingual Nannies
                                </h5>
                                <p class="card-text" id="card_text">
                                    These professionals can enhance your child’s language development by introducing them to a second 
                                    language in a natural, nurturing environment.
                                </p>
                                <a href="#" class="moreCardLink">Read More</a>
                            </div>
                        </div>
                        <img src="/assets/images/Rectangle 2 (1).png" class="card-img-top" id="moreCard_img" alt="..." />
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-12 col-sm-12 mb-5 mt-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="card mt-5" id="moreCard2">
                            <div class="card-body">
                                <h5 class="card-title" id="moreCard_title">
                                    Full-Time Childcare
                                </h5>
                                <p class="card-text" id="card_text2">
                                    Our skilled caregivers are available to provide quality, full-day care for your child, 
                                    ensuring their safety, growth, and happiness.
                                </p>
                                <a href="#" class="moreCardLink">Read More</a>
                            </div>
                        </div>
                        <img src="/assets/images/Rectangle 2.png" class="card-img-top" id="moreCard_img" alt="..." />
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-12 col-sm-12 mb-5 mt-5" data-aos="fade-right" data-aos-duration="1000">
                        <div class="card mt-5" id="moreCard3">
                            <div class="card-body">
                                <h5 class="card-title" id="moreCard_title">
                                    Part-Time Childcare
                                </h5>
                                <p class="card-text" id="card_text3">
                                    Perfect for families needing flexible support, including after-school, 
                                    evening, or a few hours of care each day.
                                </p>
                                <a href="#" class="moreCardLink">Read More</a>
                            </div>
                        </div>
                        <img src="/assets/images/Rectangle 2 (4).png" class="card-img-top" id="moreCard_img" alt="..." />
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-12 col-sm-12 mt-5" data-aos="fade-right" data-aos-duration="1000">
                        <div class="card mt-5" id="moreCard4">
                            <div class="card-body">
                                <h5 class="card-title" id="moreCard_title">
                                    Emergency Childcare
                                </h5>
                                <p class="card-text" id="card_text3">
                                    For those unexpected situations, we offer quick and dependable 
                                    childcare solutions when you need them most.
                                </p>
                                <a href="#" class="moreCardLink">Read More</a>
                            </div>
                        </div>
                        <img src="/assets/images/Rectangle 2 (3).png" class="card-img-top" id="moreCard_img" alt="..." />
                    </div>
                </div>
           </div>
        </section>
    {/* <!-- More Section 4 End --> */}

    {/* <!-- More section 5 Begin--> */}
        <section class="more5">
            <div class="moreBg2">
                <div class="container">
                    
                    <h1 class="moreHead7">
                        Where Care Meets Growth For Every Child
                    </h1>
                    <p class="morePara7">
                        We understand the importance of finding the right caregiver quickly. That’s why the majority of families secure 
                        their perfect childcare match with us within just a week of making their request.

                    </p>
                    <p class="morePara8">
                        Let Marvellous Kids help you find the ideal childcare solution to support your family’s needs.
                    </p>
                    <button class="btn offset-lg-5 offset-md-3" id="moreBtn">Join Us</button>
                </div>
            </div>
        </section>
    {/* <!-- More Section 5 End --> */}
     
    {/* <!-- More Section 6 Begins --> */}
        <section class="more6 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h5 class="moreHead2" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="2000">Sudden Change of Plans</h5>
                        <h3 class="moreHead3" data-aos="fade-down" data-aos-delay="800" data-aos-duration="2000">Our Emergency Childcare Solutions</h3>
                        <p class="morePara2">
                            Has your regular childcare arrangement fallen through at the last minute? Or perhaps your child has taken 
                            ill, and you need immediate support? Don’t worry—Marvellous Kids Childcare and Nanny Services is here to 
                            help!
                        </p>
                        <p class="morePara2">
                            With our quick-response system, you can find emergency childcare or a professional caregiver for a sick 
                            child who’s ready to step in without delay. Simply contact us directly to discuss your needs, and we’ll 
                            connect you with a trusted nanny or babysitter.
                        </p>
                        <p class="morePara2">
                            Rest assured, even in urgent situations, your child will be cared for by experienced and reliable hands. 
                            We’re here to provide peace of mind when you need it most.
                        </p>
                    </div>
                    
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <img class="moreImg1" src="/assets/images/moreGrp16.png" alt="grp 16" />
                    </div>
                </div>
            </div>
        </section>
    {/* <!-- More Section 6 Ends --> */}

    {/* <!-- More Section 7 Begins --> */}
        <section class="sec6 mt-5" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <img class="icon" src="/assets/images/Icon.png" alt="Icon" />
                            <h5 class="specH6" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1200">Join Us</h5>
                            <h1 class="sH3"  data-aos="fade-down" data-aos-delay="800" data-aos-duration="1200">We’re Excited You Want 
                                <br /> To Join The Family.
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
    {/* <!-- More Section 7 Ends  --> */}
        </main>
    )
}

export default More