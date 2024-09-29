<!--
 * @Author: June 1601745371@qq.com
 * @Date: 2024-09-28 19:31:01
 * @LastEditors: June
 * @LastEditTime: 2024-09-29 22:51:29
 * @FilePath: \vue3-h5\src\views\Home\components\Activity.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wh-full overflow-y-scroll box-border p-20px">
    <div class="mb-20px activity-card card-1" @click="props.handleNavDownload">
    </div>
    <div class="activity-card card-2" @click="props.handleNavDownload">
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  handleNavDownload: {
    type: Function as PropType<any>,
  }
})
</script>

<style lang="scss" setup>
.swiperActive {
  width: 64px;
  height: 10px;
  @apply bg-#DADADB;
}

.activity-card {
  width: 698px;
  height: 760px;
}
.card-1 {
  background: url('@/assets/images/activity/bg1.png') 0 0 no-repeat;
  background-size: 100% 100%;
}
.card-2 {
  background: url('@/assets/images/activity/bg1.png') 0 0 no-repeat;
  background-size: 100% 100%;
}
</style>