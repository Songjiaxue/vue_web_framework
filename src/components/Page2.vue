<template>
  <div class="page">
    page2
    <router-link to="/page2/page2Children">page2dhildren</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>