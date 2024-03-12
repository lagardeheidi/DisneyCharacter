<template>
    <div class="Character-gallery">
        <CharacterCard v-for="character in filteredCharacters" :key="character._id" :name="character.name"
            :image-url="character.imageUrl" />
    </div>
</template>

<script>
import CharacterCard from './Character-card.vue';

export default {
    components: {
        CharacterCard
    },
    props: [
        'searchQuery', 'CharacterData'
    ],
    data() {
    },
    computed: {
        filteredCharacters() {
            let filtered = this.CharacterData;

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
    margin-top: 140px;
}
</style>