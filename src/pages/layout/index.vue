<template>
  <div class="payBoss-wrap">
    <header class="payBoss-header">
      <DefTop/>
    </header>
    <main class="payBoss-main">
      <aside class="payBoss-aside">
        <DefAside/>
      </aside>
      <section class="payBoss-contain">
        <!-- 此处加上标签 -->
        <el-scrollbar style="height: 100%" class="payBoss-contain-content">
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-scrollbar>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DefTop from './components/DefTop.vue'
import DefAside from './components/sideBar/DefAside.vue'

@Component({
  components: {
    DefTop,
    DefAside
  },
})
export default class Layout extends Vue {}
</script>

<style lang="less" scoped>
  // 整体外部框
  .payBoss-wrap {
    height: 100%;
    width: 100%;
    // 系统头部
    .payBoss-header {
      text-align: left;
      padding-left: 240px;
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.15);
      font-size: 28px;
      height: 64px;
      line-height: 64px;
      background: #409EFF;
      color: #ffffff;
    }

    // 系统主体
    .payBoss-main {
      // 系统左边导航
      .payBoss-aside {
        position: fixed;
        left: 0;
        top: 0;
        width: 240px;
        height: 100%;
        z-index: 1025;
        box-shadow: 2px 0 6px rgba(0, 21, 41, 0.15);
      }
      // 系统内容部分
      .payBoss-contain {
        position: absolute;
        left: 240px;
        padding: 0;
        padding-bottom: 20px;
        width: calc(100% - 240px);
        height: calc(100% - 70px);
        box-sizing: border-box;
        overflow: hidden;
        background: #f6f6f6;

        .payBoss-contain-content {
          padding: 8px 10px;
        }
      }
    }
  }

</style>
