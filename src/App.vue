<template>
  <Header />
  <Navigator msg="Welcome to Your Vue.js App"/>
  <services msg="Welcome to Your Vue.js App"/>
  <Portfolio msg="Welcome to Your Vue.js App"/>
  <About msg="Welcome to Your Vue.js App"/>
  <Team msg="Welcome to Your Vue.js App"/>
  <Clients msg="Welcome to Your Vue.js App"/>
  <Contact msg="Welcome to Your Vue.js App"/>
  <Footer msg="Welcome to Your Vue.js App"/>
  
</template>

<script>
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import About from './components/About.vue'
import Team from './components/Team.vue'
import Clients from './components/Clients.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navigator,
    Header,
    Services,
    Portfolio,
    About,
    Team,
    Clients,
    Contact,
    Footer
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
}
</style>
