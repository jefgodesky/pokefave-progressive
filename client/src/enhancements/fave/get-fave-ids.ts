export default function (store: Storage = window.localStorage): string[] {
  const faves = store.getItem('faves') ?? ''
  return faves.split(',').map(fave => fave.trim())
}
