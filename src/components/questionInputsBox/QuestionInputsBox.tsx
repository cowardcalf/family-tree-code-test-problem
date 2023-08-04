import React, { PropsWithChildren, ReactNode } from "react";
import "./questionInputsBox.css";

type QuestionInputsBoxProps = {
  children: ReactNode;
  onEnter: () => void;
};

const QuestionInputsBox = ({ children, onEnter }: PropsWithChildren<QuestionInputsBoxProps>) => {
  return (
    <div className="questionInputsBox">
      {children}
      {children ? <button onClick={onEnter}>Enter</button> : null}
    </div>
  );
};

export default QuestionInputsBox;
