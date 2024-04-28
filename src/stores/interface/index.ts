/* GlobalState */
export interface GlobalState {
  isCollapse: boolean
  primary: string
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

/* tabsMenuProps */
export interface TabsMenuProps {
  icon: string
  title: string
  path: string
  name: string
  close: boolean
  isKeepAlive: boolean
}

/* TabsState */
export interface TabsState {
  tabsMenuList: TabsMenuProps[]
}

/* keepAliveState */
export interface KeepAliveState {
  keepAliveNames: string[]
}
