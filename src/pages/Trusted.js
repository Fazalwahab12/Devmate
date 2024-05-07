import React from "react";

function Trusted() {
  return (
    <>
      <section className="commonSection funfact">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="singlefunfact text-center">
                <h1 className="timer">
                  <span className="countSpan"></span>
                  <span></span>
                </h1>
                <h3>Projects Completed</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="singlefunfact text-center">
                <h1 className="timer">
                  <span className="countSpan"></span>
                  <span></span>
                </h1>
                <h3>Active Clients</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="singlefunfact text-center">
                <h1 className="timer">
                  <span className="countSpan"></span>
                  <span></span>
                </h1>
                <h3>Cups of Coffee</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="singlefunfact text-center">
                <h1 className="timer">
                  <span className="countSpan"></span>
                  <span></span>
                </h1>
                <h3>Happy Clients</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="commonSection trustClient undefined">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="CL_content">
                <img
                  src="assets/images/4-fc7b217cde702a0d99f1de6a794f10d9.jpg"
                  alt=""
                />
                <div className="abc_inner">
                  <div className="row">
                    <div className="col-lg-5 col-sm-12 col-md-5"></div>
                    <div className="col-lg-7 col-sm-12 col-md-7">
                      <div className="abci_content">
                        <h2>We are trusted by more than 8900 clients</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incidi-dunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercita-tion ullamco laboris nisi ut aliquip
                          ex ea commodo.
                        </p>
                        <a className="common_btn red_bg" href="about">
                          <span>Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trusted;
