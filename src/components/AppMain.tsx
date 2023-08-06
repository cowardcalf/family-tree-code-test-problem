import React from "react";
import RootContainer from "./rootContainer/RootContainer";
import { buildData } from "../utils/buildData";
import { INIT_PERSONS } from "../data/initData";

const AppMain = () => {
  const personMap = buildData(INIT_PERSONS);

  return <RootContainer personMap={personMap} />;
};

export default AppMain;
