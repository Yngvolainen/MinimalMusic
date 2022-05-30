<template>
    <section class="product">
        <div class="product__image">
            <img :src="result.image.asset.url" alt="product image">
        </div>
        <div class="product__description">
            <router-link :to="{name: 'main'}">{{`${'<---'}`}}</router-link>
            <h2>{{result.artist.name}}</h2>
            <h3>{{result.name}}</h3>
            <div class="product__price">
                <p>{{`kr${result.price}.-`}}</p>
                <button @click="addToCart">
                    <img class="product__add" src="/images/shopping-cart-add-black.svg" alt="add to cart">
                </button>
            </div>
            <div class="product__text">{{result.description}}</div>
        </div>
    </section>
</template>

<script>
    import sanity from '../client.js'
    // import query from '../groq/product.groq?raw'

    export default {
        data() {
            return {
                // placeholder while retrieving from sanity
                result: {
                    artist: {name: 'artist name'},
                    name: 'album name',
                    image: {
                        asset: {
                            url: '/images/album-black.svg'
                        }
                    }
                },
                productSlug: ''
            }
        },
        async created() {
            // get slug from route params
            this.productSlug = this.$route.params.theProduct
            // get correct product (with slug)
            await this.getProduct()
            // console.log(this.result.slug.current)
        },
        methods: {
            async getProduct() {
                const query = `*[slug.current == $productSlug][0] {
                                ...,
                                _id,
                                artist[0]-> {
                                    name
                                },
                                genre[]-> { 
                                    name
                                },
                                image {
                                    asset-> {
                                        url
                                    }
                                },
                                price,
                                description,
                                }`;

                const params = {
                    productSlug: this.productSlug
                };

                this.result = await sanity.fetch(query, params)
            },  
            addToCart() {
                // console.log(this.result)
                this.$store.commit('addToCart', this.result)
            }
        }
    }
</script>

<style>
    .product {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
    }

    .product__description {
        width: 35%;
    }

    .product__description :nth-child(1){
        text-decoration: none;
        color: inherit;
 
    }

    .product__image {
        width: 35%;
    }

    .product__price {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        margin: 1rem 0;
    }

    .product__add {
        height: 1.5rem;
    }

    .product__text {
        margin-top: 2rem;
  
    }
</style>