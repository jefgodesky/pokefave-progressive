import axios from 'axios'
import { create } from 'unobtrusive-dom'

const selector = 'article[data-pokedex]'

const getStar = async (): Promise<Document> => {
  const res = await axios('/star.svg')
  const parser = new DOMParser()
  return parser.parseFromString(res.data, 'image/svg+xml')
}

const init = async (nodes: Element[]): Promise<void> => {
  const star = await getStar()
  for (const node of nodes) {
    const img = Array.from(node.children).filter(tag => tag.tagName === 'IMG')[0]
    const children = [star.cloneNode(true) as HTMLElement]
    const btn = create({ tag: 'button', children })
    if (img !== undefined) img.after(btn)
  }
}

export default init
export { selector }
