<template>
  <div class="def-aside">
    <div class="def-aside-logo">
      这里是logo
    </div>

    <el-row class="">
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DefAside extends Vue{}
</script>

<style lang="less" scoped>
  .def-aside {
    &-logo {
      height: 64px;
      width: 240px;
      font-size: 28px;
      line-height: 64px;
      background: #409EFF;
      color: #ffffff;
    }
  }
</style>