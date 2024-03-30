<template>

    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet">
    </head>
    <!-- barre de recherche (composant) pour la gallerie -->
    <SearchCharacter v-model:searchCharacterKey="searchCharacterKey"
        @update:searchCharacterKey="searchCharacterKey = $event" @search="characterSearched" />

    <div class="Character-gallery">
        <div v-for="character in characterSearchData" :key="character._id">
            <template v-if="character.name && character.imageUrl">
                <div
                    @click="navigateToCharacterDetails(character._id, character.name, character.imageUrl, character.films)">
                    <CharacterCard :name="character.name" :image-url="character.imageUrl" />
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import CharacterCard from './Character-card.vue';
import SearchCharacter from './Search-character.vue';
import getCharacterData from "@/services/api/CharacterRepositery";


export default {
    data() {
        return {
            searchCharacterKey: localStorage.getItem("searchCharacterKey") || "",
            characterSearchData: [],
        }
    },
    created() {
        this.resetSearchCharacterKey();
        this.characterSearched();
    },
    methods: {
        resetSearchCharacterKey() {
            this.searchCharacterKey = '';
            localStorage.removeItem('searchCharacterKey');
        },

        search: function () {
            this.characterSearched()
        },

        // async characterSearched() {
        //     if (this.searchCharacterKey) {
        //         this.characterSearchData = await getCharacterData(this.searchCharacterKey)
        //         console.log("lalala" + this.characterSearchData.data.name + this.characterSearchData.data.imageUrl);
        //     }
        // },
        async characterSearched() {
            if (this.searchCharacterKey) {
                const searchData = await getCharacterData(this.searchCharacterKey);
                let actualData;
                if (Array.isArray(searchData)) {
                    actualData = searchData;
                } else {
                    // Si les données sont encapsulées dans un objet Proxy
                    actualData = searchData['[[Target]]'] || searchData.data;
                }
                this.characterSearchData = actualData;
                console.log("lalala" + this.characterSearchData.data.name + this.characterSearchData.data.imageUrl);
            }
        },
        navigateToCharacterDetails(characterId, characterName, imageUrl, films) {
            this.$router.push({
                name: 'character', params: {
                    id: characterId,
                    characterName: characterName,
                    imageUrl: imageUrl,
                    films: films
                }
            });
        }
    },
    computed: {
        // filteredCharacters: function () {
        //     let data = [...this.characterData];

        //     // Filtrage supplémentaire
        //     let filtered = filtered.filter(character =>
        //         character.name.toLowerCase() !== 'nazis'

        //     );
        //     return filtered;
        // }
    },



    components: {
        CharacterCard,
        SearchCharacter
    },
    props: {
        searchQuery: String,
        characterData: Array
    }
}
</script>

<style>
.Character-gallery {
    font-family: "Handlee", cursive;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
}

.handlee-regular {
    font-family: "Handlee", cursive;
    font-weight: 400;
    font-style: normal;
}
</style>