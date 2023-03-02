import { create, addClass } from 'unobtrusive-dom/esm'
import isFaveId from './is-fave-id'
import handleClick from './handle-click'

const selector = 'article[data-pokedex]'
const star = '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 450 450"><path d="m 209.93806,23.944862 c 6.1641,-12.488 23.969,-12.488 30.133,0 l 55.086,111.619998 c 2.4453,4.9609 7.1758,8.3945 12.648,9.1914 l 123.18,17.898 c 13.777,2.0039 19.281,18.938 9.3086,28.656 l -89.133,86.883 c -3.957,3.8594 -5.7656,9.418 -4.832,14.871 l 21.043,122.68 c 2.3555,13.723 -12.051,24.188 -24.375,17.711 l -110.18,-57.922 c -4.8945,-2.5742 -10.738,-2.5742 -15.633,0 l -110.18,57.922 c -12.323996,6.4766 -26.729996,-3.9883 -24.374996,-17.711 l 21.038996,-122.68 c 0.9375,-5.4531 -0.87109,-11.012 -4.828096,-14.871 l -89.1329995,-86.883 c -9.97270003,-9.7188 -4.4688,-26.652 9.3085995,-28.656 l 123.179996,-17.898 c 5.4727,-0.79688 10.203,-4.2305 12.648,-9.1914 z" /></svg>'

const init = (nodes: Element[], store: Storage = window.localStorage): void => {
  for (const node of nodes) {
    const img = Array.from(node.children).filter(tag => tag.tagName === 'IMG')[0]
    const btn = create({ tag: 'button' })
    if (isFaveId(node.getAttribute('data-pokedex') ?? '', store)) addClass(btn, 'is-fave')
    btn.innerHTML = star
    btn.addEventListener('click', event => handleClick(event, store))
    if (img !== undefined) img.after(btn)
  }
}

export default init
export { selector }
