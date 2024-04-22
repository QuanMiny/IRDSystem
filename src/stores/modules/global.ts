import { defineStore } from 'pinia'
import { GlobalState } from '@/stores/interface'

export const useGlobalStore = defineStore({
  id: 'ird-global',
  state: (): GlobalState => ({
    isDark: false
  }),
  getters: {},
  actions: {}
})
