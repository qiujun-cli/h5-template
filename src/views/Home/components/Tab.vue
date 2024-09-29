<!--
 * @Author: June 1601745371@qq.com
 * @Date: 2024-09-28 19:56:26
 * @LastEditors: June 1601745371@qq.com
 * @LastEditTime: 2024-09-29 10:28:42
 * @FilePath: \vue3-h5\src\views\Home\components\Tab.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ul
    class="relative z-1 h-80px box-border px-48px py-20px flex text-center justify-between items-center text-#6C6C6F text-32px rounded-[0px_0px_20px_20px]"
    @click="handleTab"
  >
    <li class="h-full w-80px"></li>
    <li
      class="flex-1 h-full"
      v-for="tab in tabList"
      :key="tab.type"
      :class="{
        'tab-active': tab.type === curCom
      }"
      :data-type="tab.type"
    >
      {{ tab.name }}
    </li>
    <li class="h-full">
      <SvgIcon icon="arrow-bottom" extClass="text-40px" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash-es'
import { ComName } from '@/enums/home'

const curCom = defineModel('curCom', {
  type: String,
  required: true
})

// tab
const tabList = [
  {
    name: '搭配',
    type: ComName.match
  },
  {
    name: '好物',
    type: ComName.goodies
  },
  {
    name: '活动',
    type: ComName.activity
  },
  {
    name: '抽奖',
    type: ComName.lottery
  }
]

const handleTab = debounce(function (e) {
  const { type } = e.target?.dataset ?? {}
  if (!type || unref(curCom) === type) return
  curCom.value = type
}, 250)
</script>

<style lang="scss" scoped>
.tab-active {
  @apply text-#fff relative;
  font-size: 36px;
  &::after {
    display: inline-block;
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -16px;
    width: 48px;
    height: 4px;
    background-color: var(--color-primary);
  }
}
</style>
