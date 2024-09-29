<!--
 * @Author: June 1601745371@qq.com
 * @Date: 2024-09-28 19:31:36
 * @LastEditors: June
 * @LastEditTime: 2024-09-29 22:59:24
 * @FilePath: \vue3-h5\src\views\Home\components\Lottery.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wh-full overflow-y-scroll relative z-1 -mt-10px">
    <!-- swiper -->
    <section class="w-full relative">
      <van-swipe
        class="w-full h-712px"
        :autoplay="6000"
        loop
        lazy-render
        :show-indicators="false"
        @change="onSwiperChange"
      >
        <van-swipe-item v-for="image in images" :key="image">
          <img class="wh-full object-cover" :src="image" />
        </van-swipe-item>
      </van-swipe>
      <ul
        class="flex absolute left-50% -translate-x-50% bottom-60px justify-center items-end h-26px"
      >
        <li
          class="inline-block w-48px h-8px rounded-[36px_2px] bg-#6C6C6F mr-10px last:mr-0"
          :class="[curSwiperIndex === index ? 'swiperActive' : '']"
          v-for="(doit, index) in images.length"
          :key="doit"
        ></li>
      </ul>

      <img
        class="w-140px h-108px absolute right-0 top-50% -translate-y-50% z-1"
        src="@/assets/images/lottery/mine-btn.png"
      />
    </section>

    <section
      class="box-border p-28px relative z-1 rounded-[32px_32px_0_0] -mt-48px bg-#1A1A1F"
    >
      <img
        class="w-370px mb-32px mx-auto object-contain"
        src="@/assets/images/lottery/title.png"
      />

      <ul class="w-full">
        <li
          class="activity-item relative box-border px-24px pt-16px pb-24px mb-24px last:mb-0"
        >
          <p class="text-26px">
            倒计时：<span class="text-#FC425F mr-10px">12</span>天<span
              class="text-#FC425F mx-10px"
              >12</span
            >时<span class="text-#FC425F mx-10px">12</span>分<span
              class="text-#FC425F mx-10px"
              >12</span
            >秒
          </p>

          <div class="w-full h-260px flex justify-start items-center mt-24px">
            <img
              class="w-260px h-full mr-24px rounded-12px"
              src="@/assets/images/lottery/test-goods.png"
            />
            <div class="flex justify-between flex-col h-full">
              <p class="text-32px line-clamp-2">Switch任天堂国行游戏主机</p>
              <div>
                <ul
                  class="text-22px flex justify-start items-center mb-10px text-#9A9A9D"
                >
                  <li class="mr-32px">
                    <SvgIcon icon="trophy" />
                    <span class="ml-10px">名额：1个</span>
                  </li>
                  <li>
                    <SvgIcon icon="users" />
                    <span class="ml-10px">726人正在参与</span>
                  </li>
                </ul>
                <div
                  class="btn-no-join flex justify-between items-center text-#fff"
                >
                  <div class="h-full box-border p-10px">
                    <p class="text-26px">抽中0元领</p>
                    <p class="text-20px line-through">￥4299</p>
                  </div>
                  <div class="h-full f-center box-border p-10px" @click="props.handleNavDownload">
                    <span class="text-30px font-600">去抽奖</span>
                    <SvgIcon icon="arrow-right" extClass="text-28px" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            class="absolute -z-1 top-10px right-0 w-212px h-102px"
            src="@/assets/images/lottery/doing.png"
          />
        </li>

        <!-- 已参加 -->
        <li
          class="activity-item relative box-border px-24px pt-16px pb-24px mb-24px last:mb-0"
        >
          <p class="text-26px">
            倒计时：<span class="text-#FC425F mr-10px">12</span>天<span
              class="text-#FC425F mx-10px"
              >12</span
            >时<span class="text-#FC425F mx-10px">12</span>分<span
              class="text-#FC425F mx-10px"
              >12</span
            >秒
          </p>

          <div class="w-full h-260px flex justify-start items-center mt-24px">
            <img
              class="w-260px h-full mr-24px rounded-12px"
              src="@/assets/images/lottery/test-goods.png"
            />
            <div class="flex justify-between flex-col h-full">
              <p class="text-32px line-clamp-2">Switch任天堂国行游戏主机</p>
              <div>
                <ul
                  class="text-22px flex justify-start items-center mb-10px text-#9A9A9D"
                >
                  <li class="mr-32px">
                    <SvgIcon icon="trophy" />
                    <span class="ml-10px">名额：1个</span>
                  </li>
                  <li>
                    <SvgIcon icon="users" />
                    <span class="ml-10px">726人正在参与</span>
                  </li>
                </ul>
                <div
                  class="btn-joined flex justify-between items-center text-#fff"
                >
                  <div class="h-full box-border p-10px">
                    <p class="text-26px">抽中0元领</p>
                    <p class="text-20px line-through">￥4299</p>
                  </div>
                  <div class="h-full f-center box-border p-10px">
                    <span class="text-30px font-600">已参加</span>
                    <SvgIcon icon="arrow-right" extClass="text-28px" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            class="absolute -z-1 top-10px right-0 w-212px h-102px"
            src="@/assets/images/lottery/doing.png"
          />
        </li>
      </ul>

      <div class="my-32px text-32px text-#DADADB title">
        <span class="relative">已结束</span>
      </div>

      <ul class="w-full">
        <li class="activity-item relative box-border px-24px pt-16px pb-24px">
          <p class="text-26px">
            倒计时：<span class="text-#FC425F mr-10px">12</span>天<span
              class="text-#FC425F mx-10px"
              >12</span
            >时<span class="text-#FC425F mx-10px">12</span>分<span
              class="text-#FC425F mx-10px"
              >12</span
            >秒
          </p>

          <div class="w-full h-260px flex justify-start items-center mt-24px">
            <img
              class="w-260px h-full mr-24px rounded-12px"
              src="@/assets/images/lottery/test-goods.png"
            />
            <div class="flex justify-between flex-col h-full">
              <p class="text-32px line-clamp-2">Switch任天堂国行游戏主机</p>
              <div>
                <ul
                  class="text-22px flex justify-start items-center mb-10px text-#9A9A9D"
                >
                  <li class="mr-32px">
                    <SvgIcon icon="trophy" />
                    <span class="ml-10px">名额：1个</span>
                  </li>
                  <li>
                    <SvgIcon icon="users" />
                    <span class="ml-10px">726人正在参与</span>
                  </li>
                </ul>
                <div class="btn-wait flex justify-between items-center">
                  <div class="h-full box-border p-10px">
                    <p class="text-26px">抽中0元领</p>
                    <p class="text-20px line-through">￥4299</p>
                  </div>
                  <div class="h-full f-center box-border p-10px">
                    <span class="text-30px font-600">待开奖</span>
                    <SvgIcon icon="arrow-right" extClass="text-28px" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            class="absolute -z-1 top-10px right-0 w-212px h-102px"
            src="@/assets/images/lottery/is-end.png"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  handleNavDownload: {
    type: Function as PropType<any>,
  }
})
// swiper
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'
]
const curSwiperIndex = ref(0)
const onSwiperChange = (index: number) => {
  curSwiperIndex.value = index
}
</script>

