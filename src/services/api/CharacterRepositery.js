export default async function getCharacterData() {
	const CharacterUrl = "https://api.disneyapi.dev/character";

	try {
		const response = await fetch(CharacterUrl);
		const data = await response.json();
		const CharacterData = data.data;
		return CharacterData;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
