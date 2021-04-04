<template>
  <div class="home">
    <Carousel/>
    <Products/>
    <About/>
  </div>
</template>

<script>
import Carousel from '@/components/home/Carousel'
import Products from '@/components/home/Products'
import About from '@/components/home/About'
export default {
  name: 'hello',
  components: {Carousel, Products, About},
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
</style>
