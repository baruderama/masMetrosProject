const express = require('express')
const routes = express.Router()
const getData = require('./app')


const yargs= require('yargs');
const axios =require('axios').default;

let argv = yargs.argv;
let pokemon;
let listPokemon=[];
let onePokemon;
let moves=[];
let pokemonUrlImage;
let cont;

let url='https://pokeapi.co/api/v2/pokemon/'

routes.get('/', allPokemon);

function allPokemon(req, res){
    
    const getData = async () => {
        const response = await axios.get(
            url
        );
        let pokemon= response.data.results
        
        
       
        return response.data.results;
    
    };
    
    getData().then(val => val.forEach(function(element, idx, array){
    
        
        const getData2=async()=>{
            const response2 = await axios.get(
                element.url
            );
           
            pokemonUrlImage=response2.data.sprites.other.home.front_default;
            
            
            //movimientos de los pokemones
            response2.data.moves.forEach(element => {
                moves=element.move.name;
               
            });

            
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
            listPokemon.push(val);
           // console.log(val);
            //console.log(listPokemon.length);
            if( idx === array.length - 1){
                
                res.send(listPokemon);

            }
        });
            
        
        
        
        
        
        
    }));
    
    
    
    
    
    
    
}

// function getAllPokemon(){
//     let pokemonList2=[];
//     const getData = async () => {
//         const response = await axios.get(
//             url
//         );
//         let pokemon= response.data.results
        
        
       
//         return response.data.results;
    
//     };
    
//     getData().then(val => val.forEach(function(element, idx, array){
    
        
//         const getData2=async()=>{
//             const response2 = await axios.get(
//                 element.url
//             );
           
//             pokemonUrlImage=response2.data.sprites.other.home.front_default;
            
            
//             //movimientos de los pokemones
//             response2.data.moves.forEach(element => {
//                 moves=element.move;
               
//             });

            
//             onePokemon={
//                 name: element.name,
//                 weight: response2.data.weight,
//                 height: response2.data.height,
//                 moves: moves,
//                 image_url: pokemonUrlImage
    
//             };

//             return onePokemon;
            
            
//         }

        
//         getData2().then(val=>{
//             listPokemon.push(val);
//            // console.log(val);
//             console.log(listPokemon.length);
//             if( idx === array.length - 1){
//                 pokemonList2=listPokemon;
//                 //console.log(pokemonList2);
//                 return listPokemon;

//             }
//         });
            
        
        
        
        
        
        
//     }));
//    // return pokemonList2;

// }


routes.get('/:pokemon',pokemonByName);

function pokemonByName(request, res){
   
// async 
let word=request.params.pokemon;

const getData = async () => {
    const response = await axios.get(
        url
    );
    let pokemon= response.data.results
    
    
   
    return response.data.results;

};

getData().then(val => val.forEach(function(element, idx, array){

    
    const getData2=async()=>{
        const response2 = await axios.get(
            element.url
        );
       
        pokemonUrlImage=response2.data.sprites.other.home.front_default;
        
        
        //movimientos de los pokemones
        response2.data.moves.forEach(element => {
            moves=element.move;
           
        });

        
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
        listPokemon.push(val);
       // console.log(val);
        //console.log(listPokemon.length);
        if( idx === array.length - 1){
            listPokemon.forEach(element => {
                if(word === element.name){
                    res.send(element);
                }
                
            });
            
            

        }
    })
        
    
    
    
    
    
    
}));

    
    // response.send("hey");


}

module.exports =routes;