import { ListFieldItem, Stat } from "../import/getImportedCharacter";

export const generateStatHtml = (stat: Stat) => {
  return `<tr><th>${stat.name}</th><td>${stat.base}</td><td>+${stat.bonus}</td><th>${stat.total}</th></tr>`;
};

export const generateStatsBoxHtml = (stats: Array<Stat | undefined>) => {
  const statsHtml = stats.reduce(
    (accumulator, current) =>
      accumulator.concat(
        generateStatHtml(current ?? { name: "", base: 0, bonus: 0, total: 0 })
      ),
    `<div id="cajadescrimitadOPD" style="width: 49%; float: left; margin-bottom:10px;"><table id="basicsOPD"><thead><tr><th colspan="10">Atributos</th></tr></thead><tbody>`
  );
  return `${statsHtml}</tbody></table></div>`;
};

export const generateBasicDataHtml = (
  name: string,
  race: string,
  age: string,
  gender: string,
  nickname: string,
  faction: string,
  employment: string
) => {
  return `<div id="nombrepjOPD" style=" color: blanchedalmond; border-radius: 10px; padding: 0 10px; background-color: #7f5a6360">${name}</div></div><div id="cajafichaOPD" style="height: 100%;"><div id="cajainutilOPD"><table id="basicsOPD"><thead><tr><th colspan="6">Datos básicos</th></tr></thead><tbody><tr><th>Raza</th><td>${race}</td><th>Edad</th><td>${age}</td><th>Género</th><td>${gender}</td></tr><tr><th>Apodo</th><td>${nickname}</td><th>Facción</th><td>${faction}</td><th>Empleo</th><td>${employment}</td></tr></tbody></table>`;
};

export const generateBigBoxesHtml = (
  background: string,
  personality: string,
  appearance: string,
  strengths: string,
  weaknesses: string,
  battleStyle: string,
  weapons: string
) => {
  return `<div id="cajadescripcionesOPD"><div id="seccionOPD">Trasfondo</div><div id="textoOPD" style="height: 300px;">${background}</div></div><div id="cajadescripcionesOPD"><div id="seccionOPD">Personalidad</div><div id="textoOPD" style="height: 200px;">${personality}</div></div><div id="cajadescripcionesOPD"><div id="seccionOPD"">Apariencia</div><div id="textoOPD" style="height: 200px;">${appearance}</div></div><div id="cajadescripcionesOPD"><div id="seccionOPD">Fortalezas</div><div id="textoOPD" style="height: 100%">${strengths}</div></div><div id="cajadescripcionesOPD"><div id="seccionOPD">Debilidades</div><div id="textoOPD" style="height: 400px;">${weaknesses}</div></div><div id="cajadescripcionesOPD"><div id="seccionOPD">Estilo de lucha</div><div id="textoOPD">${battleStyle}</div></div><div id="cajadescripcionesOPD" style="min-height: 80px;"><div id="seccionOPD">Armas</div><div id="textoOPD" style="height: 40px;">${weapons}</div></div>`;
};

export const generateListHtml = (listName: string, list: ListFieldItem[]) => {
  let listHtml = `<table id="basicsOPD"><thead><tr><th colspan="10">${listName}</th></tr></thead><tbody>`;
  list.forEach((item) => {
    listHtml = listHtml.concat(
      `<tr><th>${item.name}</th><td>${item.value}</td></tr>`
    );
  });
  return `${listHtml}</tbody></table>`;
};
