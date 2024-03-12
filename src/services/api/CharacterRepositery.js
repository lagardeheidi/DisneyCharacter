export default async function getCharacterData(name) {
	const baseUrl = "http://api.disneyapi.dev/character";

	try {
		let allCharacters = [];

		// choix arbitraire, pour avoir un truc de base
		let url = `${baseUrl}?page=1&pageSize=100`;

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
	}
}
