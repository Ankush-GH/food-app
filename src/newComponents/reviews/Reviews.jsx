import React from "react";

import "./Reviews.css";
import FilledStar from "../../ui/stars/FilledStar";
import UnfilledStar from "../../ui/stars/UnfilledStar";
import Profile from "../../newAssets/profile.webp";

const Reviews = () => {
  return (
    <div className="app__reviews flex__center">
      <h1 className="reviews-mainheader p__nobills flex__center">
        Reviews From Customers
      </h1>

      <div className="review-container">
        <img className="review-img" src={Profile} alt="profile pictures" />
        <h3 className="reviews-header">Travis James</h3>
        <div className="STARS">
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <UnfilledStar />
          <UnfilledStar />
        </div>
        <p className="reviews-p">
          The Food we had enjoyed at the time of dinner. It was really delicious
          taste with great quality, everything had unique taste which we had
          ordered, nice arrangement and services from the staff while eating, we
          found nothing bad.
        </p>
      </div>
      <div className="review-container">
        <img className="review-img" src={Profile} alt="profile pictures" />
        <h3 className="reviews-header">Joe Thomas</h3>
        <div className="STARS">
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <FilledStar />
        </div>
        <p className="reviews-p">
          I and my friend had dinner here one of the nights we were in Kalpetta.
          The ambiance was good and the food recommendations were great. We had
          a traditional Arabian rice and chicken preparation, Kuzhi Manthi. It
          was our first experience having this dish, and although a bit dry, it
          tasted great.
        </p>
      </div>
      <div className="review-container">
        <img className="review-img" src={Profile} alt="profile pictures" />
        <h3 className="reviews-header">Jacob William</h3>
        <div className="STARS">
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <UnfilledStar />
        </div>
        <p className="reviews-p">
          "I recently switched my online meal ordering platform from a big
          company that was taking 13% of every order to your free online
          ordering platform. I am VERY PLEASED with your service —the ease of
          setup, functionality, multiple delivery zone, visually appealing
          layout and format all for a GENUINELY FREE COST.
        </p>
      </div>
    </div>
  );
};

export default Reviews;
