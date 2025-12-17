import React from "react";
import './App.css';

function Equip() {
  return (
<div classname="equip">
  {/*====== Start header Section ======*/}
  <header className="header-area-one">
    <div className="header-top-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="top-left">
              <span><i className="fas fa-map-marker-alt" /> Washington DC, The United States</span>
              <span><i className="fas fa-phone" /><a href="tel:+70122223333">+701-1111-2222-3333</a></span>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="top-right">
              <ul className="d-flex align-items-center justify-content-end">
                <li>
                  <div className="lang-dropdown">
                    <div className="lang"><img src="assets/images/lang.png" alt="lang" /></div>
                    <select>
                      <option value={0o1}>Eng</option>
                      <option value={0o2}>Ger</option>
                    </select>
                  </div>
                </li>
                <li>
                  <a href="cart.html" className="cart-btn" target="_self" title="Go to cart"><i className="fas fa-shopping-cart" />
                    <span className="count">02</span>
                  </a>
                </li>
                <li><a href="login.html" target="_self" title="Login">Login</a></li>
                <li><a href="singup.html" target="_self" title="Signup">Signup</a></li>
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
            <a href="index.html" className="brand-logo" target="_self" title="Brand Logo"><img src="assets/images/logo-1.png" alt="Brand Logo" /></a>
          </div>
          <div className="nav-menu">
            <div className="navbar-close"><i className="fal fa-times" /></div>
            <nav className="main-menu">
              <ul>
                <li className="menu-item menu-item-has-children">
                  <a href="equipments-details.html#" className="active">Home</a>
                  <ul className="sub-menu">
                    <li><a href="index.html">Home 01</a></li>
                    <li><a href="index-2.html">Home 02</a></li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="equipments-details.html#">Equipment</a>
                  <ul className="sub-menu">
                    <li><a href="equipments-list.html">Equipment</a></li>
                    <li><a href="equipments-details.html">Equipment Details</a></li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="equipments-details.html#">Shop</a>
                  <ul className="sub-menu">
                    <li><a href="shop.html">Our Shop</a></li>
                    <li><a href="shop-details.html">Shop Details</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="equipments-details.html#">Pages</a>
                  <ul className="sub-menu">
                    <li><a href="categories.html">Categories</a></li>
                    <li><a href="team.html">Our Team</a></li>
                    <li><a href="faq.html">FAQ's</a></li>
                    <li><a href="404-error.html">Error 404</a></li>
                    <li><a href="coming-soon.html">Coming Soon</a></li>
                    <li><a href="equipments-details.html#">User</a>
                      <ul className="sub-menu">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="singup.html">Signup</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="equipments-details.html#">Blog</a>
                  <ul className="sub-menu">
                    <li><a href="blogs.html">Our Blog</a></li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                  </ul>
                </li>
                <li className="menu-item"><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="navbar-toggler">
            <span /><span /><span />
          </div>
          <div className="header-right-nav">
            <div className="social-box">
              <ul className="social-link">
                <li><a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /></a>
                </li>
                <li><a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
                <li><a href="https://pinterest.com" target="_blank"><i className="fab fa-pinterest-p" /></a></li>
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
    <div className="breadcrumbs-area bg_cover" style={{backgroundImage: 'url(assets/images/bg/breadcrumbs-bg-1.jpg)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="page-title text-center">
              <h1 data-aos="fade-up">Equipment Details</h1>
              <ul className="breadcrumbs-link d-flex justify-content-center" data-aos="fade-up">
                <li><a href="index.html" target="_self" title="Home">Home</a></li>
                <li className="active">Equipment Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*====== End Hero Section ======*/}
  {/*====== Start Equipment Details Section ======*/}
  <section className="equipment-details-section pt-130">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="equipment-gallery-box d-flex mb-40" data-aos="fade-up">
            <div className="equipment-slider-warp">
              <div className="equipment-gallery-slider">
                <div className="single-gallery-itam" data-thumb="assets/images/pricing/price-1.jpg">
                  <a href="assets/images/pricing/price-1.jpg" className="img-popup"><img src="assets/images/pricing/price-1.jpg" alt="Image" /></a>
                </div>
                <div className="single-gallery-itam" data-thumb="assets/images/pricing/price-2.jpg">
                  <a href="assets/images/pricing/price-2.jpg" className="img-popup"><img src="assets/images/pricing/price-2.jpg" alt="Image" /></a>
                </div>
                <div className="single-gallery-itam" data-thumb="assets/images/pricing/price-3.jpg">
                  <a href="assets/images/pricing/price-3.jpg" className="img-popup"><img src="assets/images/pricing/price-3.jpg" alt="Image" /></a>
                </div>
              </div>
            </div>
            <div className="equipment-gallery-arrow" />
          </div>
          <div className="description-wrapper">
            <h3 className="title" data-aos="fade-up">Excavator HMX8296 300 Watts</h3>
            <a href="login.html" className="voucher-btn" target="_self" title="Download" data-aos="fade-up"><i className="fas fa-file-pdf" />View Brochure</a>
            <div className="content-box" data-aos="fade-up">
              <h4 className="title">Description</h4>
              <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
                faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                Sed fringilla mauris sit amet nibh. Dosodales sagittis magna. Sed consequat leo eget
                bibendum sodales augue velit cursus nunc Curabitmcorpies nis eget dui. Etiam rhoncus.
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero sit amet
                adipiscing sem neque sed ipsum. Nam quam nunc blandit vel luctus.</p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list">
                    <li>Best construction eqipment</li>
                    <li>At affordable price</li>
                    <li>Contrary to popular belief</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list">
                    <li>Quraity check</li>
                    <li>Tecnical support</li>
                    <li>Right Time Service</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-box" data-aos="fade-up">
              <h4 className="title">Details</h4>
              <div className="content-table table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Maximum Reach</td>
                      <td className="text-right">2 Meter</td>
                    </tr>
                    <tr>
                      <td>Operating Weight</td>
                      <td className="text-right">0.6 Ton</td>
                    </tr>
                    <tr>
                      <td>Model</td>
                      <td className="text-right">Lot456</td>
                    </tr>
                    <tr>
                      <td>Brand</td>
                      <td className="text-right">Weekers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*====== End Equipment Details Section ======*/}
  {/*====== Start Sponsor Section ======*/}
  <div className="sponsor pt-70">
    <div className="container">
      <div className="sponsor-slider-one">
        <div className="sponsor-item sponsor-item-one" data-aos="fade-up">
          <a href="contact.html" target="_self" title="Sponsor">
            <img src="assets/images/sponsor/sponsor-1.png" alt="sponsor" />
          </a>
        </div>
        <div className="sponsor-item sponsor-item-one" data-aos="fade-up">
          <a href="contact.html" target="_self" title="Sponsor">
            <img src="assets/images/sponsor/sponsor-2.png" alt="sponsor" />
          </a>
        </div>
        <div className="sponsor-item sponsor-item-one" data-aos="fade-up">
          <a href="contact.html" target="_self" title="Sponsor">
            <img src="assets/images/sponsor/sponsor-3.png" alt="sponsor" />
          </a>
        </div>
        <div className="sponsor-item sponsor-item-one" data-aos="fade-up">
          <a href="contact.html" target="_self" title="Sponsor">
            <img src="assets/images/sponsor/sponsor-4.png" alt="sponsor" />
          </a>
        </div>
        <div className="sponsor-item sponsor-item-one" data-aos="fade-up">
          <a href="contact.html" target="_self" title="Sponsor">
            <img src="assets/images/sponsor/sponsor-5.png" alt="sponsor" />
          </a>
        </div>
        <div className="sponsor-item sponsor-item-one" data-aos="fade-up">
          <a href="contact.html" target="_self" title="Sponsor">
            <img src="assets/images/sponsor/sponsor-2.png" alt="sponsor" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/*====== End Sponsor Section ======*/}
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
                  <input type="email" className="form_control" placeholder="Enter your email" name="email" required />
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
  <footer className="footer-area footer-area-one bg_cover" style={{backgroundImage: 'url(assets/images/bg/footer-bg-1.jpg)'}}>
    <div className="footer-widget">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="widget about-widget mb-40">
              <a href="index.html" className="brand-logo"><img src="assets/images/footer-logo.png" alt="Footer Logo" /></a>
              <p>Maecenas tempus, tellus eget condiment
                rhoncus, sem quam semper libero sita</p>
              <div className="social-box">
                <h5>Follow Us</h5>
                <ul className="social-link">
                  <li><a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /></a></li>
                  <li><a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
                  <li><a href="https://pinterest.com" target="_blank"><i className="fab fa-pinterest-p" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="widget footer-widget-nav mb-40">
              <h4 className="widget-title">Useful Link</h4>
              <ul className="widget-nav">
                <li><a href="contact.html">About</a></li>
                <li><a href="categories.html">Category</a></li>
                <li><a href="blogs.html">Latest News</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="singup.html">Register</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={150}>
            <div className="widget contact-info-widget mb-40">
              <h4 className="widget-title">Contact Information</h4>
              <ul className="contact-info-list">
                <li>
                  <div className="icon">
                    <i className="fas fa-paper-plane" />
                  </div>
                  <div className="info">
                    <p><a href="mailto:demotext456@gmail.com">demotext456@gmail.com</a></p>
                    <p><a href="mailto:exapleemail@gmail.com">exapleemail@gmail.com</a></p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-phone" />
                  </div>
                  <div className="info">
                    <p><a href="tel:123456789">+701 - 1111 - 2222 - 3333</a></p>
                    <p><a href="tel:123456789">+802 - 2222 - 3333 - 4444</a></p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <p>2759 Renwick Drive
                      Pennsylvania</p>
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
              <p>Copyright © 2022 <a href="index.html">Renowk</a>, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

  );
}

export default Equip;
