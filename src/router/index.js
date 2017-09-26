import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: App },
    { path: '/:view', component: App },
    { name: 'view_with_id', path: '/:view/:id', component: App }
  ]
})
