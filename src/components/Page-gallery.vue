<template>
    <div>
        <HeaderVue @search="handleSearch"></HeaderVue>
        <!-- <HeaderVue></HeaderVue> -->


        <Quote :quote="currentQuote"></Quote>

        <!-- barre recherche -->
        <CharacterGalleryVue :characterData="CharacterData"></CharacterGalleryVue>
        <Footer></Footer>
    </div>
</template>

<script>
import CharacterGalleryVue from "./Character-gallery.vue";
import HeaderVue from "./Header.vue";
import Footer from "./Footer.vue";
import Quote from "./quote.vue";
import getCharacterData from "@/services/api/CharacterRepositery";

export default {
    components: {
        CharacterGalleryVue,
        HeaderVue,
        Quote,
        Footer
    },
    data() {
        return {
            CharacterData: [],
            quotes: [
                "Venture outside your comfort zone. The rewards are worth it. - Rapunzel (Tangled)",
                "All it takes is faith and trust. - Peter Pan(Peter Pan)",
                "The flower that blooms in adversity is the most rare and beautiful of all. - The Emperor (Mulan)",
                "Don't just fly, soar. - Dumbo (Dumbo)",
                "In every job that must be done, there is an element of fun.- Mary Poppins (Mary Poppins)",
                "The problem is not the problem. The problem is your attitude about the problem.- Jack Sparrow(Pirates of the Caribbean)",
                "Today is a good day to try.- Quasimodo(The Hunchback of Notre Dame)",
                "Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it - Rafiki (The Lion King)",
                "You're braver than you believe, and stronger than you seem, and smarter than you think - Winnie the Pooh (Pooh's Most Grand Adventure)",
                "Happiness is the richest thing we will ever own - Donald Duck",
                "Now, think of the happiest things. It's the same as having wings. - Peter Pan (Peter Pan)"
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
            // this.categories = getCategoryFromCharacter(this.CharacterData)
        },
        displayNextQuote() {
            this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
            this.currentQuote = this.quotes[this.currentQuoteIndex];
        }
    },
    mounted() {
        this.searchCharacter();
        this.displayNextQuote();
        setInterval(this.displayNextQuote, 5000);
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