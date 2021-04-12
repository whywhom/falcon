<template>
  <div>
    <el-row type="flex" class="header-row-bg" justify="space-between">
      <el-col>
        <div class="block" align=left key="fit">
          <el-image
            style="width: 100px"
            :src="url"
            :fit="fit"></el-image>
        </div>
      </el-col>
      <el-col :span="8">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/About">Products</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/About">About us</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/Contact">Contact us</router-link></el-menu-item>
          </el-menu>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        fit: 'scale-down',
        url: require('../../../static/image/favicon.png')
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
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
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .header-row-bg {
    padding: 10px 0;
    background-color: #ffffff;
  }
</style>