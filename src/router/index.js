import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/home/Home'
import Contact from '@/components/Contact'
import Products from '@/components/Products'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
