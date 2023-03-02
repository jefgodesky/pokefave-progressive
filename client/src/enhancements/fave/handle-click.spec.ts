import { expect } from 'chai'
import { hasClass } from 'unobtrusive-dom/esm'
import localStorage from '../../fakes/local-storage'
import isFaveId from './is-fave-id'
import handleClick from './handle-click'

describe('handleClick', () => {
  let store: Storage
  let btn: Element | null

  beforeEach(() => {
    store = localStorage()
    store.setItem('faves', '1,7')
    document.body.innerHTML = '<article data-pokedex="4"><button>Fave</button></article>'
    btn = document.querySelector('article button')
    if (btn !== null && btn instanceof HTMLElement) btn.addEventListener('click', event => handleClick(event, store))
  })

  it('adds a new fave to the store', () => {
    if (!(btn instanceof HTMLElement)) { expect('Button is not an HTML element').to.equal(false); return }
    btn.dispatchEvent(new Event('click'))
    expect(isFaveId('4', store)).to.equal(true)
  })

  it('adds the is-fave class', () => {
    if (!(btn instanceof HTMLElement)) { expect('Button is not an HTML element').to.equal(false); return }
    btn.dispatchEvent(new Event('click'))
    expect(hasClass(btn, 'is-fave')).to.equal(true)
  })

  it('removes fave from the store', () => {
    store.setItem('faves', '1,4,7')
    if (!(btn instanceof HTMLElement)) { expect('Button is not an HTML element').to.equal(false); return }
    btn.dispatchEvent(new Event('click'))
    expect(isFaveId('4', store)).to.equal(false)
  })

  it('adds the is-fave class', () => {
    store.setItem('faves', '1,4,7')
    if (!(btn instanceof HTMLElement)) { expect('Button is not an HTML element').to.equal(false); return }
    btn.dispatchEvent(new Event('click'))
    expect(hasClass(btn, 'is-fave')).to.equal(false)
  })
})
