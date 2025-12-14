import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const LatestNews = () => {
  return (
    <section className="blog-area pt-130 pb-130">
      <div className="container">

        {/* HEADER */}
        <div className="row align-items-end mb-50">
          <div className="col-lg-8">
            <div className="section-title">
              <span className="sub-title">
                <span className="sub-bg">Latest</span> News
              </span>
              <h2>Latest News & Updates</h2>
            </div>
          </div>

        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            prevEl: ".latest-news-prev",
            nextEl: ".latest-news-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {/* CARD 1 */}
          <SwiperSlide className="latest-news-item">
            <div className="blog-item">
              <div className="blog-img">
                <img src="/assets/images/blog/blog-1.jpg" alt="" />
                <span className="tag">Excavator</span>
              </div>
              <div className="blog-content">
                <h4>Best equipment rental for your next project</h4>
                <p>Maecenas tempus tellus eget condimentum</p>
              </div>
            </div>
          </SwiperSlide>

          {/* CARD 2 */}
          <SwiperSlide className="latest-news-item">
            <div className="blog-item">
              <div className="blog-img">
                <img src="/assets/images/blog/blog-2.jpg" alt="" />
                <span className="tag">Worker</span>
              </div>
              <div className="blog-content">
                <h4>Construction worker all time safe & free</h4>
                <p>Maecenas tempus tellus eget condimentum</p>
              </div>
            </div>
          </SwiperSlide>

          {/* CARD 3 */}
          <SwiperSlide className="latest-news-item">
            <div className="blog-item">
              <div className="blog-img">
                <img src="/assets/images/blog/blog-3.jpg" alt="" />
                <span className="tag">Construction</span>
              </div>
              <div className="blog-content">
                <h4>Simple equipments rental for your big project</h4>
                <p>Maecenas tempus tellus eget condimentum</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="latest-news-item">
            <div className="blog-item">
              <div className="blog-img">
                <img src="/assets/images/blog/blog-1.jpg" alt="" />
                <span className="tag">Excavator</span>
              </div>
              <div className="blog-content">
                <h4>Best equipment rental for your next project</h4>
                <p>Maecenas tempus tellus eget condimentum</p>
              </div>
            </div>
          </SwiperSlide>

          {/* CARD 2 */}
          <SwiperSlide className="latest-news-item">
            <div className="blog-item">
              <div className="blog-img">
                <img src="/assets/images/blog/blog-2.jpg" alt="" />
                <span className="tag">Worker</span>
              </div>
              <div className="blog-content">
                <h4>Construction worker all time safe & free</h4>
                <p>Maecenas tempus tellus eget condimentum</p>
              </div>
            </div>
          </SwiperSlide>

          {/* CARD 3 */}
          <SwiperSlide className="latest-news-item">
            <div className="blog-item">
              <div className="blog-img">
                <img src="/assets/images/blog/blog-3.jpg" alt="" />
                <span className="tag">Construction</span>
              </div>
              <div className="blog-content">
                <h4>Simple equipments rental for your big project</h4>
                <p>Maecenas tempus tellus eget condimentum</p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default LatestNews;
