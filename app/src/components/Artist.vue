<template>
    <section class="artist">
        <div class="artist__image">
            <!-- Imageeeee -->
            <img :src="result.image.asset.url" alt="artist image">
        </div>

        <div class="artist__description">
            <h3>{{result.name}}</h3>
            <!-- Artisteeeeee -->
            <p>{{result.bio}}</p>
        </div>
    </section>
</template>

<script>

    export default {
        data() {
            return {
                result: null,
                // placeholder while retrieving from store
                result: {
                    name: 'artist name',
                    image: {
                        asset: {
                            url: '/images/album-black.svg'
                        }
                    }
                },
                artistSlug: ''
            }
        },
        created() {
            this.artistSlug = this.$route.params.theArtist
            // get slug from route params
            // this.productSlug = this.$route.params.theProduct
            // get correct product (with slug)
            // await this.getProduct()
            this.result = this.$store.state.artistResult
            console.log(this.result)
        },
        methods: {
            // async getProduct() {
            //     const params = {
            //         productSlug: this.productSlug
            //     };
            //     // query imported from ../groq/product.groq, see above
            //     this.result = await sanity.fetch(query, params)
            // }
        }
    }
</script>

<style>
    .artist {
        /* min-height: 75vh; */
        margin-bottom: 2rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
    }

    .artist__image {
        width: 35%;
        min-width: 200px;
        max-width: 400px;
        /* below code _almost_ worked as intended */
        /* width: clamp(200px, 35%, 400px); */
    }
</style>