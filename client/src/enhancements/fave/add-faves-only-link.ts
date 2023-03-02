import { create } from 'unobtrusive-dom/esm'

export default function (): void {
  const nav = document.querySelector('main > nav')
  if (nav === null) return
  const base = nav.querySelector('a[data-fave-base]')
  const href = base?.getAttribute('href') ?? '/by-name'
  const link = create({ tag: 'a', attrs: { href: `${href}?faves=true`, 'data-faves-only': 'true' }, text: 'Faves Only' })
  nav.appendChild(link)
}
