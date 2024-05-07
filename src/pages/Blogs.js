import React from "react";

const Blogs = () => {
  return (
    <section className="commonSection blog">
      <div className="container">
        <div className="row">
          <div className="text-center col-lg-12">
            <h4 className="sub_title">our news &amp; articles</h4>
            <h2 className="sec_title">latest blog posts</h2>
            <p className="sec_desc">
              We are committed to providing our customers with exceptional
              service while offering our employees the best training.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="latestBlogItem">
              <div className="lbi_thumb">
                <img
                  src="assets/images/1-85b3cff4fd3bdebf25d9adf07d91106d.jpg"
                  alt="basic rules of running web agency business"
                />
              </div>
              <div className="lbi_details">
                <a className="lbid_date" href="blog-single">
                  20 nov
                </a>
                <h2>
                  <a href="blog-single">
                    basic rules of running web agency business
                  </a>
                </h2>
                <a className="learnM" href="blog-single">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="latestBlogItem">
              <div className="lbi_thumb">
                <img
                  src="assets/images/2-1547f693fedc072ee06c3a0331688853.jpg"
                  alt="Become the best sale marketer"
                />
              </div>
              <div className="lbi_details">
                <a className="lbid_date" href="blog-single">
                  20 nov
                </a>
                <h2>
                  <a href="blog-single">Become the best sale marketer</a>
                </h2>
                <a className="learnM" href="blog-single">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="latestBlogItem">
              <div className="lbi_thumb">
                <img
                  src="assets/images/3-e46b2fe9bccd0b0a7f4ed9a3d84d0bfc.jpg"
                  alt="Introducing latest mopaly features"
                />
              </div>
              <div className="lbi_details">
                <a className="lbid_date" href="blog-single">
                  20 nov
                </a>
                <h2>
                  <a href="blog-single">Introducing latest mopaly features</a>
                </h2>
                <a className="learnM" href="blog-single">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
