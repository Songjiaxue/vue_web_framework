<template>
  <div class="page">
    <div>
      <el-button type="primary" @click="increment">clickRoot</el-button>
      <el-button type="primary" @click="moduleAIncrement">clickModuleA</el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Page1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  methods: {
    init () {
      this.$http.get('/api/123').then(res => {
        console.log(res);
      });
    },
    ...mapMutations([
      'increment',
      'moduleAIncrement',
    ]),
  },
  mounted () {
    this.init();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>