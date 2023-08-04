import { INIT_PERSONS } from "../data/initData";
import { Gender } from "../types/gender";
import { Person } from "../types/person";
import { buildData } from "./buildData";

describe("Test buildData", () => {
  test("Should return the person map properly", () => {
    const expected: Record<string, Person> = {
      "King Shan": {
        name: "King Shan",
        spouse: "Queen Anga",
        gender: Gender.Male,
        sons: ["Ish", "Chit", "Vich"],
        daughters: ["Satya"]
      },
      "Queen Anga": {
        name: "Queen Anga",
        spouse: "King Shan",
        gender: Gender.Female,
        sons: ["Ish", "Chit", "Vich"],
        daughters: ["Satya"]
      },
      Ish: {
        name: "Ish",
        gender: Gender.Male,
        father: "King Shan",
        mother: "Queen Anga"
      },
      Chit: {
        name: "Chit",
        gender: Gender.Male,
        father: "King Shan",
        mother: "Queen Anga",
        spouse: "Ambi",
        sons: ["Drita", "Vrita"]
      },
      Ambi: {
        name: "Ambi",
        gender: Gender.Female,
        spouse: "Chit",
        sons: ["Drita", "Vrita"]
      },
      Vich: {
        name: "Vich",
        gender: Gender.Male,
        father: "King Shan",
        mother: "Queen Anga",
        spouse: "Lika",
        sons: ["Vila"],
        daughters: ["Chika"]
      },
      Lika: {
        name: "Lika",
        gender: Gender.Female,
        spouse: "Vich",
        sons: ["Vila"],
        daughters: ["Chika"]
      },
      Satya: {
        name: "Satya",
        gender: Gender.Female,
        father: "King Shan",
        mother: "Queen Anga",
        spouse: "Vyan",
        sons: ["Savya", "Saayan"],
        daughters: ["Satvy"]
      },
      Vyan: {
        name: "Vyan",
        gender: Gender.Male,
        spouse: "Satya",
        sons: ["Savya", "Saayan"],
        daughters: ["Satvy"]
      },
      Drita: {
        name: "Drita",
        gender: Gender.Male,
        father: "Chit",
        mother: "Ambi",
        spouse: "Jaya",
        sons: ["Jata"],
        daughters: ["Driya"]
      },
      Jaya: {
        name: "Jaya",
        gender: Gender.Female,
        spouse: "Drita",
        sons: ["Jata"],
        daughters: ["Driya"]
      },
      Vrita: {
        name: "Vrita",
        gender: Gender.Male,
        father: "Chit",
        mother: "Ambi"
      },
      Vila: {
        name: "Vila",
        gender: Gender.Male,
        father: "Vich",
        mother: "Lika",
        spouse: "Jnki",
        daughters: ["Lavnya"]
      },
      Jnki: {
        name: "Jnki",
        gender: Gender.Female,
        spouse: "Vila",
        daughters: ["Lavnya"]
      },
      Chika: {
        name: "Chika",
        gender: Gender.Female,
        father: "Vich",
        mother: "Lika",
        spouse: "Kpila"
      },
      Kpila: {
        name: "Kpila",
        gender: Gender.Male,
        spouse: "Chika"
      },
      Satvy: {
        name: "Satvy",
        gender: Gender.Female,
        father: "Vyan",
        mother: "Satya",
        spouse: "Asva"
      },
      Asva: {
        name: "Asva",
        gender: Gender.Male,
        spouse: "Satvy"
      },
      Savya: {
        name: "Savya",
        gender: Gender.Male,
        father: "Vyan",
        mother: "Satya",
        spouse: "Krpi",
        sons: ["Kriya"]
      },
      Krpi: {
        name: "Krpi",
        gender: Gender.Female,
        spouse: "Savya",
        sons: ["Kriya"]
      },
      Saayan: {
        name: "Saayan",
        gender: Gender.Male,
        father: "Vyan",
        mother: "Satya",
        spouse: "Mina",
        sons: ["Misa"]
      },
      Mina: {
        name: "Mina",
        gender: Gender.Female,
        spouse: "Saayan",
        sons: ["Misa"]
      },
      Jata: {
        name: "Jata",
        gender: Gender.Male,
        father: "Drita",
        mother: "Jaya"
      },
      Driya: {
        name: "Driya",
        gender: Gender.Female,
        father: "Drita",
        mother: "Jaya",
        spouse: "Mnu"
      },
      Mnu: {
        name: "Mnu",
        gender: Gender.Male,
        spouse: "Driya"
      },
      Lavnya: {
        name: "Lavnya",
        gender: Gender.Female,
        father: "Vila",
        mother: "Jnki",
        spouse: "Gru"
      },
      Gru: {
        name: "Gru",
        gender: Gender.Male,
        spouse: "Lavnya"
      },
      Kriya: {
        name: "Kriya",
        gender: Gender.Male,
        father: "Savya",
        mother: "Krpi"
      },
      Misa: {
        name: "Misa",
        gender: Gender.Male,
        father: "Saayan",
        mother: "Mina"
      }
    };
    const actual = buildData(INIT_PERSONS);
    expect(actual).toEqual(expected);
  });
});
