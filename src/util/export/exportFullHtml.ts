import { CharacterSheet } from "../import/getImportedCharacter";
import { generateBasicDataHtml, generateBigBoxesHtml, generateListHtml, generateStatsBoxHtml } from "./generateHtmlFields";

export const exportFullHtml = (characterSheet: CharacterSheet) => {
  let fullHtml = `<center><div id="fichaOPD" style="height: 100%; width: 90%;"><div id="imagenpjOPD" style="background-image: url(${characterSheet.imageUrl});">`;
  fullHtml = fullHtml.concat(
    generateBasicDataHtml(
      characterSheet.name ?? "",
      characterSheet.race ?? "",
      characterSheet.age ?? "",
      characterSheet.gender ?? "",
      characterSheet.nickname ?? "",
      characterSheet.faction ?? "",
      characterSheet.employment ?? ""
    )
  );
  fullHtml = fullHtml.concat(
    generateBigBoxesHtml(
      characterSheet.background ?? "",
      characterSheet.personality ?? "",
      characterSheet.appearance ?? "",
      characterSheet.strengths ?? "",
      characterSheet.weaknesses ?? "",
      characterSheet.battleStyle ?? "",
      characterSheet.weapons ?? ""
    )
  );
  fullHtml = fullHtml.concat(
    `<div id="cajadescripcionesOPD"><div id="seccionOPD">Datos bélicos</div>`
  );
  fullHtml = fullHtml.concat(
    generateStatsBoxHtml([
      characterSheet.strength,
      characterSheet.fortitude,
      characterSheet.speed,
      characterSheet.agility,
      characterSheet.dexterity,
      characterSheet.precision,
      characterSheet.intellect,
      characterSheet.sharpness,
      characterSheet.instinct,
      characterSheet.energy,
    ])
  );
  fullHtml = fullHtml.concat(
    `<div id="cajadescrimitadOPD" style="width: 49%; float: right;">`
  );
  fullHtml = fullHtml.concat(
    generateListHtml("Saberes", characterSheet.knowledges ?? []),
    generateListHtml("Haki", characterSheet.haki ?? []),
    generateListHtml("Medallas", characterSheet.medals ?? [])
  );
  fullHtml = fullHtml.concat(`</div></div></center>`);
  navigator.clipboard.writeText(fullHtml);
};
