import { defineStore } from 'pinia'
import { UserState } from '@/stores/interface'
import piniaPersistConfig from '@/stores/helper/persist'
import { Login } from '@/api/interface'

export const useUserStore = defineStore({
  id: 'ird-user',
  state: (): UserState => ({
    token: '',
    userInfo: {
      username: '',
      roleId: 0
    }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(data: Login.ResLogin) {
      this.token = data.token
      this.userInfo.username = data.username
      this.userInfo.roleId = data.role_id
    }
  },
  persist: piniaPersistConfig('ird-user')
})
