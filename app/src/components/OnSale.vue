<template>
    <div class="productcard__sale" v-if="item[index].sale === true">
        <img src="/images/sale.svg" alt="on sale">
    </div>
</template>

<script>
    export default {
        props: ['item', 'index']
    }
</script>

<style>
    .productcard__sale {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>