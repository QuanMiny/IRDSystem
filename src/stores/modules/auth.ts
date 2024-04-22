import { defineStore } from 'pinia'
import { AuthState } from '@/stores/interface'

export const useAuthStore = defineStore({
  id: 'ird-auth',
  state: (): AuthState => ({
    // 按钮权限列表
    authButtonList: {},
    // 菜单权限列表
    authMenuList: [],
    // 当前页面的 router name，用来做按钮权限筛选
    routeName: ''
  }),
  getters: {},
  actions: {}
})
