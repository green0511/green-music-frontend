import App from './App.vue'
import router from './router'

export default new Vue(Vue.util.extend({ el: '#root', router }, App))

router.push('/')