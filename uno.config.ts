/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-27 14:02:07
 * @LastEditors: June
 * @LastEditTime: 2024-09-28 09:35:24
 */
import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss'
import transformerCompileClass from '@unocss/transformer-compile-class' // 将一组类编译为一个类

export default defineConfig({
  transformers: [transformerDirectives(), transformerCompileClass()],
  presets: [presetUno(), presetAttributify()],
  shortcuts: [
    { 'wh-full': 'w-full h-full' },
    { 'f-center': 'flex justify-center items-center' }
  ]
})