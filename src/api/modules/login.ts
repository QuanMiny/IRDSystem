import http from '@/api'
import { Login } from '@/api/interface'

/**
 * @description: 登录模块接口列表
 */

// 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>('/login', params)
}

// 获取菜单列表
export const getAuthMenuListApi = () => {
  return http.get<Menu.MenuOptions[]>('/menu/list')
}
