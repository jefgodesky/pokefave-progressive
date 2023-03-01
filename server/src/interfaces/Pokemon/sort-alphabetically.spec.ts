import 'mocha'
import { expect } from 'chai'
import sortAlphabetically from './sort-alphabetically'

describe('sortAlphabetically', () => {
  const pokemon = [
    { pokedex: 7, name: 'Squirtle', types: ['water'] },
    { pokedex: 4, name: 'Charmander', types: ['fire'] },
    { pokedex: 1, name: 'Bulbasaur', types: ['grass', 'poison'] },
    { pokedex: 10, name: 'Caterpie', types: ['bug'] }
  ]

  it('sorts Pokemon given alphabetically by name', () => {
    const actual = sortAlphabetically(pokemon)
    expect(actual.map(pokemon => pokemon.name).join(' ')).to.equal('Bulbasaur Caterpie Charmander Squirtle')
  })
})
