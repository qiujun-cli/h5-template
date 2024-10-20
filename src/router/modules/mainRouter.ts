/*
 * @Author: June
 * @Description:
 * @Date: 2024-09-28 09:07:09
 * @LastEditors: June
 * @LastEditTime: 2024-10-20 10:38:11
 */
import type { RouteRecordRaw } from 'vue-router'

const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/ErrPage/Err404.vue')
  }
]

export default mainRoutes
