<template>
    <div id="app">
        <HeaderVue @search="handleSearch"></HeaderVue>
        <CharacterGalleryVue :searchQuery="searchQuery"></CharacterGalleryVue>
    </div>
</template>

<script>
import CharacterGalleryVue from './components/Character-gallery.vue';
import HeaderVue from './components/Header.vue';

export default {
    components: {
        CharacterGalleryVue,
        HeaderVue
    },
    data() {
        return {
            searchQuery: ''
        };
    },
    methods: {
        handleSearch(query) {
            this.searchQuery = query;
        }
    }
}
</script>

<style></style>
