import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Contact from '@/components/Contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    }, {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
