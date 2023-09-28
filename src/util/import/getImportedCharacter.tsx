import { getBasicField, getBigBoxField, getItemFields, getListFields, getSkillFields, getStatFields } from "./getFields";
import { getBasicFieldRegex } from "./regex";

export const getImportedCharacter = (htmlIn: string) => {
	let regex = new RegExp(`<div id="nombrepjOPD"[^>]+>([^<]+)`);
	const name = htmlIn.match(regex)![1];

	regex = new RegExp(`background-image: url\\((.+?)\\)`);
	const imageUrl = htmlIn.match(regex)![1];

	getBasicField("Apodo", htmlIn);
	getBasicField("Edad", htmlIn);
	getBasicField("Raza", htmlIn);
	getBasicField("Facción", htmlIn);
	getBasicField("Género", htmlIn);
	getBasicField("Empleo", htmlIn);

	getBigBoxField("Trasfondo", htmlIn);
	getBigBoxField("Personalidad", htmlIn);
	getBigBoxField("Apariencia", htmlIn);
	getBigBoxField("Fortalezas", htmlIn);
	getBigBoxField("Debilidades", htmlIn);
	getBigBoxField("Estilo de lucha", htmlIn);
	getBigBoxField("Armas", htmlIn);

	getStatFields("Fuerza", htmlIn);
	getStatFields("Fortaleza", htmlIn);
	getStatFields("Velocidad", htmlIn);
	getStatFields("Agilidad", htmlIn);
	getStatFields("Destreza", htmlIn);
	getStatFields("Precisión", htmlIn);
	getStatFields("Intelecto", htmlIn);
	getStatFields("Agudeza", htmlIn);
	getStatFields("Instinto", htmlIn);
	getStatFields("Energía", htmlIn);

	getListFields("Saberes", htmlIn);
	getListFields("Haki", htmlIn);
	getListFields("Medallas", htmlIn);

	getSkillFields("Técnicas", htmlIn);
	getItemFields("Pertenencias", htmlIn);
}

