/* GlobalState */
export interface GlobalState {
  isDark: boolean
}

/* UserState */
export interface UserState {
  token: string
  userInfo: { name: string }
}

/* AuthState */
export interface AuthState {
  routeName: string
  authButtonList: {
    [key: string]: string[]
  }
  authMenuList: Menu.MenuOptions[]
}
