<template>
    <div class="Header">

        <body>
            <header>
                <h1>Disney Character</h1>
            </header>
        </body>
    </div>
</template>
    
<script>
import HeaderVue from './Header.vue';

export default {
    components: {
        name: "HeaderVue"
    }
}
</script>
    
<style>
.Header {
    font-family: 'Waltograph';
}

header {
    background-color: rgb(218, 167, 243);
}

h1 {
    color: white;
    text-align: left;
    font-weight: lighter;
    padding: 1em;

}
</style>