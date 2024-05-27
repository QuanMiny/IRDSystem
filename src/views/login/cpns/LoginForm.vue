<template>
  <el-form ref="loginFormRef" :model="account" :rules="rules">
    <el-form-item prop="username">
      <el-input v-model="account.username" placeholder="用户名">
        <template #prefix> <i class="iconfont icon-user"></i> </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="account.password" type="password" show-password placeholder="密码">
        <template #prefix> <i class="iconfont icon-lock"></i> </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-actions">
    <el-checkbox v-model="account.rememberMe" class="remember"> 7天免登录 </el-checkbox>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import { HOME_URL } from '@/config'
import { Login } from '@/api/interface'
import { loginApi } from '@/api/modules/login'
import { useUserStore } from '@/stores/modules/user'
import { useTabsStore } from '@/stores/modules/tabs'
import { initDynamicRouter } from '@/routers/dynamicRouter'
import { ElMessage } from 'element-plus'

const router = useRouter()
const userStore = useUserStore()
const tabsStore = useTabsStore()

const account: Login.ReqLoginForm = reactive({
  username: '',
  password: '',
  rememberMe: false // 后端代码控制token过期时间 默认24h
})

const rules = {
  name: [
    { required: true, message: '请输入账号名称', trigger: 'blur' },
    { min: 2, max: 10, message: '账号名称长度为2-10个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '密码必须是6位以上的字母或数字',
      trigger: 'blur'
    }
  ]
}

const loginFormRef = ref<FormInstance>()

const loginAction = () => {
  loginFormRef.value?.validate(async (valid) => {
    if (valid) {
      // 登录验证
      let res = await loginApi(account)
      // 登录成功后 保存用户数据 跳转主页
      if (res.code == 200) {
        ElMessage({
          message: res.msg,
          type: 'success'
        })
        // 设置用户信息 包括token
        userStore.setUserInfo(res.data)
        // 动态加载路由
        await initDynamicRouter()
        // 清空 tabs
        tabsStore.setTabs([])
        // 跳转主页
        router.push(HOME_URL)
      } else {
        ElMessage({
          message: res.msg,
          type: 'error'
        })
      }
    }
  })
}

// setup 将方法暴露出去
defineExpose({
  loginAction
})
</script>

<style lang="scss" scoped>
.login-actions {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
  .el-checkbox.remember {
    height: 32px;
  }
}
</style>
