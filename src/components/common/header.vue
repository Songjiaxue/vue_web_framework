<script>
export default {
  name: 'headerView',
  data () {
    return {};
  },
  methods: {}
};
</script>
<template>
  <el-header class="page-header">
    HEADER
  </el-header>
</template>
<style lang="less" scoped>
  @import '../../assets/style/variables.less';
  @import '../../assets/style/minxin.less';
  .page-header{
    background-color: @base-theme-color;
    width: 100%;
    line-height: @base-height;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }
</style>