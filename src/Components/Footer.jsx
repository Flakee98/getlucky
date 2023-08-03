import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="display__desktop">
       <div className="first" style={{ gap: "0" }}>
      <div className="footer1">
        <h1>
          Streamline Your <br />
          Data Processes
        </h1>
        <div className="callcta">
          <p>
            Contact us today to learn more about our data management solutions &
            start optimizing your data management processes.
          </p>
          <button>
            <a href="hi">Book a Call</a>
          </button>
        </div>
      </div>
      <div className="footer2">
        <div className="footer2__container">
          <div className="logo__and__text">
            <div className="logo">
             Logo
            </div>
            <div className="text">
              <p>
                We growing up your business with
                <br />
                our Lottery Platform
              </p>
            </div>
          </div>
          <div className="footer__links">
            <div className="links__column">
              <b>Platform</b>
              <Link to="*">Plans and Pricing</Link>
              <Link to="*">Personal AI manager</Link>
              <Link to="*">AI Business Writer</Link>
            </div>
            <div className="links__column">
              <b>Company</b>
              <Link to="*">Blog</Link>
          <Link to="*">Career</Link>
          <Link to="*">News</Link>
            </div>
            <div className="links__column">
              <b>Resources</b>
              <Link to="*">Documentation</Link>
          <Link to="*">Papers</Link>
          <Link to="*">Press Conferences</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer3">
        <p>© 2023 Dview Inc. All rights reserved.</p>
        <div className="footer__row">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
    </div>
    <div className="display__mobile">
    <div className="footer1__mob">
      <div className="f1_content">
        <h1>
        Streamline Your <br />
        Data Processes
      </h1> <p>
          Contact us today to learn more about our data management solutions &
          start optimizing your data management processes.
        </p>
        <button>
          <a href="hi">Book a Call</a>
        </button>
      </div>
     
    </div>
    <div className="footer2__mob">
      <div className="f2__top">
        <h2>
       Logo
        </h2>
        <p>
        We growing up your business with 
        <br />
personal AI manager.
        </p>
      </div>
      <hr />
      <div className="f3m__links">
        <div className="frows">
<div className="f3ml">
          <h3>Platform</h3>
          <div className="f32">
          
            <Link to="*">Plans and Pricing</Link>
          <Link to="*">Personal AI manager</Link>
          <Link to="*">AI Business Writer</Link>
          </div>
          
        </div>
<div className="f3ml">
          <h3>Company</h3>
          <div className="f32">
            <Link to="*">Blog</Link>
          <Link to="*">Career</Link>
          <Link to="*">News</Link>
          </div>
          
        </div>
<div className="f3ml">
          <h3>Resources</h3>
          <div className="f32">
            <Link to="*">Documentation</Link>
          <Link to="*">Papers</Link>
          <Link to="*">Press Conferences</Link>
          </div>
          
        </div>
        </div>
        
       
      </div>
      
    </div>
    
    </div>
   </>
  );
};

export default Footer;
