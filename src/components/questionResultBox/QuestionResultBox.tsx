import React from "react";
import "./questionResultBox.css";

type QuestionResultBoxProps = {
  value?: string;
};

const QuestionResultBox = ({ value = "" }: QuestionResultBoxProps) => {
  return <div className="questionResultBox">{value}</div>;
};

export default QuestionResultBox;
