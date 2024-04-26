import { createApp } from 'vue'

import App from './App.vue'

// reset style sheet
import '@/styles/reset.scss'

// 公共样式
import '@/styles/common.scss'

// el-message 提示框样式
import 'element-plus/es/components/message-box/style/css'
import 'element-plus/es/components/message/style/css'

import router from '@/routers'

import pinia from '@/stores'

createApp(App).use(router).use(pinia).mount('#app')
