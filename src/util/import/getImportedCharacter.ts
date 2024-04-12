import { getBasicField, getBigBoxField, getListFields, getStatFields } from "./getFields";

export type Stat = {
  name: string;
  base: number;
  bonus: number;
  total: number;
};

export type ListFieldItem = {
  name: string;
  value: string;
};

export type CharacterSheet = { //FIXME Organize types and atoms
  name?: string;
  imageUrl?: string;
  nickname?: string;
  age?: string;
  race?: string;
  faction?: string;
  gender?: string;
  employment?: string;
  background?: string;
  personality?: string;
  appearance?: string;
  strengths?: string;
  weaknesses?: string;
  battleStyle?: string;
  weapons?: string;
  strength?: Stat;
  fortitude?: Stat;
  speed?: Stat;
  agility?: Stat;
  dexterity?: Stat;
  precision?: Stat;
  intellect?: Stat;
  sharpness?: Stat;
  instinct?: Stat;
  energy?: Stat;
  knowledges?: ListFieldItem[];
  haki?: ListFieldItem[];
  medals?: ListFieldItem[];
};

export const getImportedCharacter = (htmlIn: string) => {
  let regex = new RegExp(`<div id="nombrepjOPD"[^>]+>([^<]+)`);
  const name = htmlIn.match(regex)![1];

  regex = new RegExp(`background-image: url\\((.+?)\\)`);
  const imageUrl = htmlIn.match(regex)![1];

  const characterSheet: CharacterSheet = {};

  characterSheet.name = name;
  characterSheet.imageUrl = imageUrl;
  characterSheet.nickname = getBasicField("Apodo", htmlIn);
  characterSheet.age = getBasicField("Edad", htmlIn);
  characterSheet.race = getBasicField("Raza", htmlIn);
  characterSheet.faction = getBasicField("Facción", htmlIn);
  characterSheet.gender = getBasicField("Género", htmlIn);
  characterSheet.employment = getBasicField("Empleo", htmlIn);

  characterSheet.background = getBigBoxField("Trasfondo", htmlIn);
  characterSheet.personality = getBigBoxField("Personalidad", htmlIn);
  characterSheet.appearance = getBigBoxField("Apariencia", htmlIn);
  characterSheet.strengths = getBigBoxField("Fortalezas", htmlIn);
  characterSheet.weaknesses = getBigBoxField("Debilidades", htmlIn);
  characterSheet.battleStyle = getBigBoxField("Estilo de lucha", htmlIn);
  characterSheet.weapons = getBigBoxField("Armas", htmlIn);

  characterSheet.strength = getStatFields("Fuerza", htmlIn);
  characterSheet.fortitude = getStatFields("Fortaleza", htmlIn);
  characterSheet.speed = getStatFields("Velocidad", htmlIn);
  characterSheet.agility = getStatFields("Agilidad", htmlIn);
  characterSheet.dexterity = getStatFields("Destreza", htmlIn);
  characterSheet.precision = getStatFields("Precisión", htmlIn);
  characterSheet.intellect = getStatFields("Intelecto", htmlIn);
  characterSheet.sharpness = getStatFields("Agudeza", htmlIn);
  characterSheet.instinct = getStatFields("Instinto", htmlIn);
  characterSheet.energy = getStatFields("Energía", htmlIn);

  characterSheet.knowledges = getListFields("Saberes", htmlIn);
  characterSheet.haki = getListFields("Haki", htmlIn);
  characterSheet.medals = getListFields("Medallas", htmlIn);

  // getSkillFields("Técnicas", htmlIn);
  // getItemFields("Pertenencias", htmlIn);

  return characterSheet;
};
