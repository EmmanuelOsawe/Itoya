import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Hero = () => {
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
        className="hero-slider-one"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div
            className="single-hero-slider bg_cover"
            style={{
              backgroundImage:
                "url(assets/images/bg/hero-bg-slider-1.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="hero-content text-center">
                    <h1>Build Your Dream With Our Construction Equipment</h1>
                    <p>
                      Aenean ligula porttitor euonsequat vitae eleifend aenliquam
                      lorem ante dapibus in viverra quis feugiat a tellus.
                    </p>

                    <div className="hero-search-wrapper">
                      <form>
                        <div className="row">
                          <div className="col-lg-3">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="What are you looking for?"
                            />
                          </div>
                          <div className="col-lg-3">
                            <select className="wide">
                              <option>Equipments</option>
                              <option>Machines</option>
                              <option>Tools</option>
                            </select>
                          </div>
                          <div className="col-lg-4">
                            <input
                              type="date"
                              className="form_control"
                            />
                          </div>
                          <div className="col-lg-2">
                            <button className="search-btn">
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
              backgroundImage:
                "url(assets/images/bg/hero-bg-slider-2.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="hero-content text-center">
                    <h1>
                      We Provide Best Construction Equipment For You
                    </h1>
                    <p>
                      Aenean ligula porttitor euonsequat vitae eleifend aenliquam
                      lorem ante dapibus in viverra quis feugiat a tellus.
                    </p>
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
