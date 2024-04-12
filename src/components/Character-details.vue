<template>
    <div class="character-details">
        <HeaderVue></HeaderVue>

        <div class="details-container">
            <div class="home-button" @click="navigateToHome"><img width="45" height="45"
                    src="https://img.icons8.com/ios-glyphs/30/left.png" alt="left" /></div>
            <h1 class="character-name">{{ characterName }}</h1>
            <div class="character-info">
                <div class="character-image">
                    <img :src="imageUrl" :alt="characterName" />
                </div>
                <div class="films-container">
                    <h2>Films:</h2>
                    <ul class="film-list">
                        <li v-for="film in films" :key="film" class="film-item">{{ film }}</li>
                    </ul>
                </div>
            </div>
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
    padding-top: 60px;
    font-family: "Handlee", cursive;
}

.details-container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    background-color: rgba(128, 191, 241);
    padding: 20px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px rgba(105, 101, 166, 0.4);
}

.character-name {
    color: #000000;
    font-size: 24px;
    margin-top: 20px;
    font-family: 'Waltograph';
}

.character-info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.character-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-right: 20px;
    border-radius: 20px;
    /* Ajout de coins arrondis */
    overflow: hidden;
    /* Assure que l'image reste dans les limites de son conteneur */
}

.character-image img {
    width: 100%;
    max-width: 100%;
    height: auto;
}

.films-container {
    flex: 1;
    text-align: left;
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

    .character-info {
        flex-direction: column;
        align-items: center;
    }

    .character-image {
        max-width: 100%;
        /* Ajustement de la largeur maximale pour les petits écrans */
        margin-right: 0;
        /* Suppression de la marge pour les petits écrans */
        margin-bottom: 20px;
        /* Ajout d'un espace entre l'image et la liste de films */
    }

    .home-button {
        padding: 10px;
    }

}
</style>
