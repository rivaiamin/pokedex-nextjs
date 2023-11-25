import Image from "next/image"
import PokemonProfile from "@/components/PokeDetail"
import PokemonService from "@/services/api/pokeapi.service"

const pokemonService = new PokemonService

export default async function PokemonDetail({ params }: { params: { id: number } }) {
    var pokemonProfile = await pokemonService.getDetail<number>(params.id)
    

    return (
        <PokemonProfile id={params.id} detail={pokemonProfile}></PokemonProfile>
    )
}