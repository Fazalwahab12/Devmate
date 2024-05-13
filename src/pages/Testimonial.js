import React from "react";

export default function Testimonial() {
  return (
    <section className="testimonials ">
      <div className="container ">
        <div className="owl-carousel owl-theme testi row">
          <div className="item ">
            <div className="profile row">
              <img
                src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80"
                alt=""
              />
              <div className="information">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>David R</p>
              </div>
            </div>
            <p>
              Devmate solution took our outdated website and turned it into a
              modern marvel. Their attention to detail and commitment to
              delivering on time were impressive. Thanks to their expertise, our
              online traffic and conversions have soared.
            </p>
            <div className="icon">
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="item row">
            <div className="profile">
              <img
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="information">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>Emily S.</p>
              </div>
            </div>
            <p>
              I can't thank Devmate solution enough for their exceptional work
              on our website. They listened to our needs and translated them
              into a visually stunning and user-friendly site. The results speak
              for themselves - increased engagement and customer satisfaction
            </p>
            <div className="icon">
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="item row">
            <div className="profile">
              <img
                src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="information">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>Michael R.</p>
              </div>
            </div>
            <p>
              Choosing Devmate solution for our website redesign was the best
              decision we made. Their team's professionalism and dedication
              shone through from start to finish. Our new site not only looks
              great but also functions flawlessly, boosting our online
              credibility and sales.
            </p>
            <div className="icon">
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="item row">
            <div className="profile">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
                alt=""
              />
              <div className="information">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>Amanda K</p>
              </div>
            </div>
            <p>
              I'm beyond impressed with the website Devmate solution created for
              us. They perfectly captured our brand identity and delivered a
              site that's both beautiful and functional. Their team's expertise
              and responsiveness made the entire process smooth and enjoyable.
              Highly recommend!
            </p>
            <div className="icon">
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
