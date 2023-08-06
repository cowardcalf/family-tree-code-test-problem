import React from "react";
import "./rootContainer.css";
import QuestionOne from "../questions/QuestionOne";
import { PersonMap } from "../../types/personMap";

type RootContainerProps = {
  personMap: PersonMap;
};

const RootContainer = ({ personMap }: RootContainerProps) => {
  return (
    <div className="rootContainer">
      <QuestionOne personMap={personMap} />
    </div>
  );
};

export default RootContainer;
