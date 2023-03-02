import { expect } from 'chai'
import localStorage from '../../fakes/local-storage'
import isFaveId from './is-fave-id'

describe('isFaveId', () => {
  it('returns true if given a fave ID', () => {
    const storage = localStorage()
    storage.setItem('faves', '4,7')
    expect(isFaveId('4', storage)).to.equal(true)
  })

  it('returns false if not given a fave ID', () => {
    const storage = localStorage()
    storage.setItem('faves', '4,7')
    expect(isFaveId('42', storage)).to.equal(false)
  })
})
