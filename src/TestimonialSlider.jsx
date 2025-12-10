import { useState, useEffect } from "react";

export default function TestimonialSlider() {
  const testimonials = [
    {
      text: "Duis leo. Sed fringilla mauris sit amibh. Donec sodales sagittis magna. Sed consequat goos services",
      name: "Mohona Clitar",
      location: "Nigeria"
    },
    {
      text: "Duis leo. Sed fringilla mauris sit amibh. Donec sodales sagittis magna. Sed consequat goos services",
      name: "Tomas Zinks",
      location: "Nigeria"
    },
    {
      text: "Duis leo. Sed fringilla mauris sit amibh. Donec sodales sagittis magna. Sed consequat goos services",
      name: "Cristiano Ruudo",
      location: "Nigeria"
    },
    {
      text: "Duis leo. Sed fringilla mauris sit amibh. Donec sodales sagittis magna. Sed consequat goos services",
      name: "Tomas Zinks",
      location: "Nigeria"
    }
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visible = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length]
  ];

  // ✅ Auto slide (optional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <button className="arrow right" onClick={nextSlide}>❯</button>

      <div className="row testimonial-slider-one">
        {visible.map((item, i) => (
          <div className="col-lg-4" key={i}>
            <div className="testimonial-item testimonial-item-one">
              <div className="testimonial-content">
                <div className="quote">
                  <i className="flaticon-left-quote" />
                </div>

                <p>{item.text}</p>
                <h5>
                  {item.name} , <span className="location">{item.location}</span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
