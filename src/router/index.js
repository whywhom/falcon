import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/about/About'
import Home from '@/components/home/Home'
import Contact from '@/components/contact/Contact'
import Products from '@/components/products/Products'
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
