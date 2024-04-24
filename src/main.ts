import { createApp } from 'vue'

import App from './App.vue'

// reset style sheet
import '@/styles/reset.scss'

// 公共样式
import '@/styles/common.scss'

import router from '@/routers'

import pinia from '@/stores'

createApp(App).use(router).use(pinia).mount('#app')
