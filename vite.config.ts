/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-27 13:01:36
 * @LastEditors: June
 * @LastEditTime: 2024-09-27 14:56:58
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import { resolve } from 'node:path'
import {  loadEnv, wrapperEnv } from './build/getEnv'
import {  include } from './build/optimize'
import { createVitePlugins } from './build/plugins'
import type { ConfigEnv, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, `${root}/env`)!
  const viteEnv = wrapperEnv(env)
  const envPrefix = 'APP_'

  return {
    envPrefix,
    publicDir: 'public',
    plugins: createVitePlugins(mode, viteEnv),
    optimizeDeps: { include },
    css: {
      postcss: {
        plugins: [
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
          })
        ]
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      target: 'es2015',
      outDir: resolve(__dirname, 'dist'),
      assetsDir: 'assets',
      assetsInlineLimit: 8192,
      // sourcemap: !isProd,
      emptyOutDir: true,
      rollupOptions: {
        input: resolve(__dirname, 'index.html'),
        output: {
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js'
        }
      }
    }
  }
})