<style lang="scss" scoped>
.swiperActive {
  width: 64px;
  height: 10px;
  @apply bg-#DADADB;
}

.activity-item {
  width: 694px;
  height: 360px;
  background: url('@/assets/images/lottery/goods-bg.png') 0 0 no-repeat;
  background-size: 100% 100%;
  .btn-no-join {
    width: 362px;
    height: 84px;
    background: url('@/assets/images/lottery/no-join-bg.png') 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .btn-joined {
    width: 362px;
    height: 84px;
    background: url('@/assets/images/lottery/joined-bg.png') 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .btn-wait {
    width: 362px;
    height: 84px;
    background: url('@/assets/images/lottery/wait-bg.png') 0 0 no-repeat;
    background-size: 100% 100%;
  }
}

.title {
  @apply f-center;
  & > span {
    &::before {
      display: inline-block;
      content: '';
      position: absolute;
      left: -176px;
      top: 50%;
      transform: translateY(-50%);
      width: 156px;
      height: 2px;
      background: linear-gradient(
        90deg,
        rgba(111, 116, 126, 0) 0%,
        rgba(111, 116, 126, 0.48) 38%,
        #6f747e 100%
      );
    }
    &::after {
      display: inline-block;
      content: '';
      position: absolute;
      right: -176px;
      top: 50%;
      width: 156px;
      height: 2px;
      background: linear-gradient(
        90deg,
        #6f747e 0%,
        rgba(111, 116, 126, 0.48) 38%,
        rgba(111, 116, 126, 0) 100%
      );
    }
  }
}
</style>
