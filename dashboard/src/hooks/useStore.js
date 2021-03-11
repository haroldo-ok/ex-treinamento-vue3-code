import Store from '../store'

export function useStore (module) {
  if (module) {
    const store = Store[module]
    if (!store) {
      throw new Error(`Store name "${module}" is invalid; available stores are ${Object.keys(Store)}`)
    }
    return store
  }

  return Store
}
