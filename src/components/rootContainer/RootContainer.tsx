import React from "react";
import "./rootContainer.css";
import QuestionOne from "../../features/questions/QuestionOne";
import Reset from "../../features/reset/Reset";

const RootContainer = () => {
  return (
    <div className="rootContainer">
      <Reset />
      <QuestionOne />
    </div>
  );
};

export default RootContainer;
