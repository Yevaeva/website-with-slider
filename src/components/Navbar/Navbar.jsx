import { Link } from "gatsby";
import * as React from "react";
import { useState, useEffect } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useMediaQuery } from "../../helpers/useMediaQueryHook";
import "./NavbarStyle.scss";
import logo from "../../images/hexometer-logo.svg";

const Navbar = () => {
  let [scroll, setScroll] = useState(false);
  let isPageWide = useMediaQuery("(min-width: 1200px)");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });
  return (
    <header className={scroll ? "shadowNav" : ""}>
      <div className="wrapper navWrapper justify-content-xl-between justify-content-around">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {isPageWide ? (
          <>
            <nav className="nav">
              <Link to="/">How does it work?</Link>
              <Link to="/">Solutions</Link>
              <Link to="/">Pricing</Link>
              <Link to="/">Tools</Link>
              <Link to="/">Academy</Link>
            </nav>
            <button className="mainbtn navBtn">Get Started for Free</button>
            <p>Login</p>
          </>
        ) : (
          <BurgerMenu />
        )}
      </div>
    </header>
  );
};

export default Navbar;
