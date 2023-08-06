import { INIT_PERSONS } from "../data/initData";
import { Gender } from "../types/gender";
import { PersonMap } from "../types/personMap";
import { Relation } from "../types/relation";
import { buildData } from "./buildData";
import { findPersonOfRelation } from "./findPersonOfRelation";

const personMap = buildData(INIT_PERSONS);

describe("Test findPersonOfRelation", () => {
  test("Should return empty array when personName is empty", () => {
    const expected: string[] = [];
    const actual = findPersonOfRelation("", Relation.Father, personMap);
    expect(actual).toEqual(expected);
  });

  test("Should return empty array when no such person in the map", () => {
    const expected: string[] = [];
    const actual = findPersonOfRelation("fake person", Relation.Father, personMap);
    expect(actual).toEqual(expected);
  });

  describe("Test get father relation", () => {
    test("Should return empty array when the person has no father", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Ambi", Relation.Father, personMap);
      expect(actual).toEqual(expected);
    });

    test("Should return proper father", () => {
      const expected: string[] = ["Vich"];
      const actual = findPersonOfRelation("Vila", Relation.Father, personMap);
      expect(actual).toEqual(expected);
    });
  });

  describe("Test get mother relation", () => {
    test("Should return empty array when the person has no mother", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Ambi", Relation.Mother, personMap);
      expect(actual).toEqual(expected);
    });

    test("Should return proper mother", () => {
      const expected: string[] = ["Lika"];
      const actual = findPersonOfRelation("Vila", Relation.Mother, personMap);
      expect(actual).toEqual(expected);
    });
  });

  describe("Test get children relation", () => {
    test("Should return empty array when the person has no children", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Chika", Relation.Children, personMap);
      expect(actual).toEqual(expected);
    });

    test("Should return proper sons and daughters", () => {
      const expected: string[] = ["Ish", "Chit", "Vich", "Satya"];
      const actual = findPersonOfRelation("King Shan", Relation.Children, personMap);
      expect(actual).toEqual(expected);
    });
  });

  describe("Test get son relation", () => {
    test("Should return empty array when the person has no sons", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Vila", Relation.Son, personMap);
      expect(actual).toEqual(expected);
    });

    test("Should return proper sons", () => {
      const expected: string[] = ["Ish", "Chit", "Vich"];
      const actual = findPersonOfRelation("King Shan", Relation.Son, personMap);
      expect(actual).toEqual(expected);
    });
  });

  describe("Test get daughter relation", () => {
    test("Should return empty array when the person has no daughters", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Savya", Relation.Daughter, personMap);
      expect(actual).toEqual(expected);
    });

    test("Should return proper daughters", () => {
      const expected: string[] = ["Satya"];
      const actual = findPersonOfRelation("King Shan", Relation.Daughter, personMap);
      expect(actual).toEqual(expected);
    });
  });

  describe("Test get brothers relation", () => {
    test("Should return empty array when the person has no brothers", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Vila", Relation.Brothers, personMap);
      expect(actual).toEqual(expected);
    });

    test("Should return proper brothers", () => {
      const expected: string[] = ["Ish", "Chit"];
      const actual = findPersonOfRelation("Vich", Relation.Brothers, personMap);
      expect(actual).toEqual(expected);
    });
  });

  describe("Test get sisters relation", () => {
    test("Should return empty array when the person has no sisters", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Drita", Relation.Sisters, personMap);
      expect(actual).toEqual(expected);
    });

    test("Should return proper sisters", () => {
      const expected: string[] = ["Satya"];
      const actual = findPersonOfRelation("Vich", Relation.Sisters, personMap);
      expect(actual).toEqual(expected);
    });
  });

  describe("Test get granddaughter relation", () => {
    test("Should return empty array when the person has no granddaughter", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Satya", Relation.GrandDaughter, personMap);
      expect(actual).toEqual(expected);
    });

    test("Should return proper granddaughter", () => {
      const expected: string[] = ["Lavnya"];
      const actual = findPersonOfRelation("Vich", Relation.GrandDaughter, personMap);
      expect(actual).toEqual(expected);
    });

    test("Should include proper granddaughter in further depth", () => {
      const expected: string[] = ["Driya", "Chika", "Lavnya", "Satvy"];
      const actual = findPersonOfRelation("King Shan", Relation.GrandDaughter, personMap);
      expect(actual).toEqual(expected);
    });
  });

  describe("Test get cousins relation", () => {
    test("Should return empty array when the person has no cousins", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Lavnya", Relation.Cousins, personMap);
      expect(actual).toEqual(expected);
    });

    test("Should return proper cousins", () => {
      const expected: string[] = ["Vila", "Chika", "Savya", "Saayan", "Satvy"];
      const actual = findPersonOfRelation("Drita", Relation.Cousins, personMap);
      expect(actual).toEqual(expected);
    });
  });

  describe("Test get brothers in law relation", () => {
    test("Should return empty array when the person has no brothers in law", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Jnki", Relation.BrotherInLaw, personMap);
      expect(actual).toEqual(expected);
    });

    describe("Should return proper brothers in law", () => {
      test("Brothers in law should include spouse's brother", () => {
        const expected: string[] = ["Vila"];
        const actual = findPersonOfRelation("Kpila", Relation.BrotherInLaw, personMap);
        expect(actual).toEqual(expected);
      });

      test("Brothers in law should include sister's husband", () => {
        const expected: string[] = ["Asva"];
        const actual = findPersonOfRelation("Savya", Relation.BrotherInLaw, personMap);
        expect(actual).toEqual(expected);
      });
    });
  });

  describe("Test get sisters in law relation", () => {
    test("Should return empty array when the person has no sisters in law", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Jaya", Relation.SisterInLaw, personMap);
      expect(actual).toEqual(expected);
    });

    describe("Should return proper sisters in law", () => {
      test("Sisters in law should include spouse's sisters", () => {
        const expected: string[] = ["Chika"];
        const actual = findPersonOfRelation("Jnki", Relation.SisterInLaw, personMap);
        expect(actual).toEqual(expected);
      });

      test("Sisters in law should include brother's wife", () => {
        const expected: string[] = ["Krpi", "Mina"];
        const actual = findPersonOfRelation("Satvy", Relation.SisterInLaw, personMap);
        expect(actual).toEqual(expected);
      });
    });
  });

  describe("Test get maternal aunt relation", () => {
    test("Should return empty array when the person has no maternal aunt", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Driya", Relation.MaternalAunt, personMap);
      expect(actual).toEqual(expected);
    });

    describe("Should return proper maternal aunt", () => {
      test("Maternal aunt should include mother's sisters and sisters in law", () => {
        const updatedMap: PersonMap = Object.assign(
          {
            "Jnki's father": {
              name: "Jnki's father",
              gender: Gender.Male,
              daughters: ["Jnki", "Jnki's sister"]
            },
            "Jnki's mother": {
              name: "Jnki's mother",
              gender: Gender.Female,
              daughters: ["Jnki", "Jnki's sister"]
            },
            "Jnki's sister": {
              name: "Jnki's sister",
              gender: Gender.Female,
              father: "Jnki's father",
              mother: "Jnki's mother"
            }
          },
          personMap
        );
        updatedMap["Jnki"] = Object.assign(
          {
            father: "Jnki's father",
            mother: "Jnki's mother"
          },
          updatedMap["Jnki"]
        );

        const expected: string[] = ["Jnki's sister", "Chika"];
        const actual = findPersonOfRelation("Lavnya", Relation.MaternalAunt, updatedMap);
        expect(actual).toEqual(expected);
      });
    });
  });

  describe("Test get paternal aunt relation", () => {
    test("Should return empty array when the person has no paternal aunt", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Driya", Relation.PaternalAunt, personMap);
      expect(actual).toEqual(expected);
    });

    describe("Should return proper Paternal aunt", () => {
      test("Paternal aunt should include father's sisters and sisters in law", () => {
        const expected: string[] = ["Satya", "Ambi"];
        const actual = findPersonOfRelation("Vila", Relation.PaternalAunt, personMap);
        expect(actual).toEqual(expected);
      });
    });
  });

  describe("Test get maternal uncle relation", () => {
    test("Should return empty array when the person has no maternal uncle", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Lavnya", Relation.MaternalUncle, personMap);
      expect(actual).toEqual(expected);
    });

    describe("Should return proper maternal uncle", () => {
      test("Maternal uncle should include mother's brothers and brothers in law", () => {
        const updatedMap: PersonMap = Object.assign(
          {
            "Krpi's father": {
              name: "Krpi's father",
              gender: Gender.Male,
              daughters: ["Krpi"],
              sons: ["Krpi's brother"]
            },
            "Krpi's mother": {
              name: "Krpi's mother",
              gender: Gender.Female,
              daughters: ["Krpi"],
              sons: ["Krpi's brother"]
            },
            "Krpi's brother": {
              name: "Krpi's brother",
              gender: Gender.Male,
              father: "Krpi's father",
              mother: "Krpi's mother"
            }
          },
          personMap
        );
        updatedMap["Krpi"] = Object.assign(
          {
            father: "Krpi's father",
            mother: "Krpi's mother"
          },
          updatedMap["Krpi"]
        );
        const expected: string[] = ["Krpi's brother", "Saayan"];
        const actual = findPersonOfRelation("Kriya", Relation.MaternalUncle, updatedMap);
        expect(actual).toEqual(expected);
      });
    });
  });

  describe("Test get paternal uncle relation", () => {
    test("Should return empty array when the person has no paternal uncle", () => {
      const expected: string[] = [];
      const actual = findPersonOfRelation("Vich", Relation.PaternalUncle, personMap);
      expect(actual).toEqual(expected);
    });

    describe("Should return proper paternal uncle", () => {
      test("Paternal uncle should include father's brothers and brothers in law", () => {
        const expected: string[] = ["Saayan", "Asva"];
        const actual = findPersonOfRelation("Kriya", Relation.PaternalUncle, personMap);
        expect(actual).toEqual(expected);
      });
    });
  });
});
