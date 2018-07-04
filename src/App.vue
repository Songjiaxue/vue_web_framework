<template>
  <div id="app">
    <el-container>
      <header-view></header-view>
      <el-container>
        <router-view name="aside" />
        <el-container>
          <router-view />
          <footer-view></footer-view>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headerView from '@/components/common/header';
import footerView from '@/components/common/footer';
export default {
  name: 'App',
  components: {
    headerView,
    footerView
  }
};
</script>

<style lang="less" scoped>
  @import './assets/style/variables.less';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: @base-font;
    color: @base-font-color;
  }
</style>