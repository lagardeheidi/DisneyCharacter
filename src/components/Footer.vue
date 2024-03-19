<template>
    <footer class="Footer">
        <p>© 2024 Heïdi LAGARDE. Tous droits réservés.</p>
        <button class="back-to-top-button" @click="scrollToTop"><img width="50" height="50"
                src="https://img.icons8.com/bubbles/50/up.png" alt="up" /></button>
    </footer>
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
};
</script>

<style>
.Footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

.back-to-top-button {
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.back-to-top-button:hover {
    background-color: #777;
}
</style>