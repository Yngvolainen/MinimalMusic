<template>
    <div v-if="shoppingcart.length === 0" class="cart--empty">
        <p>Your shopping cart is empty</p>

        <button>
            <router-link :to="{name: 'main'}"><img src="/images/back-arrow-black.svg" alt="return to main page"></router-link>
        </button>
    </div>
  
    <div v-else class="cart">
        <div class="cart__header">
            <h3>items in your cart:</h3>

            <button>
                 <router-link :to="{name: 'main'}"><img src="/images/back-arrow-black.svg" alt="return to main page"></router-link>
            </button>
        </div>

        <CartItems class="cart__list" v-for="item in shoppingcart" :item="item"></CartItems>
      
        <div class="cart__end">
            <p class="cart__total">total due: kr{{totalDue}}.-</p>

            <router-link :to="{ name: 'main' }">
                <button @click="emptyCart">empty cart</button> 
            </router-link>
        </div>  
    </div>
</template>

<script>
    import CartItems from './CartItems.vue'

    export default {
        components: {
            CartItems
        },
        data() {
            return {
                // GETTERS
                shoppingcart: this.$store.state.shoppingcart,
            }
        },
        computed: {
            totalDue() {
                return this.shoppingcart
                .map( x  => x.price * x.amount)
                .reduce( (utgangspunkt, tillegg) => utgangspunkt + tillegg);
            }
        },
        methods: {
            emptyCart() {
                this.$store.dispatch('runEmptyCart')
            }
        }
    }
</script>

<style>
    .cart {
        margin: 0 auto;
        width: 75%;
        min-height: 75vh;
    }

    .cart--empty {
        text-align: center;
        padding-top: 5rem;
        min-height: 75vh;
    }

    .cart--empty button img {
        margin-top: 1rem;
        height: 2rem;
    }

    .cart__header {
        margin-bottom: 2rem;
    }

    .cart__header button img {
        height: 2rem;
    }

    .cart__list{
        margin-top: 1rem;
    }

    .cart__end,
    .cart__header 
    {
        display: flex;
        justify-content: space-between;
    }

    .cart__end {
        margin-top: 2rem;
    }
</style>