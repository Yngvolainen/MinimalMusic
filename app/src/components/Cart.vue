<template>
    <div v-if="shoppingcart.length === 0">
        <p>Your shopping cart is empty</p>
    </div>
  
    <div v-else class="cart">
        <h3 class="cart__header">ITEMS IN YOUR CART</h3>

        <CartItems class="cart__list" v-for="item in shoppingcart" :item="item"></CartItems>
      
        <div class="cart__end">
            <p class="cart__total">TOTAL DUE: kr{{totalDue}}.-</p>

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
                this.$store.commit('emptyCart')
            }
        }
    }
</script>

<style>
    .cart {
        margin: 0 auto;
        width: 75%;
    }

    .cart__header {
        margin-bottom: 10px;
    }

    .cart__list{
        margin-top: 1rem;
    }

    .cart__end {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .cart__total {
        margin-top: 2rem;
    }
</style>