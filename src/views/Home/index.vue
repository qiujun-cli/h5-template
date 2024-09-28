<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-09-28 09:04:58
 * @LastEditors: June
 * @LastEditTime: 2024-09-28 10:10:47
-->
<template>
  <div class="w-750px h-full flex flex-col" @click="handleNavDownload">
    <!-- 顶部 -->
    <section class="w-full">
      <div class="w-full h-96px flex justify-between items-center box-border px-24px py-16px">
        <img class="w-316px h-50px" src="@/assets/logo.svg" />
        <div class="flex justify-end items-center">
          <SvgIcon class="mr-28px" icon="search" extClass="text-44px" />
          <SvgIcon class="mr-28px" icon="comment" extClass="text-44px" />
          <SvgIcon class="mr-28px" icon="notification" extClass="text-44px" />

          <img class="w-64px h-64px rounded-50%" src="@/assets/images/avatar.jpg" />
        </div>
      </div>
      <div class="h-80px box-border px-48px py-20px">2</div>
    </section>
    <!-- 内容 -->
    <section class="flex-1 bg-red">
      content
    </section>
  </div>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash-es'
import { useRouter } from 'vue-router';

const router = useRouter()
const handleNavDownload = debounce(function() {
  router.push('/download')
}, 250)
</script>