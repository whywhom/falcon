<template>
  <!-- Masthead-->
  <header class="masthead">
    <div class="container">
      <div class="masthead-heading text-uppercase">Welcome To Falcon!</div>
      <div class="masthead-subheading">It's Nice To Meet You</div><a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">More >></a>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// @import "../scss/styles.scss";
</style>
<style scoped>
@import "../../static/css/styles.css";
</style>
