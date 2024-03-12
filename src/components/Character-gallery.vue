<template>
    <div class="Character-gallery">
        <router-link v-for="character in filteredCharacters" :key="character._id"
            :to="{ name: 'character', params: { id: character._id } }">
            <CharacterCard :name="character.name" :image-url="character.imageUrl" />
        </router-link>
    </div>
</template>

<script>
import CharacterCard from './Character-card.vue';

export default {
    components: {
        CharacterCard
    },
    props: {
        searchQuery: String,
        characterData: Array // Changez le nom de la prop en characterData
    },
    computed: {
        filteredCharacters() {
            let filtered = this.characterData; // Utilisez this.characterData au lieu de this.CharacterData

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