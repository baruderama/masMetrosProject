import { default } from '../views/Category.vue';


<template>
    <div class="columns is-3">
        <div class="box">
            <figure class="image mb-4">
                <img :src="pokemon.image_url">
            </figure>

            <h3 class="is-size-4">{{ pokemon.name }}</h3>
            <p class="is-size-6 has-text-grey">otras cosas</p>

            <router-link v-bind:to="`/pokemon/${pokemon.name}`" v-bind:key="pokemon.name" class="button is-dark mt-4">View details</router-link>

            <!-- <RouterLink :to="`/pokemon/${pokemon.name}`"  :key="pokemon.name" class="button is-dark mt-4" >
                View details
            </RouterLink> -->
        </div>

    </div>
</template>

<script>
// import RouterLink from 'vue-router'
    export default{
        name: 'PokemonBox',
        props: {
            pokemon: Object
        }
    }


</script>

<style scoped>
  .image{
    margin-top: -1.25rem;
    margin-left: -1.25rem; 
    margin-right: -1.25rem;  
  }

</style>