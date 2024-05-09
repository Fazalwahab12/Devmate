import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Home_slider = () => {
  const slides = [
    {
      backgroundImage: `url('assets/images/1_1-f90490d4ecf54e452f86f13824144d67.jpg')`,
    },
    {
      backgroundImage: `url('assets/images/1_2-7b9ab5a9968e0485e27e51341ab20669.jpg')`,
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
                  <div
                    className="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="2"
                  >
                    <div
                      className="image-layer"
                      style={{
                        backgroundImage: slide.backgroundImage,
                      }}
                    ></div>

                    <div className="container">
                      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                        <div className="text-center">
                          <p className="text-white text-lg">
                            WELCOME TO MEIPALY AGENCY
                          </p>
                          <h3 className="text-white text-2xl font-bold mb-4">
                            DIGITAL MARKETING AGENCY.
                          </h3>
                          <div className="  ">
                            <a className=" text-white" href="about">
                              <span>DISCOVER MORE</span>
                            </a>
                          </div>
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
