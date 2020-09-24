import React from "react";
import hero from "../images/mike.jpeg";

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
          passion is in building Websites and Applications for both frontend and
          backend using the framework Flask/Django/React.js. For the backend I
          am proficient with Postgresql or SQL or MYSQL and python. On the
          other-hand, I use HTML, CSS and Javascript for Frontend. Currently
          developing an application (mostly International) where individuals
          collaborate and share ideas in other to fight problems facing their
          motherland and the society in which they are in.{" "}
          <h5>
            I also love learning new Technologies such as Machine Learning,
            other web technologies, Database Technologies and customer relations
          </h5>
        </p>
      </div>
      <div className="about-center section-center">
        <article className="about-image-container">
          <img src={hero} alt="heroImage" className="about-img "></img>
        </article>
        <article className="about">
          <div className="btn-container">
            <button
              className="tab-btn active"
              data-id="history"
              onClick={handleClick}
            >
              history
            </button>
            <button className="tab-btn" data-id="vision" onClick={handleClick}>
              vision
            </button>
            <button className="tab-btn" data-id="goals" onClick={handleClick}>
              goals
            </button>
          </div>
          <article className="about-content">
            <div className="content active" id="history">
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
            <div className="content" id="vision">
              <h4>vision</h4>
              <p>
                The more clear you are about what you want, the more likely you
                are to achieve it. The most pathetic person in the world is some
                one who has sight but no vision. Be brave enough to live the
                life of your dreams according to your vision and purpose instead
                of the expectations and opinions of others. Just as other good
                leaders have vision and inspire others to help them turn vision
                into reality, my dream is to inspire other young Nigerians to
                achieve their vision. Great leaders create more leaders, not
                followers. Great leaders have vision, share vision, and inspire
                others to create their own.
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
