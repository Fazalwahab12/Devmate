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
                  <img src="assets/images/image-010.jpg" alt="Design Styles" />
                  <div className="folioHover">
                    <a
                      className="cate"
                      href="https://www.instagram.com/playbackrecords/?hl=en"
                    >
                      PLAYBACK
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img src="assets/images/image-018.jpg" alt="Design Styles" />
                  <div className="folioHover">
                    <a
                      className="cate"
                      href="https://www.glowinteriors.design/"
                    >
                      glowing design solution
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img src="assets/images/image-020.jpg" alt="Design Styles" />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      high life apartments
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img src="assets/images/image-026.jpg" alt="Design Styles" />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      gappblocks ecommerce
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img src="assets/images/image-022.jpg" alt="Design Styles" />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      KSL
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img src="assets/images/image-012.jpg" alt="Design Styles" />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      Taste Carnival
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img src="assets/images/image-031.jpg" alt="Design Styles" />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      10z by shahid afridi
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img src="assets/images/image-028.jpg" alt="Design Styles" />
                  <div className="folioHover">
                    <a className="cate" href="https://www.savethechildren.net/">
                      save the children
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="singlefolio">
                  <img src="assets/images/image-037.jpg" alt="Design Styles" />
                  <div className="folioHover">
                    <a className="cate" href="#">
                      CHAOS
                    </a>
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
