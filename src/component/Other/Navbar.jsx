import React, { Component, Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <Fragment>
      <div
        className={
          "wrapper__side-nav-mobile bg__black d-flex d-lg-none " +
          (toogleMenu ? "active" : "")
        }
      >
        <div className="d-flex flex-wrap w-100">
          <div className="w-100">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <NavLink
                to="/"
                exact
                class="navbar-brand font__size--24 text__24-1024 semi-bold color__white"
              >
                <img
                  src="./../images/Logo.jpeg"
                  alt=""
                  style={{ width: "60px", borderRadius: "100%" }}
                />
              </NavLink>
              {/* <img src="./../images/clsoe2.png" onClick={() => setToogleMenu(!toogleMenu)} className="pointer" alt="" /> */}

              <svg
                onClick={() => setToogleMenu(!toogleMenu)}
                className="pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.192 6.34399L11.949 10.586L7.70697 6.34399L6.29297 7.75799L10.535 12L6.29297 16.242L7.70697 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="menu">
              <NavLink
                to="#home"
                className="light font__size--14 text__14-1024 color__white"
              >
                Home
              </NavLink>
              <hr />
              <NavLink
                to="#tokenomics"
                className="light font__size--14 text__14-1024 color__white"
              >
                Tokenomics
              </NavLink>
              <hr />
              <NavLink
                to="#roadmap"
                className="light font__size--14 text__14-1024 color__white"
              >
                Roadmap
              </NavLink>
              <NavLink
                to="#faq"
                className="light font__size--14 text__14-1024 color__white"
              >
                Faq
              </NavLink>
              {/* <hr /> */}
              {/* <div className="position-relative">
                <div
                  class="wrapper__drodown-wrap light font__size--14 text__14-1024 color__white pointer"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    Pages
                    <svg
                      className="ml-2 arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.70742 5.88334L4.7005 5.87711L4.69314 5.87142C4.46003 5.69119 4.12805 5.71226 3.91883 5.93027C3.69372 6.16484 3.69372 6.54105 3.91883 6.77561L7.08012 10.0697L7.08648 10.0764L7.0933 10.0825L7.13129 10.1167L7.13821 10.1229L7.14557 10.1286C7.37868 10.3088 7.71066 10.2877 7.91988 10.0697L11.0812 6.77561L11.0875 6.76903L11.0933 6.762L11.1261 6.72242L11.1319 6.71538L11.1372 6.70793C11.3037 6.47418 11.2865 6.14425 11.0812 5.93027L11.0748 5.92365L11.068 5.91751L11.03 5.88334L11.0231 5.87711L11.0157 5.87142C10.7826 5.69119 10.4506 5.71226 10.2414 5.93027C10.2414 5.93027 10.2414 5.93027 10.2414 5.93027L7.5 8.78672L4.75858 5.93027L4.75223 5.92365L4.74541 5.91751L4.70742 5.88334Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  class="dropdown-menu wrapper__dropdown-menu-all font__size--14 text__14-1024"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink to="/service/detail" class="dropdown-item">
                    Detail Service
                  </NavLink>
                  <NavLink to="/pricing" class="dropdown-item">
                    Pricing
                  </NavLink>
                  <NavLink to="/team" class="dropdown-item">
                    Team
                  </NavLink>
                  <NavLink to="/faq" class="dropdown-item">
                    FAQ
                  </NavLink>
                  <NavLink to="/terms" class="dropdown-item">
                    Terms
                  </NavLink>
                  <NavLink to="/policy" class="dropdown-item">
                    Privacy
                  </NavLink>
                  <NavLink to="/error" class="dropdown-item">
                    404
                  </NavLink>
                </div>
              </div> */}
              {/* <hr /> */}
              {/* <div className="position-relative">
                <div
                  class="wrapper__drodown-wrap light font__size--14 text__14-1024 color__white pointer"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    Blog
                    <svg
                      className="ml-2 arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.70742 5.88334L4.7005 5.87711L4.69314 5.87142C4.46003 5.69119 4.12805 5.71226 3.91883 5.93027C3.69372 6.16484 3.69372 6.54105 3.91883 6.77561L7.08012 10.0697L7.08648 10.0764L7.0933 10.0825L7.13129 10.1167L7.13821 10.1229L7.14557 10.1286C7.37868 10.3088 7.71066 10.2877 7.91988 10.0697L11.0812 6.77561L11.0875 6.76903L11.0933 6.762L11.1261 6.72242L11.1319 6.71538L11.1372 6.70793C11.3037 6.47418 11.2865 6.14425 11.0812 5.93027L11.0748 5.92365L11.068 5.91751L11.03 5.88334L11.0231 5.87711L11.0157 5.87142C10.7826 5.69119 10.4506 5.71226 10.2414 5.93027C10.2414 5.93027 10.2414 5.93027 10.2414 5.93027L7.5 8.78672L4.75858 5.93027L4.75223 5.92365L4.74541 5.91751L4.70742 5.88334Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  class="dropdown-menu wrapper__dropdown-menu-all font__size--14 text__14-1024"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink to="/blog" class="dropdown-item">
                    Blog
                  </NavLink>
                  <NavLink to="/blog/detail" class="dropdown-item">
                    Blog Detail
                  </NavLink>
                </div>
              </div> */}
              <hr />
              <a
                href="mailto:Hpotter@gmail.com"
                className="light font__size--16 text__16-1024 btn__action color__white pointer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg__wrap-menu d-lg-none"
        onClick={() => setToogleMenu(!toogleMenu)}
      ></div>
      <nav
        className="navbar navbar-expand-lg bg__black-2 wrapper__navbar position-relative z-2"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="container position-relative">
          <NavLink
            to="/"
            exact
            class="navbar-brand font__size--24 text__24-1024 semi-bold color__white"
          >
            <img
              src="./../images/Logo.jpeg"
              alt=""
              style={{ width: "60px", borderRadius: "100%" }}
            />
          </NavLink>

          <div
            className="collapse navbar-collapse wrapper__navbar-menu ml-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu__center">
              <li className="nav-item">
                <NavLink
                  to="#home"
                  exact
                  class="nav-link light font__size--14 text__14-1024 color__white opacity__7 text-capitalize hover"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="#tokenomics"
                  class="nav-link light font__size--14 text__14-1024 color__white opacity__7 text-capitalize hover"
                >
                  Tokenomics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="#roadmap"
                  class="nav-link light font__size--14 text__14-1024 color__white opacity__7 text-capitalize hover"
                >
                  Roadmap
                </NavLink>
              </li>
              {/* <li className="nav-item position-relative">
                <div
                  class="nav-link wrapper__drodown-wrap light font__size--14 text__14-1024 color__white opacity__7 hover pointer"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    Pages
                    <svg
                      className="ml-2 arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.70742 5.88334L4.7005 5.87711L4.69314 5.87142C4.46003 5.69119 4.12805 5.71226 3.91883 5.93027C3.69372 6.16484 3.69372 6.54105 3.91883 6.77561L7.08012 10.0697L7.08648 10.0764L7.0933 10.0825L7.13129 10.1167L7.13821 10.1229L7.14557 10.1286C7.37868 10.3088 7.71066 10.2877 7.91988 10.0697L11.0812 6.77561L11.0875 6.76903L11.0933 6.762L11.1261 6.72242L11.1319 6.71538L11.1372 6.70793C11.3037 6.47418 11.2865 6.14425 11.0812 5.93027L11.0748 5.92365L11.068 5.91751L11.03 5.88334L11.0231 5.87711L11.0157 5.87142C10.7826 5.69119 10.4506 5.71226 10.2414 5.93027C10.2414 5.93027 10.2414 5.93027 10.2414 5.93027L7.5 8.78672L4.75858 5.93027L4.75223 5.92365L4.74541 5.91751L4.70742 5.88334Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  class="dropdown-menu wrapper__dropdown-menu-all"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink to="/service/detail" class="dropdown-item">
                    Detail Service
                  </NavLink>
                  <NavLink to="/pricing" class="dropdown-item">
                    Pricing
                  </NavLink>
                  <NavLink to="/team" class="dropdown-item">
                    Team
                  </NavLink>
                  <NavLink to="/faq" class="dropdown-item">
                    FAQ
                  </NavLink>
                  <NavLink to="/terms" class="dropdown-item">
                    Terms
                  </NavLink>
                  <NavLink to="/policy" class="dropdown-item">
                    Privacy
                  </NavLink>
                  <NavLink to="/error" class="dropdown-item">
                    404
                  </NavLink>
                </div>
              </li> */}
              {/* <li className="nav-item position-relative">
                <div
                  class="nav-link wrapper__drodown-wrap light font__size--14 text__14-1024 color__white opacity__7 hover pointer"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    Blog
                    <svg
                      className="ml-2 arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.70742 5.88334L4.7005 5.87711L4.69314 5.87142C4.46003 5.69119 4.12805 5.71226 3.91883 5.93027C3.69372 6.16484 3.69372 6.54105 3.91883 6.77561L7.08012 10.0697L7.08648 10.0764L7.0933 10.0825L7.13129 10.1167L7.13821 10.1229L7.14557 10.1286C7.37868 10.3088 7.71066 10.2877 7.91988 10.0697L11.0812 6.77561L11.0875 6.76903L11.0933 6.762L11.1261 6.72242L11.1319 6.71538L11.1372 6.70793C11.3037 6.47418 11.2865 6.14425 11.0812 5.93027L11.0748 5.92365L11.068 5.91751L11.03 5.88334L11.0231 5.87711L11.0157 5.87142C10.7826 5.69119 10.4506 5.71226 10.2414 5.93027C10.2414 5.93027 10.2414 5.93027 10.2414 5.93027L7.5 8.78672L4.75858 5.93027L4.75223 5.92365L4.74541 5.91751L4.70742 5.88334Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  class="dropdown-menu wrapper__dropdown-menu-all"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink to="/blog" class="dropdown-item">
                    Blog
                  </NavLink>
                  <NavLink to="/blog/detail" class="dropdown-item">
                    Blog Detail
                  </NavLink>
                </div>
              </li> */}
              <li className="nav-item">
                <NavLink
                  to="#faq"
                  class="nav-link light font__size--14 text__14-1024 color__white opacity__7 text-capitalize hover"
                >
                  Faq
                </NavLink>
              </li>
            </ul>
          </div>

          <div
            onClick={() => setToogleMenu(!toogleMenu)}
            class="nav__button d-lg-none position-relative ml-auto flex-shrink-0"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a
            href="mailto:Hpotter@gmail.com"
            className="d-none d-lg-block light font__size--16 text__16-1024 btn__action color__white  ml-auto pointer"
          >
            Contact us
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
