import React from "react";

const Footer = () => {
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="index.html">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAAjCAYAAABsOhOqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNTQ4NjFBN0VDMERFNDExOUVCQUFDRjQ5RjZDMEVBRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQTREMkVEQzAyQTMxMUU5QUNDNUFCN0JFMDQ5NzczRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQTREMkVEQjAyQTMxMUU5QUNDNUFCN0JFMDQ5NzczRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OEUxMzlCMkFDRUZFODExQURCNUU4Rjg4QUI5NEUwRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNTQ4NjFBN0VDMERFNDExOUVCQUFDRjQ5RjZDMEVBRSIvPiA8L3JkZjpEZXNjcmlwdGlv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"
                  alt=""
                />
              </a>
              <p>
                Welcome to our web design agency. Lorem ipsum is simply free
                text dolor sit amet consectetur adipisicing elit. Tempore
                corrupti temporibus fuga earum asperiores, alias excepturi sit
                mpedit fugit laudantium.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
                66 Broklyn Street, New York
                <br />
                United States of America
              </p>
              <p>P: 666 888 000</p>
              <p>
                E: <a href="#">needhelp@meipaly.com</a>
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
              © copyright 2021 by
              <a href="#">Layerdrops.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
