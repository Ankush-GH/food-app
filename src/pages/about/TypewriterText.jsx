import React from "react";
import { Typewriter } from "react-simple-typewriter";

const typewriterWords = ["MEALS", "SHAKES", "COFFEE", "DIET MEALS", "CUISINES"];

const TypewriterText = () => {
  return (
    <div className="about-mainheader">
      <h2 className="about-header">
        We Serve the Best &nbsp;
        <Typewriter
          className="about-header"
          words={typewriterWords}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
    </div>
  );
};

export default TypewriterText;
