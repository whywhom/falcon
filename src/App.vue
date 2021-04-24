<template>
  <div id="app">
    <Header msg="Welcome to Falcon"/>
    <Carousel msg="Carousel"/>
    <Products msg="Products"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <About msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Carousel from './components/Carousel.vue'
import Products from './components/Products.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Header,
    Carousel,
    Products,
    About
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
