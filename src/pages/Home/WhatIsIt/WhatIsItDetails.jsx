import React from 'react';

const WhatIsItDetails = () => {
  const whatIsItData = [
    {
      role: 'FOR INSTRUCTORS',
      buttonText: 'Start a class today',
      imageSrc: '/assets/WhatIsIt/instructor.png',
      altText: 'instructor',
    },
    {
      role: 'FOR STUDENTS',
      buttonText: 'Enter access code',
      imageSrc: '/assets/WhatIsIt/student.png',
      altText: 'student',
    },
  ];

  return (
    <div className="whatisit__details">
      <div className="whatisit-items">
        {whatIsItData.map((data, index) => (
          <div className="whatisit-items__item" key={index}>
            <div className="whatisit-items__info">
              <h6 className="whatisit-details__title">{data.role}</h6>
              <a href="/whatisit-details-start" className="btn whatisit-details__link">
                {data.buttonText}
              </a>
            </div>
            <img src={data.imageSrc} alt={data.altText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIsItDetails;
