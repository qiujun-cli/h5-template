/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-28 09:49:18
 * @LastEditors: June
 * @LastEditTime: 2024-09-28 09:49:42
 */
// 是否https 等开头
export const isExternal = (path: string) => {
  return /^(https?:|mailto:|tel:)/.test(path)
}

// 校验是否移动端
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|HarmonyOS/i.test(navigator.userAgent);
}
