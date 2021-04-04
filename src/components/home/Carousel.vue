<template>

  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in items" :key="item">
       <div class="item">
        <img class="item_image" width="100%" v-bind:src="item" alt=""/>
      </div>
    </el-carousel-item>
  </el-carousel>
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>