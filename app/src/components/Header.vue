<template>
    <header class="header">
        <div>
            <button @click="toggleMenu" >|menu|</button>
        </div>
        <h1>
            <router-link :to="{ name: 'main' }">minimal | music</router-link>
        </h1>
        <div>
            <button class="header__cartnumber" @close-cart="toggleCart" @click="toggleCart">{{`${'|'.repeat(this.$store.getters.getCartItems.length)}|cart|`}}</button>
        </div>
    </header>
    
    <Menu v-if="menuVisible" @close-menu="toggleMenu" />
    <CartPreview v-if="cartVisible" @close-cart="toggleCart" />
</template>

<script>
import Menu from './Menu.vue'
import CartPreview from './CartPreview.vue'

export default {
    components: {
        Menu, 
        CartPreview
    },
    data() {
        return {
            cartVisible: false,
            menuVisible: false,
        }
    },
    methods: {
        toggleMenu() {
            this.menuVisible = !this.menuVisible
        },
        toggleCart() {
            this.cartVisible = !this.cartVisible
        }
    }
}
</script>

<style>
    .header {
        background: white;
        width: 100%;
        position: sticky;
        top: 0;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        z-index: 2;
    }

    header h1 {
        font-family: 'Quicksand', sans-serif;
    }

    header h1 a {
        text-decoration: none;
        color: black;
    }

    @media screen and (max-width: 416px){
        .header {
            
        }
    }
</style>