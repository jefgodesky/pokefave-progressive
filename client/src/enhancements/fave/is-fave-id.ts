import getFaveIds from './get-fave-ids'

export default function (id: string, store: Storage = window.localStorage): boolean {
  const faves = getFaveIds(store)
  return faves.includes(id)
}
