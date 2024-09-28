/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-27 13:01:36
 * @LastEditors: June
 * @LastEditTime: 2024-09-28 09:13:17
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import mainRoutes from './modules/mainRouter'
import type { App } from 'vue'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...mainRoutes
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Login']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => app.use(router)
