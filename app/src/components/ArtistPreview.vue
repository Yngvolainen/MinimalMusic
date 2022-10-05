<template>
    <div class="artistpreview">
        <div v-for="(item, index) in result" :key="index">
            <section class="artistpreview__card">
                <p class="">{{item.name}}</p>
                
                <div class="artistpreview__image">
                    <!-- the params denote the product retrieved, no? 🤔 -->
                    <!-- <button @click="chooseArtist(index)">
                        <img :src="item.image.asset.url" alt="picture of artist">
                    </button> -->

                    <router-link @click="chooseArtist(index)" :to="{name: 'artist', params: {theArtist: item.slug.current}}">
                        <img :src="item.image.asset.url" alt="picture of artist">
                    </router-link>
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
            artistParams: ''
        }
    },
    async created() {
        await this.getArtists()
    },
    methods: {
        async getArtists() {
            this.result = await sanity.fetch(query)
            console.log(this.result)
        },
        chooseArtist(index) {
            this.$store.state.artistParams = this.result[index].name
            this.$store.state.artistResult = this.result[index]
            // console.log(this.$store.state.artistParams)
            this.$store.state.browseBy = "records"
            // this.$router.push({name: 'main', params: this.result[index].name})
        }
    },
}
</script>

<style>
    .artistpreview__card {
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