export default async function getCharacterData() {
	const CharacterUrl =
		"http://api.disneyapi.dev/character?page=25&pageSize=150";

	try {
		const response = await fetch(CharacterUrl);
		const data = await response.json();
		const CharacterData = data.data;
		console.log(CharacterData);
		return CharacterData;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
