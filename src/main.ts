/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-27 13:01:36
 * @LastEditors: June
 * @LastEditTime: 2024-09-27 14:53:39
 */

import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter, router } from './router'
import { setupStore } from './store'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
import 'virtual:uno.css'



async function bootstrap() {
  const app = createApp(App)
  await setupRouter(app)
  await setupStore(app)

  await router.isReady()
  app.mount('#app')
}

bootstrap()