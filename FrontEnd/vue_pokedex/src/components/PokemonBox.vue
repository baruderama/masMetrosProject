import { default } from '../views/Category.vue';
<template>
    <div class="columns is-3">
        <div class="box">
            <figure class="image mb-4">
                <img :src="pokemon.image_url">
            </figure>

            <h3 class="is-size-4">{{ pokemon.name }}</h3>
            <p class="is-size-6 has-text-grey">otras cosas</p>

            <!-- <router-link v-bind:to="product.get_absolute_url" class="button is-dark mt-4">View details</router-link> -->
        </div>

    </div>
</template>

<script>
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