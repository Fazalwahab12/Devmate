import React from "react";

function Portfolio() {
  return (
    <section id="Portfolio" className="commonSection porfolio">
      <div className="container">
        <div className="row">
          <div className="text-center col-lg-12">
            <h4 className="sub_title">Work Gallery</h4>
            <h2 className="sec_title">View Our Portfolio</h2>
            <p className="sec_desc">
              Explore a selection of our successful projects delivered to
              satisfied clients
            </p>
          </div>
        </div>
        <div id="Grid" className="row">
          <div className="custom">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img src="assets/images/p4.jpeg" alt="Design Styles" />
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
                  <img src="assets/images/p2.jpg" alt="Design Styles" />
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
                  <img src="assets/images/p3.jpg" alt="Design Styles" />
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
                  <img src="assets/images/p10.jpg" alt="Design Styles" />
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
                  <img src="assets/images/p8.jpeg" alt="Design Styles" />
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
                  <img src="assets/images/p6.png" alt="Design Styles" />
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
