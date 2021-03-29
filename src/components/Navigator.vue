<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container"><a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="../assets/img/Falcon-Technology-Logo-148x66.jpg" alt=""></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i class="fas fa-bars ml-1"></i></button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Services</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Products</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">Team</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigator',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../static/css/styles.css";
</style>
<style scoped>
</style>
