import isFaveId from './is-fave-id'

export default function (store: Storage = window.localStorage): void {
  const pokemon = document.querySelectorAll('article[data-pokedex]')
  for (const poke of pokemon) {
    const pokedex = poke.getAttribute('data-pokedex') ?? ''
    if (!isFaveId(pokedex, store)) poke.setAttribute('style', 'display: none; visibility: hidden;')
  }
}
