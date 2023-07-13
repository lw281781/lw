<script setup>
import Hang from '@/components/biaoge/Hang.vue'
import { list, list1 } from '@/api/list.js'
import { ref, onMounted } from 'vue'
let a = ref([])
let b = ref([])
let e = defineProps({
  b1: {
    type: Function,
  },
})
let xr = ref(false)
const emit = defineEmits(['add1'])
let c = ref([
  { id: 'nttcc', name: '共创云' },
  { id: '51kehui', name: '科惠网' },
  { id: 'jxstc', name: '江西省网上常设技术市' },
  { id: 'hntpe', name: '潇湘科技要素大市场' },
])
let d = ref([
  { id: '湖北省', name: '湖北省' },
  { id: '湖南省', name: '湖南省' },
  { id: '江西省', name: '江西省' },
  { id: '北京市', name: '北京市' },
  { id: '天津市', name: '天津市' },
  { id: '河北省', name: '河北省' },
  { id: '山西省', name: '山西省' },
  { id: '内蒙古自治区', name: '内蒙古自治区' },
  { id: '辽宁省', name: '辽宁省' },
  { id: '吉林省', name: '吉林省' },
  { id: '黑龙江省', name: '黑龙江省' },
  { id: '上海市', name: '上海市' },
  { id: '江苏省', name: '江苏省' },
  { id: '安徽省', name: '安徽省' },
  { id: '福建省', name: '福建省' },
  { id: '山东省', name: '山东省' },
  { id: '河南省', name: '河南省' },
  { id: '广东省', name: '广东省' },
  { id: '广西壮族自治区', name: '广西壮族自治区' },
  { id: '海南省', name: '海南省' },
  { id: '重庆市', name: '重庆市' },
  { id: '四川省', name: '四川省' },
  { id: '贵州省', name: '贵州省' },
  { id: '云南省', name: '云南省' },
  { id: '西藏自治区', name: '西藏自治区' },
  { id: '陕西省', name: '陕西省' },
  { id: '甘肃省', name: '甘肃省' },
  { id: '青海省', name: '青海省' },
  { id: '宁夏回族自治区', name: '宁夏回族自治区' },
  { id: '新疆维吾尔族自治区', name: '新疆维吾尔族自治区' },
  { id: '台湾省', name: '台湾省' },
  { id: '香港特别行政区', name: '香港特别行政区' },
  { id: '澳门特别行政区', name: '澳门特别行政区' },
])
let f = ref([0])
let hang1 = ref('')
let hang2 = ref('')
let hang3 = ref('')
let hang4 = ref('')
let hang5 = ref('')
onMounted(async () => {
  a.value = (await list()).data.data
  b.value = (await list1()).data.data.list
})
async function click1(e) {
  //  e.target.getAttribute('index') !== '-1'
  if (e.target.tagName === 'P') {
    if (e.target.id === 'gengduo') return
    try {
      e.target.parentNode.childNodes.forEach((element) => {
        if (element.tagName === 'P') {
          element.classList.remove('listcolor')
        }
      })
    } catch (error) {
      console.log(e.target.parentNode.childNodes)
    }
    e.target.classList.add('listcolor')
    // console.log(e.target)
    switch (e.target.parentNode.parentNode.getAttribute('name')) {
      case 'hh1':
        let h2 = document.getElementById('hh2')
        if (e.target.getAttribute('index') !== '-1') {
          hang1.value = e.target.getAttribute('myid')
          f.value = a.value[e.target.getAttribute('index')].children
          xr.value = true
          emit('add1', [hang1.value, '', hang3.value, hang4.value, hang5.value])
        } else {
          xr.value = false
          emit('add1', ['', hang2.value, hang3.value, hang4.value, hang5.value])
        }
        break
      case 'hh2':
        if (e.target.getAttribute('index') !== '-1') {
          hang2.value = e.target.getAttribute('myid')
          emit('add1', [
            hang1.value,
            hang2.value,
            hang3.value,
            hang4.value,
            hang5.value,
          ])
        } else {
          emit('add1', [hang1.value, '', hang3.value, hang4.value, hang5.value])
        }
        break
      case 'hh3':
        if (e.target.getAttribute('index') !== '-1') {
          hang3.value = e.target.getAttribute('myid')
          emit('add1', [
            hang1.value,
            hang2.value,
            hang3.value,
            hang4.value,
            hang5.value,
          ])
        } else {
          emit('add1', [hang1.value, hang2.value, '', hang4.value, hang5.value])
        }
        break
      case 'hh4':
        if (e.target.getAttribute('index') !== '-1') {
          hang4.value = e.target.getAttribute('myid')
          emit('add1', [
            hang1.value,
            hang2.value,
            hang3.value,
            hang4.value,
            hang5.value,
          ])
        } else {
          emit('add1', [hang1.value, hang2.value, hang3.value, '', hang5.value])
        }
        break
      case 'hh5':
        if (e.target.getAttribute('index') !== '-1') {
          hang5.value = e.target.getAttribute('myid')
          emit('add1', [
            hang1.value,
            hang2.value,
            hang3.value,
            hang4.value,
            hang5.value,
          ])
        } else {
          emit('add1', [hang1.value, hang2.value, hang3.value, hang4.value, ''])
        }
        break
    }
    // console.log(e.target.getAttribute('index'))
    // f.value = a.value[e.target.getAttribute('index')].children
    // console.log(e.target.parentNode.parentNode.getAttribute('name'))
  }
}
</script>

<template>
  <div class="biaogediv" @click="click1">
    <Hang :items="a" :key="1" name="hh1"
      ><template v-slot:leibie>服务类型：</template></Hang
    >
    <Hang :items="f" :key="1.1" name="hh2" id="hh2" v-show="xr"
      ><template v-slot:leibie>二级分类：</template></Hang
    >
    <Hang :items="b" :key="2" name="hh3"
      ><template v-slot:leibie>技术领域：</template></Hang
    >
    <Hang :items="c" :key="3" name="hh4"
      ><template v-slot:leibie>数据来源：</template></Hang
    >
    <Hang :items="d" :key="4" name="hh5"
      ><template v-slot:leibie>地区：&emsp;&emsp;</template></Hang
    >
  </div>
</template>

<style lang="scss" scoped>
.biaogediv {
  padding: 0 20px;
  width: 1140px;
  height: auto;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.biaogediv::before {
  content: '';
  display: block;
  clear: both;
}
.clearfix {
  *zoom: 1; /*IE6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
</style>
