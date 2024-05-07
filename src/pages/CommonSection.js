import React from "react";

const CommonSection = () => {
  return (
    <section className="commonSection testimonial">
      <div className="container">
        <div className="row">
          <div className="text-center col-lg-10 col-sm-12 offset-lg-1">
            <div className="testimonial_content">
              <div className="testi_icon">
                <i className="mei-team"></i>
              </div>
              <h2>
                Great things in business are never done by one person.
                <span>They’re done by a team of people.</span>
              </h2>
              <p>
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonSection;
