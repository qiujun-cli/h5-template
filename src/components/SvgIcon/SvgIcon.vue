<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-09-28 09:48:21
 * @LastEditors: June
 * @LastEditTime: 2024-09-28 09:55:33
-->
<template>
  <div
    v-if="isExternalChar"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
  />
  <svg v-else class="svg-icon" :class="props.extClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { isExternal } from '@/utils/common'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  extClass: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})

const isExternalChar = computed(() => isExternal(props.icon))
const iconName = computed(() => `#icon-${props.icon}`)
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.icon}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`,
    color: props.color ? props.color : ''
  }
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
