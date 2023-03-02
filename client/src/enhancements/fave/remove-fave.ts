import getFaveIds from './get-fave-ids'

export default function (id: string, store: Storage = window.localStorage): void {
  const faves = getFaveIds(store)
  const newFaves = faves.filter(fave => fave !== id)
  store.setItem('faves', newFaves.join(','))
}
