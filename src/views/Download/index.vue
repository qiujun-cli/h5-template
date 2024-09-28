<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-09-28 10:12:24
 * @LastEditors: June
 * @LastEditTime: 2024-09-28 11:32:08
-->
<template>
  <div class="w-full h-100vh relative">
    <div class="f-center h-96px">
      <span class="mr-10px">点击右上角在浏览器中打开</span>
      <SvgIcon icon="navout" />
    </div>

    <img class="absolute left-32px top-214px w-358px h-214px object-contain" src="@/assets/images/download/top.png" />

    <div class="absolute left-32px right-32px bottom-64px text-center">
      <img class="inline-block w-256px h-256px object-contain" src="@/assets/images/download/main.png" />
      <p class="title text-40px mt-20px text-#999">桌搭爱好者最爱的社区</p>

      <img class="mt-166px w-686px h-104px object-contain" src="@/assets/images/download/bottom-btn.png" @click="handleDownload" />
    </div>

    
  </div>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash-es';
import { isIOS, isAndroin, isWeixin } from '@/utils/downloadApp'
import { android_apk_link, android_store_link, ios_store_link } from '@/constants/app'

const handleDownload = debounce(function() {
  const _isWeixin = isWeixin()
  if(isIOS()) {
    if(_isWeixin) {
     return window.location.hash = 'download'
    } 
    if (ios_store_link) {
      window.location.href = ios_store_link
    } else {
      showDialog({
        title:'提示',
        message: '链接错误'
      })
    }
  } else if(isAndroin()) {
    if(_isWeixin) {
     return window.location.hash = 'download'
    } 
    if(android_apk_link) {
      window.location.href = android_apk_link
    } else {
      showDialog({
        title:'提示',
        message: '链接错误'
      })
    }
     
  } else {
    showDialog({
      title:'提示',
      message: '暂不支持，请到应用商店安卓～～'
    })
  }

}, 250)
</script>

<style lang="scss" scoped>
.title {
  font-family: Alimama ShuHeiTi-Bold;
}
</style>