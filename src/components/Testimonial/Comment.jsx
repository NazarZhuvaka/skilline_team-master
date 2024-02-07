import React from "react";

const Comment = () => {
  return (
    <div className="comm-container">
      <p className="title comm-title">
        "Thank you so much for your help. It's exactly what I've been looking
        for. You won't regret it. It really saves me time and effort. Skilline
        is exactly what our business has been lacking."
      </p>
      <div className="comm-info">
        <p className="comm-info__name">Gloria Rose</p>
        <div className="comm-info__mark">
            <img src="/assets/Testimonial/stars.svg" alt="starts" />
            <p className="comm-info__rev">12 reviews at Yelp</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
