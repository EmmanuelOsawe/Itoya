import { useState } from "react";

export default function Hero() {
  const [current, setCurrent] = useState(0);

const slides = [
    {
        image: "assets/images/bg/hero-bg-slider-1.jpg",
        title: <span style={{ color: 'white' }}>Build Your Dream With Our Construction Equipment</span>,
    },
    {
        image: "assets/images/bg/hero-bg-slider-2.jpg",
        title: <span style={{ color: 'white' }}>We Provide Best Construction Equipment For You</span>,
    },
];

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="hero-area">
      <div
        className="hero-slider-one"
        style={{
          backgroundImage: `url(${slides[current].image})`,
        }}
      >
        <div className="slider-overlay">
          {/* LEFT ARROW */}
          <button className="arrow left" onClick={prevSlide}>
            ❮
          </button>

          {/* RIGHT ARROW */}
          <button className="arrow right" onClick={nextSlide}>
            ❯
          </button>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div className="hero-content text-center">
                  <h1>{slides[current].title}</h1>
                  <p>{slides[current].text}</p>

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
                            <option>Equipment 1</option>
                            <option>Equipment 2</option>
                          </select>
                        </div>

                        <div className="col-lg-4">
                          <input
                            type="date"
                            className="form_control"
                          />
                        </div>

                        <div className="col-lg-2">
                          <button className="search-btn">Search</button>
                        </div>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
