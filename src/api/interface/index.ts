// 请求响应参数（不包含data）
export interface Result {
  code: number
  msg: string
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T
}

// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string
    password: string
    rememberMe: boolean
  }
  export interface ResLogin {
    id: number
    username: string
    token: string
    role_id: number
  }
  export interface ReqRegisterForm {
    username: string
    password: string
  }
  export type ResRegister = string | null
}
