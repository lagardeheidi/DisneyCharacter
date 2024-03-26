export default async function getCharacterData(name) {
	const baseUrl = "http://api.disneyapi.dev/character";

	try {
		// choix arbitraire, pour avoir un truc de base
		let url = `${baseUrl}?page=1&pageSize=100`;

		if (name) {
			url = url + "&name=" + name;
			// page=1&pageSize=300 &name= mickey%20mouse
		}

		const response = await fetch(url);
		return response.json();
	} catch (error) {
		console.error(error);
	}
}
