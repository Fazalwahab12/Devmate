import React from "react";

function Services() {
  return (
    <section class="service_section commonSection">
      <div class="container">
        <div class="row">
          <div class="text-center col-lg-12">
            <h4 class="sub_title red_color">what we offer</h4>
            <h2 class="sec_title white">
              OUR AGENCY OFFERS COMPREHENSIVE <br /> SERVICES UNDER ONE ROOF.
            </h2>
            <p class="sec_desc color_aaa">
              Elevate your brand with our all-in-one agency
              <br /> From digital marketing to web development, SEO, and social
              media management, we've got you covered under one roof.
            </p>
          </div>
        </div>
        <div class="custom_column row">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <a class="icon_box_1 text-center" href="service-details">
              <div class="flipper">
                <div class="front">
                  <i class="mei-web-design"></i>
                  <h3>Website Development</h3>
                </div>
                <div class="back">
                  <i class="mei-web-design"></i>
                  <h3>Website Development</h3>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <a class="icon_box_1 text-center" href="service-details">
              <div class="flipper">
                <div class="front">
                  <i class="mei-computer-graphic"></i>
                  <h3>Graphic Designing</h3>
                </div>
                <div class="back">
                  <i class="mei-computer-graphic"></i>
                  <h3>Graphic Designing</h3>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <a class="icon_box_1 text-center" href="service-details">
              <div class="flipper">
                <div class="front">
                  <i class="mei-development-1"></i>
                  <h3>
                    Digital <br />
                    Marketing
                  </h3>
                </div>
                <div class="back">
                  <i class="mei-development-1"></i>
                  <h3>Digital Marketing</h3>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <a class="icon_box_1 text-center" href="service-details">
              <div class="flipper">
                <div class="front">
                  <i class="mei-development"></i>
                  <h3>SEo &amp; Content Writing</h3>
                </div>
                <div class="back">
                  <i class="mei-development"></i>
                  <h3>SEo &amp; Content Writing</h3>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <a class="icon_box_1 text-center" href="service-details">
              <div class="flipper">
                <div class="front">
                  <i class="mei-app-development"></i>
                  <h3>
                    App <br />
                    Development
                  </h3>
                </div>
                <div class="back">
                  <i class="mei-app-development"></i>
                  <h3>App Development</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
