export default async function getCharacterData(name) {
	const baseUrl = "http://api.disneyapi.dev/character";
	// const pageSize = 150; // Nombre de personnages par page
	// const pagesToFetch = 140; // Nombre de pages à récup

	try {
		let allCharacters = [];
		// for (let page = 1; page <= pagesToFetch; page++) {
		// 	const url = `${baseUrl}?page=${page}&pageSize=${pageSize}`;
		// 	const response = await fetch(url);
		// 	const data = await response.json();
		// 	const characters = data.data;
		// 	allCharacters = [...allCharacters, ...characters];
		// }

		// choix arbitraire, pour avoir un truc de base
		let url = `${baseUrl}?page=1&pageSize=300`;

		if (name) {
			url = url + "&name=" + name;
			// page=1&pageSize=300 &name= mickey%20mouse
		}

		const response = await fetch(url);
		const data = await response.json();
		const characters = data.data;
		allCharacters = [...allCharacters, ...characters];

		return allCharacters;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
