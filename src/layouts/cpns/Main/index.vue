<template>
  <Tabs />
  <el-main>
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in" appear>
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
</template>

<script setup lang="ts">
import Tabs from '@/layouts/cpns/Tabs/index.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
