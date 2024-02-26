<template>
    <div class="Character-gallery">
        <CharacterCard v-for="character in CharacterData" :key="character._id" :name="character.name"
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
    data() {
        return {
            CharacterData: []
        };
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
    gap: 20px;
}
</style>
