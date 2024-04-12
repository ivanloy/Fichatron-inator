import { IFormInput } from "../../screens/CharacterSheet";
import { CharacterSheet, Stat } from "../import/getImportedCharacter";

export const convertFormStatsToObject = (
  name: string,
  base?: string | number,
  bonus?: string | number
): Stat => {
  const baseNumber = Number(base ?? "4") ?? 4;
  const bonusNumber = Number(bonus ?? "0") ?? 0;
  return {
    name,
    base: baseNumber,
    bonus: bonusNumber,
    total: baseNumber + bonusNumber,
  };
};

export const convertFormToCharacterSheet = (
  formData: IFormInput
): CharacterSheet => {
  return {
    name: formData.name,
    imageUrl: formData.imageUrl,
    nickname: formData.nickname,
    age: formData.age,
    race: formData.race,
    faction: formData.faction,
    gender: formData.gender,
    employment: formData.employment,
    background: formData.background,
    personality: formData.personality,
    appearance: formData.appearance,
    battleStyle: formData.battleStyle,
    weapons: formData.weapons,
    strength: convertFormStatsToObject(
      "Fuerza",
      formData.strength,
      formData.strengthBonus
    ),
    fortitude: convertFormStatsToObject(
      "Fortaleza",
      formData.fortitude,
      formData.fortitudeBonus
    ),
    speed: convertFormStatsToObject(
      "Velocidad",
      formData.speed,
      formData.speedBonus
    ),
    agility: convertFormStatsToObject(
      "Agilidad",
      formData.agility,
      formData.agilityBonus
    ),
    dexterity: convertFormStatsToObject(
      "Destreza",
      formData.dexterity,
      formData.dexterityBonus
    ),
    precision: convertFormStatsToObject(
      "Precisión",
      formData.precision,
      formData.precisionBonus
    ),
    intellect: convertFormStatsToObject(
      "Intelecto",
      formData.intellect,
      formData.intellectBonus
    ),
    sharpness: convertFormStatsToObject(
      "Agudeza",
      formData.sharpness,
      formData.sharpnessBonus
    ),
    instinct: convertFormStatsToObject(
      "Instinto",
      formData.instinct,
      formData.instinctBonus
    ),
    energy: convertFormStatsToObject(
      "Energía",
      formData.energy,
      formData.energyBonus
    ),
    knowledges: formData.knowledges,
    haki: [
      {
        name: "Observación",
        value: formData.observationHaki ?? "",
      },
      {
        name: "Armadura",
        value: formData.armamentHaki ?? "",
      },
      {
        name: "Rey",
        value: formData.conquerorsHaki ?? "",
      },
    ],
    medals: [
      //FIXME Medallas nombre segun faccion
      {
        name: "Al mérito",
        value: formData.tier1Medals ?? "",
      },
      {
        name: "Al servicio",
        value: formData.tier2Medals ?? "",
      },
      {
        name: "Al honor",
        value: formData.tier3Medals ?? "",
      },
    ],
  };
};
