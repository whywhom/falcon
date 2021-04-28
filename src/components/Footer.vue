<template>
  <div class="bg-info">
    <div class="footer">
      <div class="row justify-content-around align-items-stretch text-light">
        <div class="col-3 text-justify">
          <div class="col">Phone: +86 755 27889564</div>
          <div class="col">Mobile phone: +86 18922872901</div>
          <div class="col">Fax: +86 755 27889564</div>
        </div>
        <div class="col-3 text-justify">
          <div class="col">Website: https://www.gocampingday.com</div>
          <div class="col">Email: sales@falcon-technology.cn</div>
          <div class="col">Email: ellen@falcon-technology.cn</div>
        </div>
        <div class="col-3 text-justify">
          <div class="col">
            Address: Room 348, Nuobo Plaza, 269 Qianjin 1st Road, Wenhui
            community, Xinan streent, Bao’an District, Shenzhen, Guangdong,China
          </div>
        </div>
      </div>
      <hr color="gray">
      <p class="text-center text-light mt-2">Copyright © Falcon 2021</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
