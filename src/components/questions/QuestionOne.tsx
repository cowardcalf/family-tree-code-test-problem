import React, { useState } from "react";
import QuestionContainer from "../questionContainer/QuestionContainer";
import { problems } from "../../constants/problems";
import QuestionInput from "../questionInput/QuestionInput";
import QuestionListInput from "../questionListInput/QuestionListInput";
import { RelationsArray } from "../../types/relation";
import { PersonMap } from "../../types/personMap";

type QuestionOneProps = {
  personMap: PersonMap;
};

const QuestionOne = ({ personMap }: QuestionOneProps) => {
  const [person, setPerson] = useState("");
  const [relation, setRelation] = useState("");
  const [result, setResult] = useState<string[]>([]);

  const inputs = [
    <QuestionInput key="q1Person" title="Person" value={person} onChange={setPerson} />,
    <QuestionListInput
      key="q1Relation"
      title="Relation"
      value={relation}
      onChange={setRelation}
      options={RelationsArray}
    />
  ];

  const onEnter = () => {
    if (!person || !relation) {
      alert("Please input a valid person and relation");
    } else if (!personMap[person]) {
      alert("There is no this person");
    } else {
      setResult([person, relation]);
    }
  };

  const resultStr = result.join(", ");

  return <QuestionContainer title={problems[0]} inputs={inputs} onEnter={onEnter} result={resultStr} />;
};

export default QuestionOne;
