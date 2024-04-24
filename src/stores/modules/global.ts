import { defineStore } from 'pinia'
import { GlobalState } from '@/stores/interface'
import piniaPersistConfig from '@/stores/helper/persist'

export const useGlobalStore = defineStore({
  id: 'ird-global',
  state: (): GlobalState => ({
    isDark: false
  }),
  getters: {},
  actions: {},
  persist: piniaPersistConfig('ird-global')
})
