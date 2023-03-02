import { expect } from 'chai'
import localStorage from '../../fakes/local-storage'
import hideNotFaves from './hide-not-faves'

describe('hideNotFaves', () => {
  const pokemon = [
    { pokedex: 7, name: 'Squirtle', types: ['water'] },
    { pokedex: 4, name: 'Charmander', types: ['fire'] },
    { pokedex: 1, name: 'Bulbasaur', types: ['grass', 'poison'] },
  ]

  beforeEach(() => {
    const articles = pokemon.map(p => `<article data-pokedex="${p.pokedex}"><img src="/path/to/${p.pokedex}.png" alt="${p.name}" /></article>`)
    document.body.innerHTML = articles.join('\n')
  })

  it('hides your not-favorite Pokémon', () => {
    const store = localStorage()
    store.setItem('faves', '4,7')
    hideNotFaves(store)
    const hidden = Array.from(document.querySelectorAll('article[style="display: none; visibility: hidden;"]'))
    expect(hidden).to.have.lengthOf(1)
  })

  it('doesn\'t hide your favorite Pokémon', () => {
    const store = localStorage()
    store.setItem('faves', '4,7')
    hideNotFaves(store)
    const shown = Array.from(document.querySelectorAll('article:not([style])'))
    expect(shown).to.have.lengthOf(2)
  })
})
