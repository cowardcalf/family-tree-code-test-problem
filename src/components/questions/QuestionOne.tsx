import React, { useState } from "react";
import QuestionContainer from "../questionContainer/QuestionContainer";
import { problems } from "../../constants/problems";
import QuestionInput from "../questionInput/QuestionInput";

const QuestionOne = () => {
  const [person, setPerson] = useState("");
  const [relation, setRelation] = useState("");
  const [result, setResult] = useState<string[]>([]);

  const inputs = [
    <QuestionInput key="q1Person" title="Person" value={person} onChange={setPerson} />,
    <QuestionInput key="q1Relation" title="Relation" value={relation} onChange={setRelation} />
  ];

  const onEnter = () => {
    setResult([person, relation]);
  };

  const resultStr = result.join(", ");

  return <QuestionContainer title={problems[0]} inputs={inputs} onEnter={onEnter} result={resultStr} />;
};

export default QuestionOne;
