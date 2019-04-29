<template>
  <div id="home">
    <div id="salone" class="mid-align">
      <div id="mate-sat">
        <div id="mate-sat-card">
          <h1 id="app-desc" class="goougle pb-3">Sa Lone - for Myanmar people in Singapore</h1>
          <h2 class="unicode para">
            <span>စင်ကာပူရှိ မြန်မာဆိုင်များ၊ စားသောက်ဆိုင်များကို စင်ကာပူရောက်ရွှေမြန်မာတို့အတွက် စုစည်းတင်ပြထားပါသည်။</span>
          </h2>
        </div>
      </div>
    </div>
    <v-container id="home-container" fluid>
      <v-layout id="home-content" row wrap>
        <v-flex class="my-2" v-for="(cat, index) in cats" :key="index" md4 xs12>
          <category class="category" :category="cat"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Category from "../components/Category.vue";

export default {
  data() {
    return {
      cats: [
        {
          name: "ဆိုင်များ",
          desc:
            "မြန်မာဆိုင်များ၏ ဆက်သွယ်နိုင်သော လိပ်စာ၊ ဖုန်းနံပါတ် စသည်တို့ကို စုစည်းထားပါသည်။",
          icon: "store_mall_directory",
          redirectTo: "shops"
        },
        {
          name: "စားသောက်ဆိုင်များ",
          desc:
            "မြန်မာ့ရိုးရာစားသောက်ဖွယ်ရာများ ရရှိနိုင်သောဆိုင်များကို ရပ်ကွက်အလိုက် စုစည်းထားပါသည်။",
          icon: "restaurant",
          redirectTo: "restaurants"
        },
        {
          name: "သွားစရာ နေရာများ",
          desc:
            "အထင်ကရနေရာများ နှင့် စိတ်ဝင်စားဖွယ်နေရာများကို ဖော်ပြထားပါသည်။",
          icon: "place",
          redirectTo: "places"
        }
      ]
    };
  },
  components: {
    Category
  }
};
</script>

<style lang="scss" scoped>
$primary: #546e7a;

#home-container {
  background-color: white;
}

#home-content {
  padding: 24px 15px;
}

#salone {
  background: url("../assets/images/banner.jpg");
  background-size: cover;
  background-position: 30% 10%;
  height: 320px;
}

#mate-sat {
  text-align: center;
  padding: 63px 20px 20px;
}

#mate-sat-card {
  display: inline-block;
  padding: 1.3em;
  border-radius: 0.8em;
  background-color: rgba(255, 255, 255, 0.6);
}

#app-desc {
  font-weight: 900;
  font-size: 225%;
}

#home {
  width: calc(100vw - 17px);
}

.category {
  height: 100%;
  width: calc(100% - 12px);
  margin: auto;
}

.para {
  width: 400px;
  margin: auto;
}

@media only screen and (max-width: 699px) {
  #salone {
    height: 370px;
  }

  #home {
    width: 100vw;
    margin: auto;
  }

  #home-container {
    padding: 10px;
  }

  #home-content {
    padding: 10px 0;
  }

  #mate-sat {
    height: 200px;
    padding-top: 7.5%;
  }

  #app-desc {
    letter-spacing: -0.7px;
  }

  .category {
    width: calc(100% - 20px);
  }

  .para {
    width: calc(100% - 32px);
  }
}

@media only screen and (max-width: 355px) {
  #mate-sat {
    padding-top: 12%;
  }

  .para {
    font-size: 1.29em;
  }
}

@media only screen and (min-width: 1680px) {
  #home {
    width: 1680px;
  }
}
</style>

