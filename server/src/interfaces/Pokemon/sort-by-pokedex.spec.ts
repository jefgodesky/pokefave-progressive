import 'mocha'
import { expect } from 'chai'
import sortByPokedex from './sort-by-pokedex.js'

describe('sortByPokedex', () => {
  const pokemon = [
    { pokedex: 7, name: 'Squirtle', types: ['water'] },
    { pokedex: 4, name: 'Charmander', types: ['fire'] },
    { pokedex: 1, name: 'Bulbasaur', types: ['grass', 'poison'] },
    { pokedex: 10, name: 'Caterpie', types: ['bug'] }
  ]

  it('sorts Pokemon in ascending order by Pokédex', () => {
    const actual = sortByPokedex(pokemon)
    expect(actual.map(pokemon => pokemon.name).join(' ')).to.equal('Bulbasaur Charmander Squirtle Caterpie')
  })
})
