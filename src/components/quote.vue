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
    margin-top: 80px;
    width: 80%;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

.quote-text {
    font-family: "Handlee", cursive;
    font-size: 18px;
    color: #000000;
    margin: 1;
    font-style: italic;
    margin-bottom: 1px;
}

.quote-author {
    font-style: italic;
    font-weight: bold;
    color: #333;
}
</style>
