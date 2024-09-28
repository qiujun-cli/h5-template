/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-27 13:01:36
 * @LastEditors: June
 * @LastEditTime: 2024-09-27 14:48:38
 */
import { createPinia } from 'pinia'
import type { App } from 'vue'

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}

export default store