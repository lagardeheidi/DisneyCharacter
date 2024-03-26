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