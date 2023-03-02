import { create, hasClass } from 'unobtrusive-dom/esm'

export default function (): void {
  const classes = hasClass(document.body, 'faves-only') ? ['active'] : []
  const nav = document.querySelector('main > nav')
  if (nav === null) return
  const base = nav.querySelector('a[data-fave-base]')
  const href = base?.getAttribute('href') ?? '/by-name'
  const link = create({ tag: 'a', attrs: { href: `${href}?faves=true`, 'data-faves-only': 'true' }, classes, text: 'Faves Only' })
  nav.appendChild(link)
}
