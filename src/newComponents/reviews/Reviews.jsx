import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import "./Reviews.css";
import ReviewCard from "../../ui/reviewcard/ReviewCard";
import { useRef } from "react";

const Reviews = () => {
  const ref = useRef(null);

  const prevHandler = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft - width;
  };

  const nextHandler = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft + width;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="reveiws-mainheader p__nobills">Reviews</h1>
      <div className="review-carousel flex__center">
        <BiLeftArrow className="pre-btn pointer" onClick={prevHandler} />

        <div className="review-container" ref={ref}>
          <ReviewCard
            name="Ricky"
            rev="4"
            desc="The restaurant offers some great selected dishes - mainly Italian and Mediterranean. Hummus and rissotto is something that I like the most. I feel visit the restaurant and it's a great place to have food with freind and family."
          />
          <ReviewCard
            name="John"
            rev="5"
            desc="I had seen this restaurant in Matunga many times but never went inside. Saw it on UberEats on offer and thought of ordering some food. Ordered Chicken Frankie with Chicken Pasta in White Sauce and soft drink meal for Rs. 99. Chicken Frankie: Roti was a bit on the chewier side but the taste of sauce and chicken was good. 3.5/5 on taste. Chicken pasta in white sauce"
          />
          <ReviewCard
            name="Mendy"
            rev="3"
            desc="It is a fairly good place for college kids who crave Chinese food and want it pocket friendly. There is no ambience as such just a couple of tables. The service is quick but the staff seems nonchalant. However the food is quite tasty. We tried Veg Schezwan noodles and Veg Manchurian rice. We also tried Chicken triple fried rice which was also quite good"
          />
          <ReviewCard
            name="Johnny"
            rev="5"
            desc="Good to see an Indian cafe open in Phoenix. Not only is their chai good, their food, like pav bhaji is good too. One less point is for their bhajis, could have been better"
          />
          <ReviewCard
            name="Janice"
            rev="5"
            desc="Since it is ITC, you do not have to look any further. One of the best restaurant when it comes to Indian food. Their dal makhani is to die for. Service levels are excellent and worth every penny that you spend. Ambience is fabulous"
          />
          <ReviewCard
            name="Roy"
            rev="4"
            desc="After having visited Phoenix’s Jamie Pizzeria, wanted to try this outlet at Seawoods. We ordered the Super Green Pizza with additional Paneer and green chilly toppings"
          />
          <ReviewCard
            name="Gary"
            rev="3"
            desc="Crowded, but the service was quick and excellent. Place is also kept neat and clean"
          />
          <ReviewCard
            name="Stacy"
            rev="3"
            desc="This place looks a little congested, but does offer good buffet. Their veg food is good too, but is preferred by non vegetarians. Their pani puri bowled me out"
          />
          <ReviewCard
            name="Dany"
            rev="5"
            desc="Since we had already been to their Lower Parel, Kala Ghoda and Andheri branch, we had high expectation and it turned up one notch above the rest. Ambience was good with Bollywood music playing, made a nice environment for a good evening"
          />
          <ReviewCard
            name="James"
            rev="5"
            desc="I had a lot of expectation from Tibb’s frankie. Had read good reviews about it. We ordered Tandoori paneer frankie and it turned out to be a big disappointment"
          />
        </div>

        <BiRightArrow className="next-btn pointer" onClick={nextHandler} />
      </div>
    </div>
  );
};

export default Reviews;
