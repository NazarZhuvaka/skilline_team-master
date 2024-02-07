import TestimonialElement from "../../../components/Testimonial/TestimonialElement";
import Comment from "../../../components/Testimonial/Comment";

export const Testimonial = () => {
  return (
    <>
      <section className="testimonial">
        <div className="testimonial__container">
          <div className="testimonial__info">
            <div className="testimonial__info__name">
              <span className="testimonial__info__name-line"></span>
              <p className="testimonial__info__name-text">TESTIMONIAL</p>
            </div>
            <h3 className="testimonial__info-title">What They Say?</h3>
            <p className="desc testimonial__info-desc">
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p className="desc testimonial__info-text">
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className="desc testimonial__info-ques">
              Are you too? Please give your assessment
            </p>
            <a href="/testimonial-assessment" className="btn testimonial__btn">
              Write your assessment
              <img
                className="testimonial__arow"
                src="/assets/Testimonial/arrow.png"
                alt="arrow"
              />
            </a>
          </div>
          <div className="testimonial__img">
            <TestimonialElement />
            <Comment/>
          </div>
        </div>
      </section>
    </>
  );
};
