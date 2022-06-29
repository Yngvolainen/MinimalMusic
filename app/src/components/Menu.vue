<template>
    <menu class="menu">
        <div class="menu__header">
            <h2>|menu|</h2>

            <button class="menu__close-button" @click="$emit('closeMenu')">
                <img src="/images/close-button-white.svg" alt="close menu"> 
            </button>
        </div>
        
        <ul>
            <li>sorting will be available soon</li>
            <!-- <li @click="sortByDate">sort by date</li>

            <li @click="sortByName">sort by name</li> -->
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
        sortByDate() {
            console.log('clicked date')
            this.$store.dispatch('runChangeSort', 'byDate' )
        },
        sortByName() {
            console.log('clicked name')
            this.$store.dispatch('runChangeSort', 'byName')
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