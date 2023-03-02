import getFaveIds from './get-fave-ids'

export default function (id: string, store: Storage = window.localStorage): void {
  const faves = getFaveIds(store)
  if (faves.includes(id)) return
  faves.push(id)
  store.setItem('faves', faves.join(','))
}
