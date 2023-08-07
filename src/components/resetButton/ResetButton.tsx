import React from "react";
import "./resetButton.css";

type ResetButtonProps = {
  onClick: () => void;
};

const ResetButton = ({ onClick }: ResetButtonProps) => {
  return (
    <div className="resetButton">
      <button onClick={onClick}>Reset data</button>
    </div>
  );
};

export default ResetButton;
