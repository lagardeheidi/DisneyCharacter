<template>
    <div>
        <HeaderVue @search="handleSearch"></HeaderVue>
        <Quote :quote="currentQuote"></Quote>
        <CharacterGalleryVue :characterData="CharacterData"></CharacterGalleryVue>
    </div>
</template>

<script>
import CharacterGalleryVue from "./components/Character-gallery.vue";
import HeaderVue from "./components/Header.vue";
import Quote from "./components/Quote.vue";
import getCharacterData from "./services/api/CharacterRepositery";

export default {
    components: {
        CharacterGalleryVue,
        HeaderVue,
        Quote
    },
    data() {
        return {
            CharacterData: [],
            quotes: [
                "Eh oui, le passé est douloureux. Mais à mon sens, on peut soit le fuir, soit tout en apprendre - Rafiki (Roi Lion)",
                "Les choses qui me rendent différent font qui je suis réellement - Winnie L'ourson",
                "Hakuna Matata ! Ça veut dire pas de souci ! - Pumba (Roi Lion)",
                "Nage droit d'vant toi, nage droit d'vant toi, nage droit d'vant, d'vant toi, d'vant toi - Dory (Le Monde de Némo)",
                "Le monde est à nous, il suffit de le prendre - Clochard (La Belle et le Clochard)",
                "Il en faut peu pour être heureux, vraiment très peu pour être heureux... - Baloo (Le livre de la jungle)",
                "Peu importe l’état de ton cœur, si tu continues de croire, le rêve que tu désires se réalisera - Cendrillon"
            ],
            currentQuoteIndex: 0, // Index de la citation actuelle
            currentQuote: ""
        };
    },
    methods: {
        handleSearch(query) {
            this.searchCharacter(query);
        },
        async searchCharacter(name) {
            this.CharacterData = await getCharacterData(name);
        },
        displayNextQuote() {
            this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
            this.currentQuote = this.quotes[this.currentQuoteIndex];
        }
    },
    mounted() {
        this.searchCharacter();
        this.displayNextQuote();
        setInterval(this.displayNextQuote, 3000);
    }
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
}
</style>