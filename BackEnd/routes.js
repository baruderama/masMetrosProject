const express = require('express')
const routes = express.Router()
const getData = require('./app')
const yargs= require('yargs');
const axios =require('axios').default;


//generacion de funcones para consumir el api de los pokemones a traves de axios
let argv = yargs.argv;
let pokemon;
let listPokemon=[];
let onePokemon;
let moves=[];
let pokemonUrlImage;


//url de la api de pokemones
let url='https://pokeapi.co/api/v2/pokemon/'

//Primera funcion get que obtiene la lista de todos los pokemones
routes.get('/', allPokemon);

function allPokemon(req, res){
    
    /* 
        A traves de esta funcion se obtiene la primera informacion del Api de pokemones con axios
    */
    const getData = async () => {
        const response = await axios.get(
            url
        );
        let pokemon= response.data.results

        //Aqui los datos que se recogieron son el nombre y una url  que contiene aun mas informacion del pokemon
        return response.data.results;
    };
    
    getData().then(val => val.forEach(function(element, idx, array){

        //Aqui segun la url que se obtuvo de la primera busqueda se obtien mas info
        const getData2=async()=>{
            const response2 = await axios.get(
                element.url
            );

            //imagen del pokemon
            pokemonUrlImage=response2.data.sprites.other.home.front_default;

            //movimientos de los pokemones
            response2.data.moves.forEach(element => {
                moves=element.move.name;
               
            });

            //Se construye un objeto que representa a un pokemon
            onePokemon={
                name: element.name,
                weight: response2.data.weight,
                height: response2.data.height,
                moves: moves,
                image_url: pokemonUrlImage
    
            };
            return onePokemon;
        }

        getData2().then(val=>{
            // Cada objeto onePokemon construido se va a agregar a la lista de pokemones
            listPokemon.push(val);
            if( idx === array.length - 1){
                // Se envia la lista de pokemones a cualquiera que use esta fuincion de la api
                res.send(listPokemon);
            }
        });
    }));
}



//Funcion get que obtien todo la info del pokemon por el nombre del mismo
routes.get('/:pokemon',pokemonByName);

function pokemonByName(request, res){

// Esta es la palabra con la cual se va a hacer la busqueda al pokemon
let word=request.params.pokemon;


    /* 
        A traves de esta funcion se obtiene la primera informacion del Api de pokemones con axios
    */
const getData = async () => {
    const response = await axios.get(
        url
    );
    let pokemon= response.data.results

    //Aqui los datos que se recogieron son el nombre y una url  que contiene aun mas informacion del pokemon
    return response.data.results;

};

getData().then(val => val.forEach(function(element, idx, array){

    //Aqui segun la url que se obtuvo de la primera busqueda se obtien mas info
    const getData2=async()=>{
        const response2 = await axios.get(
            element.url
        );

        //Imagen del pokemon
        pokemonUrlImage=response2.data.sprites.other.home.front_default;

        //movimientos de los pokemones
        response2.data.moves.forEach(element => {
            moves=element.move;
           
        });

        //Se construye un objeto que representa a un pokemon
        onePokemon={
            name: element.name,
            weight: response2.data.weight,
            height: response2.data.height,
            moves: moves.name,
            image_url: pokemonUrlImage

        };
        return onePokemon;  
    }   
    getData2().then(val=>{
        // Cada objeto onePokemon construido se va a agregar a la lista de pokemones
        listPokemon.push(val);
        if( idx === array.length - 1){
            // Se busca en la lista de pokemones a el pokemon que corresponda con el nombre que se esta buscando
            listPokemon.forEach(element => {
                if(word === element.name){
                    //Si concuerda el pokemon existe y se envia de vuelta
                    res.send(element);
                }
                else{
                    //Si no entonces se envia nulo 
                    
                }  
            });
            res.send(null);
        }
    })
  

}

));
}

//Se exporta el modulo de rutas para poder usarlo desde server.js
module.exports =routes;