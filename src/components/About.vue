<template>
<div class="mt-5" id="about_us">
  <h1><p><u>ABOUT US</u></p></h1>
  <div class="row justify-content-center mt-5">
    <div class="col-4 align-self-center">
      <img v-bind:src="location" alt="..." />
    </div>
    <div class="col-4 align-self-center">
      <p class="font-monospace text-justify fw-lighter">
        Shenzhen Falcon Technology Co., Ltd. was founded in 2005. We are a
        hi-tech company engaged in the R&D, production and distribution of
        proprietary intellectual property products, such as digital products,
        entertainment products and consumer electronic products. With a focus on
        innovation, quality, one-stop services and social responsibility, we
        have become a reliable OEM/ODM partner. 
      </p>
      <p class="text-justify fw-lighter">
        Innovation is one of the reasons
        why we stand out in the competition. Thanks to our talented engineers
        and continual investment in R&D, we manage all processes in our
        5,000-square-meter facilities according to ISO9001:2008 and IS14001:2009
        certificates. Our goods bear CE, FCC and RoHS marks. 
      </p>
      <p class="text-justify fw-lighter">
        We carry out all of
        our process in-house for quality consistency and low costs. Furthermore,
        utilizing our own R&D center, our engineers develop cutting-edge
        technologies to keep clients abreast of the latest trends.
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      location: require("../assets/image/about/company-building.jpg"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
