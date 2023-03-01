import { selector as faveSelector } from './fave/index'

(async (): Promise<void> => {
  const enhancements = {
    fave: Array.from(document.querySelectorAll(faveSelector))
  }

  if (enhancements.fave.length > 0) {
    const init = await import('./fave/index')
    init.default(enhancements.fave)
  }
})().then(() => {}).catch(() => {})
