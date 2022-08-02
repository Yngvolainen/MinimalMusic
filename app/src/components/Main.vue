<template>
    <main v-if="!productsLoaded" class="main main--loading">
        <h2>loading</h2>
    </main>

    <main v-else-if="browseBy === 'records'" class="main">
        <ProductPreview />
    </main>

    <main v-else-if="browseBy === 'artists'" class="main">
        <ArtistPreview />
    </main>

</template>

<script>
    import ProductPreview from './ProductPreview.vue'
    import ArtistPreview from './ArtistPreview.vue'

    export default {
        components: {
            ProductPreview,
            ArtistPreview
        },
        data() {
            return {
                productsLoaded: true,
            }
        },
        created() {
            // this.getRecords()
        },
        computed: {
            browseBy() {
                return this.$store.getters.getBrowseBy
            }
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
</style>