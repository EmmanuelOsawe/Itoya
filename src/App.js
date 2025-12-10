import React from "react";
import './App.css';
import Hero from './slider.jsx';
import TestimonialSlider from './TestimonialSlider.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ScrollToTop from "./ScrollToTop";



function App() {
  return (
    <div className="App">
      <header className="header-area-one">
        <div className="header-navigation">
          <div className="container-fluid pl-0 pr-0">
            <div className="primary-menu d-flex align-items-center justify-content-between">
              <div className="site-branding">
                <a
                  href="index.html"
                  className="brand-logo"
                  target="_self"
                  title="Brand Logo"
                >
                  <img
                    src="assets/images/logo.JPG"
                    alt="Brand Logo"
                    className="logo"
                  />
                </a>
              </div>
              <div className="nav-menu">
                <div className="navbar-close">
                  <i className="fal fa-times" />
                </div>
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item">
                      <a href="index.html#">Home</a>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="index.html#">Equipment</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="equipments-list.html">Equipment</a>
                        </li>
                        <li>
                          <a href="equipments-details.html">
                            Equipment Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="index.html#">Shop</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop.html">Our Shop</a>
                        </li>
                        <li>
                          <a href="shop-details.html">Shop Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="index.html#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="categories.html">Categories</a>
                        </li>
                        <li>
                          <a href="team.html">Our Team</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ's</a>
                        </li>
                        <li>
                          <a href="404-error.html">Error 404</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                        <li>
                          <a href="index.html#">User</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="singup.html">Signup</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="index.html#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blogs.html">Our Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
              <div className="header-right-nav">
                <div className="social-box">
                  <ul className="social-link">
                    <li>
                      <a href="https://www.facebook.com" target="_blank">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        class="nav-link swap-icon"
                        href="https://api.whatsapp.com/send?phone=+2348164286161&text=Hello I am intrested in your"
                      >
                        {" "}
                        <i className="fab fa-whatsapp" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*====== End header Section ======*/}
      {/*====== Start Hero Section ======*/}

      <Hero />

      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-area pt-130 pb-80">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-7" data-aos="fade-up">
              <div className="about-img-box about-img-box-one mb-50">
                <div className="about-img about-img-one">
                  <img
                    src="assets/images/about/about-1.jpg"
                    alt="about image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-up">
              <div className="about-content-box about-content-box-one mb-50">
                <div className="section-title mb-40">
                  <span className="sub-title">
                    <span className="sub-bg">Who</span> Are We?
                  </span>
                  <h2 className="mb-0">Itoya Caterpillar</h2>
                </div>
                <p>
                  6+ Years of Trusted IT Services We keep it simple: Reliable
                  systems. Clear solutions. No nonsense.
                </p>
                <p>
                  For over 6 years, factories, warehouses, miners, construction
                  company and big industries have counted on us for:
                </p>
                <ui>
                  <li>
                    <b>Strong networks that never go down </b>
                  </li>
                  <li>
                    <b>Easy Communication</b>
                  </li>
                  <li>
                    <b>Fast, honest support</b>
                  </li>
                  <li>
                    <b>Quality work. Fair prices. Always on time.</b>
                  </li>
                </ui>
                <div className="block-quote mt-25">
                  <h5>
                    20+ years. Zero drama. <br />
                    Technology that just works. <br />
                    On time. On budget. Built to last. <br />
                  </h5>
                </div>
                <a
                  href="contact.html"
                  target="_self"
                  title="What we do"
                  className="main-btn"
                >
                  What We Do
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Working Process Section ======*/}
      <section className="working-process light-gray pt-130 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7" data-aos="fade-up">
              <div className="section-title text-center mb-55">
                <span className="sub-title">
                  <span className="sub-bg">Working</span> Process
                </span>
                <h2>Get Your Rentals In Easy 4 Steps</h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div
              className="col-lg-2 col-md-3 process-column"
              data-aos="fade-up"
            >
              <div className="process-item process-item-one mb-40">
                <div className="count-box">
                  <div className="icon">
                    <i className="flaticon-search" />
                  </div>
                  <div className="process-count">01</div>
                </div>
                <div className="content text-center">
                  <h4>Search Your Equipment</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-3 process-column"
              data-aos="fade-up"
            >
              <div className="process-item process-item-one mb-40">
                <div className="count-box">
                  <div className="icon">
                    <i className="flaticon-align" />
                  </div>
                  <div className="process-count">02</div>
                </div>
                <div className="content text-center">
                  <h4>Compare Your Selection</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-3 process-column"
              data-aos="fade-up"
            >
              <div className="process-item process-item-one mb-40">
                <div className="count-box">
                  <div className="icon">
                    <i className="flaticon-excavator-2" />
                  </div>
                  <div className="process-count">03</div>
                </div>
                <div className="content text-center">
                  <h4>Reserve The Equipment</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-3 process-column"
              data-aos="fade-up"
            >
              <div className="process-item process-item-one mb-40">
                <div className="count-box">
                  <div className="icon">
                    <i className="flaticon-presentation" />
                  </div>
                  <div className="process-count">04</div>
                </div>
                <div className="content text-center">
                  <h4>Get Start Your Project</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Working Process Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-area pt-130 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7" data-aos="fade-up">
              <div className="section-title text-center mb-55">
                <span className="sub-title">
                  <span className="sub-bg">Awesome</span> Features
                </span>
                <h2>Most Featured Equipment</h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="features-item features-item-one mb-40">
                <div className="icon">
                  <i className="flaticon-excavator-1" />
                </div>
                <div className="content">
                  <h4>Precision Service</h4>
                  <p>Maecenas tempus tellus egetsem semper libero sit amet</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="features-item features-item-one mb-40">
                <div className="icon">
                  <i className="flaticon-worker" />
                </div>
                <div className="content">
                  <h4>Fast &amp; Safety</h4>
                  <p>Maecenas tempus tellus egetsem semper libero sit amet</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="features-item features-item-one mb-40">
                <div className="icon">
                  <i className="flaticon-salary" />
                </div>
                <div className="content">
                  <h4>Economically Effect</h4>
                  <p>Maecenas tempus tellus egetsem semper libero sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Counter Section ======*/}
      <section
        className="counter-area bg-with-overlay bg_cover pt-130 pb-90"
        style={{ backgroundImage: "url(assets/images/bg/counter-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-sm-6 counter-column"
              data-aos="fade-up"
            >
              <div className="counter-item counter-item-one mb-40 text-center">
                <div className="icon">
                  <i className="flaticon-excavator-1" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">2500</span>+
                  </h2>
                  <h5>Equipment</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 counter-column"
              data-aos="fade-up"
            >
              <div className="counter-item counter-item-one mb-40 text-center">
                <div className="icon">
                  <i className="flaticon-placeholder" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">175</span>+
                  </h2>
                  <h5>Coverage Area</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 counter-column"
              data-aos="fade-up"
            >
              <div className="counter-item counter-item-one mb-40 text-center">
                <div className="icon">
                  <i className="flaticon-building" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">596</span>+
                  </h2>
                  <h5>Total Brunch</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 counter-column"
              data-aos="fade-up"
            >
              <div className="counter-item counter-item-one mb-40 text-center">
                <div className="icon">
                  <i className="flaticon-worker-1" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">1580</span>
                  </h2>
                  <h5>Company Staffs</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Counter Section ======*/}
      {/*====== Start Pricing Section ======*/}
      <section className="pricing-area pt-130 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="section-title text-center mb-50">
                <span className="sub-title">
                  <span className="sub-bg">Awesome</span> Equipment
                </span>
                <h2>Featured Equipment For Sale</h2>
                <p>
                  Ready to own a Caterpillar that works as hard as you do?
                  Machines for sale now tough, proven, and available today.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent" data-aos="fade-up">
                <div className="tab-pane fade show active" id="all">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/product/escavator.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">Escavator 320L</h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/product/grader.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">Grader 140g</h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/product/escavator-2.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">
                              Mining Truck High Line Series
                            </h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="cat1">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/pricing/price-4.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">Escavator 320L</h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/pricing/price-5.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">Grader 140g</h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/pricing/price-6.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">
                              Mining Truck High Line Series
                            </h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="cat2">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/product/escavator.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">Escavator 320L</h5>
                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/product/grader.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">
                          <div className="price-info">
                            <div className="price-tag">
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">Grader 140g</h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/product/escavator-2.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">
                              Mining Truck High Line Series
                            </h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="cat3">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/pricing/price-4.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">
                          <div className="pricing-body">
                            <h5 className="title">Escavator 320L</h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/pricing/price-5.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">
                        
                          <div className="pricing-body">
                            <h5 className="title">Grader 140g</h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/pricing/price-6.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">
                              Mining Truck High Line Series
                            </h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="cat4">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/product/escavator.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">Escavator 320L</h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/product/grader.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">Grader 140g</h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="pricing-item pricing-item-one mb-40">
                        <div className="pricing-img">
                          <a
                            href="equipments-details.html"
                            target="_self"
                            title="Equipment Image"
                          >
                            <img
                              src="assets/images/product/escavator-2.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">

                          <div className="pricing-body">
                            <h5 className="title">
                              Mining Truck High Line Series
                            </h5>
                            

                            <ul className="info-list">
                              <li>Maximum Reach: 2 Meter</li>
                              <li>Operating Weight: 0.6 Ton</li>
                              <li>Model: Lot456</li>
                              <li>Digging Depth: 3.5 Meter</li>
                              <li>Brand: Weekers</li>
                            </ul>
                          </div>
                          <div className="pricing-bottom">
                            <ul className="rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <span>5.00 (20 Rating)</span>
                              </li>
                            </ul>
                            <a
                              href="equipments-details.html"
                              target="_self"
                              title="Reserve"
                              className="main-btn"
                            >
                              Reserve
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-area light-bg pt-130 pb-130">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="section-title mb-50">
                <span className="sub-title">
                  <span className="sub-bg">Client</span> Feedback
                </span>
                <h2>What's Our Beautiful Clients Say About Us</h2>
              </div>
            </div>
            <div className="col-lg-6 mb-60" data-aos="fade-up">
              <div className="button float-lg-right">
                <a
                  href="contact.html"
                  target="_self"
                  title="See all feedback"
                  className="main-btn"
                >
                  See All Feedback
                </a>
              </div>
            </div>
          </div>
          <TestimonialSlider />
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-area bg-with-overlay bg-cover pt-120 pb-130"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="cta-content-box cta-content-box-one content-white text-center"
                data-aos="fade-up"
              >
                <h2>We Are Served for 6 Years To Clients With Trust</h2>
                <a
                  href="contact.html"
                  target="_self"
                  title="Get a quote"
                  className="main-btn main-btn-primary"
                >
                  Get A Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-area pt-130 pb-130">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="section-title mb-50">
                <span className="sub-title">
                  <span className="sub-bg">Latest</span> News
                </span>
                <h2>Latest News &amp; Updates</h2>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <div className="blog-arrows-one mb-60" />
            </div>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="blog-slider-one"
          >
            <SwiperSlide>
              <div className="px-3" data-aos="fade-up">
                <div className="blog-post-item blog-post-item-one">
                  <div className="post-thumbnail">
                    <a href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-1.jpg"
                        alt="Blog Image"
                      />
                    </a>
                    <a href="blog-details.html" className="cat-btn">
                      Excavator
                    </a>
                  </div>

                  <div className="entry-content">
                    <h3 className="title">
                      <a href="blog-details.html">
                        Best equipment rental for your next project
                      </a>
                    </h3>

                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> Post by Admin
                        </li>
                        <li>
                          <i className="fas fa-calendar-alt" /> 16 Dec 2021
                        </li>
                      </ul>
                    </div>

                    <p>
                      Maecenas tempus tellus egondimentum rhoncus sem quam
                      semper sis...
                    </p>

                    <a href="blog-details.html" className="btn-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-3" data-aos="fade-up">
                <div className="blog-post-item blog-post-item-one">
                  <div className="post-thumbnail">
                    <a href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-1.jpg"
                        alt="Blog Image"
                      />
                    </a>
                    <a href="blog-details.html" className="cat-btn">
                      Excavator
                    </a>
                  </div>

                  <div className="entry-content">
                    <h3 className="title">
                      <a href="blog-details.html">
                        Best equipment rental for your next project
                      </a>
                    </h3>

                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> Post by Admin
                        </li>
                        <li>
                          <i className="fas fa-calendar-alt" /> 16 Dec 2021
                        </li>
                      </ul>
                    </div>

                    <p>
                      Maecenas tempus tellus egondimentum rhoncus sem quam
                      semper sis...
                    </p>

                    <a href="blog-details.html" className="btn-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-3" data-aos="fade-up">
                <div className="blog-post-item blog-post-item-one">
                  <div className="post-thumbnail">
                    <a href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-1.jpg"
                        alt="Blog Image"
                      />
                    </a>
                    <a href="blog-details.html" className="cat-btn">
                      Excavator
                    </a>
                  </div>

                  <div className="entry-content">
                    <h3 className="title">
                      <a href="blog-details.html">
                        Best equipment rental for your next project
                      </a>
                    </h3>

                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> Post by Admin
                        </li>
                        <li>
                          <i className="fas fa-calendar-alt" /> 16 Dec 2021
                        </li>
                      </ul>
                    </div>

                    <p>
                      Maecenas tempus tellus egondimentum rhoncus sem quam
                      semper sis...
                    </p>

                    <a href="blog-details.html" className="btn-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-3" data-aos="fade-up">
                <div className="blog-post-item blog-post-item-one">
                  <div className="post-thumbnail">
                    <a href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-1.jpg"
                        alt="Blog Image"
                      />
                    </a>
                    <a href="blog-details.html" className="cat-btn">
                      Excavator
                    </a>
                  </div>

                  <div className="entry-content">
                    <h3 className="title">
                      <a href="blog-details.html">
                        Best equipment rental for your next project
                      </a>
                    </h3>

                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> Post by Admin
                        </li>
                        <li>
                          <i className="fas fa-calendar-alt" /> 16 Dec 2021
                        </li>
                      </ul>
                    </div>

                    <p>
                      Maecenas tempus tellus egondimentum rhoncus sem quam
                      semper sis...
                    </p>

                    <a href="blog-details.html" className="btn-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-3" data-aos="fade-up">
                <div className="blog-post-item blog-post-item-one">
                  <div className="post-thumbnail">
                    <a href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-1.jpg"
                        alt="Blog Image"
                      />
                    </a>
                    <a href="blog-details.html" className="cat-btn">
                      Excavator
                    </a>
                  </div>

                  <div className="entry-content">
                    <h3 className="title">
                      <a href="blog-details.html">
                        Best equipment rental for your next project
                      </a>
                    </h3>

                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> Post by Admin
                        </li>
                        <li>
                          <i className="fas fa-calendar-alt" /> 16 Dec 2021
                        </li>
                      </ul>
                    </div>

                    <p>
                      Maecenas tempus tellus egondimentum rhoncus sem quam
                      semper sis...
                    </p>

                    <a href="blog-details.html" className="btn-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-3" data-aos="fade-up">
                <div className="blog-post-item blog-post-item-one">
                  <div className="post-thumbnail">
                    <a href="blog-details.html">
                      <img
                        src="assets/images/blog/blog-1.jpg"
                        alt="Blog Image"
                      />
                    </a>
                    <a href="blog-details.html" className="cat-btn">
                      Excavator
                    </a>
                  </div>

                  <div className="entry-content">
                    <h3 className="title">
                      <a href="blog-details.html">
                        Best equipment rental for your next project
                      </a>
                    </h3>

                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> Post by Admin
                        </li>
                        <li>
                          <i className="fas fa-calendar-alt" /> 16 Dec 2021
                        </li>
                      </ul>
                    </div>

                    <p>
                      Maecenas tempus tellus egondimentum rhoncus sem quam
                      semper sis...
                    </p>

                    <a href="blog-details.html" className="btn-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-area pt-130">
        <div className="container">
          <div className="newsletter-wrapper-one">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="newsletter-content-box">
                  <div className="section-title text-center mb-30">
                    <h2>Subscribe Our Newsletter</h2>
                  </div>
                  <form className="newsletter-form">
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Enter your email"
                        name="email"
                        required
                      />
                      <button className="newsletter-btn">Subscribe Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Newsletter Section ======*/}
      {/*====== Start Footer ======*/}
      <footer
        className="footer-area footer-area-one bg_cover"
        style={{ backgroundImage: "url(assets/images/bg/footer-bg-1.jpg)" }}
      >
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6" data-aos="fade-up">
                <div className="widget about-widget mb-40">
                  <a href="index.html" className="brand-logo">
                    <img
                    src="assets/images/logo.JPG"
                    alt="Brand Logo"
                    className="logo"
                  />
                  </a>
                  <p>To get more information for our machines and equipment.</p>
                  <div className="social-box">
                    <h5>Follow Us</h5>
                    <ul className="social-link">
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a
                          class="nav-link swap-icon"
                          href="https://api.whatsapp.com/send?phone=+2348164286161&text=Hello I am intrested in your"
                        >
                          {" "}
                          <i className="fab fa-whatsapp" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="widget footer-widget-nav mb-40">
                  <h4 className="widget-title">Useful Link</h4>
                  <ul className="widget-nav">
                    <li>
                      <a href="contact.html">About</a>
                    </li>
                    <li>
                      <a href="categories.html">Category</a>
                    </li>
                    <li>
                      <a href="blogs.html">Latest News</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="singup.html">Register</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="widget contact-info-widget mb-40">
                  <h4 className="widget-title">Contact Information</h4>
                  <ul className="contact-info-list">
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <div className="icon">
                        <i
                          className="fas fa-paper-plane"
                          style={{
                            fontSize: "24px",
                            color: "rgba(255, 255, 255, 1)",
                          }}
                        ></i>
                      </div>
                      <div className="info">
                        <p
                          style={{
                            margin: 0,
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          <a
                            href="mailto:charlesitoya@gmail.com"
                            style={{
                              textDecoration: "none",
                            }}
                          >
                            charlesitoya@gmail.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone" />
                      </div>
                      <div className="info">
                        <p>
                          <a href="tel:+2348164286161">+234 816 428 6161</a>
                        </p>
                        <p>
                          <a href="tel:+2347073461017">+234 707 346 1017</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="info">
                        <p>
                          {" "}
                          Opp (PSIN) Dutsen Alhaji Junction, Kubwa Expressway,
                          Abuja, Nigeria,
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text text-center">
                  <p>
                    Copyright © 2025 <a href="index.html"></a>, All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*====== End Footer ======*/}
      {/*====== back-to-top ======*/}

      <ScrollToTop />
    </div>
  );
}

export default App;
