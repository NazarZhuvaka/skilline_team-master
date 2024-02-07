import { React, useRef } from "react";
import img1 from "/assets/Testimonial/testimonial-woman.png";
import img2 from "/assets/Testimonial/testimonial-woman.png";
import img3 from "/assets/Testimonial/testimonial-woman.png";
import img4 from "/assets/Testimonial/testimonial-woman.png";
import img5 from "/assets/Testimonial/testimonial-woman.png";

const TestimonialElement = () => {
  let imageContainerRef = useRef(null);

  const images = [img1, img2, img3, img4, img5];

  const next = () => {
    console.log("Next button clicked");
    const slideWidth = imageContainerRef.current.children[0].offsetWidth;
    imageContainerRef.current.scrollLeft += slideWidth;

    if (
      imageContainerRef.current.scrollLeft +
        imageContainerRef.current.offsetWidth >=
      imageContainerRef.current.scrollWidth
    ) {
      imageContainerRef.current.scrollLeft = 0;
    }
  };

  return (
    <div className="testimonial-slider">
      <div className="content">
        <div className="slide-panel" ref={imageContainerRef}>
          {images.map((image, index) => (
            <img
              key={index}
              className="img-scroll"
              src={image}
              alt={`woman ${index}`}
            />
          ))}
        </div>
        <div className="next" onClick={next}>
          <img
            className="next__img"
            src="/assets/Testimonial/arrow2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialElement;
