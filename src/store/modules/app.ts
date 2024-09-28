/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-27 14:49:13
 * @LastEditors: June
 * @LastEditTime: 2024-09-27 14:49:35
 */
import { defineStore } from 'pinia'
import store from '@/store'

interface IState {
  editor: any
}

export const useEditorStore = defineStore({
  id: 'editor',
  state: (): IState => ({
    editor: null,
   
  }),
  actions: {
   
  }
})

export function useEditorStoreWithOut() {
  return useEditorStore(store)
}