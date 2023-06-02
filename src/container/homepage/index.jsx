import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import SecChoose from "../../component/Page/SecChoose";
import SecService from "../../component/Page/SecService";
import SecSubscribe from "../../component/Page/SecSubscribe";
import SecTestimonial from "../../component/Page/SecTestimonial";
import SliderArticle from "../../component/Slider/SliderArticle";

const Index = (props) => {
  const [accordion, setAccordion] = useState(-1);

  const accordionFunc = (e) => {
    if (e == accordion) {
      setAccordion(-1);
    } else {
      setAccordion(e);
    }
  };

  const dataAccordiom = [
    {
      title: "What is the Harry Potter Token project",
      desc: "The Harry Potter Token project is a blockchain-based initiative that aims to create a digital tokenized ecosystem inspired by the Harry Potter universe.",
    },
    {
      title: "What is the purpose of the Harry Potter Token? ",
      desc: "The purpose of the Harry Potter Token is to provide fans of the Harry Potter series with a unique digital experience by combining blockchain technology with elements from the fictional wizarding world.",
    },
    {
      title: "How does the Harry Potter Token work? ",
      desc: "The Harry Potter Token utilizes blockchain technology to create a decentralized network where users can trade, collect, and interact with digital assets related to the Harry Potter franchise. These assets can include virtual items, collectibles, artwork, and more.",
    },
  ];

  const video = useRef(null);

  const article = [
    {
      img: "./../images/14.png",
      title: "The Future of Education: How VR is Revolutionizing the Classroom",
      tag: "VR Education",
      linjk: "#!",
    },
    {
      img: "./../images/1.png",
      title: "Bringing Designs to Life: How VR is Changing Architecture",
      tag: "VR Architecture",
      linjk: "#!",
    },
    {
      img: "./../images/5.png",
      title:
        "Making Events Memorable: The Power of VR for Corporate and Special Occasions",
      tag: "VR Entertainment ",
      linjk: "#!",
    },
    {
      img: "./../images/4.png",
      title: "Exploring New Worlds: The Benefits of VR Travel",
      tag: "VR Event",
      linjk: "#!",
    },
    {
      img: "./../images/14.png",
      title: "The Future of Education: How VR is Revolutionizing the Classroom",
      tag: "VR Education",
      linjk: "#!",
    },
    {
      img: "./../images/1.png",
      title: "Bringing Designs to Life: How VR is Changing Architecture",
      tag: "VR Architecture",
      linjk: "#!",
    },
    {
      img: "./../images/5.png",
      title:
        "Making Events Memorable: The Power of VR for Corporate and Special Occasions",
      tag: "VR Entertainment ",
      linjk: "#!",
    },
    {
      img: "./../images/4.png",
      title: "Exploring New Worlds: The Benefits of VR Travel",
      tag: "VR Event",
      linjk: "#!",
    },
  ];
  return (
    <Fragment>
      <div className="overflow-hidden position-relative">
        <img src="./../images/sdsad.png" className="images__head-top" alt="" />
        <Navbar />

        <section className="position-relative">
          <img
            src="./../images/Frame 5.png"
            className="images__bg-flor"
            alt=""
          />
          <div className="container position-relative z-2">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="semi-bold font__size--64 text__65-1024 text__65-sm color__white">
                  A Harry Potter Crypto Project
                </h1>
                <p className="light font__size--16 text__16-1024 color__gray-1 lh-2 mb-4">
                  Join the Wizarding World of Crypto with Harry Potter Token
                  <br className="d-none d-sm-block" /> Unlock Magical Rewards!
                </p>
                <NavLink
                  to="/service"
                  className="bold font__size--14 text__14-1024 btn__action-more color__white ls__1 text-uppercase"
                >
                  discover more
                </NavLink>

                <div className="mt-4 mb-5 mb-lg-0">
                  <div className="d-flex flex-wrap flex-sm-nowrap align-items-center">
                    <div className="wrapper__list-people mb-5 mb-sm-0">
                      <div className="d-flex align-items-center user">
                        <img src="./../images/rm (1).jpeg" alt="" />
                        <img src="./../images/rm (2).jpeg" alt="" />
                        <img src="./../images/rm (3).jpeg" alt="" />
                      </div>
                      <div className="light font__size--16 text__16-1024 ml-3">
                        <span className="bold position-relative">
                          <span className="position-relative z-2">Join</span>
                          <img
                            src="./../images/Clip path group (1).png"
                            className="images__line-head"
                            alt=""
                          />
                        </span>{" "}
                        Our Community
                      </div>
                    </div>

                    <div className="ml-sm-4">
                      <div className="wrapper__video-head position-relative">
                        <img
                          src="./../images/_Play button.png"
                          className="play"
                          alt=""
                        />
                        <img
                          src="./../images/Group 15.png"
                          className="wrap"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 position__initial-md">
                <div className="wrapper__grup-image-head">
                  <div className="position-relative">
                    <img
                      src="./../images/Ellipse 33.png"
                      className="images__bg-wrap"
                      alt=""
                    />
                    <img
                      src="./../images/Group_clipdrop-relight 1.png"
                      className="position-relative z-2"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="wrapper__sec-about">
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <img src="./../images/Frame 9.png" className="mb-4" alt="" />
                  <h5 className="normal font__size--20 text__20-1024">
                    Wizarding World
                  </h5>
                  <p className="normal font__size--14 text__14-1024 color__gray-1">
                    We aim to expand the digital representation of the wizarding
                    world, creating a comprehensive ecosystem that encompasses
                    not only the Harry Potter series but also spin-offs,
                    prequels...
                  </p>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <img src="./../images/Frame 10.png" className="mb-4" alt="" />
                  <h5 className="normal font__size--20 text__20-1024">
                    NFT Integration
                  </h5>
                  <p className="normal font__size--14 text__14-1024 color__gray-1">
                    We plan to integrate non-fungible tokens (NFTs) into our
                    platform, allowing users to own and trade unique digital
                    assets representing characters, artifacts, and locations
                    from the Harry Potter universe.
                  </p>
                </div>
                <div className="col-md-4">
                  <img src="./../images/Frame 11.png" className="mb-4" alt="" />
                  <h5 className="normal font__size--20 text__20-1024">Game</h5>
                  <p className="normal font__size--14 text__14-1024 color__gray-1">
                    To enhance user engagement and immersion, we envision the
                    development of Harry Potter-themed games and interactive
                    experiences within our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4 my-md-auto">
                <img
                  src="./../images/Group 17.png"
                  className="position-relative z-2"
                  alt=""
                />
                <img
                  src="./../images/Ellipse 34.png"
                  className="images__bg-sec"
                  alt=""
                />
              </div>
              <div className="col-md-6 my-auto">
                <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">
                  STATISTICS
                </p>
                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm">
                  Tokenomics
                </h2>
                <ul className="list__data mb-4">
                  <li>
                    <div className="d-flex">
                      <img
                        src="./../images/check-box (1).png"
                        className="object-fit-content"
                        alt=""
                      />
                      <span className="ml-2 noraml font__size--16 text__16-1024">
                        2% Airdrop
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img
                        src="./../images/check-box (1).png"
                        className="object-fit-content"
                        alt=""
                      />
                      <span className="ml-2 noraml font__size--16 text__16-1024">
                        3% Ecosystem
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img
                        src="./../images/check-box (1).png"
                        className="object-fit-content"
                        alt=""
                      />
                      <span className="ml-2 noraml font__size--16 text__16-1024">
                        4% Reserve fund
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img
                        src="./../images/check-box (1).png"
                        className="object-fit-content"
                        alt=""
                      />
                      <span className="ml-2 noraml font__size--16 text__16-1024">
                        6% Team
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img
                        src="./../images/check-box (1).png"
                        className="object-fit-content"
                        alt=""
                      />
                      <span className="ml-2 noraml font__size--16 text__16-1024">
                        20% Liquidity
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img
                        src="./../images/check-box (1).png"
                        className="object-fit-content"
                        alt=""
                      />
                      <span className="ml-2 noraml font__size--16 text__16-1024">
                        65% Burn
                      </span>
                    </div>
                  </li>
                </ul>

                <a
                  href="#!"
                  className="bold font__size--14 text__14-1024 btn__action-more color__white ls__1 text-uppercase"
                >
                  read more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <SecService /> */}

        {/* <section>
          <div className="container">
            <div className="text-center mb-5">
              <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">
                HOW TO GET STARTED
              </p>
              <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">
                Bringing Your Virtual Reality{" "}
                <br className="d-none d-sm-block" /> Dreams to Life
              </h2>
            </div>

            <div className="wrapper__video-wrap position-relative mb-5">
              <div className="desc">
                <div className="tag mb-2 medium font__size--14 text__14-1024">
                  VR Service
                </div>
                <h4 className="medium font__size--36 text__36-1024">
                  How to get started
                </h4>
              </div>
              <video
                ref={video}
                id="myVideo"
                poster="./../images/adasdsa.png"
                controls={true}
                playsInline
                preload="auto"
                loop
                muted
              >
                <source src="./../images/saas.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="text-center">
              <a
                href="#!"
                className="bold font__size--14 text__14-1024 btn__action-more color__white ls__1 text-uppercase"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </section> */}

        {/* <SecTestimonial /> */}

        <SecChoose />

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-md-1 order-12 my-auto">
                <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">
                  FAQ
                </p>
                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-4">
                  Frequently Asked Questions
                </h2>

                {dataAccordiom.map((obj, i) => {
                  return (
                    <div
                      className={
                        "wrapper__accordion-wrap mb-4 " +
                        (accordion == i ? "active" : "")
                      }
                    >
                      <div
                        className={"head pointer "}
                        onClick={() => accordionFunc(i)}
                      >
                        <h5 className="mb-0 semi-bold font__size--20 text__20-1024">
                          {obj.title}
                        </h5>
                        <img
                          src="./../images/expand_more_FILL0_wght400_GRAD0_opsz48.png"
                          className="arrow ml-2"
                        />
                      </div>
                      <hr />
                      <div className="desc">
                        <p className="mb-0 normal font__size--16 text__16-1024 color__gray-1">
                          {obj.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-md-6 order-1 order-md-12 mb-4 my-md-auto">
                <img
                  src="./../images/Image (1).png"
                  className="position-relative z-2"
                  alt=""
                />
                <img
                  src="./../images/Ellipse 34.png"
                  className="images__bg-sec"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div className="container">
            <div className="mb-5 text-center">
              <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">
                Our Trusted Partners
              </p>
              <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">
                Discover the Companies We Work With
              </h2>
            </div>

            <div className="text-center">
              <img src="./../images/Group 53.png" className="w-100" alt="" />
            </div>
          </div>
        </section> */}

        {/* <section>
          <div className="container">
            <div className="d-flex flex-wrap flex-md-nowrap align-items-sm-end justify-content-between mb-4 mb-md-5">
              <div className="">
                <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">
                  OUR ARTICLES
                </p>
                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">
                  Stay Up-to-Date with Our VR Insights
                </h2>
              </div>
              <a
                href="#!"
                className="ml-sm-3 bold font__size--14 text__14-1024 text__14-1024 btn__action width text-uppercase color__white pointer flex-shrink-0 d-md-inline-block d-none"
              >
                see all
              </a>
            </div>
            <div className="wrapper__wrap-article position-relative">
              <div className="bg__wrap d-none d-lg-block"></div>
              <div className="row pt-5 position-relative z-2">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <SliderArticle />
                </div>
                <div className="col-lg-6">
                  <div className="wrapper__bg-blog-wrap mt-5 mt-lg-0">
                    <h4 className="semi-bold font__size--28 text__28-1024 mb-4 px__2 xs-1">
                      Recent Article
                    </h4>

                    <div className="wrapper__wrap-article-scroll">
                      <div className="wrap">
                        {article.map((obj) => {
                          return (
                            <Fragment>
                              <div className="wrapper__article-list">
                                <div className="d-flex align-items-center">
                                  <img src={obj.img} alt="" />
                                  <div className="des ml-3">
                                    <div className="tag medium font__size--14 text__14-1024 mb-3">
                                      {obj.tag}
                                    </div>
                                    <h5 className="mb-0 normal font__size--18 text__18-1024">
                                      {obj.title}
                                    </h5>
                                  </div>
                                </div>
                                <a
                                  href="#!"
                                  className="arrow ml-3 flex-shrink-0 d-sm-block d-none"
                                >
                                  <img src="./../images/next 1.png" alt="" />
                                </a>
                              </div>

                              <hr className="hr__line-article my-4" />
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center d-md-none mt-5 mt-md-0">
              <a
                href="#!"
                className="ml-sm-3 bold font__size--14 text__14-1024 text__14-1024 btn__action width text-uppercase color__white pointer flex-shrink-0"
              >
                see all
              </a>
            </div>
          </div>
        </section> */}

        {/* <SecSubscribe /> */}

        <Footer />
      </div>
    </Fragment>
  );
};

export default Index;
