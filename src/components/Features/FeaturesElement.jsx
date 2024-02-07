import React from "react";
import features__1 from "/assets/Features/features__1.png";
import features__2 from "/assets/Features/features__2.png";
import features__3 from "/assets/Features/features__3.png";
import features__4 from "/assets/Features/features__4.png";

const FeaturesElement = () => {
  const featuresEl = [
    {
      title: (
        <>
          <span>Tools</span> For Teachers And Learners
        </>
      ),
      text: "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
      img: features__1,
      imgWidth: 637,
    },
    {
      title: (
        <>
          Assessments, <span>Quizzes</span> , Tests
        </>
      ),
      text: "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
      img: features__2,
      imgWidth: 617,
    },
    {
      title: (
        <>
          <span>Class Management</span> Tools for Educators
        </>
      ),
      text: "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.",
      img: features__3,
      imgWidth: 808,
    },
    {
      title: (
        <>
          One-on-One <span>Discussions</span>
        </>
      ),
      text: "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
      img: features__4,
      imgWidth: 755,
    },
  ];

  return (
    <ul className="features__list">
      {featuresEl.map((item, index) => (
        <li
          key={index}
          className={`features__list-element ${
            index % 2 === 0 ? "img-left" : "img-right"
          }`}
        >
          <div className="wrap">
            <h3 className="features__list-title title">
              {item.title}
              <span>{item.titleOrange}</span>
            </h3>
            <p className="text desc">{item.text}</p>
          </div>
          <img src={item.img} width={item.imgWidth} alt="" className="img" />
        </li>
      ))}
    </ul>
  );
};

export default FeaturesElement;
