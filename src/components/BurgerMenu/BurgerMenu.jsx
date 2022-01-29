import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";
import "./BurgerMenuStyle.scss";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navBar">
        <div className="burgermenu">
          <nav
            className={open ? "open burger" : "burger"}
            onClick={() => setOpen(!open)}
            aria-hidden
          >
            <div></div>
            <div></div>
            <div></div>
          </nav>
        </div>
        <div className={open ? "openMenu menu nav" : "menu nav"}>
          <Link to="/">How does it work?</Link>
          <Link to="/">Solutions</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Tools</Link>
          <Link to="/">Academy</Link>
          <Link to="/">Login</Link>
          <button className="mainbtn">Get Started for Free</button>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
