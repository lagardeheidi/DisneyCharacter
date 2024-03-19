<template>

    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet">
    </head>
    <div class="character-details">
        <HeaderVue></HeaderVue>
        <div class="details-container">
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
    created() {

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
    color: #9e000b;
}

.character-image {
    width: 300px;
    height: auto;
    margin-top: 20px;
    border-radius: 20px;
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

.handlee-regular {
    font-family: "Handlee", cursive;
    font-weight: 400;
    font-style: normal;
}
</style>
