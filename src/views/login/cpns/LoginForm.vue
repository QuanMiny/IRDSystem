<template>
  <el-form ref="loginFormRef" :model="account" :rules="rules">
    <el-form-item prop="name">
      <el-input v-model="account.name" placeholder="用户名：admin/vistor">
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
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
// import localCache from '@/utils/cache'
// import { useLoginStoreWithOut } from '@/store/login'

// const LoginStore = useLoginStoreWithOut()

const account = reactive({
  // name: localCache.getCache('name') ?? '',
  // password: localCache.getCache('password') ?? ''
  name: '',
  password: ''
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

const isKeepPassword = ref(false)

const loginAction = () => {
  loginFormRef.value?.validate((valid) => {
    if (valid) {
      // 1.判断是否记住密码
      // if (isKeepPassword.value) {
      //   localCache.setCache('name', account.name)
      //   localCache.setCache('password', account.password)
      // } else {
      //   localCache.deleteCache('name')
      //   localCache.deleteCache('password')
      // }
      // 2.登录验证
      // LoginStore.accountLoginAction({ ...account })
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
