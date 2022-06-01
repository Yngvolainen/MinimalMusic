<template>
        <section class="productcard">
            <p>{{item[index].artist.name}}</p>
            
            <div class="productcard__image">
                <!-- the params denote the product retrieved, no? 🤔 -->
                <router-link :to="{ name: 'product', params: { theProduct: productSlug }}">
                    <img :src="item[index].image.asset.url" alt="picture of record/artist">

                    <div class="productcard__sale" v-if="item[index].sale === true">
                        <img src="/images/sale.svg" alt="on sale">
                    </div>
    
                </router-link>
            </div>

            <p>{{item[index].name}}</p>

            <p>{{item[index].releasedIn}}</p>
  
        </section>
   
</template>

<script>

export default {

    props:['item', 'index'],
    data() {
        return {
            productSlug: null
        }
    },
    created() {
        this.productSlug = this.item[this.index].slug.current
    },
}
</script>

<style>
    .productcard {
        border: thin solid #eee;
        border-radius: 5px;
        width: 280px;
        padding: 1rem;
    }

    .productcard__image {
        position: relative;
    }

    .productcard__sale {
        position: absolute;
        top: 0;
        left: 0;
    }

    .productcard__buy {
        display: flex;
        justify-content: space-around;
    }

    .productcard__buy img {
        height: 2rem;
    }
</style>