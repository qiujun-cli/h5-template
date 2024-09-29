<!--
 * @Author: June 1601745371@qq.com
 * @Date: 2024-09-28 20:01:29
 * @LastEditors: June
 * @LastEditTime: 2024-09-29 22:05:32
 * @FilePath: \vue3-h5\src\views\Home\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="w-full bg-#1a1a1f h-96px flex justify-between items-center box-border px-24px py-16px"
  >
    <img class="w-316px h-50px" src="@/assets/logo.svg" />
    <div class="flex justify-end items-center">
      <SvgIcon
        class="mr-28px"
        icon="search"
        extClass="text-44px text-#DADADB"
        @click="handleNavDownload"
      />
      <SvgIcon
        class="mr-28px"
        icon="comment"
        extClass="text-44px text-#DADADB"
        @click="handleNavDownload"
      />
      <SvgIcon
        class="mr-28px"
        icon="notification"
        extClass="text-44px text-#DADADB"
        @click="handleNavDownload"
      />

      <img
        class="w-64px h-64px rounded-50%"
        src="@/assets/images/avatar.jpg"
        @click="handleNavDownload"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  handleNavDownload: {
    type: Function as PropType<any>
  }
})
</script>
