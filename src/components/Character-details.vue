<template>
    <div class="character-details">
        <HeaderVue></HeaderVue>

        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet">
        </head>
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
        <FooterVue></FooterVue>
    </div>

</template>

<script>
import HeaderVue from './Header.vue';
import FooterVue from './Footer.vue';
export default {
    components: {
        HeaderVue,
        FooterVue
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
}

.details-container {
    max-width: 350px;
    margin: 0 auto;
    text-align: center;
    background-color: rgba(128, 191, 241);
    padding: 20px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px rgba(105, 101, 166, 0.4);
    font-family: "Poppins", cursive;
    margin-bottom: 100px;
}

.character-name {
    color: #000000;
    font-size: 44px;
    margin-top: 20px;
    font-family: 'Waltograph';
    font-weight: lighter;
}

.character-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.character-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.character-image img {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    transition: transform 0.3s ease;
    transform: scale(1);
}

.character-image img:hover {
    transform: scale(1.1);
}

.films-container {
    text-align: center;
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
    max-width: 100%;
    transition: background-color 0.3s ease;
}

.film-item:hover {
    background-color: #ddd;
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
        margin-right: 0;
        margin-bottom: 20px;
    }

    .home-button {
        padding: 10px;
    }

}
</style>
