<template>
    <div class="character_search">
        <input class="search-bar" type="text" :value="searchCharacterKey" @input="updateSearchCharacterKey"
            placeholder="Search character">
        <button class="search-button" @click="launchSearch">Search</button>
        <button class="sort-button" @click="sort('asc')">A - Z</button>
        <button class="sort-button" @click="sort('desc')">Z - A</button>
    </div>
</template>

<script>
export default {
    name: "SearchCharacter",
    props: {
        searchCharacterKey: String
    },
    emits: ["update:searchCharacterKey", "search", "sort"],
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
    padding: 10px;
}

.search-bar {
    flex: 0.5;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #D30F71;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.search-bar:focus {
    border-color: #AA0C5C;
    box-shadow: 0 0 8px #AA0C5C;
}

.search-button,
.sort-button {
    padding: 10px 20px;
    background-color: #D30F71;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
}

.search-button:hover,
.sort-button:hover {
    background-color: #AA0C5C;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

}

.sort-button {
    background-color: #6C757D;
}

.sort-button:hover {
    background-color: #5A6268;
}

@media screen and (max-width: 768px) {
    .character_search {
        flex-direction: column;
        align-items: stretch;
    }

    .search-bar {
        flex: 0 0 80%;
        margin-bottom: 10px;
    }

    .search-button,
    .sort-button {
        width: 100%;
    }
}
</style>
