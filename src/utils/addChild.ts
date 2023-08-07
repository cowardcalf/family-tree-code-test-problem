import { Gender } from "../types/gender";
import { Person } from "../types/person";
import { PersonMap } from "../types/personMap";

const addChildToPersonObj = (person: Person, childProp: "sons" | "daughters", childName: string) => {
  const children: string[] = person[childProp] ?? [];
  children.push(childName);
  person[childProp] = children;
};

export const addChild = (motherName: string, childName: string, childGender: Gender, personMap: PersonMap) => {
  if (motherName && childName) {
    const mother = personMap[motherName];
    const fatherName = mother.spouse;
    // Add child must have existing father and mother
    if (fatherName && mother) {
      // Create child
      const child: Person = {
        name: childName,
        gender: childGender,
        father: fatherName,
        mother: motherName
      };
      personMap[childName] = child;
      // Add child to father and mother
      const childProp = childGender === Gender.Male ? "sons" : "daughters";
      const father = personMap[fatherName];
      addChildToPersonObj(father, childProp, childName);
      addChildToPersonObj(mother, childProp, childName);
    }
  }
  return personMap;
};
