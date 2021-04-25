<template>
  <div class="mt-5" id="product_page">
    <h1>
      <p><u>PRODUCTS</u></p>
    </h1>
    <b-card-group deck>
      <!-- product-1 -->
      <b-card>
        <b-card-img v-bind:src="product1" alt="Image1" top></b-card-img>
        <b-card-title>Camping lantern</b-card-title>
        <b-card-text>
          <p class="text-justify">
            High quality plastic shell, glass top, stainless steel hand shanks,
            shockproof and durable. Put the lamp in the sun, it will be charged,
            3 hours lighting once fully charged.
          </p>
        </b-card-text>
        <template #footer>
          <b-button variant="primary" v-b-modal.modelProduct1
            >More details</b-button
          >
        </template>
      </b-card>
      <!-- product-2 -->
      <b-card>
        <b-card-img v-bind:src="product2" alt="Image2" top></b-card-img>
        <b-card-title>Sleeping bag</b-card-title>
        <b-card-text>
          <p class="text-justify">
            Our bag is more comfortable than the competition due to more padding
            and cushioning inside to make sure you are well rested and fully
            re-energized.
          </p>
        </b-card-text>
        <template #footer>
          <b-button variant="primary" v-b-modal.modelProduct2
            >More details</b-button
          >
        </template>
      </b-card>
      <!-- product-3 -->
      <b-card>
        <b-card-img v-bind:src="product3" alt="Image3" top></b-card-img>
        <b-card-title>2 Person tent</b-card-title>
        <b-card-text>
          <p class="text-justify">
            This lightweight two-person dome tent with a large D-style door has
            enough space for you and a friend.
          </p>
        </b-card-text>
        <template #footer>
          <b-button variant="primary" v-b-modal.modelProduct3
            >More details</b-button
          >
        </template>
      </b-card>
    </b-card-group>

    <!-- Dialog -->
    <b-modal
      id="modelProduct1"
      size="xl"
      scrollable
      title="Camping lantern"
      ok-only
    >
      <div>
        <div>
          <img v-bind:src="product1" alt="product1" />
        </div>
        <div>
          <div class="alert alert-success" role="alert">
            Stainless steel handle and plastic cover resistant to water,
            suitable for both indoor and outdoor lighting.
          </div>
          <b-table striped hover :items="items" :fields="fields"></b-table>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="modelProduct2"
      size="xl"
      scrollable
      title="Sleeping bag"
      ok-only
    >
      <div>
        <div>
          <img v-bind:src="product2" alt="product1" />
        </div>
        <div>
          <b-table striped hover :items="items2" :fields="fields2"></b-table>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="modelProduct3"
      size="xl"
      scrollable
      title="2 Person tent"
      ok-only
    >
      <div>
        <div>
          <img v-bind:src="product3" alt="product1" />
        </div>
        <div>
          <b-table striped hover :items="items3" :fields="fields3"></b-table>
        </div>
      </div>
    </b-modal>
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
      product1: require("../assets/product/camping_lantern/image.jpg"),
      product2: require("../assets/product/sleeping_bag/image.jpg"),
      product3: require("../assets/product/tent/image.jpg"),

      fields: ["Items", "Details"],
      items: [
        { Items: "Best Use:", Details: "Hiking, Travel, Backpacking, Camping" },
        {
          Items: "Features:",
          Details: "Portable, Rechargeable, Low Energy Consumption",
        },
        { Items: "Power Source:", Details: "Battery, Solar" },
        { Items: "Material:", Details: "Plastic" },
        {
          Items: "Functions:",
          Details:
            " Low Power Consumption, Long life, Bright and no Stroboscopic",
        },
        { Items: "Power Source:", Details: "AC Charging, Solar Power" },
        { Items: "Led Quantity:", Details: "6(5LEDS+1W)" },
        {
          Items: "Package Contains:",
          Details:
            "1x Solar Camping Light(Include the battery) 1x Charger Cable (AC)",
        },
        {
          Details:
            "High quality plastic shell, glass top, stainless steel hand shanks, shockproof and durable.",
        },
        {
          Details:
            "Put the lamp in the sun, it will be charged, 3 hours lighting once fully charged.",
        },
        { Details: "Can be charged by AC charging cord." },
        {
          Details:
            "When stretching it, light will be on, shrinking it back, light will be off.",
        },
        { Details: "Red indicator displays charging condition." },
        { Details: "Safety energy saving, portable, high brightness." },
        {
          Details:
            "Used for camping, reading, boating, fishing, car repairs, etc.",
        },
        { Details: "Waterproof" },
      ],

      fields2: ["Items", "Details"],
      items2: [
        {
          Items: "BWAY BETTER THAN THE REST:",
          Details:
            "Our bag is more comfortable than the competition due to more padding and cushioning inside to make sure you are well rested and fully re-energized.",
        },
        {
          Items: "BEST YEAR ROUND SLEEPING BAG:",
          Details:
            "Perfect for spring, summer, fall, and winter weather, everything above 32°F freezing temperatures. Keep yourself cosy, warm and safe in every situation. The ultra-strong, waterproof outer protective shell is made from our unique waterproof ripstop hexagonal weave, double-layered with S-shape stitching, and 3D inner synthetic fiber fill for optimal warmth and insulation to protect you from the elements.",
        },
        {
          Items: "CAMP IN COMFORT FOR ALL AGES:",
          Details:
            "Bring the comfort of your own bed to the great outdoors. Our camping sleeping bags are engineered to guarantee a good night's sleep after a hard day of activities. No matter how tough the terrain or long the day, sleep well with MalloMe. Great for kids too!",
        },
        { Items: "Material:", Details: " Plastic" },
        {
          Items: "ULTRALIGHT FOR BACKPACKING:",
          Details:
            "A must have for hiking, backpacking, and camping, the perfect balance of performance and lightweight materials for every adventure. Each sleeping bag comes with a compression sack with straps, which makes it super convenient to store and easy to carry.",
        },
        {
          Items: "EASY TO CLEAN:",
          Details:
            "Our waterproof outer shell is easily wiped clean with a damp cloth. In case of heavy soilage the sleeping bag is designed for machine washing as well, ensuring easy maintenance and longevity.",
        },
        {
          Items: "EXCELLENT DESIGN:",
          Details:
            "Enjoy high-quality double-sided zippers that are snag-free and super satisfying to use. Tug those drawstrings in the headrest to bring the bag a little closer to your head for extra warmth in colder weather. While you’re there, pat that extra velcro securing strap too - it’ll keep you nice and snug with no unwanted zipper movement.",
        },
      ],

      fields3: ["Items", "Details"],
      items3: [
        {
          Items: "2 PERSON TENT:",
          Details:
            "This lightweight two-person dome tent with a large D-style door has enough space for you and a friend. This compact tent is ideal for hiking, camping, a kid’s indoor or backyard play tent, fishing, or shelter at the beach.",
        },
        {
          Items: "CONVIENENT FEATURES:",
          Details:
            "The 2-man tent features fiberglass poles, a removable rain fly, ventilation, and an interior storage pocket to keep your contents neat and organized while enjoying the great outdoors.",
        },
        {
          Items: "DUAL LAYER DOOR:",
          Details:
            "The combination of the inner screen layer and the outer zippered fabric layer of the tent door provide plenty of air flow as well as privacy. Simply bind the doors back with the sewn in ties to let the breeze in and keep the bugs out.",
        },
        {
          Items: "EASY SET UP:",
          Details:
            "With just 2 fiberglass poles, set up and tear down of this camping tent is quick and easy. When you are finished with your trip, you can simply place the tent components back into the included carrying bag to easily pack up and transport.",
        },
        {
          Items: "PRODUCT DETAILS:",
          Details:
            "Material: 190T Polyester and Fiberglass. Dimensions: (L) 77” x (W) 57” x (H) 40”. Pole Diameter: 3mm. Carry Bag: (L) 23” x 4” Diameter. Weight: 2.75lbs. Fits: 2 people. Color: Bold Blue.",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
