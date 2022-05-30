<template>

    <div class="cartitems">
        <img :src="item.image.asset.url" alt="">

        <p>{{item.artist.name}}</p>

        <p>{{item.name}}</p>
        
        <p class="cartitems__price">{{`kr${item.price}.-`}}</p>
        
        <div class="cartitems__amount">
            <button @click="removeOne(item)">-</button>

            <p class="cartitems__number">x{{item.amount}}</p>

            <button @click="addOne(item)">+</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        data() {
            return {
            
            }
        },
        methods: {
            removeOne(item) {
                this.$store.commit('removeFromCart', item)
            },
            addOne(item) {
                this.$store.commit('addToCart', item)
            }
        }
    }
</script>

<style>
    .cartitems {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
    }

    .cartitems img {
        width: 50px;
    }

    .cartitems p {
        margin-left: 2rem;
    }

    .cartitems__price {
        right: 0;
        justify-self: end;
    }

    .cartitems__amount {
        display: flex;
        margin-left: 5rem;
    }

    .cartitems__number {
        padding: 0 2rem;
    }
    
    
</style>