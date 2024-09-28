<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-09-28 09:04:58
 * @LastEditors: June 1601745371@qq.com
 * @LastEditTime: 2024-09-28 20:06:43
-->
<template>
  <div class="w-750px h-100vh flex flex-col">
    <!-- 顶部 -->
    <section class="w-full overflow-hidden">
      <CHeader :handleNavDownload="handleNavDownload" />
      <Tab v-model:curCom="curCom" />
    </section>

    <!-- 内容 -->
    <section class="flex-1">
      <template v-if="curCom">
        <component :is="comMap[curCom]" />
      </template>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Lottery, Goodies, Activity, Match, Tab, CHeader } from './components'
import { debounce } from 'lodash-es'
import { useRouter } from 'vue-router'
import { ComName } from '@/enums/home'

const router = useRouter()
const handleNavDownload = debounce(function () {
  router.push('/download')
}, 250)

const curCom = ref<ComName>(ComName.goodies)
const comMap: Record<ComName, any> = {
  [ComName.lottery]: Lottery,
  [ComName.goodies]: Goodies,
  [ComName.activity]: Activity,
  [ComName.match]: Match
}
</script>
