import React from "react";
import "./App.css";
import Hero from "./slider.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import LatestNews from "./news.jsx";
import TestimonialSlider from "./TestimonialSlider.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import CircularText from './component/ui/getRotationTransition.jsx';

function Home() {
  return (
    <div>
      {/*====== Start header Section ======*/}
      <header className="header-area-one">
        <div className="header-top-bar">
          <p className="name">Itoya brothers limited</p>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-7"></div>
              <div className="col-lg-5">
                <div className="top-right">
                  <ul className="d-flex align-items-center justify-content-end"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  {" "}
                  <img
                    src="assets/images/logo.JPG"
                    alt="Footer Logo"
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
                    <li className="menu-item menu-item-has-children">
                      <a href="index.html#" className="active">
                        Home
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Home 01</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 02</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="index.html#">Equipment</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="equipments.js">Equipment</a>
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
                      <a href="https://api.whatsapp.com/send?phone=+2348164286161&text=Hello I need ">
                        <i className="fab fa-whatsapp" />
                      </a>
                    </li>
                  </ul>
                </div>{" "}
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
                    src="assets/images/product/140g/smfront.jpg"
                    alt="about image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-up">
              <div className="about-content-box about-content-box-one mb-50">
                <div className="section-title mb-40">
                  <span className="sub-title">
                    <span className="sub-bg">Who</span> We Are?
                  </span>
                  <h2 className="mb-0" style={{ color: "#000" }}>
                    We Are 6 Years into this Business Helping Clients Build
                  </h2>
                </div>
                <p style={{ color: "#000" }}>
                  "For the past 6 years, we have been serving clients with
                  trusted equipment rental solutions, delivering quality,
                  safety, and efficiency on every project."
                </p>
                <div className="block-quote mt-25" style={{ color: "#000" }}>
                  <h5>
                    "We are a trusted business in the buying and selling of
                    equipment, committed to quality, value, and long-term
                    customer satisfaction. With years of experience in the
                    industry, we carefully source reliable equipment and ensure
                    every product meets high standards of performance and
                    durability. Our goal is to provide customers with dependable
                    solutions, fair pricing, and honest service that supports
                    successful projects and lasting partnerships."
                  </h5>
                </div>

                <br></br> <br></br><br></br>
                
                <CircularText
                  text="ITOYA*BROTHERS*LIMITED*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      <section
        className="working-process light-gray pt-130 pb-90"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-55">
                <span className="sub-title">
                  <span className="sub-bg">About Us</span>
                </span>
                <h2> Rentals</h2>
                <p>
                  We are expanding our services and launching our equipment rental operations soon. With years of experience in buying and selling quality construction equipment, we are now bringing the same reliability and professionalism into rentals—making it easier, faster, and more affordable for clients to get the equipment they need.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-between">
            {/* steps remain exactly the same */}
          </div>
        </div>
      </section>
      {/*====== Start Features Section ======*/}
      <section className="features-area pt-130 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7" data-aos="fade-up">
              <div className="section-title text-center mb-55">
                <span className="sub-title">
                  <span className="sub-bg">Value</span>
                </span>
                <h2>Built for Performance. Driven by Trust.</h2>
                <p>
                  Precision service, fast and safe operations, and economically effective solutions.
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
                  <p>We deliver accurate, reliable, and well-maintained equipment to ensure every job is done right the first time. Our focus on quality and attention to detail guarantees smooth and efficient operations on every project.</p>
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
                  <p>We value your time and safety. That’s why we ensure quick response, timely delivery, and strict safety standards, helping you complete your projects without delays or risks.</p>
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
                  <p>Our solutions are cost-effective and designed to give you the best value for your investment. With competitive pricing and low maintenance costs, we help you save money while achieving maximum performance.</p>
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
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 counter-column">
              <div className="counter-item counter-item-one mb-40 text-center">
                <div className="icon">
                  <i className="flaticon-excavator-1" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">3</span>
                  </h2>
                  <h5>Equipment</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 counter-column">
              <div className="counter-item counter-item-one mb-40 text-center">
                <div className="icon">
                  <i className="flaticon-placeholder" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">15</span>
                  </h2>
                  <h5>Buyers</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 counter-column">
              <div className="counter-item counter-item-one mb-40 text-center">
                <div className="icon">
                  <i className="flaticon-building" />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">Soon</span>
                  </h2>
                  <h5>Branch</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 counter-column">
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
                  <span className="sub-bg">Equipment</span> 
                </span>
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
                            href="contact.js"
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
                            <h5 className="title">320BL</h5>
                            
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
                              href="contact.js"
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
                            href="contact.js"
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
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$315</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">escavator 320BL</h5>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$159</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">Mining Truck with AC</h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$254</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">Range Excavator</h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$315</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">
                              Mining Truck High Line Series
                            </h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                              src="assets/images/pricing/price-1.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$159</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">Mining Truck with AC</h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                              src="assets/images/pricing/price-2.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$254</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">Range Excavator</h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                              src="assets/images/pricing/price-3.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$315</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">
                              Mining Truck High Line Series
                            </h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$159</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">Mining Truck with AC</h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$254</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">Range Excavator</h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$315</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">
                              Mining Truck High Line Series
                            </h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                              src="assets/images/pricing/price-1.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$159</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">Mining Truck with AC</h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                              src="assets/images/pricing/price-2.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$254</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">Range Excavator</h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
                              src="assets/images/pricing/price-3.jpg"
                              alt="Pricing image"
                            />
                          </a>
                        </div>
                        <div className="pricing-info">
                          <div className="price-info">
                            <h5>Price</h5>
                            <span>Starts Form</span>
                            <div className="price-tag">
                              <h4>$315</h4>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <h5 className="title">
                              Mining Truck High Line Series
                            </h5>
                            <div className="price-option">
                              <span className="span-btn day">$130/Day</span>
                              <span className="span-btn active-btn week">
                                $350/Week
                              </span>
                              <span className="span-btn month">$875/Month</span>
                            </div>
                            <span className="delivary">
                              Two-Way Delivery: $125
                            </span>
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
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cta-content-box cta-content-box-one content-white text-center">
                <h2>We Are Served Since 6 Years To Clients With Trust</h2>
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
      <LatestNews />
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
        style={{
          backgroundImage: "url(assets/images/bg/footer-bg-1.jpg)",
          borderRadius: "20px",
        }}
      >
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6" data-aos="fade-up">
                <div className="widget about-widget mb-40">
                  <a href="index.html" className="brand-logo">
                    <img
                      src="assets/images/logo.JPG"
                      alt="Footer Logo"
                      className="logo"
                    />
                  </a>
                  <p>
                    Maecenas tempus, tellus eget condiment rhoncus, sem quam
                    semper libero sita
                  </p>
                  <div className="social-box">
                    <h5>Follow Us</h5>
                    <ul className="social-link">
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://api.whatsapp.com/send?phone=+2348164286161&text=Hello I need help with">
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
                    <li>
                      <div className="icon">
                        <i className="fas fa-paper-plane" />
                      </div>
                      <div className="info">
                        <p>
                          <a href="mailto:charlesitoya@gmail.com">
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
                          <a href="tel:+2348164286161">+2348164286161</a>
                        </p>
                        <p>
                          <a href="tel:+2348073461017">+2348073461017</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="info">
                        <p>Opp Public Service Institute of Nigeria,</p>
                        <p>
                          Dutsen Alhaji Junction, Kubwa Express Way, Abuja,
                          Nigeria
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
                    Copyright © 2025 <a href="index.html">Renowk</a>, All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*====== End Footer ======*/}

      <ScrollToTop />
    </div>
  );
}

export default Home;
