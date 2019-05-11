<template>
  <el-container>
    <el-aside class="more-aside">
      侧边
    </el-aside>
    <el-container>
      <el-header class="more-header">
        头部
      </el-header>
      <el-main class="more-main">
        <div class="main-box">
          <p>这里是更多的页面</p>
        </div>
      </el-main>
      <el-footer class="more-footer">
        底部
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
export default {
  
}
</script>

<style lang="less">
  .more-aside {
    background: #ffffff;
    border-right: 5px solid #fafafa;
  }
  .more-header {
    background: #ffffff;
    border-bottom: 5px solid #fafafa;
  }
  .more-main {
    background: #ffffff;
    .main-box {
      height: 800px;
    }
    border-bottom: 5px solid #fafafa;
  }
  .more-footer {
    background: #ffffff;
  }
</style>
