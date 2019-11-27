import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListContact from '@/components/ListContact'
import Store from '@/components/Store'
import Contact from '@/components/Contact'
import ListFavorite from '@/components/ListFavorite'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contact',
      name: 'ListContact',
      component: ListContact
    },
    {
      path: '/favorite',
      name: 'ListFavorite',
      component: ListFavorite
    },
    {
      path: '/contact/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/contact/store/:id',
      name: 'Store',
      component: Store
    },
    {
      path: '/contact/:id',
      name: 'Contact',
      component: Contact
    }
  ]
})
