<template>
  <div>
    <h1>About Us</h1>

    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="12">
        <p>Shenzhen Falcon Technology Co., Ltd.  was founded in 2005. We are a hi-tech company engaged in the R&D, production and distribution of proprietary intellectual property products, such as digital products, entertainment products and consumer electronic products. With a focus on innovation, quality, one-stop services and social responsibility, we have become a reliable OEM/ODM partner.</p>
        <p>Innovation is one of the reasons why we stand out in the competition. Thanks to our talented engineers and continual investment in R&D, we manage all processes in our 5,000-square-meter facilities according to ISO9001:2008 and IS14001:2009 certificates. Our goods bear CE, FCC and RoHS marks.</p>
        <p>We carry out all of our process in-house for quality consistency and low costs. Furthermore, utilizing our own R&D center, our engineers develop cutting-edge technologies to keep clients abreast of the latest trends.</p>
      </el-col>
      <el-col :span="12">
          <div class="demo-image__placeholder">
        <div class="block">
          <el-image v-bind:src="imageCompany">
            <div slot="placeholder" class="image-slot">
              Loading<span class="dot">...</span>
            </div>
          </el-image>
        </div>
      </div>
      </el-col>
    </el-row>
</div>
</template>

<script>
  export default {
    data () {
      return {
        slide: 0,
        sliding: null,
        imageCompany: require('@/assets/image/company-building.jpg')
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
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
