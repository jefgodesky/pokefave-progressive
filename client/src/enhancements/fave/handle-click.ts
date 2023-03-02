import { addClass, removeClass, hasClass } from 'unobtrusive-dom/esm'
import isFaveId from './is-fave-id'
import addFave from './add-fave'
import removeFave from './remove-fave'

export default function (event: MouseEvent, store: Storage = window.localStorage): void {
  const btn = event.target instanceof Element ? event.target.closest('button') : null
  const article = btn?.closest('article[data-pokedex]')
  const id = article?.getAttribute('data-pokedex') ?? ''
  if (id === '') return
  const isFave = isFaveId(id, store)

  if (isFave) {
    removeFave(id, store)
    if (btn !== null && hasClass(btn,'is-fave')) removeClass(btn,'is-fave')
  } else {
    addFave(id, store)
    if (btn !== null && !hasClass(btn, 'is-fave')) addClass(btn, 'is-fave')
  }
}
