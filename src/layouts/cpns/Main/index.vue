<template>
  <Tabs />
  <el-main>
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in" appear>
        <keep-alive :include="keepAliveNames">
          <component
            :is="createComponentWrapper(Component, route)"
            :key="route.fullPath"
          ></component>
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
</template>

<script setup lang="ts">
import { VNode, computed, h } from 'vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import Tabs from '@/layouts/cpns/Tabs/index.vue'
import { useKeepAliveStore } from '@/stores/modules/keepAlive'

const keepAliveStore = useKeepAliveStore()
const keepAliveNames = computed(() => keepAliveStore.keepAliveNames)

// keepAlive缓存 将组件路径fullPath作为key 设置为Component 识别名称
const wrapperMap = new Map()
function createComponentWrapper(component: VNode, route: RouteLocationNormalizedLoaded) {
  if (!component) return
  const wrapperName = route.fullPath
  let wrapper = wrapperMap.get(wrapperName)
  if (!wrapper) {
    wrapper = {
      name: route.fullPath,
      render: () => h(component)
    }
    wrapperMap.set(wrapperName, wrapper)
  }
  return h(wrapper)
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
