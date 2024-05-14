import React from "react";

const Footer = () => {
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className=" aboutwidget">
              <a href="">
                <img src="assets/images/logo-white.png" alt="" />
              </a>
              <p>
                we are a digital marketing and software solutions company here
                to help you checkmate your related challenges.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>Oval Tower, Business bay, Dubai, UAE</p>
              <p>
                <a href="mailto:devmatesolutions@proton.com">
                  devmatesolutions@proton.com
                </a>
              </p>
              <p>
                <a href="tel:+971521769601">+971 52 176 9601</a>
              </p>
            </aside>
          </div>

          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright 2024 by
              <a href="#"> devemate.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
