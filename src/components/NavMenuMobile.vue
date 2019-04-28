<template>
  <div>
    <div class="px-4 pt-3 custom-header">Sa Lone</div>
    <v-divider></v-divider>
    <div v-for="(menu, index) in menus" :key="index">
      <v-list-tile class="px-2 side-nav" ripple :href="menu">
        <v-list-tile-content>
          <v-list-tile-title>{{ menu.toUpperCase() }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    menus: Array
  }
};
</script>

<style scoped>
</style>
