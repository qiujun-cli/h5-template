<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-09-28 12:07:47
 * @LastEditors: June 1601745371@qq.com
 * @LastEditTime: 2024-09-29 10:07:18
-->
<template>
  <div class="relative w-full h-100vh overflow-hidden">
    <!-- top app tips -->
    <div
      class="bg-#151515 w-full flex justify-between items-center box-border p-24px"
    >
      <div class="flex justify-start items-center text-30px text-#fff">
        <img
          class="inline-block w-76px h-76px object-contain mr-16px"
          src="@/assets/images/download/main.png"
        />
        <div>
          <p class="header-top relative">桌搭爱好者</p>
          <p class="header-bottom relative">最爱的社区</p>
        </div>
      </div>

      <van-button size="small" color="var(--color-primary)" round
        >用APP看</van-button
      >
    </div>

    <!-- swiper -->
    <section class="w-full">
      <van-swipe
        class="w-full h-712px"
        :autoplay="3000"
        loop
        lazy-render
        :show-indicators="false"
        @change="onSwiperChange"
      >
        <van-swipe-item v-for="image in images" :key="image">
          <img class="wh-full object-cover" :src="image" />
        </van-swipe-item>
      </van-swipe>
      <ul class="flex justify-center items-end h-26px">
        <li
          class="inline-block w-48px h-8px rounded-[36px_2px] bg-#6C6C6F mr-10px last:mr-0"
          :class="[curSwiperIndex === index ? 'swiperActive' : '']"
          v-for="(doit, index) in images.length"
          :key="doit"
        ></li>
      </ul>
    </section>
    <!-- user -->
    <section
      class="box-border p-[8px_28px] h-80px flex justify-between items-center"
    >
      <div class="flex justify-start items-center">
        <img class="w-64px h-64px mr-10px" src="@/assets/images/avatar.jpg" />
        <span class="text-[var(--text-primary)]">June</span>
      </div>
      <div
        class="w-128px h-50px rounded-78px border-2px border-solid border-[var(--color-primary)] f-center text-[var(--color-primary)] text-24px"
      >
        <SvgIcon icon="add" />
        <span class="ml-10px">关注</span>
      </div>
    </section>
    <section
      class="flex justify-between items-center h-46px text-[var(--text-primary)] box-border px-28px mt-8px mb-24px"
    >
      <span class="text-30px font-600">作者提到的产品：</span>
      <div
        class="flex f-center w-166px h-full rounded-12px border-1px border-solid border-#BCBFC9"
      >
        <SvgIcon icon="search" />
        <span class="ml-10px font-600 text-22px">81人搭过</span>
      </div>
    </section>
    <!-- list -->
    <ul class="box-border px-28px w-full my-8px">
      <li class="w-full mb-24px" v-for="i in 3" :key="i">
        <div class="mb-46px w-full flex justify-start items-center">
          <img
            class="mr-20px w-156px h-156px rounded-16px"
            src="@/assets/images/share/goods.jpg"
          />
          <div
            class="flex-1 box-border p-[12px_24px] h-156px rounded-16px bg-#303038 flex justify-between flex-col"
          >
            <p class="text-30px mb-6px text-[var(--color-primary)]">
              声擎 (Audioengine)
            </p>
            <div class="flex-1">
              <p>
                A2+ Wireless 高级桌面式蓝牙音箱 智能A2+ Wireless 高级桌面式...
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-start items-center">
          <img
            class="w-168px h-40px mr-20px"
            src="@/assets/images/share/edit-recommend.png"
          />
          <span class="text-32px font-600">在绫波丽的作战室工作是什么体验</span>
        </div>
      </li>
    </ul>

    <!-- bottom bar -->
    <section
      class="fixed left-0 right-0 bottom-0 safeArea-bottom z-99 bg-#1D1D24"
    >
      <div
        class="h-96px flex justify-between items-center w-full box-border p-[16px_28px]"
      >
        <div
          class="w-340px bg-#303038 text-26px h-64px flex justify-start items-center box-border p-[12px_20px] rounded-142px"
        >
          <SvgIcon icon="edit" extClass="text-[rgba(255_255_255/0.36)]" />
          <span class="ml-8px text-[rgba(255_255_255/0.36)]">12条评论</span>
        </div>
        <div class="f-center">
          <SvgIcon icon="like" extClass="text-#DADADB text-52px" />
          <span class="text-24px ml-8px">14</span>
        </div>
        <div class="f-center">
          <SvgIcon icon="collect" extClass="text-#DADADB text-52px" />
          <span class="text-24px ml-8px">3</span>
        </div>
        <div class="f-center">
          <SvgIcon icon="comment" extClass="text-#DADADB text-52px" />
          <span class="text-24px ml-8px">12</span>
        </div>
      </div>
    </section>

    <!-- app打开按钮 -->
    <img
      class="w-344px h-88px absolute left-50% -translate-x-50% bottom-158px z-10"
      src="@/assets/images/share/openInApp-btn.png"
    />
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

// swiper
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'
]
const curSwiperIndex = ref(0)
const onSwiperChange = (index: number) => {
  curSwiperIndex.value = index
}
</script>

<style lang="scss" setup>
.swiperActive {
  width: 64px;
  height: 10px;
  @apply bg-[var(--color-primary)];
}
.header-top {
  &::after {
    content: '';
    width: 67px;
    height: 2px;
    right: 0;
    @apply inline-block absolute top-50% -translate-y-50% bg-[var(--color-primary)];
  }
}
.header-bottom {
  margin-left: 83px;
  &::before {
    content: '';
    width: 67px;
    height: 4px;
    left: -83px;
    @apply inline-block absolute top-50% -translate-y-50% bg-[var(--color-primary)];
  }
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
