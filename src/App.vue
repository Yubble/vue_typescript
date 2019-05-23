<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layout from '@/pages/layout/index.vue';
@Component({
  name: 'app',
  components: {
    Layout
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
