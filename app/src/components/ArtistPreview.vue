<template>
    <div class="artistpreview">
        <div v-for="(item, index) in result" :key="index">
            <section class="artistcard">
                <p class="">{{item.name}}</p>
                
                <div class="artistcard__image">
                    <!-- the params denote the product retrieved, no? 🤔 -->
                    <!-- <router-link :to="{ name: 'product', params: { theProduct: item.slug.current }}"> -->
                        <img :src="item.image.asset.url" alt="picture of record/artist">

                    <!-- </router-link> -->
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import sanity from '../client.js'
import query from '../groq/artists.groq?raw'

export default {
    data() {
        return {
            result: null,
        }
    },
    async created() {
        await this.getArtists()
    },
    methods: {
        async getArtists() {
            this.result = await sanity.fetch(query)
        }
    },
}
</script>

<style>
    .artistcard {
        border: thin solid #eee;
        border-radius: 5px;
        width: 375px;
        padding: 1rem;
    }

    .artistpreview {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        grid-gap: 2rem;
	}

    /* F**k it, we're going desktop first! 😬*/
    @media screen and (max-width: 1200px){
        .artistpreview {
            grid-template-columns: repeat(2, 1fr);
        }
    }   

    @media screen and (max-width: 800px){
        .artistpreview {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>