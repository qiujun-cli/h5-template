/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-28 10:43:39
 * @LastEditors: June
 * @LastEditTime: 2024-09-28 11:26:56
 */

export function getAgent() {
  // @ts-ignore
  const ua = navigator.userAgent || navigator.vendor || window.opera
  return ua ? ua.toLowerCase() : ''
}

export function isIOS() {
  const ua = getAgent()
  return /iphone/i.test(ua)
}

export function isAndroin() {
  const ua = getAgent()
  return /android/i.test(ua)
}

export function isWeixin() {
  const ua = getAgent()
  return ua && ua.indexOf('micromessenger') > -1 ? true : false
}
