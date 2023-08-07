import React, { useState } from "react";
import QuestionContainer from "../../components/questionContainer/QuestionContainer";
import { problems } from "../../constants/problems";
import QuestionListInput from "../../components/questionListInput/QuestionListInput";
import { useSelector } from "react-redux";
import { addChild, getPersonMap } from "../personMap/personMap";
import { Gender } from "../../types/gender";
import QuestionInput from "../../components/questionInput/QuestionInput";
import { PersonMap } from "../../types/personMap";
import { useAppDispatch } from "../../app/hooks";

const isValidMother = (name: string, personMap: PersonMap) => {
  const person = personMap[name];
  return person && person.gender === Gender.Female && person.spouse;
};

const QuestionTwo = () => {
  const [mother, setMother] = useState("");
  const [gender, setGender] = useState(Gender.Male);
  const [child, setChild] = useState("");
  const [result, setResult] = useState(false);

  const dispatch = useAppDispatch();

  const personMap = useSelector(getPersonMap);

  // Available mother names
  const motherNames = Object.keys(personMap).filter(mn => isValidMother(mn, personMap));

  const clearResult = () => setResult(false);

  const onMotherChange = (newValue: string) => {
    clearResult();
    setMother(newValue);
  };

  const onGenderChange = (newValue: string) => {
    clearResult();
    setGender(newValue as Gender);
  };

  const onChildChange = (newValue: string) => {
    clearResult();
    setChild(newValue);
  };

  const inputs = [
    <QuestionListInput key="q2Mother" title="Mother" value={mother} onChange={onMotherChange} options={motherNames} />,
    <QuestionListInput
      key="q2Gender"
      title="Child gender"
      value={gender}
      onChange={onGenderChange}
      options={Object.keys(Gender)}
    />,
    <QuestionInput key="q2Child" title="Child name" value={child} onChange={onChildChange} />
  ];

  const onEnter = () => {
    if (!mother || !child || !gender) {
      alert("Please input valid mother name, child name and child gender");
    } else if (!isValidMother(mother, personMap)) {
      alert("A mother must be an existing married female");
    } else {
      dispatch(addChild({ mother, gender, child }));
      setResult(true);
    }
  };

  const resultStr = result ? `${mother} has a new ${gender === Gender.Male ? "son" : "daughter"} named ${child}` : "";

  return <QuestionContainer title={problems[1]} inputs={inputs} onEnter={onEnter} result={resultStr} />;
};

export default QuestionTwo;
