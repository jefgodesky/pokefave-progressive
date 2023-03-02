import { selector as faveSelector } from './enhancements/fave/index'

(async (): Promise<void> => {
  const enhancements = {
    fave: Array.from(document.querySelectorAll(faveSelector))
  }

  if (enhancements.fave.length > 0) {
    const init = await import('./enhancements/fave/index')
    init.default(enhancements.fave)
  }
})().then(() => {}).catch(() => {})
