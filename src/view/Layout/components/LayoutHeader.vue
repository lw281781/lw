<script setup></script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <li>
          <img
            src="https://test.nttcc.com.cn/_nuxt/img/logo_1.e54ae31.png"
            alt=""
          />
          <h1>共创云</h1>
        </li>
        <li>
          <a href="javascript:;">服务产品</a>
        </li>
        <li>
          <a href="javascript:;">科创需求</a>
        </li>
        <li>
          <a href="javascript:;">专利论文</a>
        </li>
        <li>
          <a href="javascript:;">交易大数据</a>
        </li>
      </ul>
      <div>
        <el-button type="primary">登录</el-button>
        <el-button type="primary">注册</el-button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.app-topnav {
  background: #fff;
  height: 50px;
  .container {
    width: 1200px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    img {
      margin-top: -7px;
      width: 30px;
      height: 30px;
      margin-right: 10px;
      display: inline-block;
      background-color: #fff;
      // vertical-align: middle;
    }
    h1 {
      display: inline-block;
      color: $xtxColor;
      font-size: 16px;
      margin-top: 9px;
      margin-right: 20px;
    }
    div {
      button:nth-child(1) {
        background-color: #3473e6;
        margin-top: 9px;
      }
      button:nth-child(2) {
        background-color: #ffffff;
        color: #3473e6;
        margin-top: 9px;
      }
    }
    ul {
      display: flex;
      height: 50px;
      justify-content: flex-end;
      align-items: center;
      li {
        a {
          padding: 0 15px;
          line-height: 1;
          display: inline-block;

          i {
            font-size: 14px;
            margin-right: 2px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }
}
</style>
