import { DEFAULT_PRIMARY } from '@/config'
import { useGlobalStore } from '@/stores/modules/global'
import { getLightColor } from '@/utils/color'

export const useTheme = () => {
  const globalStore = useGlobalStore()

  // 修改主题颜色
  const changePrimary = (val: string | null) => {
    if (!val) {
      val = DEFAULT_PRIMARY
    }
    document.documentElement.style.setProperty('--el-color-primary', val)
    for (let i = 1; i <= 9; i++) {
      const primaryColor = `${getLightColor(val, i / 10)}`
      document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor)
    }
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
