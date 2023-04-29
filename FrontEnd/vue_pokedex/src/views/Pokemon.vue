<template>
    <div class="page-product">
        <div class="columns is-multiline">
            <div class="column is-9">
                <figure class="image mb-6">
                    
                    <img v-bind:src="product.image_url">
                </figure>
                <h1 class="title">{{ product.name }}</h1>
                <p>{{ product.weight }}</p>
            </div>
            <div class="column is-3">
                <h2 class="subtitle">Information</h2>

                <p><strong>Moves: </strong>{{ product.moves }}</p>

               
            </div>

        </div>
    </div>
</template>

<script>
import { throwStatement } from '@babel/types'
import {useRoute,useRouter,RouterView} from "vue-router"
import axios from 'axios'
// import {toast} from 'bulma-toast'

export default {
    name: 'Pokemon',
    data() {
        return {
            product: {},
            quantity: 1
        }
    },
    mounted() {
        this.getProduct()
        
    },
    methods: {
        async getProduct() {
            this.$store.commit('setIsLoading',true)

            // const category_slug = this.$route.params.category_slug
            // const product_slug = this.$route.params.product_slug
            // const route=useRoute()

            const pokemonName=this.$route.params.pokemon
            console.log(pokemonName)


            await axios
                .get(`/api/${pokemonName}/`).
                then(response => {
                    this.product = response.data

                    document.title= this.product.name + ' | Pokemon'
                })
                .catch(error => {
                    console.log(error)
                })
                this.$store.commit('setIsLoading',false)
        },
        
    }
}



</script>