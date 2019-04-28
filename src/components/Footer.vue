<template>
  <v-footer dark height="auto">
    <v-card flat tile class="white--text text-xs-center">
      <v-card-text class="white--text pt-4">
        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        <br>
        <span>Developed by Myanmar developers.</span>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 —
        <strong>SA LONE</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style lang="scss" scoped>
$primary: #546e7a;

div {
  width: 100%;
  background-color: $primary;
}

hr {
  background-color: white;
}
</style>


