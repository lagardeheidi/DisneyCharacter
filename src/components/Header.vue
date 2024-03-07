<template>
    <div class="Header">
        <header>
            <h1>Disney Character</h1>
            <div class="search-container">
                <input type="text" class="search-input" v-model="searchQuery" @input="searchCharacter"
                    placeholder="Rechercher un personnage...">
                <button class="search-button" @click="searchCharacter">Rechercher</button>
            </div>
            <div class="filter-container">
                <label for="filmFilter">Sélectionner un film:</label>
                <select id="filmFilter" v-model="selectedFilm">
                    <option value="">Tous les films</option>
                    <option v-for="film in films" :key="film">{{ film }}</option>
                </select>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
            selectedFilm: '',
            films: ['Mulan', 'Tangled', 'The Little Mermaid']
        };
    },
    methods: {
        searchCharacter() {
            this.$emit('search', this.searchQuery, this.selectedFilm);
        }
    }
};
</script>

<style>
.Header {
    font-family: 'Arial';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(211, 15, 113);
    z-index: 999;
}

.h1 {
    font-family: 'Waltograph';
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
}

.search-container {
    display: flex;
    align-items: center;
}

.search-input {
    margin-right: 10px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    width: 300px;
    box-sizing: border-box;
}

.search-button {
    padding: 8px 16px;
    background-color: #ececec;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.search-button:hover {
    transform: scale(1.2);
    background-color: rgb(158, 40, 181);
}

h1 {
    color: white;
    text-align: left;
    font-weight: lighter;
    margin: 0;
}
</style>