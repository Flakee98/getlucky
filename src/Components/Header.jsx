import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Container } from "react-bootstrap";
const Header = () => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      currentScrollPosition = window.pageYOffset;

      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <>
      <div className="display__desktop">
        <Container fluid className="blurbg">

       
       
          <div className="header">
            <div className="inner">
              <div className="logo">
              <Link to="/">Logo</Link>
            </div>
            <div className="nav">
              <a href="/">Play </a>

              <a href="/about">Prizes</a>

              <a href="/contact">Draws</a>
            </div>

            <div className="connect">
              <a href="/connect">Contact Us</a>
            </div>
            </div>
            
          </div>
        </Container>
      </div>
      <div className="display__mobile ">
        <div className="top__mobile">
          <div className="mobile__header">
            <div className="logo">Logo</div>
            <div className="hamburger__mob">
              <a
                href="#primary"
                className={`menu-link ${menuActive ? "active" : ""}`}
                onClick={handleMenuClick}
              >
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
              </a>
            </div>
          </div>
          {menuActive && (
            <div className={menuActive ? "header__navs" : ""}>
              <div className="navs">
                <a href="a">Play</a>
              </div>
              <div className="navs">
                <a href="a">Prizes</a>
              </div>
              <div className="navs">
                <a href="a">Draws</a>
              </div>
              <div className="cta__mob__heart">
                <button>
                  <a
                    href="
                b"
                  >
                    Contact Us
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
