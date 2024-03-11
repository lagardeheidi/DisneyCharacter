<template>

    <!-- <div v-if="loading" class="loading-message">Chargement de la page...</div> -->
    <HeaderVue @search="handleSearch"></HeaderVue>
    <CharacterGalleryVue :CharacterData="CharacterData"></CharacterGalleryVue>


</template>

<script>
import CharacterGalleryVue from './components/Character-gallery.vue';
import HeaderVue from './components/Header.vue';
import getCharacterData from './services/api/CharacterRepositery';

export default {
    components: {
        CharacterGalleryVue,
        HeaderVue
    },
    data() {
        return {
            CharacterData: [],
            loading: true
        };
    },
    methods: {
        handleSearch(query) {
            this.searchCharacter(query)
        },
        async searchCharacter(name) {
            this.CharacterData = await getCharacterData(name);
        }
    },
    async mounted() {
        this.searchCharacter()
    }
}
</script>

<style>
.loading-message {
    position: fixed;
    font-family: 'Waltograph';
    font-size: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(203, 3, 160, 0.2);
}
</style>
