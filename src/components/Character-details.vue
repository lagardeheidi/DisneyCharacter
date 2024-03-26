<template>
    <div class="character-details">
        <HeaderVue></HeaderVue>

        <div class="details-container">
            <div class="home-button" @click="navigateToHome"><img width="15" height="15"
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

<style>
.character-details {
    font-family: "Handlee", cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.details-container {
    margin-top: 60px;
    text-align: center;
}

.character-name {
    color: #000000;
    text-align: center;
}

.character-image {
    width: 300px;
    height: auto;
    margin-top: 20px;
    border-radius: 20px;
}

.character-image:hover {
    transition: filter 0.3s ease;
}

.film-list {
    font-family: "Handlee", cursive;
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
    color: #000000;
    border: 2px solid rgb(216, 2, 134);
    border-radius: 5px;
    padding: 5px 18px;
    display: inline-block;
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 12px;
    letter-spacing: 1px;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 10px;
    transition: background-color 0.4s;
}

.home-button:hover {
    background-color: #D80286;
    color: #ffffff;
}

.handlee-regular {
    font-family: "Handlee", cursive;
    font-weight: 400;
    font-style: normal;
}
</style>
