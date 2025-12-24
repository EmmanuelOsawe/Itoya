import React from "react";
import './App.css';
import EquipmentCubes from "./component/ui/EquipmentCubes"; 
import ScrollToTop from "./component/ui/ScrollToTop.jsx"; 
import TextType from './component/ui/TextType.jsx';
import NewsletterMail from "./component/ui/NewsletterMail.jsx";

function Equip() {
  return (
<div classname="equip">
      {/*====== Start header Section ======*/}
      <header className="header-area-one">
        <div className="header-top-bar">
          <div className="footer-brand">
            <TextType
              text={["Welcome to", "Itoya Brothers Limited!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["rgba(247, 251, 28, 1)", "#ffffff"]}
              className="hero-typing"
            />

            <ul className="footer-social">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=2348164286161&text=Hello I need"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp" />
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="mailto:emmanuelosawe3@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-envelope" />
                </a>
              </li>
            </ul>
          </div>

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
                    <li>
                      <a href="/">
                        Home
                      </a>
                      
                    </li>
                    <li>
                      <a href="/equipments">Equipment</a>
                    </li>
                    <li className="menu-item">
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
              <div className="header-right-nav"></div>
            </div>
          </div>
        </div>
      </header>
      {/*====== End header Section ======*/}
  {/*====== Start Hero Section ======*/}
  <section className="hero-area">
    <div className="breadcrumbs-area bg_cover" style={{backgroundImage: 'url(assets/images/bg/breadcrumbs-bg-1.jpg)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="page-title text-center">
              <h1 data-aos="fade-up"> Equipment</h1>
              <ul className="breadcrumbs-link d-flex justify-content-center" data-aos="fade-up">
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*====== End Hero Section ======*/}
<br></br><br></br><br></br>
<EquipmentCubes />

<NewsletterMail />

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
                  <p className="footext">
                    We provide reliable construction equipment solutions with a
                    focus on precision, safety, and cost-effective service you
                    can trust.
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
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/equipments">Equipment</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
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

export default Equip;
