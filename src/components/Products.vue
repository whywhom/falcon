<template>
  <div>
    <h1>PRODUCTS</h1>
    <div class="container-fluid">
      <div class="row flex-row flex-nowrap">
        <div class="col-6">
          <div class="card mb-3">
            <img v-bind:src="product1" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card mb-3">
            <img v-bind:src="product2" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="col-3">
          <div class="card card-block">Card</div>
        </div> -->
        <!-- <div class="col-3">
          <div class="card card-block">Card</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String,
  },
  data() {
    return {
      product1: require("../assets/image/dash-camera-thumbnail.jpg"),
      product2: require("../assets/image/pet-tracker-thumbnail.jpg"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
