import Store from '../store'

export function useStore (module) {
  if (module) {
    return Store[module]
  }

  return Store
}
