export default async function getCharacterData() {
	const baseUrl = "http://api.disneyapi.dev/character";
	const pageSize = 150; // Nombre de personnages par page
	const pagesToFetch = 140; // Nombre de pages à récup

	try {
		let allCharacters = [];
		for (let page = 1; page <= pagesToFetch; page++) {
			const url = `${baseUrl}?page=${page}&pageSize=${pageSize}`;
			const response = await fetch(url);
			const data = await response.json();
			const characters = data.data;
			allCharacters = [...allCharacters, ...characters];
		}
		console.log(allCharacters);
		return allCharacters;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
