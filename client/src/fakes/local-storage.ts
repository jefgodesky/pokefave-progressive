export default function (): Storage {
  let store: { [key: string]: string } = {}

  return {
    length: 0,
    setItem (key: string, val: string): void { store[key] = val },
    getItem (key: string): any { return key in store ? store[key] : null },
    removeItem (key: string): void { if (key in store) delete store[key] },
    clear (): void { store = {} },
    key (index: number): string {
      const keys = Object.keys(store)
      return keys[index] ?? ''
    }
  }
}
