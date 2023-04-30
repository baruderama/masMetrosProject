<!-- Esta es la vista en donde se mostrara una lista con todos los pokemones -->


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
      <!-- Aqui se llama al componente de la trajeta/caja en donde se va apresentar al pokemon -->
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
    //Lista que se va a llenar con todos los pokemones
    return {
      latestPokemons:[]
    }
  },

  //Componenetes que se van a utilizar en esta vista
  components: {
    HelloWorld,
    PokemonBox
  },
  mounted(){
    //Se llama a la funcion que va a consultar al api del backEnd 
    this.getLatestPokemons()

    document.title= 'Home | Pokedex'
  },
  methods:{
    async getLatestPokemons(){

      // en esye commit se setea la animacion de loading
      this.$store.commit('setIsLoading',true)

      // Aqui se consulta a la funcion en el api del backend en el que se consultan todos los pokemones
      await axios
      .get('/api/')

      .then(response =>{
        // Se recibe la lista de pokemones del backend
        this.latestPokemons=response.data
        
      })
      .catch(error => {
        console.log(error)
      })

      this.$store.commit('setIsLoading',false)
    }
  }
}
</script>


