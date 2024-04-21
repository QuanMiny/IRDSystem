import { defineStore } from 'pinia'

export const useGlobalStore = defineStore({
  id: 'ird-global',
  state: () => ({
    isDark: false
  }),
  getters: {},
  actions: {}
})
