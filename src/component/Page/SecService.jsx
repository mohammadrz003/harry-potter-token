import React from "react";

const SecService = () => {
  const service = [
    {
      icon: "./../images/ic (4).png",
      title: "VR Development",
      desc: "From concept to creation, our team of VR developers will bring your vision to life.",
    },
    {
      icon: "./../images/ic (1).png",
      title: "VR Design",
      desc: "Our talented VR designers will create immersive and engaging environments that will captivate your audience.",
    },
    {
      icon: "./../images/ic (3).png",
      title: "VR Consulting",
      desc: "Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.",
    },
    {
      icon: "./../images/ic (6).png",
      title: "VR Games",
      desc: "We offer a wide selection of VR games that are suitable for players of all ages and skill levels.",
    },
    {
      icon: "./../images/ic (2).png",
      title: "VR Events",
      desc: "Make your next event unforgettable with our VR event services.",
    },
    {
      icon: "./../images/ic (5).png",
      title: "VR Entertainment",
      desc: "reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="position-relative mb-5">
          <div className="row">
            <div className="col-md-5 z-2">
              <p className="medium font__size--16 text-uppercase text__gr-default">
                OUR SERVICE
              </p>
              <h2 className="semi-bold font__size--48">Our Service</h2>
            </div>
            <div className="col-md-7 z-2">
              <p className="light font__size--16 color__gray-1 mb-3">
                We use the latest VR hardware and software to create
                high-quality VR experiences that are accessible and affordable.
                Our goal is to provide exceptional customer service and support,
                and our team is always available to answer any questions and
                address any concerns you may have.
              </p>
            </div>
          </div>
          <img
            src="./../images/Ellipse 34.png"
            className="images__bg-sec-service"
            alt=""
          />
        </div>

        <div className="row">
          {service.map((obj, i) => {
            return (
              <div
                className={
                  "col-md-6 col-lg-4 mb-4 " +
                  (i == 1
                    ? "mt__grid-1"
                    : i == 2
                    ? "mt__grid-2"
                    : i == 3
                    ? "mt__grid-min-2"
                    : i == 4
                    ? "mt__grid-min-1"
                    : "")
                }
              >
                <div className="wrapper__card-service">
                  <img src={obj.icon} alt="" />
                  <div className="w-100">
                    <h5 className="normal font__size--20">{obj.title}</h5>
                    <p className="mb-0 normal font__size--14 color__gray-1">
                      {obj.desc}
                    </p>
                  </div>

                  <div className="button">
                    <div className="bold font__size--16 text__16-1024 btn__action color__white pointer">
                      LEARN MORE
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecService;
