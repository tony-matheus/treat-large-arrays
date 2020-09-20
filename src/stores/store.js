import create from 'zustand'

export const useStore = create(set => ({
  search: '',
  setSearch: (search) => set(state => ({ search })),
}))
