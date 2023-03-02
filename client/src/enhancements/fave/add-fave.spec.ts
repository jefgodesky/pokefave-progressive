import { expect } from 'chai'
import localStorage from '../../fakes/local-storage'
import addFave from './add-fave'

describe('addFave', () => {
  it('adds a new fave to storage', () => {
    const storage = localStorage()
    storage.setItem('faves', '4,7')
    addFave('1', storage)
    expect(storage.getItem('faves')).to.equal('4,7,1')
  })

  it('doesn\'t introduce duplicates', () => {
    const storage = localStorage()
    storage.setItem('faves', '4,7')
    addFave('4', storage)
    addFave('7', storage)
    expect(storage.getItem('faves')).to.equal('4,7')
  })
})
