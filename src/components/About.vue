<template>
  <!-- About-->
  <section class="page-section" id="about">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">About</h2>
        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <ul class="timeline">
        <li>
          <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/about/1.jpg" alt=""></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>2005</h4>
              <h4 class="subheading">Our Company Beginnings</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">Shenzhen Falcon Technology Co., Ltd. was founded in 2005. We are a hi-tech company engaged in the R&D, production and distribution of proprietary intellectual property products, such as digital products, entertainment products and consumer electronic products.</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/about/2.jpg" alt=""></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>March 2011</h4>
              <h4 class="subheading">Become a reliable OEM/ODM partner</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">With a focus on innovation, quality, one-stop services and social responsibility, we have become a reliable OEM/ODM partner.</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/about/3.jpg" alt=""></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>December 2015</h4>
              <h4 class="subheading">Our goods bear CE, FCC and RoHS marks</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">Innovation is one of the reasons why we stand out in the competition. Thanks to our talented engineers and continual investment in R&D, we manage all processes in our 5,000-square-meter facilities according to ISO9001:2008 and IS14001:2009 certificates. Our goods bear CE, FCC and RoHS marks.</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/about/4.jpg" alt=""></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>July 2018</h4>
              <h4 class="subheading">Develop cutting-edge technologies</h4>
            </div>
            <div class="timeline-body">
              <p class="text-muted">We carry out all of our process in-house for quality consistency and low costs. Furthermore, utilizing our own R&D center, our engineers develop cutting-edge technologies to keep clients abreast of the latest trends.</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image">
            <h4>Be Part<br>Of Our<br>Story!</h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
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
