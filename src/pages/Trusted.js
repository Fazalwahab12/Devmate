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
                        <h2>
                          With a global presence across 10+ countries, we've
                          served over 5000 satisfied clients
                        </h2>
                        <p>
                          With over 6 years of experience, we've built a diverse
                          client base across the UK, Netherlands, Germany,
                          Italy, USA, Pakistan, India, Canada, France, and
                          Dubai. Having served more than 5000 clients, we've
                          facilitated digital growth for over 2000 businesses.
                          Evolving from a service-based company, we're now
                          focused on developing our own startups and SaaS
                          products.
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
