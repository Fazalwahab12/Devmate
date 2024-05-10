import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Home_slider = () => {
  const slides = [
    {
      backgroundImage: `url('assets/images/1_1-f90490d4ecf54e452f86f13824144d67.jpg')`,
      heading: "360 Digital Marketing Solutions",
    },
    {
      backgroundImage: `url('assets/images/1_2-7b9ab5a9968e0485e27e51341ab20669.jpg')`,
      heading: "Checkmate your Digital Marketing & Software goals",
    },
    {
      backgroundImage: `url('assets/images/1_1-f90490d4ecf54e452f86f13824144d67.jpg')`,
      heading: "DEVMATE is Your new Mate in Tech",
    },
  ];

  return (
    <section className="overflow-hidden ">
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="main-slider main-slider__two">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide swiper-slide-duplicate">
                    <div
                      className="image-layer"
                      style={{
                        backgroundImage: slide.backgroundImage,
                      }}
                    ></div>

                    <div class="container">
                      <div class="row">
                        <div class="text-center col-lg-12">
                          <p class="main-slider__subtext">
                            Welcome to DEVMATE Solutions
                          </p>
                          <h3 class="main-slider__title">{slide.heading}</h3>
                          <a class="common_btn" href="about">
                            <span>DISCOVER MORE</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-prev" id="main-slider-prev">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="swiper-button-next" id="main-slider-next">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home_slider;
