interface ExpiresData {
  value: any
  expires: number
}

/**
 * @description 设置localStorage附带过期时间
 * @param {String} key Storage名称
 * @param {*} value Storage值
 * @param {Number}expires 默认7天 7 * 24 * 60 * 60 * 1000
 * @returns {void}
 */
export function setWithExpires(key: string, value: any, expires: number = 7 * 24 * 60 * 60 * 1000) {
  const data: ExpiresData = {
    value: value,
    expires: Date.now() + expires
  }
  window.localStorage.setItem(key, JSON.stringify(data))
}

/**
 * @description 查询过期时间获取localStorage值
 * @param {String} key Storage名称
 * @returns {*} value Storage值
 */
export function getWithExpires(key: string) {
  const value = window.localStorage.getItem(key)
  try {
    const data: ExpiresData = JSON.parse(value as string)
    if (Date.now() > data.expires) {
      window.localStorage.removeItem(key)
      return null
    }
    return data.value
  } catch (error) {
    return value
  }
}

/**
 * @description 存储localStorage
 * @param {String} key Storage名称
 * @param {*} value Storage值
 * @returns {void}
 */
export function localSet(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 * @returns {*} value Storage值
 */
export function localGet(key: string) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(value as string)
  } catch (error) {
    return value
  }
}

/**
 * @description 清除localStorage
 * @param {String} key Storage名称
 * @returns {void}
 */
export function localRemove(key: string) {
  window.localStorage.removeItem(key)
}

/**
 * @description 清除所有localStorage
 * @returns {void}
 */
export function localClear() {
  window.localStorage.clear()
}
