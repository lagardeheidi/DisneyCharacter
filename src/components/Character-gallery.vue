<template>
    <div class="Character-gallery">
        <CharacterCard v-for="character in filteredCharacters" :key="character._id" :name="character.name"
            :image-url="character.imageUrl" />
    </div>
</template>

<script>
import CharacterCard from './Character-card.vue';
import getCharacterData from '@/services/api/CharacterRepositery.js';

export default {
    components: {
        CharacterCard
    },
    props: {
        searchQuery: String,
        selectedFilm: String
    },
    data() {
        return {
            CharacterData: []
        };
    },
    computed: {
        filteredCharacters() {
            let filtered = this.CharacterData;

            // Filtrage par nom
            if (this.searchQuery) {
                filtered = filtered.filter(character =>
                    character.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }
            // Filtrage par film
            if (this.selectedFilm) {
                filtered = filtered.filter(character =>
                    character.films.includes(this.selectedFilm)
                );
            }

            // Filtrage supplémentaire 
            filtered = filtered.filter(character =>
                character.name.toLowerCase() !== 'nazis' && //oups
                character.films.length > 1 &&
                character.tvShows.length > 0 &&
                character.videoGames.length > 0 &&
                !character.imageUrl.toLowerCase().endsWith('.gif')
            );

            return filtered;
        }
    },
    async mounted() {
        try {
            this.CharacterData = await getCharacterData();
        } catch (error) {
            console.error('Erreur lors de la récupération des données des personnages :', error);
        }
    }
};
</script>

<style>
.Character-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 100px;
}
</style>