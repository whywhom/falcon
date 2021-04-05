<template>
  <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-carousel-slide>
      <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            v-bind:src="items[0]"
            alt="image"
          >
        </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            v-bind:src="items[1]"
            alt="image"
          >
        </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            v-bind:src="items[2]"
            alt="image"
          >
        </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            v-bind:src="items[3]"
            alt="image"
          >
        </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
  export default {
    data () {
      return {
        slide: 0,
        sliding: null,
        items: [
          'https://picsum.photos/1024/480/?image=52',
          'https://picsum.photos/1024/480/?image=54',
          'https://picsum.photos/1024/480/?image=58',
          'https://picsum.photos/1024/480/?image=55'
        ]
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
</style>