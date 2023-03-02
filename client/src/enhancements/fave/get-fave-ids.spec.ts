import { expect } from 'chai'
import localStorage from '../../fakes/local-storage'
import getFaveIds from './get-fave-ids'

describe('getFaveIds', () => {
  it('returns an array of favorite pokedex numbers from local storage', () => {
    const str ='4,7'
    const storage = localStorage()
    storage.setItem('faves', str)
    const actual = getFaveIds(storage)
    expect(actual.join(',')).to.equal(str)
  })
})
