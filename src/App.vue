<template>
  <v-app>
    <v-toolbar app color="white">
      <v-card class="align-mid" flat href="/">
        <img id="logo" class="mx-2" src="../src/assets/images/mmflag.png">
        <span id="brand-name">SA LONE</span>
      </v-card>
      <v-spacer></v-spacer>
      <nav-menu class="hidden-sm-and-down" :menus="menus"/>
      <v-btn class="hidden-md-and-up" icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <v-navigation-drawer v-model="drawer" fixed light temporary right width="250">
          <nav-menu-mobile :menus="menus"/>
        </v-navigation-drawer>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
// import data from "./data/shops.json";
import NavMenu from "./components/NavMenu.vue";
import NavMenuMobile from "./components/NavMenuMobile.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavMenu,
    NavMenuMobile,
    Footer
  },
  data() {
    return {
      drawer: null,
      menus: ["home", "shops", "restaurants", "places"]
    };
  }
};
</script>

<style lang="scss" scoped>
$primary: #546e7a;

*:not(.v-icon) {
  font-family: "Google";
}

.select-box {
  width: 200px;
}

#logo {
  height: 35px;
  width: auto;
}

#brand-name {
  font-weight: 900;
  color: $primary;
}
</style>