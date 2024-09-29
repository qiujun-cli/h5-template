<!--
 * @Author: June 1601745371@qq.com
 * @Date: 2024-09-28 19:30:06
 * @LastEditors: June 1601745371@qq.com
 * @LastEditTime: 2024-09-29 10:11:57
 * @FilePath: \vue3-h5\src\views\Home\components\Goodies.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wh-full overflow-y-scroll box-border p-28px">
    <wc-waterfall :gap="14" :cols="2">
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
import 'wc-waterfall'

const list = [
  {
    id: 1,
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    name: '溪北',
    title: '繁而有序的现代风电脑桌面，舒适的书房环境',
    isLike: false,
    foceser: 130
  },

  {
    id: 3,
    url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    name: '溪北',
    title: '繁而有序的现代风电脑桌面，舒适的书房环境',
    isLike: true,
    foceser: 130
  },
  {
    id: 4,
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    name: '溪北',
    title: '繁而有序的现代风电脑桌面，舒适的书房环境',
    isLike: false,
    foceser: 130
  },
  {
    id: 31,
    url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    name: '溪北',
    title: '繁而有序的现代风电脑桌面，舒适的书房环境',
    isLike: true,
    foceser: 130
  },
  {
    id: 41,
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    name: '溪北',
    title: '繁而有序的现代风电脑桌面，舒适的书房环境',
    isLike: true,
    foceser: 130
  }
]
</script>
