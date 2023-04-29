<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
        <div class="hero-body has-text-centered">
            <p class="title mb-6">
                Welcome to Pokedex
            </p>
            <p class="subtitle">
                The best information of pokemons
            </p>
        </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">Pokemons</h2>
      </div>

      <PokemonBox 
        v-for="product in latestProducts"
        v-bind:key="product.name"
        v-bind:product="product" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import PokemonBox from '@/components/PokemonBox.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      latestProducts:[]
    }
  },
  components: {
    HelloWorld,
    PokemonBox
  },
  mounted(){
    this.getLatestProducts()

    document.title= 'Home | Pokedex'
  },
  methods:{
    async getLatestProducts(){
      this.$store.commit('setIsLoading',true)

      await axios
      .get('/api/')
      .then(response =>{
        
        this.latestProducts=response.data
        console.log(this.latestProducts.at(2).name)
      })
      .catch(error => {
        console.log(error)
      })

      this.$store.commit('setIsLoading',false)
    }
  }
}
</script>


