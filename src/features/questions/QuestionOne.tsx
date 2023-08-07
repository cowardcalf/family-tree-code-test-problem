import React, { useState } from "react";
import QuestionContainer from "../../components/questionContainer/QuestionContainer";
import { problems } from "../../constants/problems";
import QuestionListInput from "../../components/questionListInput/QuestionListInput";
import { Relation, RelationsArray } from "../../types/relation";
import { findPersonOfRelation } from "../../utils/findPersonOfRelation";
import { useSelector } from "react-redux";
import { getPersonMap } from "../personMap/personMap";

const QuestionOne = () => {
  const [person, setPerson] = useState("");
  const [relation, setRelation] = useState("");
  const [result, setResult] = useState<string[] | null>(null);
  const personMap = useSelector(getPersonMap);

  const personNames = Object.keys(personMap);

  const clearResult = () => setResult(null);

  const onPersonChange = (newValue: string) => {
    clearResult();
    setPerson(newValue);
  };

  const onRelationChange = (newValue: string) => {
    clearResult();
    setRelation(newValue);
  };

  const inputs = [
    <QuestionListInput key="q1Person" title="Person" value={person} onChange={onPersonChange} options={personNames} />,
    <QuestionListInput
      key="q1Relation"
      title="Relation"
      value={relation}
      onChange={onRelationChange}
      options={RelationsArray}
    />
  ];

  const onEnter = () => {
    if (!person || !relation) {
      alert("Please input a valid person and relation");
    } else if (!personMap[person]) {
      alert("There is no this person");
    } else if (!Object.values(Relation).includes(relation as Relation)) {
      alert("There is no such relation");
    } else {
      setResult(findPersonOfRelation(person, relation as Relation, personMap));
    }
  };

  const resultStr = result
    ? result.length > 0
      ? `Result: ${person}'s ${relation} ${result.length > 1 ? "are" : "is"} ${result.join(", ")}`
      : `Result: ${person} has no ${relation}`
    : "";

  return <QuestionContainer title={problems[0]} inputs={inputs} onEnter={onEnter} result={resultStr} />;
};

export default QuestionOne;
