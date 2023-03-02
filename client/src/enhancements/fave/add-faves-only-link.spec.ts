import { expect } from 'chai'
import addFavesOnlyLink from './add-faves-only-link'

describe('addFavesOnlyLink', () => {
  beforeEach(() => {
    document.body.innerHTML = '<main><nav><p>Sort by</p><a href="/" class="active">Pokédex</a><a href="/diff" data-fave-base="">A-Z</a></nav></main>'
  })

  it('adds another link to the nav', () => {
    addFavesOnlyLink()
    const links = Array.from(document.querySelectorAll('main nav a'))
    expect(links).to.have.lengthOf(3)
  })

  it('copies the base link and adds a query string', () => {
    addFavesOnlyLink()
    const links = Array.from(document.querySelectorAll('main nav a'))
    const link = links[2] instanceof HTMLElement ? links[2] : null
    expect(link?.getAttribute('href')).to.equal('/diff?faves=true')
  })

  it('sets the link to Faves Only', () => {
    addFavesOnlyLink()
    const links = Array.from(document.querySelectorAll('main nav a'))
    const link = links[2] instanceof HTMLElement ? links[2] : null
    expect(link?.innerHTML).to.equal('Faves Only')
  })
})
