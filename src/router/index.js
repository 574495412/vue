import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
Router.prototype.goBack = function() {
  this.isBack = true
  window.history.go(-1)
}
const index = r => require.ensure([], () => r(require('@/views/index/index')), 'index')
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
      // 重定向首页
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      beforeEnter:(to,from,next)=>{
				console.log('to',to.path);
				console.log('from',from.path);
				next();
			},
			afterEnter:(route)=>{
				console.log(route);
			}
    },
    {
      // 医生列表
      path: '/doctor/list',
      component(resolve) {
        require(['../views/doctor/list.vue'], resolve);
      }
    },
    {
      // 医生详情
      path: '/doctor/detail/:doctorId',
      component(resolve) {
        require(['../views/doctor/detail.vue'], resolve);
      }
    },
  ]
})
