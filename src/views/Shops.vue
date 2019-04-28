<template>
  <div class="pt-4 px-2">
    <v-card class="card" v-for="(item, index) in d" :key="index">
      <v-layout row wrap text-xs-center>
        <v-flex xs12 sm12 lg4>
          <AddressCard :shop="item.Name"/>
        </v-flex>
        <v-flex class="info-tabs" xs12 sm6 lg5>
          <v-tabs slider-color="blue-grey">
            <v-tab>Singapore</v-tab>
            <v-tab>Myanmar</v-tab>
            <v-tabs-items>
              <v-tab-item>
                <v-card flat>
                  <v-responsive>
                    <ShopInfo :detail="item" title="Singapore" class="ma-2"></ShopInfo>
                  </v-responsive>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-responsive>
                    <ShopInfo :detail="mmAdd" title="Myanmar" class="ma-2"></ShopInfo>
                  </v-responsive>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </v-flex>
        <v-flex xs12 sm6 lg3>
          <Phones :phones="phones"/>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import ShopInfo from "../components/ShopInfo.vue";
import AddressCard from "../components/AddressCard.vue";
import Phones from "../components/Phones.vue";

export default {
  components: {
    ShopInfo,
    AddressCard,
    Phones
  },
  data() {
    return {
      d: [
        {
          Name: "mannstar",
          ဖွင့်ချိန်: "9AM to 9PM",
          "အနီးဆုံး MRT": "City Hall",
          လိပ်စာ: "03-14, Pennisula Plaza, Singapore 179098",
          ငွေလွှဲ: "Yangon, Mandalay",
          ကုန်ပို့: "ရ",
          နယ်များပို့ပေး: "မပေး"
        },
        {
          Name: "Moe Nway Saung",
          ဖွင့်ချိန်: "9AM to 9PM",
          "အနီးဆုံး MRT": "City Hall",
          လိပ်စာ: "03-14, Pennisula Plaza, Singapore 179098",
          ငွေလွှဲ: "Yangon, Mandalay",
          ကုန်ပို့: "ရ",
          နယ်များပို့ပေး: "မပေး"
        },
        {
          Name: "Mya Nann Nwe",
          ဖွင့်ချိန်: "9AM to 9PM",
          "အနီးဆုံး MRT": "City Hall",
          လိပ်စာ: "03-14, Pennisula Plaza, Singapore 179098",
          ငွေလွှဲ: "Yangon, Mandalay",
          ကုန်ပို့: "ရ",
          နယ်များပို့ပေး: "မပေး"
        }
      ],
      mmAdd: {
        "လိပ်စာ-၁": "အမှတ် (၂၄၁၊ ၂၄၃) လမ်း ၄၀ အထက်လမ်း ရန်ကုန်",
        "လိပ်စာ-၂": "အမှတ် (၂၄၅) ၂၆ ဘီလမ်း ၈၂၊ ၈၄ လမ်းကြား မန်းလေး"
      },
      phones: ["99999999", "0930260701", "99999999"]
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


