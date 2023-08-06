import React from "react";
import "./questionListInput.css";

type QuestionListInputProps = {
  value?: string;
  title: string;
  onChange: (newValue: string) => void;
  options: string[];
};

const QuestionListInput = ({ value = "", title, onChange, options }: QuestionListInputProps) => {
  const onChangeInner = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    onChange(newValue);
  };

  return (
    <div className="questionListInput">
      <div className="questionListInputTitle">{title}</div>
      <input list={title} value={value} onChange={onChangeInner} />
      <datalist id={title}>
        {options.map(opt => (
          <option key={opt} value={opt} />
        ))}
      </datalist>
    </div>
  );
};

export default QuestionListInput;
