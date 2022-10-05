<template>
    <div class="cartitems">
        <img :src="item.image.asset.url" alt="">

        <p>{{item.artist.name}}</p>

        <p>{{item.name}}</p>
        
        <p class="cartitems__price">{{`kr${item.price}.-`}}</p>
        
        <div class="cartitems__adjust">
            <button @click="removeOne(item)">-</button>

            <p class="cartitems__amount">{{item.amount}}</p>

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
                this.$store.dispatch('runRemoveFromCart', item)
            },
            addOne(item) {
                this.$store.dispatch('runAddToCart', item)
            }
        }
    }
</script>

<style>
    .cartitems {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
        padding: 1rem 0;
        border-bottom: 1px solid #eee;
    }

    .cartitems img {
        width: 50px;
    }

    .cartitems p {
        margin-right: 1rem;
    }

    .cartitems__price {
        /* margin-right: 2rem; */
        justify-self: end;
    }

    .cartitems__adjust {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        /* justify-self: end; */
        /* margin-left: 5rem; */
    }

    .cartitems__adjust button {
        border: 1px solid gray;
        border-radius: 3px;
        height: 2rem;
        width: 2rem; 
    }

    .cartitems__amount {
        padding: 0 1rem;
    }

    @media screen and (max-width: 780px){
        .cartitems {
            grid-template-columns: repeat(3, 1fr);
        }
        .cartitems__price {
            grid-column: 2;
            justify-self: start;
        }
        .cartitems__adjust {
            grid-column: 3;
            justify-self: start;
        }
    }
    
</style>