import { defineStore } from 'pinia'
import { UserState } from '@/stores/interface'

export const useUserStore = defineStore({
  id: 'ird-user',
  state: (): UserState => ({
    token: '',
    userInfo: {
      name: 'Ming'
    }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = userInfo
    }
  }
})
