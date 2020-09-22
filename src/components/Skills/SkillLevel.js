import React from "react";
import Database from "../../images/database.png";
import OOP from "../../images/oop.png";
import Framework from "../../images/framework.png";

const SkillLevel = () => {
  const getSkills = {
    skillContents: [
      {
        img: Database,
        heading: "Certified",
        alt: "database",
        point: ["Oracle OCA", "Posgresql", "Mysql"],
      },
      {
        img: OOP,
        heading: "Very Good",
        alt: "oop",
        point: ["Python 3.0", "Java", "JavaScript"],
      },
      {
        img: Framework,
        heading: "Very Good",
        alt: "framework",
        point: ["React.js", "Flask/Django", "Vue.js"],
      },
    ],
  };

  // display Skilled knowledge using map function
  const skilledKnowledge = getSkills.skillContents.map((skillContent) => {
    return (
      <div key={skillContent.alt}>
        <img src={skillContent.img} alt={skillContent.alt} className="logo" />
        <br />
        <h4>{skillContent.heading}</h4>
        <div>
          <p> {skillContent.point[0]}</p>
          <p> {skillContent.point[1]}</p>
          <p> {skillContent.point[2]}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="skill--content">
      <h3> skills overview</h3>
      <p style={{ textAlign: "center" }}>
        My passion is becoming the best in my field and ultimately in my region.
        From everything relating to Web-developement(HTML, CSS and JavaScript
        and its Frameworks), to database administration(Oracle, SQL and
        postgreSQL) and Machine Learning.
      </p>

      <div className="skill--knowledge">{skilledKnowledge}</div>
    </div>
  );
};

export default SkillLevel;
