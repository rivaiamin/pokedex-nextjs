
import { PokemonList, PokemonDetail, Pokemon, PokemonSpecies } from '@/types/pokeapi'

const BASE_URL = `https://pokeapi.co/api/v2`;

export default class PokemonService {

  async getList(limit = 10, offset = 0): Promise<PokemonList> {
    var url = `${BASE_URL}/pokemon-species`
    var config = ({
      method: 'GET',
      param: {
        limit: limit,
        offset: offset
      }
    })
    return fetch(url, config).then(
      response => response.json()
    )
  }
  
  async getDetail<T>(ID: T): Promise<PokemonSpecies> {
    var url = `${BASE_URL}/pokemon-species/${ID}`
    var config = ({
      method: 'GET',
    })
    return fetch(url, config).then(
      response => response.json()
    )
  }
}