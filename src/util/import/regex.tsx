const getBasicFieldRegex = (fieldName: string) => {
	return `${fieldName}<\/th><td>([^<]+)`;
}

const getBigBoxRegex = (fieldName: string) => {
	return `${fieldName}<\/div>[^>]+>([\\S\\s]+?(?=<\/div>))`;
}

const getStatsRegex = (statName: string) => {
	return `${statName}<\/th><td>([^<]+)<\/td><td>([^<]+)<\/td><th>([^<]+)`;
}

export {
  getBasicFieldRegex,
  getBigBoxRegex,
  getStatsRegex,
}