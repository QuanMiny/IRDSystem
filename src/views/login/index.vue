<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <img class="login-left-img" src="@/assets/images/login-left.svg" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.png" alt="" />
          <h2 class="logo-text">IRDSystem</h2>
        </div>
        <transition name="ming" mode="out-in">
          <div v-if="isLogin">
            <LoginForm ref="loginRef"></LoginForm>
          </div>
          <div v-else>
            <RegisterForm ref="registerRef"></RegisterForm>
          </div>
        </transition>
        <div class="login-btns">
          <el-button type="primary" size="large" class="login-btn" @click="handleSubmitClick">
            立即{{ isLogin ? '登录' : '注册' }}
          </el-button>
          <el-button class="login-btn" size="large" @click="isLogin = !isLogin">
            {{ isLogin ? '注册账号' : '登录账号' }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from './cpns/LoginForm.vue'
import RegisterForm from './cpns/RegisterForm.vue'

const isLogin = ref(true)

const loginRef = ref<InstanceType<typeof LoginForm>>()
const registerRef = ref<InstanceType<typeof RegisterForm>>()

const handleSubmitClick = () => {
  if (isLogin.value) {
    loginRef.value?.loginAction()
  } else {
    registerRef.value?.registerAction()
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
