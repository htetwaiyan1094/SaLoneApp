<template>
  <v-card :href="category.redirectTo" class="elevation-2">
    <v-layout row>
      <div class="category-icon-section">
        <v-icon class="category-icon" x-large>{{ category.icon }}</v-icon>
      </div>
      <div class="py-3 pl-2 pr-3 category-detail unicode" md10 xs9>
        <span class="category-title">{{ category.name }}</span>
        <span class="category-desc">{{ category.desc }}</span>
      </div>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    category: Object
  }
};
</script>

<style lang="scss" scoped>
$primary: #546e7a;

.category-title {
  color: $primary;
  display: block;
  font-size: 130%;
  font-weight: bold;
}

.category-desc {
  font-size: 97%;
}

.category-icon-section {
  padding: 16px 12px 16px 20px;
}

.category-icon {
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, .5);
  padding: .2em;
}

.category-detail {
  width: 100%;
}
</style>
