// import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

// Story view factory
function createStoriesView (type) {
  return {
    name: `${type}-stories-view`,
    render (createElement) {
      return createElement(StoriesView, { props: { type }})
    }
  }
}

export default new Router({
  // mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/', redirect: '/login' }
  ]
})
