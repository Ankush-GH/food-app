import React from "react";
import TextTransition, { presets } from "react-text-transition";

import "./TextTransition.css";

const TEXTS = [
  "Order your Favourite Food",
  "Popular Meals at Best Prices",
  "Special Meals for Gym Diet",
];

const ChangingText = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3200 // every 3.5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="app__texttransition flex__center">
      <TextTransition className="TT" springConfig={presets.molasses}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </div>
  );
};

export default ChangingText;
