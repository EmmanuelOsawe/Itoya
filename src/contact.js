import React from "react";
import './App.css';
import ContactForm from "./form";
import ScrollToTop from "./ScrollToTop.jsx"; 

function Contact() {
  return (
    <div>
      {/*====== Start header Section ======*/}
      <header className="header-area-one">
        <div className="header-top-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="top-left">
                  <span>
                    <i className="fas fa-map-marker-alt" /> Washington DC, The
                    United States
                  </span>
                  <span>
                    <i className="fas fa-phone" />
                    <a href="tel:+70122223333">+701-1111-2222-3333</a>
                  </span>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="top-right">
                  <ul className="d-flex align-items-center justify-content-end">
                    <li>
                      <div className="lang-dropdown">
                        <div className="lang">
                          <img src="assets/images/lang.png" alt="lang" />
                        </div>
                        <select>
                          <option value={0o1}>Eng</option>
                          <option value={0o2}>Ger</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <a
                        href="cart.html"
                        className="cart-btn"
                        target="_self"
                        title="Go to cart"
                      >
                        <i className="fas fa-shopping-cart" />
                        <span className="count">02</span>
                      </a>
                    </li>
                    <li>
                      <a href="login.html" target="_self" title="Login">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="singup.html" target="_self" title="Signup">
                        Signup
                      </a>
                    </li>
                  </ul>
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
                  <img src="assets/images/logo-1.png" alt="Brand Logo" />
                </a>
              </div>
              <div className="nav-menu">
                <div className="navbar-close">
                  <i className="fal fa-times" />
                </div>
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item menu-item-has-children">
                      <a href="contact.html#" className="active">
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
                      <a href="contact.html#">Equipment</a>
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
                      <a href="contact.html#">Shop</a>
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
                      <a href="contact.html#">Pages</a>
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
                          <a href="contact.html#">User</a>
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
                      <a href="contact.html#">Blog</a>
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
                      <a href="https://api.whatsapp.com/send?phone=+2348164286161&text=Hello I need " target="_blank">
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
      <section className="hero-area">
        <div
          className="breadcrumbs-area bg_cover"
          style={{
            backgroundImage: "url(assets/images/bg/breadcrumbs-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="page-title text-center">
                  <h1 data-aos="fade-up">Contact Us</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <a href="index.html" target="_self" title="Home">
                        Home
                      </a>
                    </li>
                    <li className="active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-area pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="information-list-item">
                <div className="information-item mb-50" data-aos="fade-up">
                  <div className="icon">
                    <i className="fas fa-home" />
                  </div>
                  <div className="info">
                    <p> Opp Public Service Institute  of Nigeria, Dutsen Alhaji Junction, Kubwa Express Way, Abuja, Nigeria</p>
                  </div>
                </div>
                <div className="information-item mb-50" data-aos="fade-up">
                  <div className="icon">
                    <i className="fas fa-phone" />
                  </div>
                  <div className="info">
                    <p>
                      <a href="tel:+2348164286161">+234 816 428 6161</a>
                    </p>
                    <p>
                      <a href="tel:+2348073461017">+234 807 346 1017</a>
                    </p>
                  </div>
                </div>
                <div className="information-item mb-50" data-aos="fade-up">
                  <div className="icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="info">
                    <p>
                      <a href="mailto:charlesitoya@gmail.com">
                        charlesitoya@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-wrapper mb-50" data-aos="fade-up">
                <div className="section-title mb-30">
                  <span className="span">Contact us</span>
                  <h2>Need Information Contact Us</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*====== Start Newsletter ======*/}
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
      {/*====== End Newsletter ======*/}
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
                      src="assets/images/footer-logo.png"
                      alt="Footer Logo"
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
                        <a href="https://twitter.com" target="_blank">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com" target="_blank">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="https://pinterest.com" target="_blank">
                          <i className="fab fa-pinterest-p" />
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
                          <a href="mailto:demotext456@gmail.com">
                            demotext456@gmail.com
                          </a>
                        </p>
                        <p>
                          <a href="mailto:exapleemail@gmail.com">
                            exapleemail@gmail.com
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
                          <a href="tel:+2348073461017">+234 807 346 1017</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="info">
                        <p>2759 Renwick Drive Pennsylvania</p>
                        <p>450 Young Road New York</p>
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
                    Copyright © 2022 <a href="index.html">Renowk</a>, All Rights
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
      <div className="back-to-top">
        <i className="fas fa-angle-up" />
      </div>

        <ScrollToTop />
      
    </div>
  );
}

export default Contact;
