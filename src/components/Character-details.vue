<template>
    <div>
        <HeaderVue></HeaderVue>
    </div>
    <div>
        <h1>Nom : {{ characterName }}</h1>
        <img :src="imageUrl" :alt="characterName" />
        <h2>Films:</h2>
        <ul>
            <li v-for="film in films" :key="film">{{ film }}</li>
        </ul>
    </div>
</template>

<script>
export default {
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