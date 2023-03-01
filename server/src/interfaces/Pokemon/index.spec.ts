import 'mocha'
import { expect } from 'chai'
import { isPokemon } from './index.js'

describe('isPokemon', () => {
  const fn = (): void => {}
  const pokedex = 1
  const name = 'Bulbasaur'
  const types = ['grass', 'poison']

  it('rejects null', () => {
    expect(isPokemon(null)).to.equal(false)
  })

  it('rejects undefined', () => {
    expect(isPokemon(undefined)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isPokemon(fn)).to.equal(false)
  })

  it('rejects true', () => {
    expect(isPokemon(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isPokemon(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isPokemon(pokedex)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isPokemon(name)).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isPokemon(types)).to.equal(false)
  })

  it('rejects empty objects', () => {
    expect(isPokemon({})).to.equal(false)
  })

  it('accepts an object with the required fields', () => {
    expect(isPokemon({ pokedex, name, types })).to.equal(true)
  })

  it('rejects an object with additional fields', () => {
    expect(isPokemon({ pokedex, name, types, test: true })).to.equal(false)
  })

  it('rejects an object with a null pokedex', () => {
    expect(isPokemon({ pokedex: null, name, types })).to.equal(false)
  })

  it('rejects an object with an undefined pokedex', () => {
    expect(isPokemon({ pokedex: undefined, name, types })).to.equal(false)
  })

  it('rejects an object with a pokedex function', () => {
    expect(isPokemon({ pokedex: fn, name, types })).to.equal(false)
  })

  it('rejects an object with a true pokedex', () => {
    expect(isPokemon({ pokedex: true, name, types })).to.equal(false)
  })

  it('rejects an object with a false pokedex', () => {
    expect(isPokemon({ pokedex: false, name, types })).to.equal(false)
  })

  it('rejects an object with a pokedex string', () => {
    expect(isPokemon({ pokedex: pokedex.toString(), name, types })).to.equal(false)
  })

  it('rejects an object with a pokedex array', () => {
    expect(isPokemon({ pokedex: [pokedex], name, types })).to.equal(false)
  })

  it('rejects an object with a pokedex object', () => {
    expect(isPokemon({ pokedex: { pokedex }, name, types })).to.equal(false)
  })

  it('rejects an object with a null name', () => {
    expect(isPokemon({ pokedex, name: null, types })).to.equal(false)
  })

  it('rejects an object with an undefined name', () => {
    expect(isPokemon({ pokedex, name: undefined, types })).to.equal(false)
  })

  it('rejects an object with a name function', () => {
    expect(isPokemon({ pokedex, name: fn, types })).to.equal(false)
  })

  it('rejects an object with a true name', () => {
    expect(isPokemon({ pokedex, name: true, types })).to.equal(false)
  })

  it('rejects an object with a false name', () => {
    expect(isPokemon({ pokedex, name: false, types })).to.equal(false)
  })

  it('rejects an object with a name number', () => {
    expect(isPokemon({ pokedex, name: pokedex, types })).to.equal(false)
  })

  it('rejects an object with a name array', () => {
    expect(isPokemon({ pokedex, name: [name], types })).to.equal(false)
  })

  it('rejects an object with a name object', () => {
    expect(isPokemon({ pokedex, name: { name }, types })).to.equal(false)
  })

  it('rejects an object with null types', () => {
    expect(isPokemon({ pokedex, name, types: null })).to.equal(false)
  })

  it('rejects an object with undefined types', () => {
    expect(isPokemon({ pokedex, name, types: undefined })).to.equal(false)
  })

  it('rejects an object with a function for types', () => {
    expect(isPokemon({ pokedex, name, types: fn })).to.equal(false)
  })

  it('rejects an object with true for types', () => {
    expect(isPokemon({ pokedex, name, types: true })).to.equal(false)
  })

  it('rejects an object with false for types', () => {
    expect(isPokemon({ pokedex, name, types: false })).to.equal(false)
  })

  it('rejects an object with a number for types', () => {
    expect(isPokemon({ pokedex, name: pokedex, types: types.length })).to.equal(false)
  })

  it('rejects an object with a string for types', () => {
    expect(isPokemon({ pokedex, name: pokedex, types: types.join(', ') })).to.equal(false)
  })

  it('rejects an object with a types object', () => {
    expect(isPokemon({ pokedex, name, types: { types } })).to.equal(false)
  })

  it('rejects an object that includes null in types', () => {
    expect(isPokemon({ pokedex, name, types: [...types, null] })).to.equal(false)
  })

  it('rejects an object that includes undefined in types', () => {
    expect(isPokemon({ pokedex, name, types: [...types, undefined] })).to.equal(false)
  })

  it('rejects an object that includes a function in types', () => {
    expect(isPokemon({ pokedex, name, types: [...types, fn] })).to.equal(false)
  })

  it('rejects an object that includes true in types', () => {
    expect(isPokemon({ pokedex, name, types: [...types, true] })).to.equal(false)
  })

  it('rejects an object that includes false in types', () => {
    expect(isPokemon({ pokedex, name, types: [...types, false] })).to.equal(false)
  })

  it('rejects an object that includes a number in types', () => {
    expect(isPokemon({ pokedex, name, types: [...types, pokedex] })).to.equal(false)
  })

  it('rejects an object that includes an array in types', () => {
    expect(isPokemon({ pokedex, name, types: [...types, types] })).to.equal(false)
  })

  it('rejects an object that includes an object in types', () => {
    expect(isPokemon({ pokedex, name, types: [...types, {}] })).to.equal(false)
  })
})
