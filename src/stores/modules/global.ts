import { defineStore } from 'pinia'
import { GlobalState } from '@/stores/interface'
import piniaPersistConfig from '@/stores/helper/persist'

export const useGlobalStore = defineStore({
  id: 'ird-global',
  state: (): GlobalState => ({
    isCollapse: false,
    isDark: false
  }),
  getters: {},
  actions: {
    setCollapseState(state: boolean) {
      this.isCollapse = state
    }
  },
  persist: piniaPersistConfig('ird-global')
})
