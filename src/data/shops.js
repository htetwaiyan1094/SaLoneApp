const mmAddresses = (addresses) => {
  let obj = {};
  addresses.forEach((item, index) => {
    obj[`လိပ်စာ-${translate.get(index + 1)}`] = item;
  })

  return obj;
}

const newShop = (name, openTime, nearestMrt, address, moneyTransfer, sendGood, sendToAll, mmAdds, phones) => {
  return {
    singapore: {
      Name: name,
      ဖွင့်ချိန်: openTime,
      "အနီးဆုံး MRT": nearestMrt,
      လိပ်စာ: address,
      ငွေလွှဲ: moneyTransfer,
      ကုန်ပို့: sendGood,
      နယ်များပို့ပေး: sendToAll
    },
    myanmar: mmAdds,
    phones
  }
}

const phones = (singapore, myanmar) => {
  return { singapore, myanmar }
}

const translate = new Map([
  [1, "၁"],
  [2, "၂"],
  [3, "၃"]
]);

const data = [
  newShop(
    "mannstar", "9AM to 9PM", "City Hall",
    "#03-14, Pennisula Plaza, Singapore 179098",
    "Yangon, Mandalay", "ရ", "မပို့",
    mmAddresses(
      [
        "အမှတ် (၂၄၁၊ ၂၄၃) လမ်း ၄၀ အထက်လမ်း ရန်ကုန်",
        "အမှတ် (၂၄၅) ၂၆ ဘီလမ်း ၈၂၊ ၈၄ လမ်းကြား မန္တလေး"
      ]
    ),
    phones(
      ['63374587', '63374590', '98626214'],
      ['013392655', '0930260701', '0234012']
    )
  ),
  newShop(
    "Moe Nway Saung", "9AM to 9PM", "City Hall",
    "#05-37, Pennisula Plaza, Singapore 179098",
    "Yangon", "မရ", "မပို့",
    mmAddresses(
      ["အမှတ် (၁)၊ သီရိစံအိမ်၊ ဝိဇ္ဇာလမ်း၊ ၉မိုင်၊ ရန်ကုန်"]
    ),
    phones(
      ['92381911', '94578452', '8183871'],
      ['09444437803', '01664497', '0943191955']
    )
  ),
  newShop(
    "Mya Nann Nwe", "9AM to 9PM", "City Hall",
    "#05-55, Pennisula Plaza, Singapore 179098",
    "Yangon", "ရ", "မပို့",
    mmAddresses(
      ["အမှတ် (၁၄၁-A) အောက်ဆုံးထပ် လမ်း ၅၀ အထက်ဘလောက်၊ ရန်ကုန်"]
    ),
    phones(
      ['63381451', '63386246', '91081242'],
      ['01296741', '0973250687', '095502338']
    )
  )
]

export { data };