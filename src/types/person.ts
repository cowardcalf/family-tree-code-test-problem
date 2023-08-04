import { Gender } from "./gender";

export type Person = {
  name: string;
  gender: Gender;
  spouse?: string;
  father?: string;
  mother?: string;
  sons?: string[];
  daughters?: string[];
};
