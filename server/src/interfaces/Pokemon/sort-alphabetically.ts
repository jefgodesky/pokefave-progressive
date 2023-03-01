import Pokemon from './index.js'

export default function (pokemon: Pokemon[]): Pokemon[] {
  return pokemon.sort((a, b) => a.name.localeCompare(b.name))
}
