import axios from 'axios'

const selector = 'article[data-pokedex]'

const getStar = async (): Promise<string> => {
  const res = await axios('/star.svg')
  return res.data
}

const init = async (nodes: Element[]): Promise<void> => {
  const star = await getStar()
  for (const node of nodes) {
    const img = Array.from(node.children).filter(tag => tag.tagName === 'IMG')[0]
    const btn = document.createElement('button')
    btn.innerHTML = star
    if (img !== undefined) img.after(btn)
  }
}

export default init
export { selector }
