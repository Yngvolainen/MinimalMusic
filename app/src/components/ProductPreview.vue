<template>
    <div>
        <Artist v-if="this.$store.state.artistParams" />
    </div>
    <div class="productpreview">
        <div v-for="(item, index) in result" :key="index">
            <section class="productcard">
                <p class="">{{item.artist.name}}</p>
                
                <div class="productcard__image">
                    <!-- the params denote the product retrieved, no? 🤔 -->
                    <router-link :to="{ name: 'product', params: { theProduct: item.slug.current }}">
                        <img :src="item.image.asset.url" alt="picture of record/artist">

                        <div class="productcard__sale" v-if="item.sale === true">
                            <img src="/images/sale.svg" alt="on sale">
                        </div>
                    </router-link>
                </div>

                <p>{{item.name}}</p>

                <p>{{item.releasedIn}}</p>
            </section>
        </div>
    </div>
</template>

<script>
import sanity from '../client.js'
import allRecords from '../groq/records.groq?raw'
import recordsByArtist from '../groq/recordsByArtist.groq?raw'
import Artist from './Artist.vue'
// import recordsWithParams from '../groq/recordsWithParams.groq?raw'

export default {
    components: {Artist},
    data() {
        return {
            result: null,
            params: this.$store.state.artistParams,
            slug: null
        };
    },
    created() {
        // await this.getParams();
        this.getRecords();
    },
    methods: {
        async getRecords() {
            // If no artist is selected, retrieve all records
            if (this.params === null) {
                this.result = await sanity.fetch(allRecords);
                console.log(this.result);
            }
            // if an artist has been selected, only get records from that artist
            else {
                let res = await sanity.fetch(recordsByArtist, { artistname: this.params })
                this.result = res[0].releases
                console.log(this.result);
                
            }
        }
    }
}
</script>

<style>
    .productcard {
        border: thin solid #eee;
        border-radius: 5px;
        width: 375px;
        padding: 1rem;
        /* this position to ensure the sale-sticker appears where it should */
        position: relative;
    }

    .productcard__sale {
        position: absolute;
        top: -10px;
        left: -10px;
    }

    .productpreview {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        grid-gap: 2rem;
	}

    /* F**k it, we're going desktop first! 😬*/
    @media screen and (max-width: 1200px){
        .productpreview {
            grid-template-columns: repeat(2, 1fr);
        }
    }   

    @media screen and (max-width: 800px){
        .productpreview {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>