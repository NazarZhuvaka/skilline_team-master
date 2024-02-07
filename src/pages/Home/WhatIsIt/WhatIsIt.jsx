import WhatIsItDetails from "./WhatIsItDetails";

export const WhatIsIt = () => {
  return (
    <section className="whatisit">
      <div className="whatisit__container">
        <div className="whatisit__info">
          <h2 className="title whatisit__title">
            What is <span>Skilline?</span>
          </h2>
          <p className="desc whatisit__desc">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <WhatIsItDetails />
        <div className="whatisit-classroom">
          <div className="whatisit-classroom__info">
            <h3 className=" title whatisit-classroom__title">
              Everything you can do in a physical classroom,
              <span>you can do with Skilline</span>
            </h3>
            <p className="desc whatisit-classroom__desc">
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <a href="/whatisit-learn-more" className="whatisit-classroom__link">
              Learn more
            </a>
          </div>
          <div className="whatisit-classroom__video">
            <img src="/assets/WhatIsIt/confident.png" alt="confident" />
            <a href="/whatisit-play" className="whatisit-classroom__play">
              <img src="/assets/WhatIsIt/play.svg" alt="play button" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
