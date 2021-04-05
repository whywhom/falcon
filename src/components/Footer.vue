<template>
  <!-- Footer -->
  <div class="row-bg">
    <el-row type="flex"  justify="space-around">
      <el-col :span="5">
        <h3>About us</h3>
        <li>Company Profile</li>
        <li>Company Culture</li>
        <li>Development Path</li>
        <li>Honor</li>
      </el-col>
      <el-col :span="5">
        <h3>Products</h3>
        <li>Monitor</li>
        <li>Camera</li>
      </el-col>
      <el-col :span="5">
        <h3>Contact us</h3>
        <li>Contact Information</li>
        <li>Online Message</li>
        <li>Recruitment</li>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>

    <p>© 2021 Falcon Website. All rights reserved</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  components: {},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    background-color: #0d7687;
    color: #ffffff;
  }
</style>
