import React from "react";

function We_works() {
  return (
    <section className="commonSection what_wedo pb-0 border-bottom-0">
      <div className="container">
        <div className="row">
          <div className="text-center col-lg-12">
            <h4 className="sub_title">how do we works</h4>
            <h2 className="sec_title">Digital Experience</h2>
            <p className="sec_desc">
              We are committed to providing our customers with exceptional
              service while offering our employees the best training.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="videoWrap mb-0">
              <img
                src="assets/images/3-f337e730e77bb05b92f81ad61483e77b.jpg"
                alt=""
              />
              <div className="play_video">
                <a className="video_popup" href="#">
                  <i className="fa fa-play"></i>
                </a>
                <h2>Watch Video</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default We_works;
