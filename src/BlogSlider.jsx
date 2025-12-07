import { useRef } from "react";

export default function BlogSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="blog-section position-relative">

      {/* Arrows */}
      <button className="blog-arrow left" onClick={scrollLeft}>❮</button>
      <button className="blog-arrow right" onClick={scrollRight}>❯</button>

      <div className="blog-slider-one" ref={sliderRef}>

        {/* ========= BLOG 1 ========= */}
        <div className="px-3 blog-slide" data-aos="fade-up">
          <div className="blog-post-item blog-post-item-one">
            <div className="post-thumbnail">
              <a href="blog-details.html">
                <img src="assets/images/blog/blog-1.jpg" alt="Blog" />
              </a>
              <a href="blog-details.html" className="cat-btn">Excavator</a>
            </div>

            <div className="entry-content">
              <h3 className="title">
                <a href="blog-details.html">
                  Best equipment rental for your next project
                </a>
              </h3>

              <div className="post-meta">
                <ul>
                  <li><i className="fas fa-user" /> Post by <a>Admin</a></li>
                  <li><i className="fas fa-calendar-alt" /> 16 Dec 2021</li>
                </ul>
              </div>

              <p>Maecenas tempus tellus eget condimentum...</p>
              <a href="blog-details.html" className="btn-link">Read more</a>
            </div>
          </div>
        </div>

        {/* ========= BLOG 2 ========= */}
        <div className="px-3 blog-slide" data-aos="fade-up">
          <div className="blog-post-item blog-post-item-one">
            <div className="post-thumbnail">
              <a href="blog-details.html">
                <img src="assets/images/blog/blog-2.jpg" alt="Blog" />
              </a>
              <a href="blog-details.html" className="cat-btn">Worker</a>
            </div>

            <div className="entry-content">
              <h3 className="title">
                <a href="blog-details.html">
                  Construction worker all time safe & free
                </a>
              </h3>
              <p>Maecenas tempus tellus eget condimentum...</p>
              <a href="blog-details.html" className="btn-link">Read more</a>
            </div>
          </div>
        </div>

        {/* ========= BLOG 3 ========= */}
        <div className="px-3 blog-slide" data-aos="fade-up">
          <div className="blog-post-item blog-post-item-one">
            <div className="post-thumbnail">
              <a href="blog-details.html">
                <img src="assets/images/blog/blog-3.jpg" alt="Blog" />
              </a>
              <a href="blog-details.html" className="cat-btn">Construction</a>
            </div>

            <div className="entry-content">
              <h3 className="title">
                <a href="blog-details.html">
                  Simple equipment rental for your big project
                </a>
              </h3>
              <p>Maecenas tempus tellus eget condimentum...</p>
              <a href="blog-details.html" className="btn-link">Read more</a>
            </div>
          </div>
        </div>

        {/* ========= BLOG 4 ========= */}
        <div className="px-3 blog-slide" data-aos="fade-up">
          <div className="blog-post-item blog-post-item-one">
            <div className="post-thumbnail">
              <a href="blog-details.html">
                <img src="assets/images/blog/blog-4.jpg" alt="Blog" />
              </a>
              <a href="blog-details.html" className="cat-btn">Worker</a>
            </div>

            <div className="entry-content">
              <h3 className="title">
                <a href="blog-details.html">
                  Construction worker all time safe & free
                </a>
              </h3>
              <p>Maecenas tempus tellus eget condimentum...</p>
              <a href="blog-details.html" className="btn-link">Read more</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
