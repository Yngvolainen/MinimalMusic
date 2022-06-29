<template>
    <div class="cartpreview">
        <div class="cartpreview__header">
            <h2>|cart|</h2>

            <button @click="$emit('close-cart')"> <img src="/images/close-button-white.svg" alt="close cart preview"></button>
        </div>

        <div v-if="cartItems.length === 0">
            <p>Your shopping cart is empty</p>
        </div>

        <div v-else>
            <div v-for="item in cartItems" :key="item._id" class="cartpreview__list">
                <img :src="item.image.asset.url" alt="cover graphics">
                
                <p>{{item.name}}</p>
            </div>
          
            <div class="cartpreview__cartlink">
                <button>
                    <router-link  @click="$emit('close-cart')" :to="{name: 'cart'}">go to cart <span><img src="/images/forward-arrow-white.svg" alt="go to cart"></span> </router-link>
                </button> 
            </div>
        </div>
    </div>
</template>

<script>
    import CartItems from './CartItems.vue'

    export default {
        data() {
            return {
                cartItems: this.$store.state.shoppingcart,
            }
        },
        components: { 
            CartItems 
        },
    }
</script>

<style>
    .cartpreview {
        position: fixed;
        top: 40px;
        right: 10px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        height: fit-content;
        width: fit-content;
        min-width: 200px;
        max-width: 380px;
        border-radius: 5px;
        z-index: 3;
    }

    .cartpreview__header {
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
    }

    .cartpreview__header img {
        /* margin-left: 15px; */
        height: 1.2rem;
    }

    .cartpreview__list {
        display: flex;
        margin-bottom: 10px;
    }

    .cartpreview__list img {
        width: 2rem;
        margin-right: 2rem;
    }

    .cartpreview__cartlink {
        margin-top: 1rem;
    }

    .cartpreview__cartlink button {
        width: 100%;
    }

    .cartpreview__cartlink button img {
        /* display: inline; */
        height: 1rem;
    }

    .cartpreview__cartlink :nth-child(1) {
        color: var(--highlight);
        text-decoration: none;
    }

    .cartpreview__total {
        display: flex;
        justify-content: space-between;
    }
</style>