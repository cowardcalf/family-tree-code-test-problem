import { Person } from "../types/person";
import { Gender } from "../types/gender";

export const INIT_PERSONS: Person[] = [
  {
    name: "King Shan",
    spouse: "Queen Anga",
    gender: Gender.Male
  },
  {
    name: "Queen Anga",
    spouse: "King Shan",
    gender: Gender.Female
  },
  {
    name: "Ish",
    gender: Gender.Male,
    father: "King Shan",
    mother: "Queen Anga"
  },
  {
    name: "Chit",
    gender: Gender.Male,
    father: "King Shan",
    mother: "Queen Anga",
    spouse: "Ambi"
  },
  {
    name: "Ambi",
    gender: Gender.Female,
    spouse: "Chit"
  },
  {
    name: "Vich",
    gender: Gender.Male,
    father: "King Shan",
    mother: "Queen Anga",
    spouse: "Lika"
  },
  {
    name: "Lika",
    gender: Gender.Female,
    spouse: "Vich"
  },
  {
    name: "Satya",
    gender: Gender.Female,
    father: "King Shan",
    mother: "Queen Anga",
    spouse: "Vyan"
  },
  {
    name: "Vyan",
    gender: Gender.Male,
    spouse: "Satya"
  },
  {
    name: "Drita",
    gender: Gender.Male,
    father: "Chit",
    mother: "Ambi",
    spouse: "Jaya"
  },
  {
    name: "Jaya",
    gender: Gender.Female,
    spouse: "Drita"
  },
  {
    name: "Vrita",
    gender: Gender.Male,
    father: "Chit",
    mother: "Ambi"
  },
  {
    name: "Vila",
    gender: Gender.Male,
    father: "Vich",
    mother: "Lika",
    spouse: "Jnki"
  },
  {
    name: "Jnki",
    gender: Gender.Female,
    spouse: "Vila"
  },
  {
    name: "Chika",
    gender: Gender.Female,
    father: "Vich",
    mother: "Lika",
    spouse: "Kpila"
  },
  {
    name: "Kpila",
    gender: Gender.Male,
    spouse: "Chika"
  },
  {
    name: "Satvy",
    gender: Gender.Female,
    father: "Vyan",
    mother: "Satya",
    spouse: "Asva"
  },
  {
    name: "Asva",
    gender: Gender.Male,
    spouse: "Satvy"
  },
  {
    name: "Savya",
    gender: Gender.Male,
    father: "Vyan",
    mother: "Satya",
    spouse: "Krpi"
  },
  {
    name: "Krpi",
    gender: Gender.Female,
    spouse: "Savya"
  },
  {
    name: "Saayan",
    gender: Gender.Male,
    father: "Vyan",
    mother: "Satya",
    spouse: "Mina"
  },
  {
    name: "Mina",
    gender: Gender.Female,
    spouse: "Saayan"
  },
  {
    name: "Jata",
    gender: Gender.Male,
    father: "Drita",
    mother: "Jaya"
  },
  {
    name: "Driya",
    gender: Gender.Female,
    father: "Drita",
    mother: "Jaya",
    spouse: "Mnu"
  },
  {
    name: "Mnu",
    gender: Gender.Male,
    spouse: "Driya"
  },
  {
    name: "Lavnya",
    gender: Gender.Female,
    father: "Vila",
    mother: "Jnki",
    spouse: "Gru"
  },
  {
    name: "Gru",
    gender: Gender.Male,
    spouse: "Lavnya"
  },
  {
    name: "Kriya",
    gender: Gender.Male,
    father: "Savya",
    mother: "Krpi"
  },
  {
    name: "Misa",
    gender: Gender.Male,
    father: "Saayan",
    mother: "Mina"
  }
];
