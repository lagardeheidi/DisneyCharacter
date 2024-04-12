<template>
    <footer class="Footer">
        <p>© 2024 Heïdi LAGARDE. Tous droits réservés.</p>
        <button class="back-to-top-button" @click="scrollToTop"><img width="40" height="40"
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

<style scoped>
.Footer {
    background-color: #8093F1;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.back-to-top-button {
    border: none;
    cursor: pointer;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #642CA9;
    color: #fff;
    padding: 10px;
    transition: background-color 0.3s, transform 0.3s;
}

.back-to-top-button:hover {
    background-color: #642CA9;
    transform: scale(1.1);
}

.back-to-top-button img {
    display: block;
    width: 100%;
    height: auto;
}

@media screen and (max-width: 768px) {
    .back-to-top-button {
        bottom: 70px;
    }
}
</style>
