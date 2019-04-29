<template>
  <div class="pt-4 px-2">
    <v-card class="card" v-for="(item, index) in shopData" :key="index">
      <v-layout row wrap text-xs-center>
        <v-flex xs12 sm12 lg4>
          <AddressCard :shop="item.singapore.Name"/>
        </v-flex>
        <v-flex class="info-tabs" xs12 sm6 lg5>
          <v-tabs slider-color="blue-grey">
            <v-tab>Singapore</v-tab>
            <v-tab>Myanmar</v-tab>
            <v-tabs-items>
              <v-tab-item>
                <v-card flat>
                  <v-responsive>
                    <ShopInfo :detail="item.singapore" title="Singapore" class="ma-2"></ShopInfo>
                  </v-responsive>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-responsive>
                    <ShopInfo :detail="item.myanmar" title="Myanmar" class="ma-2"></ShopInfo>
                  </v-responsive>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </v-flex>
        <v-flex xs12 sm6 lg3>
          <Phones :phones="item.phones"/>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import ShopInfo from "../components/ShopInfo.vue";
import AddressCard from "../components/AddressCard.vue";
import Phones from "../components/Phones.vue";
import { data } from "../data/shops.js";

export default {
  components: {
    ShopInfo,
    AddressCard,
    Phones
  },
  data() {
    return {
      shopData: data
    };
  }
};
</script>

<style scoped>
.card {
  padding: 16px;
  margin-bottom: 24px;
}

@media only screen and (max-width: 899px) {
  .card {
    padding: 16px 10px;
  }
}
</style>


