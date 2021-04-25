<template>
  <div class="container-fluid" id="app">
    <Header msg="Welcome to Falcon"/>
    <Carousel msg="Carousel"/>
    <Products msg="Products"/>
    <About msg="About us"/>
    <Footer msg="Footer"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Carousel from './components/Carousel.vue'
import Products from './components/Products.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Carousel,
    Products,
    About,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, font-monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
