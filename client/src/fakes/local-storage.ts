export default function (): Storage {
  const store = new Map()

  return {
    length: store.size,
    setItem (key: string, val: string): void { store.set(key, val) },
    getItem (key: string): any { return store.get(key) ?? null },
    removeItem (key: string): void { store.delete(key) },
    clear (): void { store.clear() },
    key (index: number): string {
      const keys = Array.from(store.keys())
      return keys[index] ?? ''
    }
  }
}
