import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons"



const getPokemons = async (limit= 20, offset =0): Promise<SimplePokemon[]> => { 
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const data: PokemonsResponse = await fetch(url)
        .then(res => res.json())
    
    const pokemons = data.results.map(pokemon =>({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))
     //throw new Error('Failed to fetch pokemons');
        return pokemons;
   
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons()
    return (
        <div className="flex flex-col">
            <span className="text-2xl my-2">Listado de pokemones <small>Estatico</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}