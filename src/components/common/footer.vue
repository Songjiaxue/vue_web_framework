<script>
export default {
  name: 'footerView',
  data () {
    return {};
  },
  methods: {}
};
</script>
<template>
  <el-footer class="page-footer">
    FOOTER
  </el-footer>
</template>
<style lang="less" scoped>
  @import '../../assets/style/variables.less';
  .page-footer{
    width: 100%;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: @base-height;
    z-index: 99;
  }
</style>