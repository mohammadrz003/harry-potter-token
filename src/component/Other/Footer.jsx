import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="pb-5 position-relative">
      <img
        src="./../images/image 33.png"
        className="images__line-left"
        alt=""
      />
      <div className="container position-relative z-2">
        <div className="row">
          <div className="mb-5 mb-lg-0 col-md">
            <div className="d-flex d-md-block justify-content-between align-items-center">
              <img
                src="./../images/Logo.jpeg"
                className="mb__9 flex-shrink-0 sm-0"
                style={{ width: "60px", borderRadius: "100%" }}
                alt=""
              />
              <div className="wrapper__sosmed-footer ml-3 ml-md-0">
                <a
                  href="https://t.me/Hpotterog"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./../images/telegram.png" alt="" />
                </a>
                <a
                  href="https://twitter.com/Hpotterog?t=GpuTBbFQaPQA6ZAfKR0CXQ&s=09"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./../images/twitter.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 mb-5 mb-lg-0 col-md offset-md-1">
            <h5 className="medium font__size--16 text__16-1024 mb-4">
              Quicklinks
            </h5>
            <ul className="list__menu-footer">
              <li>
                <NavLink
                  to="/"
                  className="light font__size--16 text__16-1024 color__white"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="light font__size--16 text__16-1024 color__white"
                >
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-6 mb-5 mb-lg-0 col-md">
            <h5 className="medium font__size--16 text__16-1024 mb-4">
              Support
            </h5>
            <ul className="list__menu-footer">
              <li>
                <NavLink
                  to="/"
                  className="light font__size--16 text__16-1024 color__white"
                >
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="light font__size--16 text__16-1024 color__white"
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="light font__size--16 text__16-1024 color__white"
                >
                  Tems & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="light font__size--16 text__16-1024 color__white"
                >
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4">
            <h5 className="medium font__size--16 text__16-1024 mb-4">
              Need Help?
            </h5>
            <ul className="list__menu-footer">
              <li>
                <div className="d-flex align-items-start">
                  <img src="./../images/Message2.png" className="mr-2" alt="" />
                  <span className="normal font__size--16 text__16-1024">
                    Hpotter@gmail.com
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="line__hr-footer"></div>

        <div className="text-center normal font__size--16 text__16-1024">
          © Copyright 2023, All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
