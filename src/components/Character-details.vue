<template>
    <div class="character-details">
        <HeaderVue></HeaderVue>

        <div class="details-container">
            <div class="home-button" @click="navigateToHome"><img width="45" height="45"
                    src="https://img.icons8.com/ios-glyphs/30/left.png" alt="left" /></div>
            <h1 class="character-name">{{ characterName }}</h1>
            <img class="character-image" :src="imageUrl" :alt="characterName" />
            <h2>Films:</h2>
            <ul class="film-list">
                <li v-for="film in films" :key="film" class="film-item">{{ film }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import HeaderVue from './Header.vue';
export default {
    components: {
        HeaderVue
    },
    props: {
        id: String,
        characterName: String,
        imageUrl: String,
        films: Array
    },
    methods: {
        navigateToHome() {
            this.$router.push({ path: '/' });
        },
    }
};
</script>

<style scoped>
.character-details {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    font-family: "Handlee", cursive;
}

.details-container {
    text-align: center;
}

.character-name {
    color: #000000;
    font-size: 24px;
    margin-top: 20px;
    font-family: 'Waltograph';
}

.character-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-top: 20px;
}

.film-list {
    list-style-type: none;
    padding: 0;
}

.film-item {
    background-color: #f2f2f2;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
}

.home-button {
    cursor: pointer;
    transition: transform 0.3s, color 0.3s;
}

.home-button:hover {
    transform: scale(1.2);
}

@media screen and (max-width: 768px) {
    .character-name {
        font-size: 30px;
    }

    .character-image {
        max-width: 70%;
    }

    .home-button {
        padding: 10px;
    }

}
</style>
