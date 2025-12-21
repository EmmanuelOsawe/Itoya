import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "aos/dist/aos.css"; // Make sure you have AOS CSS imported
import AOS from "aos";
import { useEffect } from "react";

const LatestNews = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const slides = [
    {
      img: "/assets/images/blog/blog-1.jpg",
      tag: "Excavator",
      title: "Best equipment rental for your next project",
      desc: "Maecenas tempus tellus eget condimentum",
    },
    {
      img: "/assets/images/blog/blog-2.jpg",
      tag: "Worker",
      title: "Construction worker all time safe & free",
      desc: "Maecenas tempus tellus eget condimentum",
    },
    {
      img: "/assets/images/blog/blog-3.jpg",
      tag: "Construction",
      title: "Simple equipments rental for your big project",
      desc: "Maecenas tempus tellus eget condimentum",
    },
    {
      img: "/assets/images/blog/blog-1.jpg",
      tag: "Excavator",
      title: "Best equipment rental for your next project",
      desc: "Maecenas tempus tellus eget condimentum",
    },
    {
      img: "/assets/images/blog/blog-2.jpg",
      tag: "Worker",
      title: "Construction worker all time safe & free",
      desc: "Maecenas tempus tellus eget condimentum",
    },
    {
      img: "/assets/images/blog/blog-3.jpg",
      tag: "Construction",
      title: "Simple equipments rental for your big project",
      desc: "Maecenas tempus tellus eget condimentum",
    },
  ];

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

          {/* ARROWS */}
          <div className="latest-news-arrows">
            <div className="latest-news-prev">‹</div>
            <div className="latest-news-next">›</div>
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
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="latest-news-item">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={index * 150} // Incremental delay for sequential pop
              >
                <div className="blog-img">
                  <img src={slide.img} alt={slide.tag} />
                  <span className="tag">{slide.tag}</span>
                </div>
                <div className="blog-content">
                  <h4>{slide.title}</h4>
                  <p>{slide.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestNews;
