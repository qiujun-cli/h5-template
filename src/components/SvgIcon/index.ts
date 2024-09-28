/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-28 09:57:03
 * @LastEditors: June
 * @LastEditTime: 2024-09-28 09:59:01
 */
import SvgIcon from "./SvgIcon.vue";
import type { App } from 'vue'


export function setupSvgIcon(app: App) {
  app.component('SvgIcon', SvgIcon)
}