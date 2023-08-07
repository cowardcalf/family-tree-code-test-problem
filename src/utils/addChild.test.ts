import { INIT_PERSONS } from "../data/initData";
import { Gender } from "../types/gender";
import { PersonMap } from "../types/personMap";
import { addChild } from "./addChild";
import { buildData } from "./buildData";

const personMap = buildData(INIT_PERSONS);

describe("Test addChild", () => {
  test("Should not change when motherName is not available", () => {
    const expected = personMap;
    const actual = addChild("", "New child", Gender.Male, personMap);
    expect(actual).toEqual(expected);
  });

  test("Should not change when childName is not available", () => {
    const expected = personMap;
    const actual = addChild("Satya", "", Gender.Male, personMap);
    expect(actual).toEqual(expected);
  });

  test("Should not add child if the mother has no husband", () => {
    const updatedMap = Object.assign({}, personMap);
    updatedMap["Lavnya"] = Object.assign({}, updatedMap["Lavnya"], { spouse: undefined });
    delete updatedMap["Gru"];
    const expected = updatedMap;
    const actual = addChild("Lavnya", "New Son", Gender.Male, updatedMap);
    expect(actual).toEqual(expected);
  });

  test("Should add son properly", () => {
    const expected: PersonMap = Object.assign(
      {
        NewSon: {
          name: "NewSon",
          gender: Gender.Male,
          father: "Gru",
          mother: "Lavnya"
        }
      },
      personMap
    );
    expected["Lavnya"] = Object.assign({}, expected["Lavnya"], { sons: ["NewSon"] });
    expected["Gru"] = Object.assign({}, expected["Gru"], { sons: ["NewSon"] });
    const actual = addChild("Lavnya", "NewSon", Gender.Male, personMap);
    expect(actual).toEqual(expected);
  });

  test("Should add daughter properly", () => {
    const expected: PersonMap = Object.assign(
      {
        NewDaughter: {
          name: "NewDaughter",
          gender: Gender.Female,
          father: "Gru",
          mother: "Lavnya"
        }
      },
      personMap
    );
    expected["Lavnya"] = Object.assign({}, expected["Lavnya"], { daughters: ["NewDaughter"] });
    expected["Gru"] = Object.assign({}, expected["Gru"], { daughters: ["NewDaughter"] });
    const actual = addChild("Lavnya", "NewDaughter", Gender.Female, personMap);
    expect(actual).toEqual(expected);
  });
});
