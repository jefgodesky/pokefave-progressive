import Pokemon from './index.js'

export default function (pokemon: Pokemon[]): Pokemon[] {
  return pokemon.sort((a, b) => a.pokedex - b.pokedex)
}
