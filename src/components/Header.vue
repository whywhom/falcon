<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top"><img v-bind:src="logo" alt="" /></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#product_page">Products</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about_us">About us</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="masthead">
      <div class="container">
          <div class="masthead-heading text-uppercase">Welcome To Falcon!</div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      logo: require("../assets/logo.png"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
@import "../css/styles.css";
</style>
