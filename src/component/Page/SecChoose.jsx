import React from "react";

const SecChoose = (props) => {
  return (
    <section className="position-relative">
      <div className="container">
        <div
          className={"mb-5 " + (props.status == "center" ? "text-center" : "")}
        >
          <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">
            VISION
          </p>
          <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-3">
            Our Roadmap
          </h2>
          <p className="light font__size--16 text__16-1024 color__gray-1">
            The project will begin with community building and engagement
            campaigns, followed by the launch of the token and platform
            development.
            <br /> The platform will expand through partnerships with artists
            and merchandise manufacturers, gamification elements...
          </p>
        </div>

        <div className="position-relative">
          <img
            src="./../images/dfsdfdsf.png"
            className="images__ornamen-choose-bg"
            alt=""
          />

          <div className="wrapper__choose-data position-relative z-2">
            <div className="wrapper__tag-price text-center">
              <p className="normal font__size--16 text__16-1024 color__gray-1 mb-0">
                Read Remained
              </p>
              <h2 className="semi-bold font__size--60">Vision</h2>
              <a
                href="https://hpotterogs-organization.gitbook.io/hpdocs/"
                target="_blank"
                rel="noreferrer"
                className="bold font__size--14 text__14-1024 btn__action-more color__white ls__1 text-uppercase mb-3"
              >
                See More
              </a>
            </div>
            <div className="row">
              <div className="col-lg-8 line__left md z-1">
                <div className="pr-lg-5 mb-lg-0 mb-5">
                  <div className="d-flex align-items-start">
                    <img
                      src="./../images/one.png"
                      className="object-fit-content"
                      alt=""
                    />
                    <div className="ml-3">
                      <h5 className="normal font__size--18 text__18-1024">
                        Foundation and Community Building
                      </h5>
                      <p className="normal font__size--16 text__16-1024 lh-2 color__gray-1">
                        <ul>
                          <li>
                            Q2 2023: Project launch and public announcement
                          </li>
                          <li>
                            Q2 2023: Community engagement campaign begins,
                            including social media outreach and partnerships
                            with Harry Potter fan communities
                          </li>
                          <li>
                            Q2 2023: Launch of the project's official website
                            and community forums
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start my-4">
                    <img
                      src="./../images/two.png"
                      className="object-fit-content"
                      alt=""
                    />
                    <div className="ml-3">
                      <h5 className="normal font__size--18 text__18-1024">
                        Token Launch and Platform Development
                      </h5>
                      <p className="normal font__size--16 text__16-1024 lh-2 color__gray-1">
                        <ul>
                          <li>Q2 2023: Token launch and distribution event</li>
                          <li>
                            Q2 2023: Deployment of the project's mainnet
                            blockchain and smart contract infrastructure
                          </li>
                          <li>
                            Q3 20XX: Development of the core platform features,
                            including wallet integration and token utility
                            implementation
                          </li>
                          <li>
                            Q4 2023: Beta release of the platform for community
                            testing and feedback
                          </li>
                          <li>
                            Q4 2023: Release of a dedicated mobile app for
                            seamless access to project features
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <img
                      src="./../images/three.png"
                      className="object-fit-content"
                      alt=""
                    />
                    <div className="ml-3">
                      <h5 className="normal font__size--18 text__18-1024">
                        Platform Expansion and Partnerships
                      </h5>
                      <p className="normal font__size--16 text__16-1024 lh-2 color__gray-1">
                        <ul>
                          <li>
                            Q1 2024: Integration of additional Harry Potter
                            content, such as spin-offs and prequels, into the
                            platform
                          </li>
                          <li>
                            Q2 2024: Collaboration with renowned artists and
                            creators to release exclusive digital collectibles
                            and limited-edition NFTs
                          </li>
                          <li>
                            Q3 2024: Partnerships with merchandise manufacturers
                            to establish an official marketplace for Harry
                            Potter-themed products
                          </li>
                          <li>
                            Q4 2024: Expansion of the platform's functionality,
                            introducing gamification elements and interactive
                            experiences
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right">
              <img
                src="./../images/Mask group.png"
                className="images__character-choose"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecChoose;
