/*
 * @Author: June
 * @Description:
 * @Date: 2024-09-27 13:01:36
 * @LastEditors: June 1601745371@qq.com
 * @LastEditTime: 2024-09-28 17:08:09
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { loadEnv } from './build/getEnv'
import { include } from './build/optimize'
import { createVitePlugins, createPostcssPlugin } from './build/plugins'
import type { ConfigEnv, UserConfig } from 'vite'

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, `${root}/env`)!
  const envPrefix = 'APP_'
  return {
    envPrefix,
    publicDir: 'public',
    plugins: createVitePlugins(mode, env),
    optimizeDeps: { include },
    server: {
      port: 3000,
      host: '0.0.0.0'
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      },
      postcss: {
        plugins: createPostcssPlugin()
      }
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
