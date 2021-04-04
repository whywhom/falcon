<template>
  <div>
    <h1>Products</h1>
  <el-row>
  <el-col :span="8" v-for="index in products" :key="index" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img v-bind:src="index.pic" class="image">
      <div style="padding: 14px;">
        <span>{{index.name}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">Operating</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</div>
</template>

<script>
  export default {
    data () {
      return {
        currentDate: new Date(),
        products: [
          {
            name: 'Pet Tracker',
            pic: require('@/assets/image/pet-tracker-thumbnail.jpg')
          },
          {
            name: 'Dash Camera',
            pic: require('@/assets/image/dash-camera-thumbnail.jpg')
          }
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
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
