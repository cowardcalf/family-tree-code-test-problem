import React, { ReactNode } from "react";
import "./questionContainer.css";
import QuestionInputsBox from "../questionInputsBox/QuestionInputsBox";
import QuestionResultBox from "../questionResultBox/QuestionResultBox";

type questionContainerProps = {
  title?: string;
  inputs: ReactNode;
  result?: string;
  onEnter: () => void;
};

const QuestionContainer = ({ title = "Question", inputs, result, onEnter }: questionContainerProps) => {
  return (
    <div className="questionContainer">
      <p>{title}</p>
      <QuestionInputsBox onEnter={onEnter}>{inputs}</QuestionInputsBox>
      <QuestionResultBox value={result} />
    </div>
  );
};

export default QuestionContainer;
