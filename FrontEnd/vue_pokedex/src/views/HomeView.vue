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
        v-for="pokemon in latestPokemons"
        v-bind:key="pokemon.name"
        v-bind:pokemon="pokemon" />
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
      latestPokemons:[]
    }
  },
  components: {
    HelloWorld,
    PokemonBox
  },
  mounted(){
    this.getLatestPokemons()

    document.title= 'Home | Pokedex'
  },
  methods:{
    async getLatestPokemons(){
      this.$store.commit('setIsLoading',true)

      await axios
      .get('/api/')

      .then(response =>{
        
        this.latestPokemons=response.data
        console.log(this.latestPokemons.at(2).name)
      })
      .catch(error => {
        console.log(error)
      })

      this.$store.commit('setIsLoading',false)
    }
  }
}
</script>


