<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-09-28 12:08:06
 * @LastEditors: June 1601745371@qq.com
 * @LastEditTime: 2024-09-28 14:23:07
-->
<template>
  <div class="w-full h-100vh overflow-y-scroll relative agreement-wrap">
    <header class="fixed z-99 h-80px left-0 right-0 top-0 flex items-center">
      <SvgIcon icon="arrow-left" extClass="text-60px" @click="handleNavBack" />
    </header>

    <div class="w-full relative z-2 pt-80px box-border p-48px" v-html="agreementString"></div>
  </div>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash-es';
import { useRouter } from 'vue-router';

const router = useRouter()
const handleNavBack = debounce(function() {
  router.go(-1)
}, 250)

const agreementString = ref('<h1 style="color: red;font-size: 23px">测试</h1>')
</script>

<style lang="scss" setup>
.agreement-wrap {
  background: url('@/assets/1.jpg') 0 0 no-repeat;
  background-size: 100% auto;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(30px);
  }

}
</style>