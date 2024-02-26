<template>
    <HeaderVue></HeaderVue>
    <CharacterGalleryVue></CharacterGalleryVue>
    <CharacterCardVue></CharacterCardVue>
    <div id="app"></div>

    <body>
        <div></div>
    </body>
</template>

<script>
import CharacterCardVue from './components/Character-card.vue';
import CharacterGalleryVue from './components/Character-gallery.vue';
import HeaderVue from './components/Header.vue';

export default {
    components: {
        CharacterGalleryVue,
        HeaderVue,
        CharacterCardVue
    }
}
</script>

<style></style>