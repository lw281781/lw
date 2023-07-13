<script setup>
import biaoge from '@/components/biaoge.vue'
import { getdata } from '@/api/list.js'
import { ref, onMounted, watch } from 'vue'
//页数
let a = ref([])
let list = ref([])
let id11 = ref('')
let id22 = ref('')
let id33 = ref('')
let id44 = ref('')
let id55 = ref('')
let totol1 = ref(2389)
let props = defineProps({
  id66: {
    default: '',
  },
})
watch(
  () => props.id66,
  (newval, oldval) => {
    b(1, id11.value, id22.value, id33.value, id44.value, id55.value, newval)
  }
)
const b = async (
  val = 1,
  id1 = '',
  id2 = '',
  id3 = '',
  id4 = '',
  id5 = '',
  id6 = ''
) => {
  a.value = await getdata(val, id1, id2, id3, id4, id5, id6)
  list.value = a.value.data.data.list
  totol1.value = a.value.data.data.total
  console.log(a.value.data.data.total)
}
const handleCurrentChange = (page) => {
  console.log(props.id66)
  b(
    page,
    id11.value,
    id22.value,
    id33.value,
    id44.value,
    id55.value,
    props.id66
  )
}
onMounted(() => {
  b()
})
const chuanzhi = async (val) => {
  id11.value = val[0]
  id22.value = val[1]
  id33.value = val[2]
  id44.value = val[3]
  id55.value = val[4]
  // console.log(val)
  b(1, id11.value, id22.value, id33.value, id44.value, id55.value)
}
</script>

<template>
  <div class="big">
    <div class="tabclear">
      <el-tabs class="demo-tabs" lazy="true" model-value="first">
        <el-tab-pane label="服务" name="first"
          ><biaoge @add1="chuanzhi"></biaoge
        ></el-tab-pane>
        <el-tab-pane label="需求" name="second"><biaoge></biaoge></el-tab-pane>
        <el-tab-pane label="科创资源" name="third"
          ><biaoge></biaoge
        ></el-tab-pane>
      </el-tabs>
    </div>
    <div class="biaoqian">
      <p>服务名称</p>
      <p>发布用户</p>
      <p>服务类型</p>
      <p>成功成交数</p>
      <p>信用评价</p>
    </div>
    <div class="shuju">
      <el-table
        :data="list"
        style="width: 100%"
        :key="a.formId"
        :show-header="false"
        :row-style="{ height: '80px' }"
        border
        v-loading
      >
        <el-table-column
          prop="title"
          label="服务名称"
          width="305px"
          height="80px"
          row-style="height: 80px"
        />
        <el-table-column
          prop="orgName"
          label="发布用户"
          width="280px"
          height="80px"
        />
        <el-table-column
          prop="serviceTypeName"
          label="服务类型"
          width="230px"
          height="80px"
        />
        <el-table-column
          prop="totalDeal"
          label="成功成交数"
          width="190px"
          height="80px"
        />
        <el-table-column
          prop="avgScore"
          label="信用评价"
          width="135px"
          height="80px"
        />
      </el-table>
    </div>
    <div class="fenye">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totol1"
        :page-size="10"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="scss">
.big {
  width: 1200px;
  height: 48px;
  margin: auto;
  background-color: #fff;
  .shuju {
    margin: 0 30px;
    .el-table__row {
      border: 1px solid #dcdfe6;
      border-radius: 4px;
    }
  }
  .fenye {
    margin-top: 10px;
    display: flex;
    width: 1200px;
    justify-content: space-around;
  }
  .tabclear {
    height: 400px;
    overflow: hidden;
  }
  .biaoqian {
    width: 1140px;
    height: 48px;
    padding: 0 20px;
    background-color: #f5f5f5;
    margin: 0 auto 15px;
    display: flex;
    align-content: center;
    border-radius: 4px;
    justify-content: space-between;
    p {
      line-height: 48px;
      font-weight: 700;
      font-size: 14px;
      color: #909399;
    }
    p:nth-child(1) {
      padding-right: 50px;
      padding-left: 10px;
    }
    p:nth-child(5) {
      margin-left: -130px;
      padding-right: 70px;
    }
    p:nth-child(4) {
      margin-left: -60px;
      padding-right: 50px;
    }
  }
  .demo-tabs {
    border-radius: 4px;
    width: 1140px;
    height: 48px;
    margin: auto;
    background-color: #f6f7f8;
    .el-tabs__nav-wrap::after {
      width: 0 !important;
    }
    .demo-tabs::before {
      content: '';
      display: block;
      clear: both;
    }
    #tab-first {
      margin-top: 5px;
      margin-left: 30px;
      margin-right: 120px;
      font-size: 14px;
      font-weight: 700;
    }
    #tab-second {
      margin-right: 120px;
      font-size: 14px;
      font-weight: 700;
      margin-top: 5px;
    }
    #tab-third {
      margin-right: 120px;
      font-size: 14px;
      font-weight: 700;
      margin-top: 5px;
    }
  }
  .el-tabs__content {
    background-color: #fff;
  }
}
</style>
