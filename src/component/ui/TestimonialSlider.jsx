import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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

  return (
    <div className="testimonial-section">

      <Swiper
        modules={[Autoplay]}

        loop={true}
        grabCursor={true}
        allowTouchMove={true}
        spaceBetween={25}

        autoplay={{
          delay: 4000,

          /* ✅ stops autoplay after touch/swipe on mobile */
          disableOnInteraction: true,

          /* ✅ stops autoplay on desktop hover */
          pauseOnMouseEnter: true,
        }}

        slidesPerView={1}

        breakpoints={{
          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
        }}

        className="testimonial-slider-one"
      >

        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>

            <div className="testimonial-item testimonial-item-one">

              <div className="testimonial-content">

                <div className="quote">
                  <i className="flaticon-left-quote" />
                </div>

                <p>{item.text}</p>

                <h5>
                  {item.name} ,{" "}
                  <span className="location">
                    {item.location}
                  </span>
                </h5>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}