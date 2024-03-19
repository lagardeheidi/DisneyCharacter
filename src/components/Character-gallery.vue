<template>
    <div class="Character-gallery">
        <div v-for="character in filteredCharacters" :key="character._id"
            @click="navigateToCharacterDetails(character)">
            <CharacterCard :name="character.name" :image-url="character.imageUrl" />
        </div>
    </div>
</template>
<script>
import CharacterCard from './Character-card.vue';

export default {
    methods: {
        navigateToCharacterDetails(character) {
            this.$router.push({ name: 'character', params: { id: character._id, characterName: character.name, imageUrl: character.imageUrl, films: character.films } });
        }
    },
    components: {
        CharacterCard
    },
    props: {
        searchQuery: String,
        characterData: Array
    },
    computed: {
        filteredCharacters() {
            let filtered = this.characterData;

            // Filtrage supplémentaire
            filtered = filtered.filter(character =>
                character.name.toLowerCase() !== 'nazis' && //oups
                character.films.length > 1 &&
                !character.imageUrl?.toLowerCase().endsWith('.gif')
            );
            return filtered;
        }
    }
};
</script>

<style>
.Character-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
}
</style>