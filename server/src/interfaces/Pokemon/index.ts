interface Pokemon {
  pokedex: number
  name: string
  types: string[]
}

const isPokemon = (obj: any): obj is Pokemon => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return false
  if (Object.keys(obj).length !== 3) return false

  const { pokedex, name, types } = obj
  if (pokedex === undefined || typeof pokedex !== 'number') return false
  if (name === undefined || typeof name !== 'string') return false
  if (types === undefined || !Array.isArray(types)) return false
  return types.reduce((acc: boolean, curr) => acc && typeof curr === 'string', true)
}

export default Pokemon
export { isPokemon }
