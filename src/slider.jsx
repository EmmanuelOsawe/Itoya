import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const equipmentList = [
  {
    name: "excavator 320l",
    image: "assets/images/product/escavator.jpg",
  },
  {
    name: "excavator 320bl",
    image: "assets/images/product/escavator-2.jpg",
  },
  {
    name: "grader 140g",
    image: "assets/images/product/grader.jpg",
  },
];

const Hero = () => {
  const swiperRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const stopAutoplay = () => swiperRef.current?.autoplay.stop();
  const startAutoplay = () => swiperRef.current?.autoplay.start();

  const handleSearch = () => {
    const keyword = searchValue.toLowerCase().trim();

    const results = equipmentList.filter((item) =>
      item.name.toLowerCase().includes(keyword)
    );

    setSearchResult(results);
  };

  return (
    <section className="hero-area">
      <div className="hero-arrows">
        <div className="hero-prev">‹</div>
        <div className="hero-next">›</div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="hero-slider-one"
      >
        <SwiperSlide>
          <div
            className="single-hero-slider bg_cover"
            style={{
              backgroundImage: "url(assets/images/bg/hero-bg-slider-1.jpg)",
            }}
          >
            <div className="container">
              <div className="hero-content text-center">
                <h1>Build Your Dream With Our Construction Equipment</h1>

                <div className="hero-search-wrapper">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();

                      handleSearch();
                    }}
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="What are you looking for?"
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          onFocus={stopAutoplay}
                          onBlur={startAutoplay}
                        />
                      </div>

                      <div className="col-lg-2 col-md-3">
                        <button className="search-btn w-100" type="submit">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* SEARCH RESULT */}
                  {searchValue && (
                    <div style={{ marginTop: "20px" }}>
                      {searchResult.length === 0 ? (
                        <p style={{ color: "#dc3545", fontWeight: "600" }}>
                          ❌ Not found
                        </p>
                      ) : (
                        <>
                          <p
                            style={{
                              color: "#28a745",
                              fontWeight: "600",
                              marginBottom: "15px",
                            }}
                          >
                            ✔ {searchResult.length} result(s) found
                          </p>

                          <div
                            style={{
                              display: "flex",
                              gap: "20px",
                              justifyContent: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            {searchResult.map((item, index) => (
                              <div key={index} style={{ textAlign: "center" }}>
                                <Link to="/equipment">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                      width: "200px",
                                      borderRadius: "12px",
                                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                                      cursor: "pointer",
                                    }}
                                  />
                                </Link>

                                <p
                                  style={{
                                    marginTop: "8px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {item.name}
                                </p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="single-hero-slider bg_cover"
            style={{
              backgroundImage: "url(assets/images/bg/hero-bg-slider-2.jpg)",
            }}
          >
            <div className="container">
              <div className="hero-content text-center">
                <h1>We Provide Best Construction Equipment For You</h1>

                <div className="hero-search-wrapper">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();

                      handleSearch();
                    }}
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="What are you looking for?"
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          onFocus={stopAutoplay}
                          onBlur={startAutoplay}
                        />
                      </div>

                      <div className="col-lg-2 col-md-3">
                        <button className="search-btn w-100" type="submit">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* SEARCH RESULT */}
                  {searchValue && (
                    <div style={{ marginTop: "20px" }}>
                      {searchResult.length === 0 ? (
                        <p style={{ color: "#dc3545", fontWeight: "600" }}>
                          ❌ Not found
                        </p>
                      ) : (
                        <>
                          <p
                            style={{
                              color: "#28a745",
                              fontWeight: "600",
                              marginBottom: "15px",
                            }}
                          >
                            ✔ {searchResult.length} result(s) found
                          </p>

                          <div
                            style={{
                              display: "flex",
                              gap: "20px",
                              justifyContent: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            {searchResult.map((item, index) => (
                              <div key={index} style={{ textAlign: "center" }}>
                                <Link to="/equipment">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                      width: "200px",
                                      borderRadius: "12px",
                                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                                      cursor: "pointer",
                                    }}
                                  />
                                </Link>

                                <p
                                  style={{
                                    marginTop: "8px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {item.name}
                                </p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
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
