<template>
  <!-- Contact-->
  <section class="page-section" id="contact">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Contact Us</h2>
        <p class="section-heading">Address: Room 348, Nuobo Plaza, 269 Qianjin 1st Road,Wenhui community, Xinan streent, Bao’an District, Shenzhen, Guangdong,China</p>
        <p class="section-heading">Phone: +86 755 27889564</p>
        <p class="section-heading">Fax: +86 755 27889564</p>
        <p class="section-heading">Email: sales@falcon-technology.cn</p>
        <p class="section-heading">Email: ellen@falcon-technology.cn</p>
        <p class="section-heading">Mobile phone: +86 18922872901</p>
      </div>
      <form id="contactForm" name="sentMessage" novalidate="novalidate">
        <div class="row align-items-stretch mb-5">
          <div class="col-md-6">
            <div class="form-group">
              <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group mb-md-0">
              <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group form-group-textarea mb-md-0">
              <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div id="success"></div>
          <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// @import "../scss/styles.scss";
</style>
<style scoped>
@import "../../static/css/styles.css";
</style>
