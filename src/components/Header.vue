<template>
    <div class="Header">
        <header>
            <h1 @click="navigateToHome">Disney Character</h1>
        </header>
    </div>
</template>

<script>
export default {
    // data() {
    //     // return {
    //     //     a: 12,
    //     //     b: 2,
    //     // }
    //     return {
    //         searchCharacterKey: localStorage.getItem("searchCharacterKey") || "",
    //         characterSearchData: [],
    //     }
    // },

    // created() {
    //     this.resetSearchCharacterKey();
    //     this.searchText();
    // },
    methods: {

        // async characterSearched() {
        //     if (this.searchCharacterKey) {
        //         this.characterSearchData = await getCharacterData(this.searchCharacterKey)
        //         //recuperer en faisant 
        //         this.characterSearchData = this.characterSearchData.data; //recupere tous les perso
        //     }
        // },
        navigateToHome() {
            this.$router.push({ path: '/' });
        }
    },
    // computed: {
    //     characterSearchDataFiltered: function () {
    //         let data = [...this.characterSearchData]
    //         let dataFilter = data.filter(item => {
    //             item.name.toLowerCase() !== "nazis" && //oups
    //                 item.films.length > 1 &&
    //                 !item.imageUrl?.toLowerCase().endsWith(".gif")
    //         })

    //         return dataFilter
    //     }
    // }

    // computed: {

    //     // Bidule() {
    //     //     let tableau = [1, 5, 10];
    //     //     tableau = tableau.filter((item) => {
    //     //         return item > this.a
    //     //     })
    //     //     return tableau;
    //     // }
    // },

};
</script>

<style scoped>
.Header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(128, 147, 241);
    z-index: 999;
    padding: 10px 20px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    width: 60%;
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
    transform: scale(1.1);
    background-color: #EFA9AE;
    color: rgb(255, 255, 255);
}

h1 {
    color: rgb(255, 255, 255);
    text-align: left;
    font-weight: lighter;
    margin: 0;
    font-family: 'Waltograph';
    cursor: pointer;
    font-size: 24px;
}

@media screen and (max-width: 768px) {
    .search-input {
        width: 50%;
    }
}
</style>
