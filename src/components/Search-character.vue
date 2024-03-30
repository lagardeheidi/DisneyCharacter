<template>
    <div class="character_search">
        <input class="search_bar" type="text" :value="searchCharacterKey" @input="updateSearchCharacterKey"
            placeholder="Search character">
        <button class="search_button" @click="launchSearch">Search</button>
        <button class="sort_button" @click="sort('asc')">A - Z</button>
        <button class="sort_button" @click="sort('desc')">Z - A</button>
    </div>
</template>

<script>
export default {
    name: "SearchCharacter",
    props: {
        searchCharacterKey: String
    },
    emits: ["update:searchCharacterKey", "search", "sort"],
    watch: {
        searchCharacterKey: function (newSearch) {
            localStorage.setItem("searchCharacterKey", newSearch);
        }
    },
    methods: {
        updateSearchCharacterKey(event) {
            this.$emit("update:searchCharacterKey", event.target.value);
        },
        launchSearch() {
            this.$emit("search");
        },
        sort(direction) {
            this.$emit("sort", direction);
        }
    }
};
</script>
<style scoped>
.character_search {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.search_bar {
    width: 400px;
    padding: 10px;
    border-radius: 25px;
    border: 2px solid #D30F71;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.search_bar:focus {
    border-color: #AA0C5C;
    box-shadow: 0 0 8px #AA0C5C;
}

.search_button,
.sort_button {
    padding: 10px 20px;
    background-color: #D30F71;
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
}

.search_button:hover,
.sort_button:hover {
    background-color: #AA0C5C;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

}

.sort_button {
    background-color: #6C757D;
}

.sort_button:hover {
    background-color: #5A6268;
}
</style>