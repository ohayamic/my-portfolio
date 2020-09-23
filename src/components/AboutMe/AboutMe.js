import React from "react";
import hero from "../../images/mike.jpeg";
import calendar from "../../images/calendar.png";
import facebook from "../../images/facebook.png";
import house from "../../images/house.png";
import mail from "../../images/mail.png";
import telephone from "../../images/telephone.png";
import xing from "../../images/xing.png";
import "./AboutMe.css";
const infos = [
  { id: 1, img: calendar, text: "9th October" },
  { id: 2, img: telephone, text: "+4917647167980" },
  { id: 3, img: mail, text: "michael.onyebuchi.ohaya@gmail.com" },
  { id: 4, img: house, text: "Wilhelm-külz-straße-22, 99423, Weimar" },
];
const About = () => {
  const handleClick = (e) => {
    const getId = e.currentTarget.dataset.id;
    //console.log(getBtn)
    const getContent = document.querySelectorAll(".content");
    getContent.forEach((content) => {
      //console.log(content.id)

      if (content.id === getId) {
        content.classList.add("active");
      } else {
        e.currentTarget.classList.remove("active");
        content.classList.remove("active");
      }
    });
  };
  // const handleClick = () =>{
  //     const content = document.querySelector('.about')
  //     console.log(content.target)
  // }
  return (
    <section id="about" className="section">
      <div className="title">
        <h2>
          about <span>me</span>
        </h2>
        <p>
          Hi, I'm Michael a Junior Frontend/Full-Stack Software Developer. My
          passion is in building Websites and Applications using Flask/Django
          for the Backend with databases like Postgresql or SQL or MYSQL and
          HTML, CSS, Javascript and React.js for Frontend were the individuals
          (mostly African International in Thüringen State) can collaborate and
          share ideas in other to fight problems facing their motherland and the
          society they are in. I also love learning new Technologies such as
          Machine Learning, Database Technologies and finally customer relations
        </p>
      </div>
      <div className="about-center section-center">
        <article className="about-image-container">
          <img src={hero} alt="heroImage" className="about-img "></img>
        </article>
        <article className="about">
          <div className="aboutme-btn-container">
            <button
              className="tab-btn act"
              data-id="contact"
              onClick={handleClick}
            >
              contact
            </button>
            <button
              className="tab-btn act"
              data-id="history"
              onClick={handleClick}
            >
              history
            </button>

            <button className="tab-btn" data-id="goals" onClick={handleClick}>
              goals
            </button>
          </div>
          <article className="about-content">
            <div className="content active" id="contact">
              <h4>Junior Web Developer (React.js)</h4>
              <p>
                As a Junior Web Developer, I am passionate about
                web-applications that engages users that visits it in other to
                create useful user experience and satisfaction.
              </p>
              {infos.map((info) => {
                return (
                  <div
                    key={info.id}
                    className="aboutme-info"
                    style={{ display: "flex", boxSizing: "border-box" }}
                  >
                    <img
                      src={info.img}
                      alt={info.img}
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                      }}
                    />
                    <p style={{ paddingTop: "2px", marginBottom: "10px" }}>
                      {info.text}{" "}
                    </p>
                  </div>
                );
              })}
              <div style={{ display: "flex", marginTop: "0.3rem" }}>
                <h4 style={{ margin: "8px 5px 2px" }}>Social media : </h4>
                <img
                  src={facebook}
                  alt="facebook"
                  style={{
                    width: "30px",
                    height: "30px",
                    paddingTop: "2px",
                    marginRight: "10px",
                  }}
                />
                <img
                  src={xing}
                  alt="xing"
                  style={{ width: "35px", height: "35px" }}
                />
              </div>
            </div>
            <div className="content" id="history">
              <h4>history</h4>
              <p>
                A Nigerian, born in the Commercial Capital of Africa (Lagos)
                into the family Anthony and Eunice Ohaya with wonderful
                siblings. Early years of my educational pursuit took place in
                the west of the country but my University education took place
                in the east. I have visited much of my country with more than
                600 tribes. In the east around 7 states, in the north 4 states
                and west 5 states where I grew up. I am out-going, friendly,
                love music, thoughtful and inquisitive. Finally, I love learning
                new technologies and open to change.
              </p>
            </div>

            <div className="content" id="goals">
              <h4>goals</h4>
              <p>
                Set goals that excite you and scare you at the same time. As
                they say, you should set goals beyond your reach so you always
                have something to live for. Another qoutes writes: if you want
                to be happy, set a goal that commands your thought, liberates
                your energy and inspires your hopes.
              </p>
              <h4>
                <small>
                  " My goal for this year is being an expert in javascript,
                  React.js "
                </small>
              </h4>
            </div>
          </article>
        </article>
      </div>
    </section>
  );
};

export default About;