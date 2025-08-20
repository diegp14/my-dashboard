import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons"


export  function metadata() {
    return {
        title: 'Pokemons favoritos',
        description: 'Esta es la página de listado de pokemones favoritos'
    };
}


export default async function PokemonsPage() {
   
    return (
        <div className="flex flex-col">
            <span className="text-2xl my-2">Pokemons favoritos <small>Global State</small></span>
            <PokemonGrid pokemons={[]} />
        </div>
    );
}