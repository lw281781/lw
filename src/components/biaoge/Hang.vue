<script setup>
import { ref, onMounted } from 'vue'
import { getdata } from '@/api/list.js'
const a = ref(true)
const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
})
const gengduo = ref(null)
const condition = ref(null)
const b = (e) => {
  a.value = !a.value
  if (gengduo.value.innerHTML === '更多') {
    gengduo.value.innerHTML = '收起'
    condition.value.style.height = 'auto'
    condition.value.style.overflow = 'visible'
  } else {
    gengduo.value.innerHTML = '更多'
    condition.value.style.height = '40px'
    condition.value.style.overflow = 'hidden'
  }
}
</script>

<template>
  <div class="condition">
    <span><slot name="leibie"></slot> </span>
    <div class="condition_list" ref="condition" @click="click1">
      <p :key="-1" class="listcolor" :index="-1">不限</p>
      <p
        v-for="(item, indexs) in items"
        :key="item.id"
        :myid="item.id"
        :index="indexs"
      >
        {{ item.name }}
      </p>
    </div>
    <div class="condition_switch">
      <a href="" @click.prevent="b"
        ><p id="gengduo" ref="gengduo">更多</p>
        <i
          ><el-icon style="vertical-align: middle" v-if="a">
            <ArrowDown /> </el-icon></i
        ><i>
          <el-icon style="vertical-align: middle" v-if="!a">
            <ArrowUp /> </el-icon></i
      ></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.condition {
  display: flex;
  width: 1098px;
  height: 40px;
  margin-bottom: 10px;
  height: auto;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px dashed rgb(229, 231, 235);
  span {
    line-height: 40px;
    color: #909399;
  }
  .condition_list {
    width: 856px;
    height: 40px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 5px 0;
    p {
      height: 30px;
      display: inline-block;
      padding: 5px 10px;
      margin: 5px 10px 0 0;
    }
    p:hover {
      cursor: pointer;
    }
  }
  .condition_switch {
    display: flex;
    svg {
      font-size: 14px;
    }
    a {
      display: flex;
      color: rgb(59 130 246 / 0.7);
      line-height: 40px;
    }
  }
}
.listcolor {
  background-color: #3473e6;
  border-radius: 2px;
  color: #fff;
}
p:not(#gengduo):hover {
  background-color: #3473e6;
  border-radius: 2px;
  color: #fff;
}
</style>
