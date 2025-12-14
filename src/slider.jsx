import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";

const Hero = () => {
  const swiperRef = useRef(null);

  const stopAutoplay = () => {
    swiperRef.current?.autoplay.stop();
  };

  const startAutoplay = () => {
    swiperRef.current?.autoplay.start();
  };

  return (
    <section className="hero-area">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="hero-slider-one"
      >

        {/* SLIDE 1 */}
        <SwiperSlide>
          <div
            className="single-hero-slider bg_cover"
            style={{
              backgroundImage: "url(assets/images/bg/hero-bg-slider-1.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="hero-content text-center">
                    <h1>Build Your Dream With Our Construction Equipment</h1>

                    <div className="hero-search-wrapper">
                      <form>
                        <div className="row">
                          <div className="col-lg-3">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="What are you looking for?"
                              onFocus={stopAutoplay}
                              onBlur={startAutoplay}
                            />
                          </div>

                          <div className="col-lg-3">
                            <select
                              className="form_control wide"
                              onFocus={stopAutoplay}
                              onBlur={startAutoplay}
                            >
                              <option>Equipments</option>
                              <option>Machines</option>
                              <option>Tools</option>
                            </select>
                          </div>

                          <div className="col-lg-4">
                            <input
                              type="date"
                              className="form_control"
                              onFocus={stopAutoplay}
                              onBlur={startAutoplay}
                            />
                          </div>

                          <div className="col-lg-2">
                            <button
                              className="search-btn"
                              type="button"
                              onMouseEnter={stopAutoplay}
                              onMouseLeave={startAutoplay}
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div
            className="single-hero-slider bg_cover"
            style={{
              backgroundImage: "url(assets/images/bg/hero-bg-slider-2.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="hero-content text-center">
                    <h1>We Provide Best Construction Equipment For You</h1>

                    {/* SAME FORM (REUSED LOGIC) */}
                    <div className="hero-search-wrapper">
                      <form>
                        <div className="row">
                          <div className="col-lg-3">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="What are you looking for?"
                              onFocus={stopAutoplay}
                              onBlur={startAutoplay}
                            />
                          </div>

                          <div className="col-lg-3">
                            <select
                              className="form_control wide"
                              onFocus={stopAutoplay}
                              onBlur={startAutoplay}
                            >
                              <option>Equipments</option>
                              <option>Machines</option>
                              <option>Tools</option>
                            </select>
                          </div>

                          <div className="col-lg-4">
                            <input
                              type="date"
                              className="form_control"
                              onFocus={stopAutoplay}
                              onBlur={startAutoplay}
                            />
                          </div>

                          <div className="col-lg-2">
                            <button
                              className="search-btn"
                              type="button"
                              onMouseEnter={stopAutoplay}
                              onMouseLeave={startAutoplay}
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Hero;
