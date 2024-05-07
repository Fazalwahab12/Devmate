import React from "react";

export const News = () => {
  return (
    <section className="commonSection subscribe">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4 className="sub_title">don’t miss out our latest updates</h4>
            <h2 className="sec_title">Subscribe us</h2>
          </div>
          <div className="col-lg-8">
            <form action="#" method="post" className="subscribefrom">
              <input type="email" placeholder="Enter your email" name="email" />
              <button className="common_btn red_bg" type="submit" name="submit">
                <span>Subscribe now</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
