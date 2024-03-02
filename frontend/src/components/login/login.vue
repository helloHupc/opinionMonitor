<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="form.username"/>
    </el-form-item>

    <el-form-item label="密码">
      <el-input v-model="form.password" type="password" placeholder="Please input password" show-password/>
    </el-form-item>

    <el-form-item>
      <el-button type="success" @click="doLogin">登录</el-button>
      <el-button type="primary">注册</el-button>

    </el-form-item>
  </el-form>
</template>

<script setup>
import {ref} from 'vue'
import apiFun from '../../api/api.js'

// do not use same name with ref
const form = ref({
  username: '',
  password: '',
})

const doLogin = () => {
  console.log('doLogin!')

  const formData = {
    'username' : form.value.username,
    'password' : form.value.password,
  }

  console.log('Form Data:', formData);

  // 调用
  apiFun.doLogin(formData).then((res) => {
    // 无论失败与否都直接输出结果
    console.log('res', res)
  })
}
</script>

<style scoped>

</style>