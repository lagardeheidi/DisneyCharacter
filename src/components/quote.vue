<template>
    <div class="quote-container" v-if="quote">
        <p class="quote-text">
            {{ quote.substring(0, quote.indexOf('-')) }}
        </p>
        <p class="quote-author">
            {{ quote.substring(quote.indexOf('-') + 1) }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        quote: String
    }
};
</script>

<style>
.quote-container {
    margin-top: 100px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    z-index: 999;
}

.quote-text {
    font-size: 18px;
    color: #000000;
    margin: 0;
    font-style: italic;
}

.quote-author {
    font-style: normal;
    font-weight: bold;
    color: #333;
    margin-top: 5px;
    /* Add some margin on top for spacing */
}
</style>