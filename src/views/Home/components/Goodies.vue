<!--
 * @Author: June 1601745371@qq.com
 * @Date: 2024-09-28 19:30:06
 * @LastEditors: June
 * @LastEditTime: 2024-09-29 22:34:21
 * @FilePath: \vue3-h5\src\views\Home\components\Goodies.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wh-full overflow-y-scroll box-border p-20px" @click="props.handleNavDownload">
    <wc-waterfall :gap="10" :cols="2">
      <div
        v-for="item in list"
        :key="item.id"
        class="rounded-16px overflow-hidden"
      >
        <img :src="item.url" />
        <div class="box-border p-20px text-#6C6C6F text-26px bg-#1D1D24">
          <p class="text-#DADADB line-clamp-2">{{ item.title }}</p>
          <div class="w-full flex justify-between items-center mt-20px">
            <div class="flex justify-start items-center">
              <img
                class="w-54px h-54px object-contain"
                src="@/assets/images/avatar.jpg"
              />
              <span class="ml-10px">{{ item.name }}</span>
            </div>
            <div class="flex justify-end items-center">
              <SvgIcon
                icon="like"
                :extClass="item.isLike ? 'text-#FC425F' : 'text-#6C6C6F'"
              />
              <span class="ml-10px">138</span>
            </div>
          </div>
        </div>
      </div>
    </wc-waterfall>
    <div class="mt-10px text-center text-24px text-#6C6C6F">
      没有更多数据了~~~
    </div>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import { list } from '@/mock'

const props = defineProps({
  handleNavDownload: {
    type: Function as PropType<any>,
  }
})

</script>
