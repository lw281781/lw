<script setup>
import SouSuo from '@/components/sousuo.vue'
import ShaiXuan from '@/components/shaixuan.vue'
import { ref } from 'vue'
let ss = ref('')
const getss = (e) => {
  ss.value = e
}
</script>

<template>
  <div class="resource_search">
    <SouSuo @ss="getss" />
    <ShaiXuan :id66="ss" />
  </div>
</template>

<style lang="scss" scoped>
.resource_search {
  width: 1200px;
  height: 1464px;
  background-color: #fff;
  padding: 30px 0;
  margin: 30px auto;
}
</style>
