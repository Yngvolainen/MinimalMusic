<template>
    <main v-if="!productsLoaded">
        <h2>LOADING ALL THE STUFF</h2>
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
                productsLoaded: false
            }
        },
        created() {
            this.getRecords()
        },
        methods: {
			async getRecords() {
				this.result = await sanity.fetch(query)
				this.productsLoaded = true
			}
        }
    }

</script>

<style>
	.main {
		width: 100%;
		text-align: center;
		min-height: min-content;
	}

	.main__products {
		display: grid;
        grid-template-columns: repeat(3, 1fr);
		justify-items: center;
        grid-gap: 2rem;
	}

    /* F**k it, we're going desktop first! 😬*/
    @media screen and (max-width: 940px){
        .main__products {
            grid-template-columns: repeat(2, 1fr);
        }
    }   

    @media screen and (max-width: 640px){
        .main__products {
            grid-template-columns: repeat(1, 1fr);
        }
}
</style>