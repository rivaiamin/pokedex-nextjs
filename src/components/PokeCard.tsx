"use client"

import { Pokemon } from "@/types/pokeapi"
import Image from "next/image"
import Link from "next/link"

interface ICardPokemonProps {
    pokemon: Pokemon
}

export default function PokeCard({pokemon} : ICardPokemonProps): JSX.Element {
    var image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.ID}.png`
    var id = pokemon.ID.toString().padStart(4, '0')
    return (
        <>
            <Link href={`/pokedex/${pokemon.ID}`}>
                <div className="card w-full bg-base-100 border shadow z-0">
                    <figure>
                        <Image
                            src={image}
                            alt={ pokemon.name }
                            width={80}
                            height={80}
                        >
                        </Image>
                    </figure>
                    <div className="card-body p-1 px-2 gap-0">
                        <span className="text-xs text-gray-400">#{ id }</span>
                        <strong className="text-xs capitalize">{ pokemon.name }</strong>
                    </div>
                </div>
            </Link>
        </>
    )
}