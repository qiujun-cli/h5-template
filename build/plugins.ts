/*
 * @Author: June
 * @Description:
 * @Date: 2024-09-27 13:45:07
 * @LastEditors: June 1601745371@qq.com
 * @LastEditTime: 2024-09-28 23:39:37
 */
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PluginOption } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { isProd } from './getEnv'
import { VantResolver } from '@vant/auto-import-resolver'
import autoprefixer from 'autoprefixer'
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin'

/**
 * 创建 vite 插件
 * @param viteEnv
 */
export const createVitePlugins = (
  mode: string,
  viteEnv: ViteEnv
): (PluginOption | PluginOption[])[] => {
  const _isProd = isProd(mode)
  const { APP_TITLE } = viteEnv

  return [
    Vue({
      template: {
        compilerOptions: { isCustomElement: (tag) => tag.startsWith('wc-') }
      }
    }),
    UnoCSS(),
    // vue 可以使用 jsx/tsx 语法
    VueJsx(),
    // 自动导入
    AutoImport({
      resolvers: [VantResolver()],
      imports: ['vue'],
      dts: './typings/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      resolvers: [VantResolver()],
      dirs: ['src/components'],
      dts: './typings/components.d.ts'
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/svgs')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    createHtmlPlugin({
      minify: _isProd,
      inject: {
        data: {
          title: APP_TITLE
        }
      }
    })
  ]
}

export const createPostcssPlugin = () => {
  return [
    autoprefixer({
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        '> 1%',
        'last 2 versions',
        'not dead',
        'not ie 11'
        //'last 2 versions', // 所有主流浏览器最近2个版本
      ],
      grid: true
    }),
    postcsspxtoviewport8plugin({
      // 要转化的单位
      unitToConvert: 'px',
      // UI设计稿的大小
      viewportWidth: 750,
      // 转换后的精度
      unitPrecision: 6,
      // 转换后的单位
      viewportUnit: 'vw',
      // 字体转换后的单位
      fontViewportUnit: 'vw',
      // 能转换的属性，*表示所有属性，!border表示border不转
      propList: ['*'],
      // 指定不转换为视窗单位的类名，
      selectorBlackList: ['ignore-'],
      // 最小转换的值，小于等于1不转
      minPixelValue: 1,
      // 是否在媒体查询的css代码中也进行转换，默认false
      mediaQuery: false,
      // 是否转换后直接更换属性值
      replace: true,
      // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      exclude: [/node_modules/],
      // 包含那些文件或者特定文件
      include: [],
      // 是否处理横屏情况
      landscape: false
    })
  ]
}
