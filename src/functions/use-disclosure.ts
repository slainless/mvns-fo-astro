import create from 'zustand'

type DisclosureStore = {
  state: boolean
  setOpen: (state: boolean) => void
  open: () => void
  close: () => void
}
export default function createDisclosureStore(defaultState = false) {
  return create<DisclosureStore>((set, get) => ({
    state: defaultState,
    open: () => set({ state: true }),
    close: () => set({ state: false }),
    setOpen: (state: boolean) => set({ state }),
  }))
}
