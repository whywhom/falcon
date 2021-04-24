<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1500"
      img-height="575"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1500"
            height="575"
            v-bind:src="slide01"
            alt="image slot"
          >
        </template>
      ></b-carousel-slide>
      <!-- Slides with image only -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1500"
            height="575"
            v-bind:src="slide02"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1500"
            height="575"
            v-bind:src="slide03"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    msg: String
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      slide01: require("../assets/image/01.jpg"),
      slide02: require("../assets/image/02.jpg"),
      slide03: require("../assets/image/03.jpg"),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
