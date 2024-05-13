import React, { useState, useEffect } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={scrolled ? "fixed scrolled bg-black" : "fixed bg-transparent"}
    >
      <header
        className="  header_01
null "
        id="header"
      >
        <div className="">
          <div className="row">
            <div className="col-6 col-lg-2 col-md-3 col-sm-3">
              <div className="logo">
                <a href="i/">
                  <img
                    src="assets/images/logo-whitea.png"
                    alt=""
                    className=""
                  />
                </a>
              </div>
            </div>
            <div className="  d-none d-lg-block col-lg-8 col-md-7 col-sm-8">
              <nav className="mainmenu text-center">
                <ul>
                  <li className="menu-item-has-children">
                    <a href="/">Home</a>
                  </li>
                  <li className="">
                    <a href="/#Services">About</a>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="/#Portfolio">Portfolio</a>
                  </li>

                  <li className="">
                    <a href="/#Contect">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-6 col-lg-2  col-md-2 col-sm-4">
              <div className="navigator text-right">
                <a className="search searchToggler" href="#">
                  <i className="mei-magnifying-glass"></i>
                </a>
                <a
                  href="#"
                  className="menu mobilemenu d-none d-md-none d-lg-none"
                >
                  <i className="mei-menu"></i>
                </a>
                <a id="open-overlay-nav" className="menu hamburger" href="#">
                  <span
                    onClick={toggleMenu}
                    className="text-xl  text-white inline-flex items-center justify-center rounded-full cursor-pointer px-3"
                  >
                    <i className="mei-menu"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
