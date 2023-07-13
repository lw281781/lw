<script setup>
const gohome = () => {
  location.href = 'http://localhost:5173/home'
}
</script>

<template>
  <h1>登录界面</h1>
  <button @click="gohome">去主页</button>
</template>

<style lang="less" scoped></style>
