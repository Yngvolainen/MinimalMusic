<template>
    <footer>
        <ul>
            <li>
                Other websites by me:
            </li>
            <br>
            <li>
                <a href="https://ze-weather-app.netlify.app">The weather app</a>
            </li>
      
            <li>
                <a href="https://cur-ex-2000.netlify.app/">Currency exchanger 2000</a>
            </li>
        </ul>

        <div>
            <p>© Yngve Jøsevold</p>
        </div>
        <!-- <form>
            <label for="email">Join our newsletter</label>

            <br>

            <input type="email" name="email">
        </form> -->
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
        /* position: sticky; */
        /* bottom: 0; */
    }

    footer li {
        color: white;
        list-style: none;
    }
</style>