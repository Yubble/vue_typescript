<template>
  <div class="def-aside">
    <div class="def-aside-logo">
      这里是logo
    </div>

    <el-menu
      class="el-menu-vertical-demo"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">
          <router-link to="/home">首页</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">
          <router-link to="/about">关于</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">
          <router-link to="/more">导航二</router-link>
        </span>
      </el-menu-item>
    </el-menu>
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