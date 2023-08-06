import { Gender } from "../types/gender";
import { Person } from "../types/person";
import { PersonMap } from "../types/personMap";
import { Relation } from "../types/relation";

const getChildren = (person: Person) => {
  const directChildren: string[] = [];
  if (person.sons) {
    directChildren.push(...person.sons);
  }
  if (person.daughters) {
    directChildren.push(...person.daughters);
  }
  return directChildren;
};

const getBrothers = (person: Person, personMap: PersonMap) => {
  const result: string[] = [];
  try {
    if (person.father) {
      const father = personMap[person.father];
      if (father.sons) {
        result.push(...father.sons.filter(s => s !== person.name));
      }
    }
  } catch (error) {
    console.log(person);
  }

  return result;
};

const getSisters = (person: Person, personMap: PersonMap) => {
  const result: string[] = [];
  if (person.father) {
    const father = personMap[person.father];
    if (father.daughters) {
      result.push(...father.daughters.filter(s => s !== person.name));
    }
  }
  return result;
};

const getSiblings = (person: Person, personMap: PersonMap) => {
  return getBrothers(person, personMap).concat(getSisters(person, personMap));
};

const getBrothersInLaw = (person: Person, personMap: PersonMap) => {
  const result: string[] = [];
  if (person.spouse) {
    const spouse = personMap[person.spouse];
    // Spouse's brothers
    result.push(...getBrothers(spouse, personMap));
  }
  // Husbands of siblings
  result.push(
    ...getSiblings(person, personMap).reduce((husbands: string[], s) => {
      const sibling = personMap[s];
      if (sibling.gender === Gender.Female && sibling.spouse) {
        husbands.push(sibling.spouse);
      }
      return husbands;
    }, [])
  );
  return result;
};

const getSistersInLaw = (person: Person, personMap: PersonMap) => {
  const result: string[] = [];
  if (person.spouse) {
    const spouse = personMap[person.spouse];
    // Spouse's sisters
    result.push(...getSisters(spouse, personMap));
  }
  // Wives of siblings
  result.push(
    ...getSiblings(person, personMap).reduce((wives: string[], s) => {
      const sibling = personMap[s];
      if (sibling.gender === Gender.Male && sibling.spouse) {
        wives.push(sibling.spouse);
      }
      return wives;
    }, [])
  );
  return result;
};

const getSons = (person: Person) => (person.sons ? person.sons.slice() : []);

const getDaughter = (person: Person) => (person.daughters ? person.daughters.slice() : []);

const getDaughterAndGrandDaughter = (person: Person, personMap: PersonMap, isGrandOnly?: boolean) => {
  const result: string[] = [];
  if (!isGrandOnly) {
    // Daughters
    result.push(...getDaughter(person));
  }
  // GrandDaughters
  result.push(
    ...getChildren(person)
      .map(c => getDaughterAndGrandDaughter(personMap[c], personMap))
      .flat()
  );
  return result;
};

export const findPersonOfRelation = (personName: string, relation: Relation, personMap: PersonMap) => {
  const result: string[] = [];

  // Person name not empty and must be in the person map.
  // The relation is limited by the type
  if (personName && personMap[personName]) {
    const person = personMap[personName];
    switch (relation) {
      case Relation.Father: {
        if (person.father) {
          result.push(person.father);
        }
        break;
      }
      case Relation.Mother: {
        if (person.mother) {
          result.push(person.mother);
        }
        break;
      }
      case Relation.Children: {
        result.push(...getChildren(person));
        break;
      }
      case Relation.Son: {
        result.push(...getSons(person));
        break;
      }
      case Relation.Daughter: {
        result.push(...getDaughter(person));
        break;
      }
      case Relation.Brothers: {
        result.push(...getBrothers(person, personMap));
        break;
      }
      case Relation.Sisters: {
        result.push(...getSisters(person, personMap));
        break;
      }
      case Relation.GrandDaughter: {
        result.push(...getDaughterAndGrandDaughter(person, personMap, true));
        break;
      }
      case Relation.Cousins: {
        if (person.father && person.mother) {
          const father = personMap[person.father];
          const mother = personMap[person.mother];
          const siblings = getSiblings(father, personMap).concat(getSiblings(mother, personMap));
          result.push(...siblings.map(s => getChildren(personMap[s])).flat());
        }
        break;
      }
      case Relation.BrotherInLaw: {
        result.push(...getBrothersInLaw(person, personMap));
        break;
      }
      case Relation.SisterInLaw: {
        result.push(...getSistersInLaw(person, personMap));
        break;
      }
      case Relation.MaternalAunt: {
        if (person.mother) {
          const mother = personMap[person.mother];
          // Mother's sister
          result.push(...getSisters(mother, personMap));
          // Mother's sister in laws
          result.push(...getSistersInLaw(mother, personMap));
        }
        break;
      }
      case Relation.PaternalAunt: {
        if (person.father) {
          const father = personMap[person.father];
          // Father's sister
          result.push(...getSisters(father, personMap));
          // Father's sister in laws
          result.push(...getSistersInLaw(father, personMap));
        }
        break;
      }
      case Relation.MaternalUncle: {
        if (person.mother) {
          const mother = personMap[person.mother];
          // Mother's brother
          result.push(...getBrothers(mother, personMap));
          // Mother's brothers in laws
          result.push(...getBrothersInLaw(mother, personMap));
        }
        break;
      }
      case Relation.PaternalUncle: {
        if (person.father) {
          const father = personMap[person.father];
          // Father's brother
          result.push(...getBrothers(father, personMap));
          // Father's brothers in laws
          result.push(...getBrothersInLaw(father, personMap));
        }
        break;
      }
    }
  }

  return result;
};
