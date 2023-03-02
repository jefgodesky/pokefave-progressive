import { expect } from 'chai'
import localStorage from '../../fakes/local-storage'
import removeFave from './remove-fave'

describe('removeFave', () => {
  it('removes a fave from storage', () => {
    const storage = localStorage()
    storage.setItem('faves', '4,7')
    removeFave('7', storage)
    expect(storage.getItem('faves')).to.equal('4')
  })

  it('doesn\'t remove faves you don\'t have', () => {
    const str = '4,7'
    const storage = localStorage()
    storage.setItem('faves', str)
    removeFave('42', storage)
    expect(storage.getItem('faves')).to.equal(str)
  })
})
