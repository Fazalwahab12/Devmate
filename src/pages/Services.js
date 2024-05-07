import React from "react";

function Services() {
  return (
    <section className="service_section commonSection">
      <div className="container">
        <div className="row">
          <div className="text-center col-lg-12">
            <h4 className="sub_title red_color">Services we are offering</h4>
            <h2 className="sec_title white">
              We design digital products that help grow businesses.
            </h2>
            <p className="sec_desc color_aaa">
              We are committed to providing our customers with exceptional
              service while offering our employees the best training.
            </p>
          </div>
        </div>
        <div className="custom_column row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a className="icon_box_1 text-center" href="service-details">
              <div className="flipper">
                <div className="front">
                  <i className="mei-web-design"></i>
                  <h3>Website Development</h3>
                </div>
                <div className="back">
                  <i className="mei-web-design"></i>
                  <h3>Website Development</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a className="icon_box_1 text-center" href="service-details">
              <div className="flipper">
                <div className="front">
                  <i className="mei-computer-graphic"></i>
                  <h3>Graphic Designing</h3>
                </div>
                <div className="back">
                  <i className="mei-computer-graphic"></i>
                  <h3>Graphic Designing</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a className="icon_box_1 text-center" href="service-details">
              <div className="flipper">
                <div className="front">
                  <i className="mei-development-1"></i>
                  <h3>Digital Marketing</h3>
                </div>
                <div className="back">
                  <i className="mei-development-1"></i>
                  <h3>Digital Marketing</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a className="icon_box_1 text-center" href="service-details">
              <div className="flipper">
                <div className="front">
                  <i className="mei-development"></i>
                  <h3>SEo &amp; Content Writing</h3>
                </div>
                <div className="back">
                  <i className="mei-development"></i>
                  <h3>SEo &amp; Content Writing</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <a className="icon_box_1 text-center" href="service-details">
              <div className="flipper">
                <div className="front">
                  <i className="mei-app-development"></i>
                  <h3>App Development</h3>
                </div>
                <div className="back">
                  <i className="mei-app-development"></i>
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
