<template>
  <Photoswipe>
    <div class="address-card mx-auto" :style="getImgStyles" :data-pswp-src="src"></div>
  </Photoswipe>
</template>

<script>
export default {
  data() {
    const imgName = this.shop.toLowerCase().replace(/\s/g, '');
    return {
      src: require(`../assets/images/addresscards/${imgName}.jpg`)
    };
  },
  props: {
    shop: String
  },
  computed: {
    getImgStyles() {
      return `
      background-image: url(${this.src});
      background-position: center center;
      background-size: cover;
      `;
    }
  }
};
</script>

<style lang="scss" scoped>
.address-card {
  border-radius: 0.15em;
  width: calc(100% - 24px);
  height: 0;
  padding-top: 56.25%;
}
</style>


