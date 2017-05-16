// import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile/Profile.vue'
import ListDetail from './views/listDetail/ListDetail.vue'
import Main from './views/main/Main.vue'

Vue.use(Router)

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/main', component: Main },
    { path: '/listDetail', component: ListDetail },
    { path: '/profile', component: Profile },
    { path: '/profile', component: Profile },
    { path: '/', redirect: '/main' }
  ]
})
