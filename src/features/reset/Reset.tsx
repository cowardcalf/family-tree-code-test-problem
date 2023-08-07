import React from "react";
import ResetButton from "../../components/resetButton/ResetButton";
import { useAppDispatch } from "../../app/hooks";
import { initData } from "../personMap/personMap";

const Reset = () => {
  const dispatch = useAppDispatch();

  return <ResetButton onClick={() => dispatch(initData())} />;
};

export default Reset;
