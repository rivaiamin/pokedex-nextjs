import { PokemonList } from "@/types/pokeapi";
import { useMemo } from "react";
import PokeCard from "./PokeCard";
import { Pokemon } from "@/types/pokeapi";
import Alert from "./Alert";

interface IPokelist {
    pokemons: PokemonList
}

export default function Pokelist(
    { pokemons }: IPokelist ) {
    const pokemonsV = useMemo(() => {
        if (!pokemons) {
            (
                <Alert message="No data found" type="warning" />
            )
        }

        for (var i =0; i < pokemons.results.length; i++) {
            var pokemon = pokemons.results[i]
            var id = pokemon.url.split('/')[6]
            pokemons.results[i].ID = parseInt(id)
        }

        return pokemons.results.map((item:Pokemon) => (
            <PokeCard pokemon={item}></PokeCard>
        ))

    }, [pokemons.results])

    return (
        <div className="container">
            <div className="grid grid-cols-3 gap-2">
                {pokemonsV}
            </div>
        </div>
    )
}