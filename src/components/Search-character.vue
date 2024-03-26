<template>
    <div class="character_search">
        <input class="search_bar" type="text" :value="searchCharacterKey" @input="updateSearchCharacterKey"
            placeholder="Search character">
        <button class="search_button" @click="launchSearch">Search</button>
    </div>
</template>

<script>
export default {
    name: "SearchCharacter",
    props: {
        searchCharacterKey: String
    },
    emits: ["update:searchCharacterKey", "search"],
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
        }
    }
};
</script>
<style scoped>
.character_search {
    display: flex;
    align-items: center;
    justify-content: center;
}

.search_bar {
    width: 400px;
    padding: 10px;
    border-radius: 25px;
    border: 2px solid #D30F71;
    font-size: 16px;
    margin-right: 10px;
}

.search_button {
    padding: 10px 20px;
    background-color: #D30F71;
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.search_button:hover {
    background-color: #AA0C5C;
}
</style>