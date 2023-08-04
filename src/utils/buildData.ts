import { Person } from "../types/person";
import { Gender } from "../types/gender";

export const buildData = (persons: Person[]) => {
  const personMap: Record<string, Person> = {};
  // Init the map for each person
  persons.forEach(p => {
    personMap[p.name] = {
      ...p
    };
  });
  // Update the sons and daughter
  persons.forEach(p => {
    if (p.father) {
      const isSon = p.gender === Gender.Male;
      const childPropName = isSon ? "sons" : "daughters";
      const children = personMap[p.father][childPropName] ?? [];
      children.push(p.name);
      personMap[p.father][childPropName] = children;
      if (p.mother) {
        personMap[p.mother][childPropName] = children;
      }
    }
  });
  return personMap;
};
