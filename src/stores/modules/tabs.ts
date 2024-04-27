import { defineStore } from 'pinia'
import { TabsMenuProps, TabsState } from '@/stores/interface'
import piniaPersistConfig from '@/stores/helper/persist'
import router from '@/routers'

export const useTabsStore = defineStore({
  id: 'ird-tabs',
  state: (): TabsState => ({
    tabsMenuList: []
  }),
  getters: {},
  actions: {
    addTab(tabItem: TabsMenuProps) {
      if (this.tabsMenuList.every((item) => item.path !== tabItem.path)) {
        this.tabsMenuList.push(tabItem)
      }
    },
    removeTab(tabPath: string, isCurrent: boolean = true) {
      if (isCurrent) {
        this.tabsMenuList.forEach((item, index) => {
          if (item.path !== tabPath) return
          const nextTab = this.tabsMenuList[index + 1] || this.tabsMenuList[index - 1]
          if (!nextTab) return
          router.push(nextTab.path)
        })
      }
      this.tabsMenuList = this.tabsMenuList.filter((item) => item.path !== tabPath)
    },
    setTabs(tabsMenuList: TabsMenuProps[]) {
      this.tabsMenuList = tabsMenuList
    }
  },
  persist: piniaPersistConfig('ird-tabs')
})
