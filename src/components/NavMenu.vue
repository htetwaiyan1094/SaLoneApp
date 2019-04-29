<template>
  <v-toolbar-items>
    <router-link      
      class="nav-menu"
      v-for="(menu, index) in menus"
      active-class="nav-active"
      :key="index"
      :to="getLink(menu)"
      exact
    >
      <v-btn
        flat
        class="nav-btn"
      >{{ menu }}</v-btn>
    </router-link>
  </v-toolbar-items>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    menus: Array
  },
  methods: {
    navClick(menu) {
      this.current = menu;
    },
    getLink(menu) {
      return {
        name: menu
      };
    }
  }
};
</script>

<style scoped>
.nav-menu, .nav-btn {
  min-height: 64px;
  text-decoration: none;
}

.nav-active {
  border-radius: 0;
  border-bottom: 3px solid #546e7a;
}
</style>

