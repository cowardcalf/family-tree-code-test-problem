import React from "react";
import "./questionInput.css";

type QuestionInputProps = {
  value?: string;
  title: string;
  onChange: (newValue: string) => void;
};

const QuestionInput = ({ value = "", title, onChange }: QuestionInputProps) => {
  const onChangeInner = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    onChange(newValue);
  };

  return (
    <div className="questionInput">
      <div className="questionInputTitle">{title}</div>
      <input type="text" value={value} onChange={onChangeInner} />
    </div>
  );
};

export default QuestionInput;
