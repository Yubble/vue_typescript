<template>
  <div class="payBoss-tags">
    <el-tag
      v-for="tag in tags"
      :key = "tag.name"
      closabe
      :type = "tag.type"
    >
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Tags extends Vue{
  private tags:any[] = [
    {name: '标签一', type: ''},
    {name: '标签二', type: 'success'},
    {name: '标签三', type: 'info'}
  ]
}
</script>

<style lang="less">

</style>
