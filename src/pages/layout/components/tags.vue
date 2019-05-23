<template>
  <div class="payBoss-tags">
    <el-tabs
      v-model="activePage"
      type="card"
      class="tags-tab"
      editable
      @edit="handleTabsEdit"
    >
      <el-tab-pane
        v-for="(item, index) in tabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        class="tags-tab-pane"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';

const tagsModule = namespace('Tags')

@Component
export default class Tags extends Vue{
  // 引入Tags模块中的方法
  @tagsModule.Getter('getTags')
  getTags!: Array<any>

  private activePage:number = 0
  private tabs:any[] = []

  private handleTabsEdit() {
    console.log('触发了操作')
  }
}
</script>

<style lang="less">
  .payBoss-tags {
    margin: 0 20px;
  }

  .tags-tab {
    .el-tabs__item {
      background: #ffffff;
    }
  }
</style>
