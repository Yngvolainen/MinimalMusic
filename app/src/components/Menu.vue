<template>
    <menu class="menu">
        <div class="menu__header">
            <h2>MENUUUUU</h2>

            <button @click="$emit('closeMenu')"> <img src="/images/album.svg" alt=""> </button>
        </div>
        <ul>
            <li>sorting</li>
            <li>should</li>
            <li>be an</li>
            <li>option</li>
        </ul>
    </menu>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>
    .menu {
    position: fixed;
    top: 30px;
    left: 10px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    height: fit-content;
    width: fit-content;
    border-radius: 5px;
    z-index: 3;
    }

    .menu__header {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }

    .menu__header button {
        margin-left: 15px;
    }

    .menu__header button img{
        height: 2rem; 
    }

    .menu ul li {
        list-style: none;
    }
</style>