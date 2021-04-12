<template>
  <div class="home">
    <Header/>
    <Carousel class="carousel"/>
    <Products/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'
import Carousel from '@/components/home/Carousel'
import Products from '@/components/home/Products'
import About from '@/components/home/About'
export default {
  name: 'hello',
  components: {Header, Footer, Carousel, Products, About},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.carousel {
  min-height: 480px;
  height: 100%;
  width: 100%;
}
</style>
