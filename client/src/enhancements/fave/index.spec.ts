import { expect } from 'chai'
import localStorage from '../../fakes/local-storage'
import initFave, { selector } from './index'

describe('initFave', () => {
  const pokemon = [
    { pokedex: 7, name: 'Squirtle', types: ['water'] },
    { pokedex: 4, name: 'Charmander', types: ['fire'] },
    { pokedex: 1, name: 'Bulbasaur', types: ['grass', 'poison'] },
    { pokedex: 10, name: 'Caterpie', types: ['bug'] }
  ]

  beforeEach(() => {
    const articles = pokemon.map(p => `<article data-pokedex="${p.pokedex}"><img src="/path/to/${p.pokedex}.png" alt="${p.name}" /></article>`)
    document.body.innerHTML = articles.join('\n')
  })

  it('adds a star to each article', () => {
    const nodes = Array.from(document.querySelectorAll(selector))
    initFave(nodes, localStorage())
    const stars = document.querySelectorAll('article[data-pokedex] > img + button > svg')
    expect(stars.length).to.equal(pokemon.length)
  })

  it('stars your existing faves', () => {
    const nodes = Array.from(document.querySelectorAll(selector))
    const storage = localStorage()
    storage.setItem('faves', '4,7')
    initFave(nodes, storage)
    const faves = document.querySelectorAll('.is-fave')
    expect(faves.length).to.equal(2)
  })
})
