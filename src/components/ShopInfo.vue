<template class="shop-info">
  <table>
    <!-- <tr>
      <td colspan="2">
        <p class="custom-header">{{ title }}</p>
      </td>
    </tr> -->
    <tr v-for="(value, key) in detail" :key="key">
      <td class="text-xs-right tb-labels py-1 pl-2 pr-3">{{ key === 'Name' ? 'အမည်' : key }}</td>
      <td
        class="text-xs-left tb-texts py-1 px-2"
        :class="needsUnicode(key) ? 'unicode' : ''"
      >
        <a :href="getUrl(value)" target="_blank" v-if="key == 'လိပ်စာ'">{{ value }}</a>
        <span v-else>{{ value }}</span>
      </td>
    </tr>
  </table>
</template>

<script>
const url = "http://maps.google.com/?q=";
const mmAttrs = [
  'ကုန်ပို့',
  'နယ်များပို့ပေး',
  'လိပ်စာ-၁',
  'လိပ်စာ-၂'
]

export default {
  data() {
    return {
      info: []
    };
  },
  props: {
    detail: Object,
    title: String
  },
  methods: {
    getUrl: query => {
      const length = query.length;
      const start = length - 16;
      const end = length;
      return url + query.substring(start, end);
    },
    needsUnicode: key => {
      return mmAttrs.includes(key);
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #546e7a;

table {
  width: calc(100% - 16px);
}

.tb-labels {
  font-family: "Unicode";
  width: 32%;
}

.tb-texts {
  width: 68%;
}

@media only screen and (max-width: 599px) {
  .tb-labels {
    width: 35%;
  }

  .tb-texts {
    width: 65%;
  }
}
</style>

