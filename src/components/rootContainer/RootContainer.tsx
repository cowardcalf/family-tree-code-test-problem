import React from "react";
import "./rootContainer.css";
import QuestionOne from "../../features/questions/QuestionOne";
import Reset from "../../features/reset/Reset";
import QuestionTwo from "../../features/questions/QuestionTwo";

const RootContainer = () => {
  return (
    <div className="rootContainer">
      <Reset />
      <QuestionOne />
      <QuestionTwo />
    </div>
  );
};

export default RootContainer;
