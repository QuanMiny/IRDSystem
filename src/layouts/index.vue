<template>
  <el-container class="layout">
    <el-aside class="aside-container">
      <div class="aside" :style="{ width: isCollapse ? '65px' : '210px' }">
        <div class="logo">
          <img class="logo-img" src="@/assets/images/logo.png" alt="logo" />
          <span v-show="!isCollapse" class="logo-text">IDRSystem</span>
        </div>
        <el-scrollbar>
          <el-menu
            :router="false"
            :default-active="activeMenu"
            :collapse="isCollapse"
            :unique-opened="true"
            :collapse-transition="false"
          >
            <SubMenu :menu-list="menuList" />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>

    <el-container>
      <el-header> <el-button @click="isCollapse = !isCollapse">菜单</el-button></el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in" appear>
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/modules/auth'
import SubMenu from './cpns/Menu/SubMenu.vue'

const route = useRoute()
const authStore = useAuthStore()
const menuList = computed(() => authStore.showMenuListGet)

const isCollapse = ref(false)

// const activeMenu = computed(
//   () => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string
// )
const activeMenu = computed(() => route.path)
</script>

<style lang="scss">
@import './index.scss';
</style>
