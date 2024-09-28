<!--
 * @Author: June 1601745371@qq.com
 * @Date: 2024-09-28 19:30:06
 * @LastEditors: June 1601745371@qq.com
 * @LastEditTime: 2024-09-28 23:42:56
 * @FilePath: \vue3-h5\src\views\Home\components\Goodies.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full box-border p-20px">
    <wc-waterfall :gap="10" :cols="2">
      <div v-for="item in list" :key="item.id">
        <img :src="item.url" />
      </div>
    </wc-waterfall>
  </div>
</template>

<script lang="ts" setup>
import 'wc-waterfall'

const list = [
  {
    id: 1,
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  },

  {
    id: 3,
    url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
  },
  {
    id: 4,
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
  },
  {
    id: 11,
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  },

  {
    id: 31,
    url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
  },
  {
    id: 41,
    url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
  }
]
</script>
