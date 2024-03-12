<template>
    <div>
        <HeaderVue @search="handleSearch" @displayQuote="displayRandomQuote"></HeaderVue>
        <div class="quote-container" v-if="currentQuote">
            <p class="quote-text">
                {{ currentQuote.substring(0, currentQuote.indexOf('-')) }}
            </p>
            <p class="quote-author">
                {{ currentQuote.substring(currentQuote.indexOf('-') + 1) }}
            </p>
        </div>
        <CharacterGalleryVue :CharacterData="CharacterData"></CharacterGalleryVue>
    </div>
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
            loading: true,
            quotes: [
                "Eh oui, le passé est douloureux. Mais à mon sens, on peut soit le fuir, soit tout en apprendre - Rafiki (Roi Lion) ",
                "Les choses qui me rendent différent font qui je suis réellement - Winnie L'ourson",
                "Hakuna Matata ! Ça veut dire pas de souci ! - Pumba (Roi Lion)",
                "Nage droit d'vant toi, nage droit d'vant toi, nage droit d'vant, d'vant toi, d'vant toi - Dory (Le Monde de Némo)",
                "Le monde est à nous, il suffit de le prendre - Clochard (La Belle et le Clochard)",
                "Il en faut peu pour être heureux, vraiment très peu pour être heureux... - Baloo (Le livre de la jungle)",
                "Peu importe l’état de ton cœur, si tu continues de croire, le rêve que tu désires se réalisera - Cendrillon",
            ],
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
        displayRandomQuote() {
            const randomIndex = Math.floor(Math.random() * this.quotes.length);
            this.currentQuote = this.quotes[randomIndex];
        }
    },
    async mounted() {
        this.searchCharacter();
    }
};
</script>

<style>
.quote-container {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    z-index: 999;
}

.quote-text {
    font-size: 18px;
    color: #000000;
    margin: 0;
    font-style: italic;
}

.quote-author {
    font-style: normal;
    font-weight: bold;
    color: #333;
    margin-top: 5px;
    /* Ajoutez un peu de marge au-dessus pour l'espacement */
}
</style>