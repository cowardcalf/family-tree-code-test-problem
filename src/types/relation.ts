export enum Relation {
  Father = "Father",
  Mother = "Mother",
  Children = "Children",
  Son = "Son",
  Daughter = "Daughter",
  Brothers = "Brothers",
  Sisters = "Sisters",
  GrandDaughter = "Grand daughter",
  PaternalUncle = "Paternal uncle",
  MaternalUncle = "Maternal uncle",
  PaternalAunt = "Paternal aunt",
  MaternalAunt = "Maternal aunt",
  SisterInLaw = "Sister in law",
  BrotherInLaw = "Brother in law",
  Cousins = "Cousins"
}

export const RelationsArray = Object.values(Relation);
