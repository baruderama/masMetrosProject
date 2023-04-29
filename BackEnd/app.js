const yargs= require('yargs');
const axios =require('axios').default;

let argv = yargs.argv;
let pokemon;

let url='https://pokeapi.co/api/v2/pokemon/'

const getData = async () => {
	const response = await axios.get(
		url
	);
    pokemon= response.data.results
    pokemon.forEach(element => {
        
        const getData2=async()=>{
            const response2 = await axios.get(
                element.url
            );
            console.log(element.name);
            // imagen del pokemon
            console.log(response2.data.sprites.other.home.front_default);

            console.log("height: "+response2.data.height)
            console.log("weight: "+response2.data.weight)

            //movimientos de los pokemones
            response2.data.moves.forEach(element => {
                console.log(element.move)
            });
            // console.log(response2.data.moves[1].move)
            
        }

        
        getData2();
        
        
        
        
    });
    
    

};



module.exports=getData;





// axios.get(url,{

// })
// .then((response)=>{
//     let pokemon =response.data.results;
//     pokemon.forEach(element => {
//         console.log(element.name + "???????????????????????????????????????????????????");
//         let url2=element.url;
//         axios.get(url2,{

//         }).
//         then((response)=>{
//             console.log(response.data.height);

//         }).catch(err => {
//             console.log("no funciono 2 :(")
//         })
//     });
    
// })
// .catch(err => {
//     console.log("no funciono :(")
// })