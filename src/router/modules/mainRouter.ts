/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-28 09:07:09
 * @LastEditors: June
 * @LastEditTime: 2024-09-28 12:09:09
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
    path: '/download',
    component: () => import('@/views/Download/index.vue')
  },
  {
    path: '/share',
    component: () => import('@/views/Share/index.vue')
  },
  {
    path: '/agreement',
    component: () => import('@/views/Agreement/index.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    redirect:'/404',
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("@/views/ErrPage/Err404.vue"),
  }
]

export default mainRoutes
