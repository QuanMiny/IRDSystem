import http from '@/api'
import { Login } from '@/api/interface'

/**
 * @description: 登录模块接口列表
 */

// 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>('/login', params)
}

// 用户注册
export const registerApi = (params: Login.ReqRegisterForm) => {
  return http.post<Login.ResRegister>('/user', params)
}

// 获取菜单列表
export const getAuthMenuListApi = (roleId: number) => {
  return http.get<Menu.MenuOptions[]>(`/menu/list/${roleId}`)
}

// 用户退出登录
// export const logoutApi = () => {
//   return http.post('/logout')
// }
