import React from "react";

function Home_slider() {
  return (
    <div>
      <div id="__next">
        <div id="wrapper">
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
                      backgroundImage: `url(assets/images/1_1-f90490d4ecf54e452f86f13824144d67.jpg)`,
                    }}
                  ></div>

                  <div className="container">
                    <div className="row">
                      <div className="text-left col-lg-12">
                        <p className="main-slider__subtext">
                          WELCOME TO MEIPALY AGENCY
                        </p>
                        <h3 className="main-slider__title">
                          DIGITAL MARKETING AGENCY.
                        </h3>
                        <a className="common_btn red_bg" href="about">
                          <span>DISCOVER MORE</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="0">
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage: `url('assets/images/1_2-7b9ab5a9968e0485e27e51341ab20669.jpg)`,
                    }}
                  ></div>

                  <div className="container">
                    <div className="row">
                      <div className="text-left col-lg-12">
                        <p className="main-slider__subtext">
                          WELCOME TO MEIPALY AGENCY
                        </p>
                        <h3 className="main-slider__title">
                          DIGITAL MARKETING AGENCY.
                        </h3>
                        <a className="common_btn red_bg" href="about">
                          <span>DISCOVER MORE</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="1">
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage:
                        "url('assets/images/2_2-6d8ae8604483df61b8fe15474048d09f.jpg')",
                    }}
                  ></div>

                  <div className="container">
                    <div className="row">
                      <div className="text-left col-lg-12">
                        <p className="main-slider__subtext">
                          WELCOME TO MEIPALY AGENCY
                        </p>
                        <h3 className="main-slider__title">
                          DIGITAL MARKETING AGENCY.
                        </h3>
                        <a className="common_btn red_bg" href="about">
                          <span>DISCOVER MORE</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="2">
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage:
                        "url('assets/images/2_3-6d7678e0d48fd09d56a9651adcec3b62.jpg')",
                    }}
                  ></div>

                  <div className="container">
                    <div className="row">
                      <div className="text-left col-lg-12">
                        <p className="main-slider__subtext">
                          WELCOME TO MEIPALY AGENCY
                        </p>
                        <h3 className="main-slider__title">
                          DIGITAL MARKETING AGENCY.
                        </h3>
                        <a className="common_btn red_bg" href="about">
                          <span>DISCOVER MORE</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index="0"
                >
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage:
                        "url('assets/images/2_1-5ccddde4ecddc6e2b8043fb2cad1600d.jpg')",
                    }}
                  ></div>

                  <div className="container">
                    <div className="row">
                      <div className="text-left col-lg-12">
                        <p className="main-slider__subtext">
                          WELCOME TO MEIPALY AGENCY
                        </p>
                        <h3 className="main-slider__title">
                          DIGITAL MARKETING AGENCY.
                        </h3>
                        <a className="common_btn red_bg" href="about">
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
        </div>
      </div>
    </div>
  );
}

export default Home_slider;
