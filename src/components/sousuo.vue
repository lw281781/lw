<script setup>
import { ref } from 'vue'
const onfocus = () => {
  const myinput = document.querySelector('input')
  myinput.style.borderColor = '#3473e6'
}
const emit = defineEmits(['ss'])
const onblur = () => {
  const myinput = document.querySelector('input')
  myinput.style.borderColor = '#e5e7eb'
}
const sousuo = ref('')
const clicksousuo = () => {
  emit('ss', sousuo.value)
}
</script>

<template>
  <div class="panel page_w">
    <div class="panel_header">
      <div class="left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAAABHNCSVQICAgIfAhkiAAAAUhJREFUOE/tlL9Kw1AYxc9JCyIodLKLID5Bi6MI/kFdipgOtmP7JtY3SUd1aKR1UdEO4ijtE4jgUqeCgghJjyRaiMQ0qVJcmuly8/vOuTn3y0ckeMyGMjPpQUVE1cMpWO+OUbeL7MeVcxRQasoE3ApJ8ydOkk0jZR0XeBalEzI4OFeeGlQgVElk4k7ovZfQB2GJRv20wE6wxjcIRkAgn0Q0ihHQCUbIcsuxAe7/RTTSzIuw3HI1CfGhZugOSk23RuLwK9ujk71UzVuPux8yuO4pR8C8un8rPvWcnN+OjvvIgR58M4PLSqeWRu0vZtPd7ZXZhgB7K8uuzw6dbp7ldY51cfuCy7vXX6W2szqH3bV5T7W6ucD61CAU4zSi2M7634gm/qMNv3/ckRDFfxsVQSg26ISABH+O8VNc6wA3EtYmxNQW2Z74uP4A+kAQbn8IYmUAAAAASUVORK5CYII="
          alt=""
        />
        <p>资源大厅</p>
      </div>
      <div class="right">
        <input
          autocomplete="off"
          placeholder="请输入资源名称或用户名搜索"
          class="el-input__inner"
          type="text"
          ref="myInput"
          @focus="onfocus"
          @blur="onblur"
          v-model="sousuo"
        />
        <el-button type="primary" class="sousuo" @click="clicksousuo">
          <el-icon style="vertical-align: middle">
            <Search />
          </el-icon>
          <span style="vertical-align: middle"> 搜索 </span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  padding: 30px;
  width: 1200px;
  margin: auto;
  background: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  overflow: auto;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  .panel_header {
    display: flex;
    width: 1140px;
    height: 40px;
    justify-content: space-between;

    .left {
      img {
        vertical-align: middle;
        margin-right: 16px;
        margin-top: -8px;
      }
      p {
        display: inline-block;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        color: #303133;
      }
      p:hover {
        cursor: pointer;
      }
    }
    .right {
      input {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px 0 0 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        width: 450px;
        line-height: 40px;
        outline: 0;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      .sousuo {
        height: 40px;
        border-radius: 0 4px 4px 0;
        background-color: #3473e6;
        margin-bottom: 2px;
      }
    }
  }
}
</style>
