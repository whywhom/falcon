<template>
  <div class="container-fluid" id="app">
    <Header msg="Welcome to Falcon"/>
    <Carousel msg="Carousel"/>
    <Gaps msg="Gaps"/>
    <Products msg="Products"/>
    <Gaps msg="Gaps"/>
    <About msg="About us"/>
    <Gaps msg="Gaps"/>
    <Footer msg="Footer"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Carousel from './components/Carousel.vue'
import Products from './components/Products.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
import Gaps from './components/Gaps.vue'
export default {
  name: 'App',
  components: {
    Header,
    Carousel,
    Products,
    About,
    Footer,
    Gaps
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
