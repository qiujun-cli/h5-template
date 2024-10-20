/*
 * @Author: June
 * @Description:
 * @Date: 2024-09-27 13:01:36
 * @LastEditors: June
 * @LastEditTime: 2024-10-20 10:38:52
 */

import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter, router } from './router'
import { setupStore } from './store'
// css
import '@/styles/index.scss'
import 'virtual:uno.css'
import 'vant/es/dialog/style/index'
// svg
import { setupSvgIcon } from '@/components/SvgIcon'
import 'virtual:svg-icons-register'
import './lib/vconsole'
import 'wc-waterfall'

async function bootstrap() {
  const app = createApp(App)
  await setupRouter(app)
  await setupStore(app)
  setupSvgIcon(app)
  await router.isReady()
  app.mount('#app')
}

bootstrap()
