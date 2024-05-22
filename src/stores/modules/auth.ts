import { defineStore } from 'pinia'
import { AuthState } from '@/stores/interface'
import { getAuthMenuListApi } from '@/api/modules/login'
import { getAllBreadcrumbList, getFlatMenuList, getShowMenuList } from '@/utils'

import { useUserStore } from '@/stores/modules/user'
import router from '@/routers'
import { LOGIN_URL } from '@/config'

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
  getters: {
    // 菜单权限列表 ==> 这里的菜单没有经过任何处理
    authMenuListGet: (state) => state.authMenuList,
    // 菜单权限列表 ==> 扁平化之后的一维数组菜单，主要用来添加动态路由
    flatMenuListGet: (state) => getFlatMenuList(state.authMenuList),
    // 菜单权限列表 ==> 左侧菜单栏渲染，需要剔除 isHide == true
    showMenuListGet: (state) => getShowMenuList(state.authMenuList),
    // 递归处理后的所有面包屑导航列表
    breadcrumbListGet: (state) => getAllBreadcrumbList(state.authMenuList)
  },
  actions: {
    async getAuthMenuList() {
      const userStore = useUserStore()
      try {
        const res = await getAuthMenuListApi(userStore.userInfo.roleId)
        if (res.code === 200) {
          this.authMenuList = res.data
        } else {
          // token无效 或者 菜单列表为空，则跳转到登录页
          console.log(res.msg)
          this.authMenuList = []
          userStore.setToken('')
          router.replace(LOGIN_URL)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
