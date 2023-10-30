let fetchPokemons=()=>{
    let promiseArray=[]
    for(let i=1;i<=151;i++){
        let getUrl=`https://pokeapi.co/api/v2/pokemon/${i}/`
        promiseArray.push(fetch(getUrl)
        .then(resolve=> resolve.json()))

        // fetch(getUrl)
        // .then(reso=>reso.json())
        // .then((data)=>{
        //     promiseArray.push(data)
        // })
    }
    console.log(promiseArray);
    Promise.all(promiseArray)
    .then((singlePok=>{
        // console.log(singlePok);
        let updatedPokArray=singlePok.map((pokemon)=>{
            console.log(pokemon.id,pokemon.sprites['front_defalt']);
        })
    }))
}
fetchPokemons()