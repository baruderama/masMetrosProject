<!-- Aqui se establece la vista cuando se busca un pokemon en el cual se mostrara el componente de PokemonBox si el pokemon que se inserto existe y si no se mostrara un mensaje que dice que ese pokemon no existe -->


<template>
    <div class="page-search">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Search</h1>

                <!-- <h2 class="is-size-5 has-text-grey">Search term: "{{ search }}"</h2> -->
            </div>
            <div class="mostrar" v-if="pokemon">
            <PokemonBox 
                
                v-bind:key="pokemon.name"
                v-bind:pokemon="pokemon" />
            </div>
            <div class="mostrar" v-else>
                <h1>That pokemon does not exist</h1>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import PokemonBox from '@/components/PokemonBox.vue'
export default {
    name: 'Search',
    components: {
        PokemonBox
    },
    data() {
        return {
            pokemon:{},
            query: ''
        }
    },
    mounted() {
        document.title = 'Search | Pokemon'
        this.performSearch()
        // let uri = window.location.search.substring(1)
        // let params = new URLSearchParams(uri)
        // if (params.get('query')) {
        //     this.query = params.get('query')
        //     this.performSearch()
        // }
    },
    watch:{
        $route(to,from){
            if(to.name === 'Search'){
                this.performSearch()
            }
        }

    },
    methods: {
        async performSearch() {
            this.$store.commit('setIsLoading', true)
            const pokemonName=this.$route.params.search
            console.log(pokemonName)

            // Aqui especificamente se consulta a la api del backend especificamente el metodo get en el cual se devuelve el objeto de un pokemon con toda su informacion
            await axios
                .get(`/api/${pokemonName}/`)
                .then(response => {
                    this.pokemon = response.data
                    console.log(pokemonName)    
                           
                   })
                .catch(error => {
                    console.log(error)
                })
            this.$store.commit('setIsLoading', false)
        }
    }
}
</script>