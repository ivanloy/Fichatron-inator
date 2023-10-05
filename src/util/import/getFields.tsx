import { getBasicFieldRegex, getBigBoxRegex, getStatsRegex } from "./regex";

const getBasicField = (fieldName: string, htmlIn:string) => {
	let regex = getBasicFieldRegex(fieldName);
	const value = htmlIn.match(regex)![1];
  return value;
}

const getBigBoxField = (fieldName: string, htmlIn:string) => {
	let regex = getBigBoxRegex(fieldName);
	const value = htmlIn.match(regex)![1];
  return value;
}

const getStatFields = (fieldName: string, htmlIn:string) => {
	let regex = getStatsRegex(fieldName);
	const powerStats = htmlIn.match(regex);
	const base = parseInt(powerStats![1]);
	const bonus = parseInt(powerStats![2]);
	const total = parseInt(powerStats![3]);
  return {base, bonus, total};
}

const getListFields = (fieldName: string, htmlIn:string) => {
	let regex = new RegExp(`${fieldName}<\/th><\/tr><\/thead><tbody>(.+?(?=<\/tbody>))`);
	const dataRaw = htmlIn.match(regex)![1];
	const dataArray = rawDataToArray(dataRaw);
	const mappedList = [];

	for(let i = 0; i < dataArray.length; i = i+2){
    mappedList.push({name: dataArray[i], value: dataArray[i+1]});
	}
  return mappedList; //TODO map to flat array with form names
}


const getSkillFields = (fieldName: string, htmlIn:string) => {
	let regex = new RegExp(`${fieldName}<\/div>(.+?(?=<\/div>))`);
	const dataRaw = htmlIn.match(regex)![1];
	const dataArray = rawDataToArray(dataRaw);
  const mappedList = [];

	for(let i = 0; i < dataArray.length; i = i+7){
    mappedList.push(
      {
        name: dataArray[i], 
        category: dataArray[i+2], 
        nature: dataArray[i+4], 
        description: dataArray[i+6],
      } 
    );
	}
  return mappedList; //TODO map to flat array with form names
}

const getItemFields = (fieldName: string, htmlIn:string) => { //TODO duplicated code
	let regex = new RegExp(`${fieldName}<\/div>(.+?(?=<\/div>))`);
	const dataRaw = htmlIn.match(regex)![1];
	const dataArray = rawDataToArray(dataRaw);
  const mappedList = [];

	for(let i = 0; i < dataArray.length; i = i+7){
    mappedList.push(
      {
        name: dataArray[i], 
        category: dataArray[i+2], 
        nature: dataArray[i+4], 
        abilities: dataArray[i+6],
      } 
    );
	}
  return mappedList; //TODO map to flat array with form names
}

const rawDataToArray = (data: any) => {
	return Array.from(
		data.matchAll(/>([^<>]+?)</g), 
		([_, item]) => item
	);
}

export {
  getBasicField,
  getBigBoxField,
  getStatFields,
  getListFields,
  getSkillFields,
  getItemFields
}