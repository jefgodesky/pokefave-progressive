import Pokemon from './index'

export default function (pokemon: Pokemon[]): Pokemon[] {
  return pokemon.sort((a, b) => a.name.localeCompare(b.name))
}
