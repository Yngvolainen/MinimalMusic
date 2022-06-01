<template>
    <footer>
        <ul>
            <li>
                youbook
            </li>
        
            <li>
                instatube
            </li>
      
            <li>
                facespace
            </li>
        </ul>

        <form>
            <label for="email">Join our newsletter</label>

            <br>

            <input type="email" name="email">
        </form>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
    footer {
        width: 100%;
        background: black;
        color: white;
        padding: 1rem 0;
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
        position: sticky;
        bottom: 0;
    }

    footer li {
        color: white;
        list-style: none;
    }
</style>