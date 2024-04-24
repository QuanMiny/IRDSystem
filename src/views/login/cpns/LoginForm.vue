<template>
  <el-form ref="loginFormRef" :model="account" :rules="rules">
    <el-form-item prop="username">
      <el-input v-model="account.username" placeholder="用户名：admin/vistor">
        <template #prefix> <i class="iconfont icon-user"></i> </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="account.password" type="password" show-password placeholder="密码：123456">
        <template #prefix> <i class="iconfont icon-lock"></i> </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-actions">
    <el-checkbox v-model="isKeepPassword" class="remember"> 记住密码 </el-checkbox>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import { HOME_URL } from '@/config'
import { setWithExpires, getWithExpires, localRemove } from '@/utils/cache'
import { Login } from '@/api/interface'
import { loginApi } from '@/api/modules/login'
import { useUserStore } from '@/stores/modules/user'
import { initDynamicRouter } from '@/routers/dynamicRouter'

const router = useRouter()
const userStore = useUserStore()

const account: Login.ReqLoginForm = reactive({
  username: getWithExpires('ird-name') ?? '', // 会自动清除过期存储
  password: getWithExpires('ird-pwd') ?? ''
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

const isKeepPassword = ref(true)

const loginAction = () => {
  loginFormRef.value?.validate(async (valid) => {
    if (valid) {
      // 1.登录验证
      let res = await loginApi(account)
      // 2.登录成功后 判断是否记住密码  设置缓存 保存用户数据 跳转主页
      if (res.code == 200) {
        // 缓存
        if (isKeepPassword.value) {
          setWithExpires('ird-name', account.username)
          setWithExpires('ird-pwd', account.password)
        } else {
          localRemove('ird-name')
          localRemove('ird-pwd')
        }
        // store存储数据
        // 设置token
        userStore.setToken(res.data.access_token)
        // 动态加载路由
        await initDynamicRouter()
        // 跳转主页
        router.push(HOME_URL)
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
