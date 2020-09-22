import React from "react";

const SkillPercentage = () => {
  const getSkills = {
    skills: [
      { title: "JavaScript/ES6", id: 92, point: "one" },
      { title: "Python 3.0", id: 83, point: "two" },
      { title: "React.js", id: 90, point: "three" },
      { title: "Flask/Django Framework", id: 80, point: "four" },
      { title: "HTML/CSS", id: 95, point: "five" },
      { title: "CSS Grid/CSS Flexbox", id: 85, point: "six" },
    ],
  };

  window.onscroll = () => {
    const getDivs = document.querySelectorAll(".percentage");
    //const getFirst = document.querySelector('#first')
    getDivs.forEach((getDiv) => {
      let id = getDiv.dataset.id;
      if (window.pageYOffset > 1400) {
        //console.log(getDiv.style)
        getDiv.firstChild.innerHTML = `${id}%`;
        getDiv.firstChild.style.margin = "0 auto";
      }
    });
  };

  // Map through the object and display the content
  const percentage = getSkills.skills.map((skill) => {
    return (
      <div className="skill--percentage" key={skill.id}>
        <small>{skill.title}</small>
        <div className={`percentage ${skill.point}`} data-id={skill.id}>
          <small></small>
        </div>
      </div>
    );
  });
  return (
    <div className="skill--content">
      <h3> skills percentage</h3>

      {percentage}
    </div>
  );
};

export default SkillPercentage;
