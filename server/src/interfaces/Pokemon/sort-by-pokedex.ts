import Pokemon from './index'

export default function (pokemon: Pokemon[]): Pokemon[] {
  return pokemon.sort((a, b) => a.pokedex - b.pokedex)
}
