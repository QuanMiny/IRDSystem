<template>
  <div class="layout">
    <el-container class="layout-container">
      <el-aside class="layout-aside">菜单 </el-aside>
      <el-container class="layout-container-main">
        <el-header class="layout-header"> 头部</el-header>
        <el-main class="layout-content">
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
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './index.scss';
</style>
