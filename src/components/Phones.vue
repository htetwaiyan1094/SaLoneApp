<template>
  <v-layout class="mx-auto phone-section" row wrap>
    <v-flex class="my-2" xs12>
      <span class="custom-header">Phone Numbers</span>
    </v-flex>
    <v-flex xs6>
      <span>Singapore</span>
      <v-btn
        class="phone align-mid my-2 mx-auto"
        v-for="(phone, index) in phones.singapore"
        :key="index"
        @click="redirect(`tel:+65${phone}`)"
        color="blue-grey"
        outline
      >
        <img :src="require('../assets/images/sgflag.png')">
        <span class="pl-1 cut-text">{{ phone }}</span>
      </v-btn>
    </v-flex>
    <v-flex xs6>
      <span>Myanmar</span>
      <v-btn
        class="phone my-2 mx-auto hvr-sweep-to-top"
        v-for="(phone, index) in phones.myanmar"
        :key="index"
        @click="redirect(`tel:+95${phone}`)"
        color="blue-grey"
        outline
      >
        <img :src="require('../assets/images/mmflag.png')">
        <span class="pl-1 cut-text">{{ phone }}</span>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    phones: Object
  },
  methods: {
    redirect: (url) => window.open(url)
  }
};
</script>

<style scoped>
.phone-section {
  max-height: 100%;
  overflow-y: auto;
}

img {
  border: 1px solid lightslategrey;
  border-radius: 50%;
  width: 20px;
  height: auto;
}

.phone {
  display: block;
  width: calc(100% - 8px);
}

@media only screen and (max-width: 1199px) {
  .phone {
    width: calc(55% + 4em);
    padding-left: 8px;
    padding-right: 8px;
  }
}

@media only screen and (max-width: 599px) {
  .phone {
    width: calc(100% - 24px);
  }
  .cut-text {
    overflow-x: hidden;
  }
}

@media only screen and (max-width: 399px) {
  .phone {
    padding: 0;
    width: calc(100% - 6px);
  }
}
</style>
