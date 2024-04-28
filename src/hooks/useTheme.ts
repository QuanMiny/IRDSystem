import { DEFAULT_PRIMARY } from '@/config'
import { useGlobalStore } from '@/stores/modules/global'

export const useTheme = () => {
  const globalStore = useGlobalStore()

  // 修改主题颜色
  const changePrimary = (val: string | null) => {
    if (!val) {
      val = DEFAULT_PRIMARY
    }
    document.documentElement.style.setProperty('--el-color-primary', val)
    globalStore.setPrimaryState(val)
  }

  const initTheme = () => {
    changePrimary(DEFAULT_PRIMARY)
  }

  return {
    changePrimary,
    initTheme
  }
}
