<template>
    <main v-if="!productsLoaded" class="main main--loading">
        <h2>loading</h2>
    </main>

    <main v-else class="main">
        <div class="main__products" >
            <ProductPreview v-for="(item, index) in result" :key="index" :item="result" :index="index"/>
        </div>
    </main>
</template>

<script>
    import ProductPreview from './ProductPreview.vue'
    import sanity from '../client.js'
    import query from '../groq/main.groq?raw'

    export default {
        components: {
            ProductPreview
        },
        data() {
            return {
                result: null,
                productsLoaded: false,
                sortOrder: this.$store.state.sortOrder,
                sortBy: this.$store.state.sortBy
            }
        },
        created() {
            this.getRecords()
        },
        methods: {
			async getRecords() {
                // let params = this.$store.state.sortOrder
				this.result = await sanity.fetch(this.sortBy)
				this.productsLoaded = true
			}
        },
        computed() {
                this.sortBy = this.$store.state.sortBy
        }
    }

</script>

<style>
	.main {
		width: 100%;
        min-height: 75vh;
		text-align: center;
        padding: 1rem;
	}

    .main--loading {
        padding-top: 5rem;
    }

	.main__products {
		display: grid;
        grid-template-columns: repeat(3, 1fr);
		justify-items: center;
        grid-gap: 2rem;
	}

    /* F**k it, we're going desktop first! 😬*/
    @media screen and (max-width: 1200px){
        .main__products {
            grid-template-columns: repeat(2, 1fr);
        }
    }   

    @media screen and (max-width: 800px){
        .main__products {
            grid-template-columns: repeat(1, 1fr);
        }
}
</style>