import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
Router.prototype.goBack = function() {
  this.isBack = true
  window.history.go(-1)
}
/**
 * 
 * @param {*require.ensure} 全部采用按需加载的方式路由，便于webpack打包成多模块
 */
const dashboard = r => require.ensure([], () => r(require('@/views/dashboard/index')), 'dashboard');
const list = r => require.ensure([], () => r(require('@/views/doctor/list')), 'list');
const detail = r => require.ensure([], () => r(require('@/views/doctor/detail')), 'detail');
export default new Router({
  // 哈斯
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // 兼容
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      redirect: 'dashboard' // 重定向面板页
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      beforeEnter:(to,from,next)=>{
				console.log('to',to.path);
				console.log('from',from.path);
				next();
			},
			afterEnter:(route)=>{
				console.log(route);
      },
      children: [{
        path: '',
        component: list,
        meta: [],
      },{
        path: '/list',
        component: list,
        meta: ['添加数据', '添加商铺'],
      }]
    }
  ]
})
