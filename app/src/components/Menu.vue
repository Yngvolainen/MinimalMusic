<template>
    <menu class="menu">
        <div class="menu__header">
            <h2>|menu|</h2>

            <button class="menu__close-button" @click="$emit('closeMenu')">
                <img src="/images/close-button-white.svg" alt="close menu"> 
            </button>
        </div>
        
        <ul>
            <li @click="$emit('closeMenu'), browseCategory('records'), goToMain()">browse records</li>

            <li @click="$emit('closeMenu'), browseCategory('artists'), goToMain()">browse artists</li>

            <li>
                <router-link :to="{ name: 'about'}" @click="$emit('closeMenu')">about us</router-link>
            </li>
        </ul>
    </menu>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        browseCategory(category) {
            this.$store.dispatch('runChangeBrowseCategory', category)
        },
        goToMain() {
            this.$router.push({name: 'main'})
        }
    }
}
</script>

<style>
    .menu {
    position: fixed;
    top: 40px;
    left: 10px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    height: fit-content;
    width: fit-content;
    min-width: 200px;
    border-radius: 5px;
    z-index: 3;
    }

    .menu__header {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }

    .menu__close-button img{
        padding-right: 0.3rem;
        height: 1.2rem; 
    }

    .menu ul li {
        list-style: none;
    }
</style>