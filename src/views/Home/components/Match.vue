<!--
 * @Author: June 1601745371@qq.com
 * @Date: 2024-09-28 19:29:13
 * @LastEditors: June
 * @LastEditTime: 2024-09-29 23:17:44
 * @FilePath: \vue3-h5\src\views\Home\components\Match.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wh-full overflow-y-scroll box-border p-20px">
    <!-- swiper -->
    <section class="w-full relative rounded-12px overflow-hidden">
      <van-swipe
        class="w-full h-416px"
        :autoplay="6000"
        loop
        lazy-render
        :show-indicators="false"
        @change="onSwiperChange"
      >
        <van-swipe-item class="relative" v-for="item in matchSwiperList" :key="item.id">
          <img class="wh-full bg-#1a1a1f object-contain" :src="item.url" />
          <p class="w-full box-border px-18px absolute bottom-60px left-0 right-0 text-26px text-over-1">{{ item.desc }}</p>
          <div class="absolute left-18px bottom-10px flex justify-start items-center">
            <img class="w-32px h-32px rounded-50%" src="@/assets/images/avatar.jpg" />
            <span class="ml-10px text-#fff">溪北</span>
          </div>
        </van-swipe-item>
      </van-swipe>

      <ul
        class="flex absolute right-18px bottom-10px justify-center items-end h-26px"
      >
        <li
          class="inline-block w-48px h-8px rounded-[36px_2px] bg-#6C6C6F mr-10px last:mr-0"
          :class="[curSwiperIndex === index ? 'swiperActive' : '']"
          v-for="(doit, index) in matchSwiperList.length"
          :key="doit"
        ></li>
      </ul>

    
    </section>
    
    <!-- tab -->
    <ul class="w-full my-28px flex flex-nowrap whitespace-nowrap justify-start items-center">
      <li 
        v-for="(tab, tabIdx) in matchTabList" :key="tab.id"
        class="text-26px py-24px px-20px text-#fff font-bold mr-20px rounded-16px tab-item" 
        :class="{ 'tab-active': tabIdx === curtab }"
      >
        <span class="mr-10px">{{ tab.name }}</span>
        <SvgIcon v-if="tab.hasChild" icon="arrow-bottom" extClass="text-[var(--color-primary)]" />
      </li>
    </ul>

    <!-- 瀑布流列表 -->
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
import { list, matchSwiperList,matchTabList } from '@/mock'

// swiper
const curSwiperIndex = ref(0)
const onSwiperChange = (index: number) => {
  curSwiperIndex.value = index
}

const curtab = ref(2)
</script>

<style lang="scss" scoped>
.tab-item {
  border: 2px solid;
  border-image: linear-gradient(135deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15)) 2 2;
}
.tab-active {
  @apply text-#FDC342;
}
</style>