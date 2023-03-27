import React from "react";
import "./ReviewCard.css";
import profile from "../../newAssets/profile.webp";
import FilledStar from "../../ui/stars/FilledStar";
import Unfillstar from "../../ui/stars/UnfilledStar";

const ReviewCard = ({ name, desc, rev }) => {
  return (
    <div className="review-card">
      <h2 className="name p__nobills">{name}</h2>
      <img className="rev-img" src={profile} alt="profile" />
      <div className="stars">
        {rev === "4" && (
          <>
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <Unfillstar />
          </>
        )}
        {rev === "5" && (
          <>
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <FilledStar />
          </>
        )}
        {rev === "3" && (
          <>
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <Unfillstar />
            <Unfillstar />
          </>
        )}
      </div>
      <h6 className="desc p__acme" style={{ color: "black" }}>
        {desc}
      </h6>
    </div>
  );
};

export default ReviewCard;
