import { defineStore } from 'pinia'
import { TabsMenuProps, TabsState } from '@/stores/interface'
import piniaPersistConfig from '@/stores/helper/persist'
import router from '@/routers'
import { useKeepAliveStore } from '@/stores/modules/keepAlive'

const keepAliveStore = useKeepAliveStore()

export const useTabsStore = defineStore({
  id: 'ird-tabs',
  state: (): TabsState => ({
    tabsMenuList: []
  }),
  getters: {},
  actions: {
    async addTab(tabItem: TabsMenuProps) {
      if (this.tabsMenuList.every((item) => item.path !== tabItem.path)) {
        this.tabsMenuList.push(tabItem)
      }
      // add keepalive
      if (!keepAliveStore.keepAliveNames.includes(tabItem.path) && tabItem.isKeepAlive) {
        keepAliveStore.addKeepAlive(tabItem.path)
      }
    },
    async removeTab(tabPath: string, isCurrent: boolean = true) {
      if (isCurrent) {
        this.tabsMenuList.forEach((item, index) => {
          if (item.path !== tabPath) return
          const nextTab = this.tabsMenuList[index + 1] || this.tabsMenuList[index - 1]
          if (!nextTab) return
          router.push(nextTab.path)
        })
      }

      // remove keepalive
      const tabItem = this.tabsMenuList.find((item) => item.path === tabPath)
      tabItem?.isKeepAlive && keepAliveStore.removeKeepAlive(tabItem.path)

      this.tabsMenuList = this.tabsMenuList.filter((item) => item.path !== tabPath)
    },
    async setTabs(tabsMenuList: TabsMenuProps[]) {
      this.tabsMenuList = tabsMenuList
    }
  },
  persist: piniaPersistConfig('ird-tabs')
})
