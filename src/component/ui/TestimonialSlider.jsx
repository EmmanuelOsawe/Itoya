import { useState, useEffect } from "react";

export default function TestimonialSlider() {
  const testimonials = [
    {
      text: "Itoya really impressed us. Their Caterpillar machine delivered strong performance and handled our site work with ease. We’ll definitely rent from them again.",
      name: "Chinedu Okafor",
      location: "Nigeria"
    },
    {
      text: "Great service from Itoya. The Caterpillar bulldozer was in excellent condition and worked smoothly throughout our project. Highly reliable company.",
      name: "Abubakar Mohammed",
      location: "Nigeria"
    },
    {
      text: "Itoya delivered the Caterpillar equipment right on time, and it worked perfectly with no issues. Their customer support was also very responsive. Fantastic experience.",
      name: "Tunde Adewale",
      location: "Nigeria"
    },
    {
      text: "We were very satisfied with Itoya. The Caterpillar excavator performed powerfully and never broke down. I’ll gladly recommend Itoya to other contractors.",
      name: "Emmanuel Eze",
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
