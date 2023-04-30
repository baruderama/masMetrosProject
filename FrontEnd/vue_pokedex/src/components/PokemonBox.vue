<!-- En este componente se construye un especie de caja o tarjeta en donde se va a ver
    reflejado un pokemon con informacion basica y un boton el cual llevara al usuario a una vista 
    detalla del pokemon en donde se va a encontrar mas informacion del mismo
-->



<template>
    <div class="columns is-3">
        <div class="box">
            <figure class="image mb-4">
                <img :src="pokemon.image_url">
            </figure>

            <h3 class="is-size-4">{{ pokemon.name }}</h3>

            <router-link v-bind:to="`/pokemon/${pokemon.name}`" v-bind:key="pokemon.name" class="button is-dark mt-4">View details</router-link>

            
        </div>

    </div>
</template>

<script>
    // A traves del objecto con nombre pokemon se obtiene la informacion para poder llenar los diferentes tags de este componente 
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