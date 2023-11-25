import PokemonService from "@/services/api/pokeapi.service"
import Pokelist from "@/components/Pokelist"

const pokemonService = new PokemonService()

export default async function Pokedex() {
    var pokemonList = await pokemonService.getList()

    return (
        <Pokelist pokemons={ pokemonList }></Pokelist>
    )
}