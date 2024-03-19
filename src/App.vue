<template>
    <HeaderVue @search="handleSearch"></HeaderVue>
    <div>
        <router-view></router-view>

    </div>
</template>

<script>
import Footer from './components/Footer.vue';
export default {
    components: {
        Footer
    }
}
</script>