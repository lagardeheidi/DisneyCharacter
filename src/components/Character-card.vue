<template>
    <div class="Character-card">
        <div class="image-container">
            <img class="image" :src="imageUrl" :alt="name" />
        </div>
        <div class="name-overlay">{{ name }}</div>
    </div>
</template>

<script>
export default {
    name: 'CharacterCard',
    props: {
        name: { type: String, required: true },
        imageUrl: { type: String, default: "https://static.wikia.nocookie.net/disney/images/0/05/Fox-disneyscreencaps_com-901.jpg" }
    }
};
</script>

<style>
.Character-card {
    text-align: center;
    width: 400px;
    height: 300px;
    margin: 20px;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s;
    border: 6px solid rgb(211, 15, 113);
    border-radius: 10px;
    cursor: pointer;
}

.image-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
}

.name-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 0 0 10px 10px;
    box-sizing: border-box;
}

.Character-card:hover {
    transform: scale(1.1);
}
</style>
