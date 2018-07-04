import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        default: resolve => require(['@/components/Index'], resolve), // 路由懒加载
        // aside: resolve => require(['@/components/common/nav'], resolve)
      }
    },
    {
      path: '/page1',
      name: 'Page1',
      components: {
        default: resolve => require(['@/components/Page1'], resolve)
        // aside: resolve => require(['@/components/common/nav'], resolve)
      }
    },
    {
      path: '/page2',
      name: 'Page2',
      components: {
        default: resolve => require(['@/components/Page2'], resolve),
        // aside: resolve => require(['@/components/common/nav'], resolve)
      },
      // 在page2中嵌套子页面
      children: [
        {
          path: 'page2Children',
          name: 'Page2Children',
          components: {
            default: resolve => require(['@/components/Page2Children'], resolve)
          }
        }
      ]
    }
  ]
});