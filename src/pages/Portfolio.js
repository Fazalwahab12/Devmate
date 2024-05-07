import React from "react";

function Portfolio() {
  return (
    <section className="commonSection porfolio">
      <div className="container">
        <div className="row">
          <div className="text-center col-lg-12">
            <h4 className="sub_title">our portfolio</h4>
            <h2 className="sec_title">work showcase</h2>
            <p className="sec_desc">
              We are committed to providing our customers with exceptional
              service while offering our employees the best training.
            </p>
          </div>
        </div>
        <div id="Grid" className="row">
          <div className="custom">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img
                    src="assets/images/1-f5c360ccd1fe8738aa3f8a610f68186e.jpg"
                    alt="Design Styles"
                  />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      all, graphic,
                    </a>
                    <h4>
                      <a href="portfolio-details">Design Styles</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img
                    src="assets/images/2-565a7c74540f700197eee9d2f6216d0b.jpg"
                    alt="Design Styles"
                  />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      all, graphic,
                    </a>
                    <h4>
                      <a href="portfolio-details">Design Styles</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img
                    src="assets/images/3-486c9cc3084465656caf06b2021d3092.jpg"
                    alt="Design Styles"
                  />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      all, graphic,
                    </a>
                    <h4>
                      <a href="portfolio-details">Design Styles</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img
                    src="assets/images/4-d9ca7a98d86ad0fc9a36b5697d0c45f1.jpg"
                    alt="Design Styles"
                  />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      all, graphic,
                    </a>
                    <h4>
                      <a href="portfolio-details">Design Styles</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img
                    src="assets/images/5-62117542d788b25a7204ae769ddfcf8e.jpg"
                    alt="Design Styles"
                  />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      all, graphic,
                    </a>
                    <h4>
                      <a href="portfolio-details">Design Styles</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img
                    src="assets/images/6-f99e50d7b951b8cd249ee35f071d7db0.jpg"
                    alt="Design Styles"
                  />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      all, graphic,
                    </a>
                    <h4>
                      <a href="portfolio-details">Design Styles</a>
                    </h4>
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

export default Portfolio;
