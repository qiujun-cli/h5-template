/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-28 11:48:13
 * @LastEditors: June
 * @LastEditTime: 2024-09-28 12:03:57
 */
import VConsole from 'vconsole';
const vconsole_enable = import.meta.env.APP_VCONSOLE_ENABLE

vconsole_enable === '1' && new VConsole()