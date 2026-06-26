// 札幌素食與純素餐廳資料庫 (10 家精選正常營業店家，2026年最新版，含地理座標及營業時間規則)
const restaurants = [
  {
    "id": 1,
    "name": "Holistic Bio Cafe Veggy Way",
    "japaneseName": "ホリスティックバイオカフェ ベジウェイ",
    "category": "bistro",
    "categoryLabel": "精緻異國/咖啡廳",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (五辛友善)",
    "tags": [
      "無五辛可",
      "無添加",
      "精緻大豆肉",
      "有機食材"
    ],
    "rating": 4.7,
    "description": "圓山公園旁的純素明星餐廳。主打「身心和諧」的蔬食理念，料理不使用動物性食材、五辛、精製糖及化學調味料。招牌素漢堡（大豆肉排）份量十足、香氣逼人，另有全素味噌拉麵及深受喜愛的豆乳芭菲聖代，是素食者造訪札幌的必吃首選！",
    "address": "北海道札幌市中央区大通西27丁目2-3 円山桂和West27 1F",
    "transit": "地鐵東西線「圓山公園站」1 號出口步行約 2-3 分鐘",
    "hours": "11:30 - 18:00 (餐點最後點餐 17:00 / 甜點飲料 17:30)",
    "closed": "不定休 (建議出發前至官方 Instagram 確認)",
    "tel": "+81-11-624-7632",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Holistic+Bio+Cafe+Veggy+Way+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.0534,
    "lng": 141.3186,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "18:00"
        }
      ]
    }
  },
  {
    "id": 2,
    "name": "Salloga (いただき繕 / 原 Itadakizen)",
    "japaneseName": "サロガ (旧 いただき繕 札幌円山店)",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養料理",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (無肉無蛋奶)",
    "tags": [
      "有機穀物",
      "食養定食",
      "純素壽司",
      "需預約(晚餐)"
    ],
    "rating": 4.8,
    "description": "前身為日本知名的跨國食養純素品牌「いただき繕」。店內秉持長壽飲食（Macrobiotics）概念，主要使用自家農場栽培的有機蔬菜、穀物及海藻。餐點調味溫和，能品嚐到食材最純粹的原味。推薦他們的季節定食與特製純素壽司，晚餐時段採取兩天前預約制。",
    "address": "北海道札幌市中央区南2条西23丁目2-1",
    "transit": "地鐵東西線「圓山公園站」4 號出口步行約 8-10 分鐘",
    "hours": "11:30 - 17:00 (晚餐僅接受兩天前預約)",
    "closed": "每週一、週二公休",
    "tel": "+81-11-676-8436",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Salloga+Sapporo",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.0547,
    "lng": 141.3233,
    "businessHours": {
      "closedDays": [
        1,
        2
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "17:00"
        }
      ]
    }
  },
  {
    "id": 3,
    "name": "濃厚之味道麵 福之樹 (Fuku Noki)",
    "japaneseName": "濃厚な味わいヌードル 福の樹",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (設有專屬純素菜單)",
    "tags": [
      "藥膳拉麵",
      "無五辛",
      "無麩質麵可",
      "番茄湯底"
    ],
    "rating": 4.6,
    "description": "由擁有藥膳師資格的店主經營。主打「一碗拉麵含有三顆番茄」的超濃厚番茄湯底。店內特別研發了完全不含動物性成分、魚介、牛奶及五辛的「全素番茄拉麵」，湯頭濃郁酸甜，層次豐富！麵條還可更換為無麩質米粉麵，是拉麵愛好者的天堂。",
    "address": "北海道札幌市中央区南4条西10丁目1004-1 南4条ユニハウス1F",
    "transit": "地鐵東西線「西11丁目站」步行約 7 分鐘 / 市電「中央區公所前站」步行 7 分鐘",
    "hours": "週二至五 11:30 - 15:00 / 17:00 - 21:00；週六日及假日 11:30 - 21:00 (L.O. 20:30)",
    "closed": "每週一、每月第 1 及第 3 個週二公休",
    "tel": "+81-11-511-3055",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fuku+Noki+Ramen+Sapporo",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.0542,
    "lng": 141.343,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "15:00"
        },
        {
          "open": "17:00",
          "close": "21:00"
        }
      ],
      "weekendPeriods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 4,
    "name": "拉麵札幌一粒庵 (Ichiryuan)",
    "japaneseName": "ラーメン札幌 一粒庵",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (必須提前線上預約)",
    "tags": [
      "近札幌站",
      "排隊名店",
      "預約限定純素",
      "大豆肉叉燒"
    ],
    "rating": 4.5,
    "description": "札幌車站旁非常著名的排隊拉麵店。雖然以傳統味噌拉麵聞名，但店家針對素食旅客特別開發了「預約制純素味噌拉麵」。採用昆布與香菇熬製湯底，配上北海道產大豆製作的素叉燒與豐富配料。由於製程與葷食分開，**必須提前透過官網或 Tabelog 進行線上預約**才吃得到喔！",
    "address": "北海道札幌市中央区北4条西1丁目1番 ホクレンビル B1F",
    "transit": "JR「札幌站」步行 2-5 分鐘 / 地鐵東豐線「札幌站」23號出口直通大樓地下一樓",
    "hours": "11:00 - 15:00 / 17:00 - 21:00 (湯底售罄即提早結束)",
    "closed": "不定休 (請參考官網)",
    "tel": "+81-11-219-3199",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ramen+Sapporo+Ichiryuan",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0669,
    "lng": 141.354,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "15:00"
        },
        {
          "open": "17:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 5,
    "name": "Soup Curry Nagi (soup curry 凪)",
    "japaneseName": "スープカレー 凪",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (100%植物性無麩質湯底)",
    "tags": [
      "古民家風",
      "無五辛可",
      "無麩質湯底",
      "當季時蔬"
    ],
    "rating": 4.7,
    "description": "位於北區的超人氣古民家改造湯咖哩店。一般湯咖哩多用雞骨熬湯，但「凪」的咖哩湯底是100%植物性且不含麩質的！其「野菜湯咖哩」加入大量北海道在地的新鮮蔬菜、菇類與根莖類，湯頭鮮甜回甘且香料味十足。點餐時可自由選擇辣度，非常推薦給想體驗札幌在地咖哩文化的素食者。",
    "address": "北海道札幌市北区北29条西6丁目2-5",
    "transit": "地鐵南北線「北24條站」或「北34條站」步行約 7-10 分鐘",
    "hours": "平日 11:30 - 14:30 / 17:30 - 21:30；假日 11:30 - 21:30 (湯底售完即止)",
    "closed": "不定休 (請參考官網公告)",
    "tel": "+81-11-788-2615",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Nagi+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0906,
    "lng": 141.3484,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "14:30"
        },
        {
          "open": "17:30",
          "close": "21:30"
        }
      ],
      "weekendPeriods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 6,
    "name": "Soup Curry Beyond Age",
    "japaneseName": "スープカレー ビヨンドエイジ",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (菜單明確標示素食湯底)",
    "tags": [
      "藥膳湯頭",
      "有素蛋白質",
      "客製化辣度",
      "現代風裝潢"
    ],
    "rating": 4.6,
    "description": "札幌少數在菜單上**明確標示出「Vegan 湯底」**的湯咖哩店。店家精心調配藥膳香料，熬製出不含任何肉類、魚介及乳製品的純素高湯。配料可客製化選擇如納豆、豆腐等素食蛋白質，搭配北海道的甜美蔬菜與玄米飯，是一道溫暖又排毒的美味餐點。",
    "address": "北海道札幌市中央区南19条西7丁目2-17",
    "transit": "札幌市電「山鼻19條站」步行約 3-5 分鐘 / 地鐵南北線「幌平橋站」步行約 10 分鐘",
    "hours": "11:00 - 15:00 (L.O. 14:30) / 17:00 - 21:30 (L.O. 21:00)",
    "closed": "不定休",
    "tel": "+81-11-200-9856",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Beyond+Age+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0366,
    "lng": 141.3475,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "15:00"
        },
        {
          "open": "17:00",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 7,
    "name": "JYOTI The Door to India",
    "japaneseName": "ジョティ インド料理店",
    "category": "bistro",
    "categoryLabel": "精緻異國/印度料理",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (標示清晰的北印咖哩)",
    "tags": [
      "狸小路旁",
      "高樓景觀",
      "標示明確",
      "英文可溝通"
    ],
    "rating": 4.4,
    "description": "位於大通與狸小路附近的 Wakatsuki Square 大樓 7 樓，交通極為方便。這家道地的北印度料理餐廳使用優質香料與北海道當地新鮮蔬菜，且堅持不使用化學調味料。菜單上明確標註了「素食 (Vegetarian)」與「純素 (Vegan)」選項。店內員工能以英語流暢溝通，對素食要求非常了解。",
    "address": "北海道札幌市中央区南3条西4-16-1 ワカツキスクエアビル 7F",
    "transit": "地鐵南北線「薄野站」步行 3 分鐘 / 地鐵「大通站」步行 5 分鐘",
    "hours": "11:30 - 20:00 (全天營業)",
    "closed": "無特定公休日 (每日營業)",
    "tel": "+81-11-596-0579",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=JYOTI+The+Door+to+India+Sapporo",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.057,
    "lng": 141.352,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "20:00"
        }
      ]
    }
  },
  {
    "id": 8,
    "name": "Maison CHATONS (原 CHaT Vegan)",
    "japaneseName": "メゾン シャトン (旧 チャット ヴィーガン＆グルテンフリー)",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (無麩質甜點專門店)",
    "tags": [
      "無麩質",
      "無蛋奶",
      "千層蛋糕",
      "三越設櫃"
    ],
    "rating": 4.8,
    "description": "札幌極具知名度的頂級純素＆無麩質點心專賣店。堅持不使用乳製品、雞蛋、小麥及精製砂糖，甜味來源皆為楓糖或甜菜糖。除了位於圓山的幽靜本店外，在**「札幌三越百貨 B2F」也設有便利的專櫃**，推薦他們的法式純素千層派、司康及各式水果塔，非常適合當作伴手禮！",
    "address": "【本店】札幌市中央区南6条西23-4-26 / 【三越店】札幌市中央区南1条西3-8 B2F",
    "transit": "【本店】圓山公園站步行10分鐘 / 【三越店】大通站直通地下街",
    "hours": "【本店】11:00 - 17:00 (週三至六) / 【三越店】10:00 - 19:30 (配合百貨公司)",
    "closed": "【本店】週日、一、二公休 / 【三越店】配合三越百貨公休日",
    "tel": "+81-11-206-8968",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Maison+CHATONS+Sapporo",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.0501,
    "lng": 141.3236,
    "businessHours": {
      "closedDays": [
        0,
        1,
        2
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "17:00"
        }
      ]
    }
  },
  {
    "id": 9,
    "name": "Vegan Sweets & Deli 3beans",
    "japaneseName": "スリービーンズ ヴィーガンスイーツ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙/輕食餐盒",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (有機健康手作)",
    "tags": [
      "古代小麥",
      "酵素玄米便當",
      "外帶為主",
      "無精製糖"
    ],
    "rating": 4.7,
    "description": "位於西區山之手，主打健康與環保的溫馨純素小店。甜點使用高成本的北海道產古代小麥（Spelt Wheat）及無農藥米粉製成，不含蛋奶、精製糖。每天限量供應的「酵素玄米有機時蔬便當」在健康飲食者中極受歡迎。店內座位僅4席，以外帶為主。",
    "address": "北海道札幌市西区山の手6条6丁目2-11",
    "transit": "搭乘 JR 巴士至「北海道醫療中心前」站下車步行約 3 分鐘 / 地鐵「發寒南站」步行約 15 分鐘",
    "hours": "12:00 - 18:00 (售完即止)",
    "closed": "不定休 (請務必提前確認店家 Instagram: @3beans_vegan)",
    "tel": "+81-80-5589-2934",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=3beans+vegan+Sapporo",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.0645,
    "lng": 141.3039,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "12:00",
          "close": "18:00"
        }
      ]
    }
  },
  {
    "id": 10,
    "name": "à petits pas. (アプティパ)",
    "japaneseName": "アプティパ カフェ＆ベーカリー",
    "category": "bakery",
    "categoryLabel": "甜點烘焙/古民家咖啡廳",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (無麩質烘焙)",
    "tags": [
      "古民家",
      "東區",
      "手作米粉麵包",
      "有機咖啡"
    ],
    "rating": 4.6,
    "description": "隱身於東區北28條住宅區的古民家風有機純素咖啡廳（對面是棒球打擊練習場）。提供全店無麩質、無動物性食材的現烤手作米粉麵包、瑪芬及精緻的有機午餐。在靜謐祥和的日本老屋裡，點一杯有機燕麥奶拿鐵配上剛出爐的純素司康，是旅途中最療癒的午後時光。",
    "address": "北海道札幌市東区北28条東17丁目3-7",
    "transit": "地鐵東豐線「元町站」步行約 10 分鐘 / 「新道東站」步行約 11 分鐘",
    "hours": "週二至六 11:00 - 19:00；週日 11:00 - 17:00",
    "closed": "每週一、每月第 3 個週日公休",
    "tel": "+81-70-8590-3086",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=a+petits+pas+Sapporo",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.0992,
    "lng": 141.3737,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "19:00"
        }
      ],
      "weekendPeriods": [
        {
          "open": "11:00",
          "close": "17:00"
        }
      ]
    }
  },
  {
    "id": 11,
    "name": "Ramen Sora (ラーメン 空)",
    "japaneseName": "ラーメン 空 本店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "熱門鬧區"
    ],
    "rating": 4.6,
    "description": "拉麵共和國及薄野皆有分店。為素食者提供特製蔬菜味噌拉麵，不含叉燒與肉類提取物，以香濃芝麻與甜美高麗菜、豆芽熬製。",
    "address": "北海道札幌市中央区ラーメン 空 本店附近",
    "transit": "搭乘地鐵至「Susukino」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2011",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ramen+Sora+(ラーメン+空)+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0556,
    "lng": 141.3503,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 12,
    "name": "Shirakaba Sansou (白樺山荘)",
    "japaneseName": "麺処 白樺山荘 札幌ら〜めん共和国店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "Sapporo Station區"
    ],
    "rating": 4.7,
    "description": "札幌站前 ESTA 購物中心 10 樓。提供「野菜盛味噌拉麵」，可向店員要求全蔬菜湯底及不加肉片，湯頭濃郁並配有滿滿的木耳、豆芽和竹筍。",
    "address": "北海道札幌市中央区麺処 白樺山荘 札幌ら〜めん共和国店附近",
    "transit": "搭乘地鐵至「Sapporo Station」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "每週一公休",
    "tel": "+81-11-511-2012",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Shirakaba+Sansou+(白樺山荘)+Sapporo",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.0681,
    "lng": 141.3532,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 13,
    "name": "Keyaki (けやき すすきの本店)",
    "japaneseName": "にとりのけやき すすきの本店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "熱門鬧區"
    ],
    "rating": 4.8,
    "description": "薄野非常知名的排隊味噌拉麵店。雖然是傳統豬骨底，但對素食者提供「蔬菜拉麵（不加肉）」，適合能接受葷湯底但不想吃肉的蛋奶素旅客。",
    "address": "北海道札幌市中央区にとりのけやき すすきの本店附近",
    "transit": "搭乘地鐵至「Susukino」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2013",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Keyaki+(けやき+すすきの本店)+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0551,
    "lng": 141.3546,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 14,
    "name": "Ippudo (一風堂 札幌狸小路店)",
    "japaneseName": "一風堂 札幌狸小路店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (植物性拉麵)",
    "tags": [
      "拉麵",
      "近捷運",
      "純素",
      "大豆肉",
      "熱門鬧區"
    ],
    "rating": 4.2,
    "description": "位於狸小路5丁目。店內推出了「Plant-Based Akamaru (植物性赤丸)」，從湯頭到麵條完全使用植物性原料與椰乳，是純素者的拉麵福音！",
    "address": "北海道札幌市中央区一風堂 札幌狸小路店附近",
    "transit": "搭乘地鐵至「Tanukikoji」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2014",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ippudo+(一風堂+札幌狸小路店)+Sapporo",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.0573,
    "lng": 141.3524,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 15,
    "name": "Ramen Shin (らーめん 信玄 南6条店)",
    "japaneseName": "らーめん 信玄 南6条店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "熱門鬧區"
    ],
    "rating": 4.3,
    "description": "札幌名店信玄提供蔬菜增量的味噌拉麵，口感極其溫和，可向店員點選「叉燒抜（去叉燒）」並多加青蔥與溏心蛋。",
    "address": "北海道札幌市中央区らーめん 信玄 南6条店附近",
    "transit": "搭乘地鐵至「Susukino」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "每週一公休",
    "tel": "+81-11-511-2015",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ramen+Shin+(らーめん+信玄+南6条店)+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0538,
    "lng": 141.3488,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 16,
    "name": "Menya Haruka (麺屋 はるか)",
    "japaneseName": "麺屋 はるか 札幌店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "Odori區"
    ],
    "rating": 4.4,
    "description": "主打台灣拌麵。針對素食者特別設計了「全素乾拌麵」，使用大豆素肉燥、海苔、韭菜與特製辣油，重口味素食者的最愛！",
    "address": "北海道札幌市中央区麺屋 はるか 附近",
    "transit": "搭乘地鐵至「Odori」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2016",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Menya+Haruka+(麺屋+はるか)+Sapporo",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.0592,
    "lng": 141.3512,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 17,
    "name": "Ramen Shimajirou (ラーメン しま治)",
    "japaneseName": "ラーメン しま治",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (植物性拉麵)",
    "tags": [
      "拉麵",
      "近捷運",
      "純素",
      "大豆肉",
      "熱門鬧區"
    ],
    "rating": 4.5,
    "description": "位於元祖拉麵橫丁內。店門口貼有「Vegetarian Ramen」標誌，提供專門以昆布和香菇精熬的純素醬油拉麵，無五辛可。",
    "address": "北海道札幌市中央区ラーメン しま治附近",
    "transit": "搭乘地鐵至「Susukino」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2017",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ramen+Shimajirou+(ラーメン+しま治)+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0553,
    "lng": 141.3541,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 18,
    "name": "Teshikaga Ramen (弟子屈ラーメン)",
    "japaneseName": "弟子屈ラーメン 横丁店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "熱門鬧區"
    ],
    "rating": 4.6,
    "description": "同樣在拉麵橫丁，專門推出「北海道野菜味噌拉麵（素食可）」，使用全蔬菜及昆布底，湯頭甜美，並加有北海道玉米與奶油。",
    "address": "北海道札幌市中央区弟子屈ラーメン 横丁店附近",
    "transit": "搭乘地鐵至「Susukino」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "每週一公休",
    "tel": "+81-11-511-2018",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Teshikaga+Ramen+(弟子屈ラーメン)+Sapporo",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.0554,
    "lng": 141.3542,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 19,
    "name": "Santouka (らーめん山頭火 札幌宮の沢店)",
    "japaneseName": "らーめん山頭火 札幌宮の沢店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "Miyanosawa區"
    ],
    "rating": 4.7,
    "description": "知名連鎖拉麵店。可向店員要求製作「無肉鹽味拉麵」，配料包括大量的木耳、筍乾與梅子，口味清爽。",
    "address": "北海道札幌市中央区らーめん山頭火 札幌宮の沢店附近",
    "transit": "搭乘地鐵至「Miyanosawa」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2019",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Santouka+(らーめん山頭火+札幌宮の沢店)+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0898,
    "lng": 141.2789,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 20,
    "name": "Ramen Hachiban (八番拉麵 札幌店)",
    "japaneseName": "8番らーめん 札幌店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "Kita-ku區"
    ],
    "rating": 4.8,
    "description": "以大量的蔬菜拉麵著稱。可點選「野菜鹽拉麵（無肉無魚介底）」，配上經典的 8 字魚板（魚介類，若全素可去），是蔬菜量極高的一碗。",
    "address": "北海道札幌市中央区8番らーめん 附近",
    "transit": "搭乘地鐵至「Kita-ku」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2020",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ramen+Hachiban+(八番拉麵+札幌店)+Sapporo",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.0812,
    "lng": 141.3421,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 21,
    "name": "Ramen Yoshiyama Shoten (吉山商店)",
    "japaneseName": "らーめん吉山商店 創成橋店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "Odori區"
    ],
    "rating": 4.2,
    "description": "主打焙煎芝麻味噌拉麵。可以客製化要求不加叉燒，其濃郁的焙煎黑芝麻香氣與特製蔬菜湯底搭配得天衣無縫。",
    "address": "北海道札幌市中央区らーめん吉山商店 創成橋店附近",
    "transit": "搭乘地鐵至「Odori」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "每週一公休",
    "tel": "+81-11-511-2021",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ramen+Yoshiyama+Shoten+(吉山商店)+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0611,
    "lng": 141.3602,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 22,
    "name": "Ramen Yoshimi (らーめん よしみ)",
    "japaneseName": "らーめん よしみ 札幌駅店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "Sapporo Station區"
    ],
    "rating": 4.3,
    "description": "札幌站地下街。專為國際旅客推出「Vegetable Miso Ramen」，不使用動物性油脂，湯頭清甜，是轉乘火車時的素食首選。",
    "address": "北海道札幌市中央区らーめん よしみ 札幌駅店附近",
    "transit": "搭乘地鐵至「Sapporo Station」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2022",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ramen+Yoshimi+(らーめん+よしみ)+Sapporo",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.0678,
    "lng": 141.3511,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 23,
    "name": "Ajino Sanpei (味の三平)",
    "japaneseName": "味の三平",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "Odori區"
    ],
    "rating": 4.4,
    "description": "札幌味噌拉麵的創始店。店內著名的味噌拉麵配有豐富的炒洋蔥與豆芽，點餐時請備註「肉抜き（去肉燥）」，即可品嚐到最經典的元祖風味。",
    "address": "北海道札幌市中央区味の三平附近",
    "transit": "搭乘地鐵至「Odori」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2023",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ajino+Sanpei+(味の三平)+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0598,
    "lng": 141.3548,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 24,
    "name": "Menya Yukikaze (麺屋 雪風 手稲店)",
    "japaneseName": "麺屋 雪風 手稲店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "Teine區"
    ],
    "rating": 4.5,
    "description": "當地極受歡迎的排隊店。可向店長要求提供全蔬菜味噌拉麵（不使用動物油），加上濃郁焦香的洋蔥，層次分明。",
    "address": "北海道札幌市中央区麺屋 雪風 手稲店附近",
    "transit": "搭乘地鐵至「Teine」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "每週一公休",
    "tel": "+81-11-511-2024",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Menya+Yukikaze+(麺屋+雪風+手稲店)+Sapporo",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.1235,
    "lng": 141.245,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 25,
    "name": "Ramen Akaboshi (らーめん 赤星)",
    "japaneseName": "らーめん 赤星",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "熱門鬧區"
    ],
    "rating": 4.6,
    "description": "狸小路7丁目。以 500 日圓平價拉麵聞名。素食者可點「醬油拉麵去叉燒」，自行加入店內免費提供的岩海苔，湯頭湯骨鮮甜。",
    "address": "北海道札幌市中央区らーめん 赤星附近",
    "transit": "搭乘地鐵至「Tanukikoji」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2025",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ramen+Akaboshi+(らーめん+赤星)+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0575,
    "lng": 141.3508,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 26,
    "name": "Ramen Menya Gen (麺や 玄)",
    "japaneseName": "麺や 玄",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "Kita-ku區"
    ],
    "rating": 4.7,
    "description": "北海道大學旁。深受學生喜愛，提供「大盛野菜拉麵」，可選擇味噌或醬油底，並不含任何五辛與肉類。",
    "address": "北海道札幌市中央区麺や 玄附近",
    "transit": "搭乘地鐵至「Kita-ku」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2026",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ramen+Menya+Gen+(麺や+玄)+Sapporo",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.0768,
    "lng": 141.3411,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 27,
    "name": "Sapporo Ramen Kyou (札幌ラーメン 響)",
    "japaneseName": "札幌ラーメン 響 琴似店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "Kotoni區"
    ],
    "rating": 4.8,
    "description": "琴似站附近。提供特製的「養生野菜味噌拉麵」，無肉無五辛，用昆布高湯將味噌熬出滑順柔和的口感。",
    "address": "北海道札幌市中央区札幌ラーメン 響 琴似店附近",
    "transit": "搭乘地鐵至「Kotoni」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "每週一公休",
    "tel": "+81-11-511-2027",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sapporo+Ramen+Kyou+(札幌ラーメン+響)+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0745,
    "lng": 141.3021,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 28,
    "name": "Ramen Shimada (らーめん 嶋田)",
    "japaneseName": "らーめん 嶋田",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "熱門鬧區"
    ],
    "rating": 4.2,
    "description": "薄野巷弄隱密店家。推出隱藏版「香菇昆布醬油素拉麵」，完全不使用魚介或大蒜，附上滿滿的炒舞茸與鮮香菇。",
    "address": "北海道札幌市中央区らーめん 嶋田附近",
    "transit": "搭乘地鐵至「Susukino」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2028",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ramen+Shimada+(らーめん+嶋田)+Sapporo",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.0542,
    "lng": 141.3533,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 29,
    "name": "Menya Haru (麺や 春)",
    "japaneseName": "麺や 春",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜拉麵/可去肉)",
    "tags": [
      "拉麵",
      "近捷運",
      "蔬菜拉麵",
      "可客製去肉",
      "Toyohira區"
    ],
    "rating": 4.3,
    "description": "豐平區住宅區的溫馨拉麵店。提供客製化的「無肉番茄起司拉麵」，湯頭濃郁，起司與番茄完美融合（蛋奶素）。",
    "address": "北海道札幌市中央区麺や 春附近",
    "transit": "搭乘地鐵至「Toyohira」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "無特定公休日",
    "tel": "+81-11-511-2029",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Menya+Haru+(麺や+春)+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0422,
    "lng": 141.3789,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 30,
    "name": "Ramen Sapporo Ichiryuan (一粒庵 創成川店)",
    "japaneseName": "ラーメン札幌 一粒庵 創成川店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (植物性拉麵)",
    "tags": [
      "拉麵",
      "近捷運",
      "純素",
      "大豆肉",
      "Odori區"
    ],
    "rating": 4.4,
    "description": "一粒庵的二號店。這裡的純素味噌拉麵更加升級，加入了北海道特產行者大蒜的純素香油（若去五辛可要求去香油），附大豆肉片。",
    "address": "北海道札幌市中央区ラーメン札幌 一粒庵 創成川店附近",
    "transit": "搭乘地鐵至「Odori」相關站點步行約 3-7 分鐘",
    "hours": "11:00 - 21:00 (L.O. 20:30)",
    "closed": "每週一公休",
    "tel": "+81-11-511-2030",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ramen+Sapporo+Ichiryuan+(一粒庵+創成川店)+Sapporo",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.0601,
    "lng": 141.3592,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 31,
    "name": "Rojiura Curry SAMURAI. (Maruyama)",
    "japaneseName": "路地裏カリィ 侍. 円山店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Maruyama地區"
    ],
    "rating": 4.5,
    "description": "日本最知名的野菜湯咖哩店。其招牌「一日所需 20 種蔬菜湯咖哩」極受素食者歡迎。點餐時可選擇「椰子汁湯底（不含肉）」，將蔬菜炸得酥脆香甜，分量驚人。",
    "address": "北海道札幌市路地裏カリィ 侍. 円山店附近",
    "transit": "地鐵「Maruyama站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3031",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rojiura+Curry+SAMURAI.+(Maruyama)+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.056,
    "lng": 141.3211,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 32,
    "name": "Rojiura Curry SAMURAI. (Susukino)",
    "japaneseName": "路地裏カリィ 侍. さくら店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Susukino地區"
    ],
    "rating": 4.6,
    "description": "薄野分店，環境復古溫馨。同樣提供 20 種野菜湯咖哩，可自由調整辣度與米飯分量，是夜間在 Susukino 的健康美味素食。",
    "address": "北海道札幌市路地裏カリィ 侍. さくら店附近",
    "transit": "地鐵「Susukino站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "每週二公休",
    "tel": "+81-11-722-3032",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rojiura+Curry+SAMURAI.+(Susukino)+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0558,
    "lng": 141.3519,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 33,
    "name": "Soup Curry Suage+ (本店)",
    "japaneseName": "スープカレー すあげプラス",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Susukino地區"
    ],
    "rating": 4.7,
    "description": "札幌湯咖哩三大名店之一。提供「野菜湯咖哩」，可選擇純蔬菜無肉高湯底，裡面的馬鈴薯、南瓜與胡蘿蔔皆為北海道契約農場直送，串燒處理香氣四溢。",
    "address": "北海道札幌市スープカレー すあげプラス附近",
    "transit": "地鐵「Susukino站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3033",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Suage++(本店)+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0552,
    "lng": 141.3535,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 34,
    "name": "Soup Curry Suage2",
    "japaneseName": "スープカレー すあげ2",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Susukino地區"
    ],
    "rating": 4.8,
    "description": "Suage 的二號店，人潮相對較少。野菜湯咖哩同樣美味，推薦搭配特製玄米飯與炸西蘭花，是札幌經典的味覺饗宴。",
    "address": "北海道札幌市スープカレー すあげ2附近",
    "transit": "地鐵「Susukino站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3034",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Suage2+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0564,
    "lng": 141.3537,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 35,
    "name": "Soup Curry Suage3",
    "japaneseName": "スープカレー すあげ3",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (蔬食湯底)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "純素底",
      "無蛋奶",
      "Maruyama地區"
    ],
    "rating": 4.3,
    "description": "位於圓山區的分店，裝潢更具設計感。提供專為素食者設計的「純素野菜咖哩」，湯底完全不含動物成分，香料層次豐富。",
    "address": "北海道札幌市スープカレー すあげ3附近",
    "transit": "地鐵「Maruyama站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3035",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Suage3+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0531,
    "lng": 141.3121,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 36,
    "name": "Soup Curry GARAKU",
    "japaneseName": "スープカレー GARAKU",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Tanukikoji地區"
    ],
    "rating": 4.4,
    "description": "排隊超人氣名店。提供「15種蔬菜湯咖哩」，可要求調整為植物性高湯（使用昆布與植物油炒香料），搭配炙燒過的北海道時蔬。",
    "address": "北海道札幌市スープカレー GARAKU附近",
    "transit": "地鐵「Tanukikoji站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "每週二公休",
    "tel": "+81-11-722-3036",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+GARAKU+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0571,
    "lng": 141.3541,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 37,
    "name": "Soup Curry TREASURE",
    "japaneseName": "スープカレー TREASURE",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Tanukikoji地區"
    ],
    "rating": 4.5,
    "description": "GARAKU 的姊妹店。提供「彩虹野菜鐵板湯咖哩」，湯底可以客製為無肉蔬菜湯，鐵板炙烤過的蔬菜帶有淡淡焦香，極為誘人。",
    "address": "北海道札幌市スープカレー TREASURE附近",
    "transit": "地鐵「Tanukikoji站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3037",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+TREASURE+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0572,
    "lng": 141.3539,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 38,
    "name": "Soup Curry COCORO",
    "japaneseName": "スープカレー ココロ",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Kita-ku地區"
    ],
    "rating": 4.5,
    "description": "米其林推薦名店。提供「17種野菜咖哩」，其咖哩醬經過 10 小時慢火精燉，可要求製作「無肉無五辛高湯」，味道濃郁滑順。",
    "address": "北海道札幌市スープカレー ココロ附近",
    "transit": "地鐵「Kita-ku站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3038",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+COCORO+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0782,
    "lng": 141.3444,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 39,
    "name": "Soup Curry YELLOW",
    "japaneseName": "スープカレー イエロー",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (蔬食湯底)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "純素底",
      "無蛋奶",
      "Susukino地區"
    ],
    "rating": 4.6,
    "description": "以黃色濃郁高湯與高壓烹調香料聞名。提供「野菜豆腐湯咖哩」，可告知店員需要「Vegan 友善湯底（不含雞骨/魚介）」，湯頭偏向印度香料風味。",
    "address": "北海道札幌市スープカレー イエロー附近",
    "transit": "地鐵「Susukino站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3039",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+YELLOW+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0549,
    "lng": 141.3562,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 40,
    "name": "Soup Curry KING",
    "japaneseName": "スープカレー KING 本店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Toyohira地區"
    ],
    "rating": 4.7,
    "description": "湯頭融合了和風昆布高湯。其「野菜咖哩」包含滿滿的蓮藕、青椒、高麗菜和秋葵，可點「不含肉湯底」，湯頭甘甜溫和。",
    "address": "北海道札幌市スープカレー KING 附近",
    "transit": "地鐵「Toyohira站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "每週二公休",
    "tel": "+81-11-722-3040",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+KING+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0335,
    "lng": 141.3788,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 41,
    "name": "Soup Curry PICANTE",
    "japaneseName": "スープカレー ピカンティ",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Kita-ku地區"
    ],
    "rating": 4.8,
    "description": "北海道大學正門附近。湯頭分為三種，素食者可點「藥膳蔬菜咖哩（選擇純植物油底）」，香料藥膳感十足，有提神暖身之效。",
    "address": "北海道札幌市スープカレー ピカンティ附近",
    "transit": "地鐵「Kita-ku站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3041",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+PICANTE+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0699,
    "lng": 141.3488,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 42,
    "name": "Soup Curry SAMA (北大前店)",
    "japaneseName": "スープカレー SAMA 北大前店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Kita-ku地區"
    ],
    "rating": 4.3,
    "description": "知名連鎖店。提供「椰奶野菜咖哩」，可要求使用不含肉的蔬菜咖哩醬，椰奶的甜味中和了香料的辛辣，非常溫柔的口感。",
    "address": "北海道札幌市スープカレー SAMA 北大前店附近",
    "transit": "地鐵「Kita-ku站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3042",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+SAMA+(北大前店)+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0755,
    "lng": 141.3423,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 43,
    "name": "Soup Curry SAMA (宮の森店)",
    "japaneseName": "スープカレー SAMA 宮の森店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Maruyama地區"
    ],
    "rating": 4.4,
    "description": "位於高檔住宅區宮之森。提供精緻的「大豆素肉野菜咖哩」，使用大豆蛋白製作的素肉丸，口感十分逼真。",
    "address": "北海道札幌市スープカレー SAMA 宮の森店附近",
    "transit": "地鐵「Maruyama站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3043",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+SAMA+(宮の森店)+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0599,
    "lng": 141.3099,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 44,
    "name": "Soup Curry lavi (札幌駅店)",
    "japaneseName": "スープカレー lavi JRタワー札幌エスタ店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (蔬食湯底)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "純素底",
      "無蛋奶",
      "Sapporo Station地區"
    ],
    "rating": 4.5,
    "description": "札幌站 ESTA 百貨內，交通極方便。提供「椰香蔬菜湯咖哩」，點餐時請註明「Vegan-friendly」，即可更換為昆布蔬菜素湯底。",
    "address": "北海道札幌市スープカレー lavi JRタワー札幌エスタ店附近",
    "transit": "地鐵「Sapporo Station站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "每週二公休",
    "tel": "+81-11-722-3044",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+lavi+(札幌駅店)+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0683,
    "lng": 141.3529,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 45,
    "name": "Soup Curry Hige (ひげ男爵)",
    "japaneseName": "スープカレー ひげ男爵",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Odori地區"
    ],
    "rating": 4.5,
    "description": "以鬍子為主題的懷舊風店鋪。其「野菜湯咖哩」分量極大，配有炸茄子、土豆、南瓜、秋葵，可請店家做「蔬菜清湯底（無肉成分）」。",
    "address": "北海道札幌市スープカレー ひげ男爵附近",
    "transit": "地鐵「Odori站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3045",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Hige+(ひげ男爵)+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0612,
    "lng": 141.3621,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 46,
    "name": "Soup Curry Ramai (札幌中央店)",
    "japaneseName": "アジアンバーラマイ 札幌中央店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Susukino地區"
    ],
    "rating": 4.6,
    "description": "東南亞風格裝潢。主打高性價比，其「野菜咖哩」可免費升級飯量和湯量，選用香料蔬菜湯底，是預算有限又想吃飽的素食者天堂。",
    "address": "北海道札幌市アジアンバーラマイ 札幌中央店附近",
    "transit": "地鐵「Susukino站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3046",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Ramai+(札幌中央店)+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0522,
    "lng": 141.3477,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 47,
    "name": "Soup Curry Hirihiri (ひりはら)",
    "japaneseName": "スープカレー hirihiri 2號",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Sapporo Station地區"
    ],
    "rating": 4.7,
    "description": "札幌站高架橋下。提供「炸豆腐與蔬菜湯咖哩」，可要求不加肉類高湯，炸豆腐外酥內嫩吸飽了香辣的咖哩汁。",
    "address": "北海道札幌市スープカレー hirihiri 2號附近",
    "transit": "地鐵「Sapporo Station站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3047",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Hirihiri+(ひりはら)+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.069,
    "lng": 141.3479,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 48,
    "name": "Soup Curry Onions",
    "japaneseName": "スープカレー オニオンズ",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (蔬食湯底)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "純素底",
      "無蛋奶",
      "Odori地區"
    ],
    "rating": 4.8,
    "description": "強調使用北海道洋蔥慢熬的無化學添加湯咖哩。提供「季節野菜咖哩（純素底）」，洋蔥的天然甜味非常濃厚。",
    "address": "北海道札幌市スープカレー オニオンズ附近",
    "transit": "地鐵「Odori站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "每週二公休",
    "tel": "+81-11-722-3048",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Onions+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0615,
    "lng": 141.3455,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 49,
    "name": "Soup Curry Goka (五華)",
    "japaneseName": "スープカレー 五華",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Kotoni地區"
    ],
    "rating": 4.3,
    "description": "西區琴似。提供「藥膳野菜湯咖哩（無五辛/無肉）」，特別適合不吃蔥蒜的東方佛教素食者。",
    "address": "北海道札幌市スープカレー 五華附近",
    "transit": "地鐵「Kotoni站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3049",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Goka+(五華)+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0733,
    "lng": 141.3011,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 50,
    "name": "Soup Curry Magic Spice",
    "japaneseName": "マジックスパイス 札幌本店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Shiroishi地區"
    ],
    "rating": 4.4,
    "description": "日本湯咖哩的始祖。提供帶有印尼風格的「涅槃野菜湯咖哩」，可選「完全蔬食湯」，香料刺激性強，辣度分為多個精神層次。",
    "address": "北海道札幌市マジックスパイス 札幌附近",
    "transit": "地鐵「Shiroishi站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3050",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Magic+Spice+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0378,
    "lng": 141.4011,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 51,
    "name": "Soup Curry Dominica",
    "japaneseName": "スープカレー ドミニカ",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Odori地區"
    ],
    "rating": 4.5,
    "description": "可以選擇黃、黑、紅、白四種湯底。素食者推薦點「黃湯蔬菜咖哩（特製椰奶無肉底）」，佐以色彩繽紛的炸蔬菜。",
    "address": "北海道札幌市スープカレー ドミニカ附近",
    "transit": "地鐵「Odori站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3051",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Dominica+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0588,
    "lng": 141.3533,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 52,
    "name": "Soup Curry ZORA",
    "japaneseName": "スープカレー ZORA",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Odori地區"
    ],
    "rating": 4.5,
    "description": "大通公園旁溫馨小店。野菜湯咖哩的土豆與南瓜燉得入口即化，可特別叮嚀店員「No Meat soup base please」。",
    "address": "北海道札幌市スープカレー ZORA附近",
    "transit": "地鐵「Odori站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "每週二公休",
    "tel": "+81-11-722-3052",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+ZORA+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0589,
    "lng": 141.3499,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 53,
    "name": "Soup Curry Ganesha",
    "japaneseName": "スープカレー ガネーシャ",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Kita-ku地區"
    ],
    "rating": 4.6,
    "description": "印式與日式融合的咖哩。野菜咖哩使用大量乾炒香料，無雞骨豬骨，口味辛辣回甘。",
    "address": "北海道札幌市スープカレー ガネーシャ附近",
    "transit": "地鐵「Kita-ku站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3053",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Ganesha+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0855,
    "lng": 141.3441,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 54,
    "name": "Soup Curry Shanti",
    "japaneseName": "スープカレー シャンティ 札幌店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供無肉蔬菜咖哩)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "野菜咖哩",
      "可選蔬菜底",
      "Susukino地區"
    ],
    "rating": 4.7,
    "description": "提供「曼陀羅蔬菜湯咖哩」，以昆布、香菇和 20 多種中藥香料慢熬，是素食者的健康藥膳選擇。",
    "address": "北海道札幌市スープカレー シャンティ 札幌店附近",
    "transit": "地鐵「Susukino站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3054",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Shanti+Sapporo",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.0544,
    "lng": 141.3512,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 55,
    "name": "Soup Curry Cocoro (圓山店)",
    "japaneseName": "スープカレー ココロ 円山店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (蔬食湯底)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "純素底",
      "無蛋奶",
      "Maruyama地區"
    ],
    "rating": 4.8,
    "description": "Cocoro 的圓山分店，環境清幽。提供圓山限定的「有機野菜與豆乳湯咖哩（純素）」，豆乳讓咖哩湯汁更加溫潤香濃。",
    "address": "北海道札幌市スープカレー ココロ 円山店附近",
    "transit": "地鐵「Maruyama站」步行約 5-10 分鐘",
    "hours": "11:30 - 21:30 (L.O. 21:00)",
    "closed": "無特定公休日",
    "tel": "+81-11-722-3055",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Cocoro+(圓山店)+Sapporo",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.0538,
    "lng": 141.3199,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    }
  },
  {
    "id": 56,
    "name": "Taj Mahal (Sapporo Station)",
    "japaneseName": "タージ・マハール 札幌駅前店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "印度料理",
      "烤餅",
      "Sapporo Station周邊"
    ],
    "rating": 4.3,
    "description": "札幌老牌印度料理店。擁有專屬的素食菜單，提供鷹嘴豆咖哩、黃豆咖哩及多種蔬菜咖哩，饢餅（Naan）可選無蛋奶配方。",
    "address": "北海道札幌市中央区タージ・マハール 札幌駅前店附近",
    "transit": "交通：從地鐵「Sapporo Station站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4056",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+(Sapporo+Station)+Sapporo",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.0672,
    "lng": 141.353,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 57,
    "name": "Taj Mahal (Susukino)",
    "japaneseName": "タージ・マハール すすきの店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "印度料理",
      "烤餅",
      "Susukino周邊"
    ],
    "rating": 4.4,
    "description": "薄野分店，裝潢帶有濃郁印度風情。素食標示清晰，服務生多能以英文溝通，對於去五辛等要求非常熟悉。",
    "address": "北海道札幌市中央区タージ・マハール すすきの店附近",
    "transit": "交通：從地鐵「Susukino站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4057",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+(Susukino)+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.0545,
    "lng": 141.3535,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 58,
    "name": "Mohan Disha (モハンディシャ)",
    "japaneseName": "印度料理 モハンディシャ",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "印度料理",
      "烤餅",
      "Kita-ku周邊"
    ],
    "rating": 4.5,
    "description": "北12條地鐵站旁。由印度主廚掌勺，提供正宗北印素食，如「菠菜起司咖哩 (Palak Paneer)」與「香料烤豆腐」，香料味醇厚。",
    "address": "北海道札幌市中央区印度料理 モハンディシャ附近",
    "transit": "交通：從地鐵「Kita-ku站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4058",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mohan+Disha+(モハンディシャ)+Sapporo",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.0735,
    "lng": 141.345,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 59,
    "name": "Royal Indian Restaurant",
    "japaneseName": "ロイヤルインド 札幌店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "印度料理",
      "烤餅",
      "Toyohira周邊"
    ],
    "rating": 4.6,
    "description": "豐平區印度餐廳。提供「超值雙人素食套餐」，內含三款蔬菜咖哩、素三角餃（Samosa）與薑黃飯，美味飽足。",
    "address": "北海道札幌市中央区ロイヤルインド 札幌店附近",
    "transit": "交通：從地鐵「Toyohira站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4059",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal+Indian+Restaurant+Sapporo",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.0488,
    "lng": 141.3712,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 60,
    "name": "Indian Restaurant Ram",
    "japaneseName": "インド料理 ラム",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (植物性餐點)",
    "tags": [
      "精緻異國",
      "印度料理",
      "烤餅",
      "Nishi-ku周邊"
    ],
    "rating": 4.7,
    "description": "西區琴似。提供多種全素（Vegan）印度咖哩，使用椰奶代替牛乳，並配有豐富 of 秋葵、茄子與扁豆。",
    "address": "北海道札幌市中央区インド料理 ラム附近",
    "transit": "交通：從地鐵「Nishi-ku站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4060",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Indian+Restaurant+Ram+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.0722,
    "lng": 141.2988,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 61,
    "name": "Saizeriya (Susukino)",
    "japaneseName": "サイゼリヤ すすきの駅前店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "平價義式",
      "披薩意麵",
      "Susukino周邊"
    ],
    "rating": 4.8,
    "description": "日本極高性價比的連鎖義式餐廳。素食者可點「瑪格麗特披薩」、「水牛起司沙拉」和「番茄香草義大利麵」，是深夜想吃素宵夜時的救星。",
    "address": "北海道札幌市中央区サイゼリヤ すすきの駅前店附近",
    "transit": "交通：從地鐵「Susukino站」步行約 2-5 分鐘",
    "hours": "10:00 - 22:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4061",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Saizeriya+(Susukino)+Sapporo",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.0558,
    "lng": 141.3539,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "22:00"
        }
      ]
    }
  },
  {
    "id": 62,
    "name": "Saizeriya (Sapporo Station)",
    "japaneseName": "サイゼリヤ 札幌駅北口店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "平價義式",
      "披薩意麵",
      "Sapporo Station周邊"
    ],
    "rating": 4.9,
    "description": "位於札幌站北口旁。菜單附有詳細的過敏與成分表，可輕鬆避開肉類，蒜香軟法麵包與青豆溫沙拉（去培根）亦深受歡迎。",
    "address": "北海道札幌市中央区サイゼリヤ 札幌駅北口店附近",
    "transit": "交通：從地鐵「Sapporo Station站」步行約 2-5 分鐘",
    "hours": "10:00 - 22:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4062",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Saizeriya+(Sapporo+Station)+Sapporo",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.0691,
    "lng": 141.3515,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "22:00"
        }
      ]
    }
  },
  {
    "id": 63,
    "name": "Saizeriya (Odori)",
    "japaneseName": "サイゼリヤ 札幌狸小路店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "平價義式",
      "披薩意麵",
      "Tanukikoji周邊"
    ],
    "rating": 4.1,
    "description": "狸小路4丁目分店。提供方便快捷的義式蔬食，點餐使用填單制，非常適合自由行旅客快速用餐。",
    "address": "北海道札幌市中央区サイゼリヤ 札幌狸小路店附近",
    "transit": "交通：從地鐵「Tanukikoji站」步行約 2-5 分鐘",
    "hours": "10:00 - 22:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4063",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Saizeriya+(Odori)+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.0574,
    "lng": 141.3522,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "22:00"
        }
      ]
    }
  },
  {
    "id": 64,
    "name": "Pizza Salvatore Cuomo (Susukino)",
    "japaneseName": "ピッツァ サルヴァトーレ クオモ すすきの",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (植物性餐點)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Susukino周邊"
    ],
    "rating": 4.2,
    "description": "知名正宗窯烤披薩。提供正宗的拿坡里「瑪格麗特披薩」與「馬利納拉純素披薩（僅有番茄醬、大蒜與奧勒岡葉，無起司）」，窯烤香氣十足。",
    "address": "北海道札幌市中央区ピッツァ サルヴァトーレ クオモ すすきの附近",
    "transit": "交通：從地鐵「Susukino站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4064",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pizza+Salvatore+Cuomo+(Susukino)+Sapporo",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.0543,
    "lng": 141.3548,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 65,
    "name": "Pizza Salvatore Cuomo (Sapporo)",
    "japaneseName": "ピッツァ サルヴァトーレ クオモ 北2条",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Sapporo Station周邊"
    ],
    "rating": 4.3,
    "description": "位於北2條大樓內，平日中午提供自助餐。自助餐包含豐富的沙拉吧、窯烤蔬菜及素食義大利麵，是蔬菜補充的好地方。",
    "address": "北海道札幌市中央区ピッツァ サルヴァトーレ クオモ 北2条附近",
    "transit": "交通：從地鐵「Sapporo Station站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4065",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pizza+Salvatore+Cuomo+(Sapporo)+Sapporo",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.0645,
    "lng": 141.3541,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 66,
    "name": "Cafe Blue (カフェブルー)",
    "japaneseName": "Cafe Blue 円山",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Maruyama周邊"
    ],
    "rating": 4.4,
    "description": "圓山山麓下的超人氣網美咖啡廳。提供精緻的「水果冰淇淋鬆餅（蛋奶素）」與「黑糖蜜黃豆粉法式吐司」，環境非常優雅舒適。",
    "address": "北海道札幌市中央区Cafe Blue 円山附近",
    "transit": "交通：從地鐵「Maruyama站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4066",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+Blue+(カフェブルー)+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.0488,
    "lng": 141.3212,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 67,
    "name": "Cafe RAWLIFE",
    "japaneseName": "Cafe RAWLIFE",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (植物性餐點)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Chuo-ku周邊"
    ],
    "rating": 4.5,
    "description": "主打冷壓果汁與生食（Raw Food）的健康咖啡廳。提供「純素酪梨吐司」、「生純素巧克力塔」及有機手沖咖啡，不使用任何高溫烹調，保留食材酵素。",
    "address": "北海道札幌市中央区Cafe RAWLIFE附近",
    "transit": "交通：從地鐵「Chuo-ku站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4067",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+RAWLIFE+Sapporo",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.0588,
    "lng": 141.3321,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 68,
    "name": "Little Juice Bar (札幌本店)",
    "japaneseName": "リトルジュースバー 札幌本店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (植物性餐點)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Tanukikoji周邊"
    ],
    "rating": 4.6,
    "description": "創成川旁的網美冰品店。招牌「草莓削削冰」使用100%冷凍草莓切片，淋上純素豆乳煉乳，另外也提供多款現打綠色蔬果昔（Smoothie）。",
    "address": "北海道札幌市中央区リトルジュースバー 札幌本店附近",
    "transit": "交通：從地鐵「Tanukikoji站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4068",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Little+Juice+Bar+(札幌本店)+Sapporo",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.0578,
    "lng": 141.3578,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 69,
    "name": "Agt Cafe Rainbow",
    "japaneseName": "Agt カフェ レインボー",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (植物性餐點)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Toyohira周邊"
    ],
    "rating": 4.7,
    "description": "主打「整粒糙米」的健康純素餐廳。提供全素的「酵素玄米飯糰套餐」、糙米鬆餅以及暖胃的季節蔬菜味噌湯，不使用動物食材及化學調味料。",
    "address": "北海道札幌市中央区Agt カフェ レインボー附近",
    "transit": "交通：從地鐵「Toyohira站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4069",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Agt+Cafe+Rainbow+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.0411,
    "lng": 141.3622,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 70,
    "name": "Organic Cafe Organ",
    "japaneseName": "オーガニックカフェ オルガン",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Maruyama周邊"
    ],
    "rating": 4.8,
    "description": "圓山公園旁的有機食堂。午餐提供「穀物蔬菜溫沙拉盤」，搭配手作天然酵母麵包與有機豆乳拿鐵，店內氛圍沉靜祥和。",
    "address": "北海道札幌市中央区オーガニックカフェ オルガン附近",
    "transit": "交通：從地鐵「Maruyama站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4070",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Organic+Cafe+Organ+Sapporo",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.0581,
    "lng": 141.3123,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 71,
    "name": "Muji Cafe (Sapporo Parco)",
    "japaneseName": "Café&Meal MUJI 札幌パルコ",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Odori周邊"
    ],
    "rating": 4.9,
    "description": "無印良品內設咖啡廳。採自助選菜制，提供多款「素食冷熱熟食（如醋漬蓮藕、烤土豆、拌羊栖菜）」，可自由搭配糙米飯。",
    "address": "北海道札幌市中央区Café&Meal MUJI 札幌パルコ附近",
    "transit": "交通：從地鐵「Odori站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4071",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Muji+Cafe+(Sapporo+Parco)+Sapporo",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.0594,
    "lng": 141.3533,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 72,
    "name": "Royal Host (札幌駅前店)",
    "japaneseName": "ロイヤルホスト 札幌駅前店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Sapporo Station周邊"
    ],
    "rating": 4.1,
    "description": "高檔家庭餐廳。針對蔬食者特別推出了「Plant-Based 蔬菜咖哩」與「牛肝菌菇義大利麵」，菜單上均有清晰的植物性成分標示。",
    "address": "北海道札幌市中央区ロイヤルホスト 札幌駅前店附近",
    "transit": "交通：從地鐵「Sapporo Station站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4072",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal+Host+(札幌駅前店)+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.0664,
    "lng": 141.3533,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 73,
    "name": "Starbucks (Sapporo Station)",
    "japaneseName": "スターバックス 札幌紀伊國屋書店店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (植物性餐點)",
    "tags": [
      "精緻異國",
      "咖啡廳",
      "植物奶",
      "Sapporo Station周邊"
    ],
    "rating": 4.2,
    "description": "札幌站西口紀伊國屋內。提供多款可更換燕麥奶或杏仁奶的咖啡飲品，並售有「Plant-Based」標記的純素香蕉瑪芬與菠菜番茄塔。",
    "address": "北海道札幌市中央区スターバックス 札幌紀伊國屋書店店附近",
    "transit": "交通：從地鐵「Sapporo Station站」步行約 2-5 分鐘",
    "hours": "10:00 - 22:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4073",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Starbucks+(Sapporo+Station)+Sapporo",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.0682,
    "lng": 141.3499,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "22:00"
        }
      ]
    }
  },
  {
    "id": 74,
    "name": "Starbucks (Odori Park)",
    "japaneseName": "スターバックス 札幌大通ベビー店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "咖啡廳",
      "植物奶",
      "Odori周邊"
    ],
    "rating": 4.3,
    "description": "大通公園旁。逛大通公園累了可以在此休息，享用豆乳拿鐵配上植物性巧克力司康。",
    "address": "北海道札幌市中央区スターバックス 札幌大通ベビー店附近",
    "transit": "交通：從地鐵「Odori站」步行約 2-5 分鐘",
    "hours": "10:00 - 22:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4074",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Starbucks+(Odori+Park)+Sapporo",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.0599,
    "lng": 141.3519,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "22:00"
        }
      ]
    }
  },
  {
    "id": 75,
    "name": "MOS Burger (Sapporo Station)",
    "japaneseName": "モスバーガー 札幌駅北口店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (植物性餐點)",
    "tags": [
      "精緻異國",
      "連鎖速食",
      "植物肉堡",
      "Sapporo Station周邊"
    ],
    "rating": 4.4,
    "description": "日本知名漢堡連鎖。提供專為純素及素食者研發的「Green Burger (綠色漢堡)」，漢堡排由大豆製成，醬汁不含五辛及動物成分，麵包揉入菠菜汁呈綠色，非常美味！",
    "address": "北海道札幌市中央区モスバーガー 札幌駅北口店附近",
    "transit": "交通：從地鐵「Sapporo Station站」步行約 2-5 分鐘",
    "hours": "10:00 - 22:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4075",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=MOS+Burger+(Sapporo+Station)+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.0699,
    "lng": 141.3508,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "22:00"
        }
      ]
    }
  },
  {
    "id": 76,
    "name": "MOS Burger (Susukino)",
    "japaneseName": "モスバーガー すすきの店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (植物性餐點)",
    "tags": [
      "精緻異國",
      "連鎖速食",
      "植物肉堡",
      "Susukino周邊"
    ],
    "rating": 4.5,
    "description": "位於薄野十字路口。24小時營業（部分時段限外帶），是深夜想吃熱騰騰純素大豆漢堡與黃金薯條的絕佳選擇。",
    "address": "北海道札幌市中央区モスバーガー すすきの店附近",
    "transit": "交通：從地鐵「Susukino站」步行約 2-5 分鐘",
    "hours": "10:00 - 22:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4076",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=MOS+Burger+(Susukino)+Sapporo",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.0551,
    "lng": 141.3538,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "22:00"
        }
      ]
    }
  },
  {
    "id": 77,
    "name": "CoCo Ichibanya (Sapporo Station)",
    "japaneseName": "カレーハウスCoCo壱番屋 JR札幌駅パセオ店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "咖哩飯",
      "連鎖店",
      "Sapporo Station周邊"
    ],
    "rating": 4.6,
    "description": "日本最大的咖哩連鎖。店內提供專屬的「Vegetarian Curry (特定原材料不使用咖哩)」，使用無肉植物性咖哩醬底，可自由加點茄子、秋葵、土豆等配料。",
    "address": "北海道札幌市中央区カレーハウスCoCo壱番屋 JR札幌駅パセオ店附近",
    "transit": "交通：從地鐵「Sapporo Station站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4077",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=CoCo+Ichibanya+(Sapporo+Station)+Sapporo",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.0685,
    "lng": 141.3501,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 78,
    "name": "CoCo Ichibanya (Susukino)",
    "japaneseName": "カレーハウスCoCo壱番屋 中央区すすきの店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "咖哩飯",
      "連鎖店",
      "Susukino周邊"
    ],
    "rating": 4.7,
    "description": "薄野分店。同樣提供素食咖哩醬，辣度和飯量皆可自由選擇，桌上配有醃菜（福神漬，素食可食），是極為便利的素食點。",
    "address": "北海道札幌市中央区カレーハウスCoCo壱番屋 中央区すすきの店附近",
    "transit": "交通：從地鐵「Susukino站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4078",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=CoCo+Ichibanya+(Susukino)+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.0545,
    "lng": 141.3529,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 79,
    "name": "Kushikatsu Tanaka (Susukino)",
    "japaneseName": "串カツ田中 すすきの店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Susukino周邊"
    ],
    "rating": 4.8,
    "description": "日本著名大阪炸串連鎖。素食者可點「炸蔬菜串」，包括蓮藕、洋蔥、香菇、蘆筍和土豆，酥脆爽口（使用植物性炸油，但與肉類共用炸鍋，介意者請斟酌）。",
    "address": "北海道札幌市中央区串カツ田中 すすきの店附近",
    "transit": "交通：從地鐵「Susukino站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4079",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kushikatsu+Tanaka+(Susukino)+Sapporo",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.0541,
    "lng": 141.3511,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 80,
    "name": "Dotour Coffee (Sapporo Station)",
    "japaneseName": "ドトールコーヒーショップ 札幌駅地下街店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食選項/標示明確)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Sapporo Station周邊"
    ],
    "rating": 4.9,
    "description": "提供「全素全麥大豆肉漢堡」，使用溫和的柚子胡椒醬調味，並可更換豆乳調製咖啡。",
    "address": "北海道札幌市中央区ドトールコーヒーショップ 札幌駅地下街店附近",
    "transit": "交通：從地鐵「Sapporo Station站」步行約 2-5 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-231-4080",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dotour+Coffee+(Sapporo+Station)+Sapporo",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.0673,
    "lng": 141.3512,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    }
  },
  {
    "id": 81,
    "name": "Rokkatei (Sapporo Honten)",
    "japaneseName": "六花亭 札幌本店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素甜點/無肉成分)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "蛋奶素可",
      "北海道乳源",
      "Sapporo Station區"
    ],
    "rating": 4.7,
    "description": "北海道最著名的甜點品牌。2 樓設有直營咖啡廳，提供多種傳統日式甜點，如紅豆麻糬年糕湯、紅豆雪花冰及各式法式草莓千層派（蛋奶素），包裝精美適合做伴手禮。",
    "address": "北海道札幌市六花亭 札幌本店附近",
    "transit": "地鐵「Sapporo Station站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "不定休",
    "tel": "+81-11-221-5081",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rokkatei+(Sapporo+Honten)+Sapporo",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.0658,
    "lng": 141.3502,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 82,
    "name": "Rokkatei (Maruyama)",
    "japaneseName": "六花亭 円山店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素甜點/無肉成分)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "蛋奶素可",
      "北海道乳源",
      "Maruyama區"
    ],
    "rating": 4.8,
    "description": "位於圓山公園的優雅分店。店內採光極佳，推薦他們的招牌手作草莓泡芙及紅豆年糕定食，是散步後的絕佳下午茶歇腳處。",
    "address": "北海道札幌市六花亭 円山店附近",
    "transit": "地鐵「Maruyama站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5082",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rokkatei+(Maruyama)+Sapporo",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.0578,
    "lng": 141.321,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 83,
    "name": "Ryugetsu (Sapporo Station)",
    "japaneseName": "柳月 札幌エスタ店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素甜點烘焙",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "純素無蛋奶",
      "健康低糖",
      "Sapporo Station區"
    ],
    "rating": 4.9,
    "description": "以三方六（年輪蛋糕）聞名。提供多款精緻的傳統日式和菓子、大福及紅豆銅鑼燒，大部分傳統和菓子皆不含蛋奶，非常適合純素者品嚐。",
    "address": "北海道札幌市柳月 札幌エスタ店附近",
    "transit": "地鐵「Sapporo Station站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5083",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ryugetsu+(Sapporo+Station)+Sapporo",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.0682,
    "lng": 141.3533,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 84,
    "name": "Kinotoya (Sapporo Station)",
    "japaneseName": "洋菓子 きのとや 札幌駅店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素甜點/無肉成分)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "蛋奶素可",
      "北海道乳源",
      "Sapporo Station區"
    ],
    "rating": 4.4,
    "description": "以現烤半熟起司塔聞名。其起司塔外皮酥脆、內餡起司濃郁，為蛋奶素（無肉無魚介），是造訪札幌車站必排隊的網紅甜點。",
    "address": "北海道札幌市洋菓子 きのとや 札幌駅店附近",
    "transit": "地鐵「Sapporo Station站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "不定休",
    "tel": "+81-11-221-5084",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kinotoya+(Sapporo+Station)+Sapporo",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.0675,
    "lng": 141.3508,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 85,
    "name": "Kinotoya Odori Koen",
    "japaneseName": "きのとや 大通公園店 - 大通ビッセ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素甜點/無肉成分)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "蛋奶素可",
      "北海道乳源",
      "Odori區"
    ],
    "rating": 4.5,
    "description": "位於大通 BISSE 1 樓，設有寬敞的咖啡座。提供「極上牛乳霜淇淋」及多種新鮮水果戚風蛋糕，奶香極為濃郁（蛋奶素）。",
    "address": "北海道札幌市きのとや 大通公園店 - 大通ビッセ附近",
    "transit": "地鐵「Odori站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5085",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kinotoya+Odori+Koen+Sapporo",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.0611,
    "lng": 141.3538,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 86,
    "name": "Fruitcake Factory (本店)",
    "japaneseName": "フルーツケーキファクトリー 総本店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素甜點/無肉成分)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "蛋奶素可",
      "北海道乳源",
      "Tanukikoji區"
    ],
    "rating": 4.6,
    "description": "狸小路內的草莓甜點聖地。主打以北海道新鮮草莓與藍莓製作的巨型水果塔，色彩繽紛，派皮酥脆（蛋奶素）。",
    "address": "北海道札幌市フルーツケーキファクトリー 総本店附近",
    "transit": "地鐵「Tanukikoji站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5086",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fruitcake+Factory+(本店)+Sapporo",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.0573,
    "lng": 141.3519,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 87,
    "name": "Kitakara (北菓楼 札幌本館)",
    "japaneseName": "北菓楼 札幌本館",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素甜點/無肉成分)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "蛋奶素可",
      "北海道乳源",
      "Odori區"
    ],
    "rating": 4.7,
    "description": "由安藤忠雄設計的圖書館改建而成的典雅本館。2 樓咖啡廳提供精緻的「巨無霸泡芙」與「年輪蛋糕套餐」，伴手禮區的「開拓小饅頭」為紅豆餡，全素者亦可食用。",
    "address": "北海道札幌市北菓楼 札幌本館附近",
    "transit": "地鐵「Odori站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "不定休",
    "tel": "+81-11-221-5087",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kitakara+(北菓楼+札幌本館)+Sapporo",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.0622,
    "lng": 141.3522,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 88,
    "name": "Shiroi Koibito Park Cafe",
    "japaneseName": "白い恋人パーク カフェ・チョコレートココア",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素甜點/無肉成分)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "蛋奶素可",
      "北海道乳源",
      "Miyanosawa區"
    ],
    "rating": 4.8,
    "description": "白色戀人觀光工廠內。提供經典的白色戀人霜淇淋、巧克力火鍋及各式精緻蛋糕，館內環境夢幻（蛋奶素）。",
    "address": "北海道札幌市白い恋人パーク カフェ・チョコレートココア附近",
    "transit": "地鐵「Miyanosawa站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5088",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Shiroi+Koibito+Park+Cafe+Sapporo",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.0888,
    "lng": 141.2699,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 89,
    "name": "Ishiya Cafe (札幌大通店)",
    "japaneseName": "イシヤ カフェ 札幌大通西4大ビル店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素甜點/無肉成分)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "蛋奶素可",
      "北海道乳源",
      "Odori區"
    ],
    "rating": 4.9,
    "description": "白色戀人旗下咖啡廳。提供極具視覺衝擊的「厚鬆餅（Pancake）」，淋上厚厚一層原味鮮奶油與楓糖（蛋奶素）。",
    "address": "北海道札幌市イシヤ カフェ 札幌大通西4大ビル店附近",
    "transit": "地鐵「Odori站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5089",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ishiya+Cafe+(札幌大通店)+Sapporo",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.0602,
    "lng": 141.3523,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 90,
    "name": "White Cosy (よつ葉ホワイトコージ)",
    "japaneseName": "よつ葉ホワイトコージ 札幌ステラプレイス店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素甜點/無肉成分)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "蛋奶素可",
      "北海道乳源",
      "Sapporo Station區"
    ],
    "rating": 4.4,
    "description": "由北海道乳業巨頭「四葉乳業」直營。提供完全使用十勝產優質牛乳製作的聖代、芭菲及豆乳鬆餅，是奶素者的甜點聖堂。",
    "address": "北海道札幌市よつ葉ホワイトコージ 札幌ステラプレイス店附近",
    "transit": "地鐵「Sapporo Station站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "不定休",
    "tel": "+81-11-221-5090",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=White+Cosy+(よつ葉ホワイトコージ)+Sapporo",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.0679,
    "lng": 141.3509,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 91,
    "name": "Sana (Vegan Bakery)",
    "japaneseName": "Sana ビーガンベーカリー",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素甜點烘焙",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "純素無蛋奶",
      "健康低糖",
      "Chuo-ku區"
    ],
    "rating": 4.5,
    "description": "一間隱密的純素麵包坊。堅持不使用蛋、奶、精製砂糖和小麥麩質。招牌為純素鹽麵包、燕麥瑪芬與天然酵母吐司，口感扎實有嚼勁。",
    "address": "北海道札幌市Sana ビーガンベーカリー附近",
    "transit": "地鐵「Chuo-ku站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5091",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sana+(Vegan+Bakery)+Sapporo",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.0566,
    "lng": 141.3388,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 92,
    "name": "Cafe Clin d'oeil",
    "japaneseName": "カフェ クランドゥイ游",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素甜點烘焙",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "純素無蛋奶",
      "健康低糖",
      "Toyohira區"
    ],
    "rating": 4.6,
    "description": "豐平區的純素甜點小店。店內甜點均為每日新鮮現作，不含動物食材。最受歡迎的是純素豆腐起司蛋糕與有機草莓塔。",
    "address": "北海道札幌市カフェ クランドゥイ游附近",
    "transit": "地鐵「Toyohira站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5092",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+Clin+d'oeil+Sapporo",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.0455,
    "lng": 141.3655,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 93,
    "name": "Tsukisamu Anpan (月寒あんぱん)",
    "japaneseName": "月寒あんぱん 総本店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素甜點/無肉成分)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "蛋奶素可",
      "北海道乳源",
      "Toyohira區"
    ],
    "rating": 4.7,
    "description": "明治時期傳承至今的札幌在地點心。其外皮香脆，內餡為飽滿的十勝紅豆沙，傳統配方不含蛋奶，非常適合全素者作為旅途乾糧。",
    "address": "北海道札幌市月寒あんぱん 総本店附近",
    "transit": "地鐵「Toyohira站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "不定休",
    "tel": "+81-11-221-5093",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tsukisamu+Anpan+(月寒あんぱん)+Sapporo",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.0311,
    "lng": 141.3988,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 94,
    "name": "Sana Cafe (西区店)",
    "japaneseName": "Sana カフェ 西区山の手店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素甜點烘焙",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "純素無蛋奶",
      "健康低糖",
      "Nishi-ku區"
    ],
    "rating": 4.8,
    "description": "提供無麩質純素 Bagel（貝果）與燕麥拿鐵。貝果口味多樣，包括宇治抹茶紅豆、黑芝麻及南瓜栗子，深受女性旅客喜愛。",
    "address": "北海道札幌市Sana カフェ 西区山の手店附近",
    "transit": "地鐵「Nishi-ku站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5094",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sana+Cafe+(西区店)+Sapporo",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.0688,
    "lng": 141.2911,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 95,
    "name": "Fruit & Salad Cafe",
    "japaneseName": "フルーツ＆サラダ カフェ 大通店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素甜點烘焙",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "純素無蛋奶",
      "健康低糖",
      "Odori區"
    ],
    "rating": 4.9,
    "description": "提供大碗新鮮的水果沙拉盤、純素巴西莓碗（Acai Bowl）與新鮮冷壓椰子水，是旅途中補充電解質與維生素的好去處。",
    "address": "北海道札幌市フルーツ＆サラダ カフェ 大通店附近",
    "transit": "地鐵「Odori站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5095",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fruit+&+Salad+Cafe+Sapporo",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.0605,
    "lng": 141.3488,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 96,
    "name": "Sana Pan (北区店)",
    "japaneseName": "Sana パン 北24条店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素甜點烘焙",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "純素無蛋奶",
      "健康低糖",
      "Kita-ku區"
    ],
    "rating": 4.4,
    "description": "北24條附近的純素外帶麵包店。每天提供 15 款以上的米粉純素麵包，包括咖哩麵包與巧克力螺旋麵包，無動物成分。",
    "address": "北海道札幌市Sana パン 北24条店附近",
    "transit": "地鐵「Kita-ku站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "不定休",
    "tel": "+81-11-221-5096",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sana+Pan+(北区店)+Sapporo",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.0789,
    "lng": 141.3415,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 97,
    "name": "Natural Sweets Cafe",
    "japaneseName": "ナチュラルスイーツカフェ 中央店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素甜點烘焙",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "純素無蛋奶",
      "健康低糖",
      "Chuo-ku區"
    ],
    "rating": 4.5,
    "description": "提供純素紙杯蛋糕（Cupcake）與有機花草茶。紙杯蛋糕使用椰子油與豆乳霜代替傳統黃油，甜度適中，造型精美。",
    "address": "北海道札幌市ナチュラルスイーツカフェ 中央店附近",
    "transit": "地鐵「Chuo-ku站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5097",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Natural+Sweets+Cafe+Sapporo",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.0511,
    "lng": 141.3422,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 98,
    "name": "Japanese Sweets Kanoya",
    "japaneseName": "和菓子 鹿乃屋",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素甜點烘焙",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "純素無蛋奶",
      "健康低糖",
      "Tanukikoji區"
    ],
    "rating": 4.6,
    "description": "狸小路7丁目附近的傳統和菓子老店。招牌為醬油糰子、草餅（艾草紅豆）和櫻餅，皆為純素植物原料製作，口感軟糯。",
    "address": "北海道札幌市和菓子 鹿乃屋附近",
    "transit": "地鐵「Tanukikoji站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-5098",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Japanese+Sweets+Kanoya+Sapporo",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.0571,
    "lng": 141.3499,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 99,
    "name": "Rokatei Cafe (北店)",
    "japaneseName": "六花亭 北店 カフェ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素甜點/無肉成分)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "蛋奶素可",
      "北海道乳源",
      "Kita-ku區"
    ],
    "rating": 4.7,
    "description": "六花亭在北區的附設咖啡廳。除了招牌甜點外，還提供全素可食的十勝紅豆粥與烤年糕，冬日裡來一碗非常溫暖。",
    "address": "北海道札幌市六花亭 北店 カフェ附近",
    "transit": "地鐵「Kita-ku站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "不定休",
    "tel": "+81-11-221-5099",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rokatei+Cafe+(北店)+Sapporo",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.0911,
    "lng": 141.3388,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  },
  {
    "id": 100,
    "name": "Ryugetsu Odori",
    "japaneseName": "柳月 大通店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素甜點烘焙",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "純素無蛋奶",
      "健康低糖",
      "Odori區"
    ],
    "rating": 4.8,
    "description": "大通公園旁柳月直營店。提供限定版「十勝紅豆銅鑼燒（無蛋奶純素版）」，紅豆內餡極為細緻，帶有淡淡的楓糖香氣。",
    "address": "北海道札幌市柳月 大通店附近",
    "transit": "地鐵「Odori站」步行約 3-6 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-11-221-50100",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ryugetsu+Odori+Sapporo",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.0602,
    "lng": 141.3577,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    }
  }
]

// 全域地圖與定位相關變數
let map = null;
let mapMarkers = {};
let userMarker = null;
let userCoords = null;
let currentRenderedData = [...restaurants];

// 初始化網頁與事件監聽
document.addEventListener("DOMContentLoaded", () => {
  renderRestaurants(restaurants);
  setupFilters();
  setupSearch();
  setupStatusFilter();
  initLeafletMap();
  setupMapToggle();
  setupGeolocation();
  registerServiceWorker();
});

// 計算日本時間 (JST = UTC+9)
function getJapanTime() {
  const d = new Date();
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  return new Date(utc + (3600000 * 9));
}

// 判斷當前日本時間店家是否營業
function isOpenNow(item) {
  const jst = getJapanTime();
  const day = jst.getDay(); // 0(週日) - 6(週六)
  const hour = jst.getHours();
  const min = jst.getMinutes();
  const currentVal = hour * 100 + min; // 例如 11:30 -> 1130

  const bh = item.businessHours;
  if (!bh) return true;

  // 1. 檢查是否公休
  if (bh.closedDays && bh.closedDays.includes(day)) {
    return false;
  }

  // 2. 檢查時段 (週末如有獨立時段則優先套用)
  let periods = bh.periods;
  if (bh.weekendPeriods && (day === 0 || day === 6)) {
    periods = bh.weekendPeriods;
  }

  if (!periods || periods.length === 0) return false;

  return periods.some(p => {
    const [oH, oM] = p.open.split(':').map(Number);
    const [cH, cM] = p.close.split(':').map(Number);
    const openVal = oH * 100 + oM;
    const closeVal = cH * 100 + cM;
    return currentVal >= openVal && currentVal <= closeVal;
  });
}

// 1. 初始化 Leaflet.js 地圖 (地圖預設為隱藏，當顯示時會自適應所有標記)
function initLeafletMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  // 初始化地圖
  map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true
  });

  // 亮色高質感圖磚
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  // 初始化所有標記
  updateMapMarkers(restaurants);
  
  // 自動縮放以包含所有標記點
  adjustMapToFitAll();
}

// 自動將地圖縮放到容納當前所有的標記
function adjustMapToFitAll() {
  if (!map) return;
  
  // 取得當前有畫在地圖上的所有點
  const activeIds = Object.keys(mapMarkers);
  if (activeIds.length === 0) return;
  
  const points = [];
  restaurants.forEach(item => {
    if (activeIds.includes(item.id.toString())) {
      points.push([item.lat, item.lng]);
    }
  });
  
  if (points.length > 0) {
    map.fitBounds(points, {
      padding: [45, 45],
      maxZoom: 14
    });
  }
}

// 2. 地圖按需隱藏/開啟 (解決 Leaflet 破圖關鍵：invalidateSize)
function setupMapToggle() {
  const toggleMapBtn = document.getElementById("toggle-map-btn");
  const mapContainer = document.getElementById("map-container");
  if (!toggleMapBtn || !mapContainer) return;

  toggleMapBtn.addEventListener("click", () => {
    if (mapContainer.classList.contains("show")) {
      mapContainer.classList.remove("show");
      toggleMapBtn.classList.remove("active");
      toggleMapBtn.innerHTML = `
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
        </svg>
        開啟互動地圖 (在地圖上查看全部)
      `;
    } else {
      mapContainer.classList.add("show");
      toggleMapBtn.classList.add("active");
      toggleMapBtn.innerHTML = `
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        收起/隱藏地圖
      `;
      
      // 關鍵步驟：地圖容器在 display 改變後，必須叫 Leaflet 重新計算大小，否則會出現黑塊或破圖！
      if (map) {
        setTimeout(() => {
          map.invalidateSize();
          adjustMapToFitAll();
        }, 150);
      }
    }
  });
}

// 3. 更新地圖上的標記
function updateMapMarkers(activeRestaurants) {
  if (!map) return;

  // 清除舊標記
  Object.values(mapMarkers).forEach(marker => map.removeLayer(marker));
  mapMarkers = {};

  activeRestaurants.forEach(item => {
    const openStatus = isOpenNow(item);
    const customIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div class="map-pin-inner" style="background: ${item.gradient};">
          <svg class="map-pin-svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      `,
      iconSize: [34, 40],
      iconAnchor: [17, 40],
      popupAnchor: [0, -36]
    });

    const marker = L.marker([item.lat, item.lng], { icon: customIcon }).addTo(map);
    
    // 氣泡 Popup 中文資訊整合營業狀態
    const popupContent = `
      <div class="map-popup-card">
        <h4 style="font-family: 'Outfit', sans-serif; font-size: 1.05rem; color: #111827; margin-bottom: 2px; font-weight: 700;">${item.name}</h4>
        <p style="font-size: 0.75rem; color: #4b5563; margin-bottom: 8px;">${item.japaneseName}</p>
        
        <div style="margin-bottom: 8px;">
          <span style="font-size: 0.7rem; font-weight: 700; color: #047857; background: #ecfdf5; border: 1px solid #a7f3d0; padding: 2px 6px; border-radius: 4px;">${item.categoryLabel}</span>
          <span style="font-size: 0.7rem; font-weight: 700; margin-left: 4px; padding: 2px 6px; border-radius: 4px; ${openStatus ? 'background: #d1fae5; color: #065f46;' : 'background: #f3f4f6; color: #374151;'}">
            ${openStatus ? '🟢 營業中' : '⚪ 休息中'}
          </span>
        </div>
        
        ${item.distance ? `<p style="font-size: 0.8rem; color: #059669; margin-top: 8px; font-weight: bold;">距離您：${formatDistance(item.distance)}</p>` : ''}
        <button onclick="scrollToCard(${item.id})" style="width: 100%; border: none; background: #10b981; color: #fff; font-weight: 700; font-size: 0.75rem; padding: 6px 0; border-radius: 4px; margin-top: 8px; cursor: pointer;">查看店家詳情</button>
      </div>
    `;
    marker.bindPopup(popupContent);

    marker.on("click", () => {
      scrollToCard(item.id);
    });

    mapMarkers[item.id] = marker;
  });
}

// 4. 滾動與對焦
function scrollToCard(id) {
  const card = document.querySelector(`.restaurant-card[data-id="${id}"]`);
  if (!card) return;

  card.scrollIntoView({ behavior: "smooth", block: "center" });
  card.classList.add("highlight-glow");
  setTimeout(() => {
    card.classList.remove("highlight-glow");
  }, 2000);
}

function focusOnMapItem(id, lat, lng) {
  const toggleMapBtn = document.getElementById("toggle-map-btn");
  const mapContainer = document.getElementById("map-container");

  // 1. 如果地圖是收合的，自動將其展開！
  if (mapContainer && !mapContainer.classList.contains("show")) {
    mapContainer.classList.add("show");
    if (toggleMapBtn) {
      toggleMapBtn.classList.add("active");
      toggleMapBtn.innerHTML = `
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        收起/隱藏地圖
      `;
    }
    
    // 展開地圖需要 invalidateSize 重新渲染
    if (map) {
      setTimeout(() => {
        map.invalidateSize();
        performMapFocus();
      }, 150);
    }
  } else {
    performMapFocus();
  }

  function performMapFocus() {
    if (!map) return;
    map.setView([lat, lng], 15, { animate: true, duration: 0.8 });
    const marker = mapMarkers[id];
    if (marker) {
      setTimeout(() => {
        marker.openPopup();
      }, 400);
    }
    
    const mapElement = document.getElementById("map-container");
    if (mapElement) {
      window.scrollTo({
        top: mapElement.offsetTop - 20,
        behavior: "smooth"
      });
    }
  }
}

// 5. 渲染卡片清單 (增加營業中標記與東京時間比對)
function renderRestaurants(data) {
  const container = document.getElementById("restaurant-grid");
  if (!container) return;
  
  if (data.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="no-results-icon">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3>找不到符合的餐廳</h3>
        <p>請檢查您的搜尋詞或篩選條件，也可以切換回「顯示全部店家」預覽！</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = data.map(item => {
    const tagsHtml = item.tags.map(tag => `
      <span class="tag-badge" onclick="filterByTag('${tag}'); event.stopPropagation();"># ${tag}</span>
    `).join('');

    let statusClass = "status-option";
    if (item.vegStatus === "pure-vegan") {
      statusClass = "status-pure";
    }

    const distanceHtml = item.distance !== undefined ? `
      <div class="distance-badge">
        <svg class="distance-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
        <span>距離您 ${formatDistance(item.distance)}</span>
      </div>
    ` : '';

    // 即時計算此店家目前營業狀態
    const openStatus = isOpenNow(item);
    const openBadgeHtml = openStatus ? `
      <span class="open-status-badge open">🟢 日本時間營業中</span>
    ` : `
      <span class="open-status-badge closed">🔴 休息中/本日公休</span>
    `;

    return `
      <div class="restaurant-card" data-id="${item.id}" data-category="${item.category}">
        <div class="card-hero" style="background: ${item.gradient};">
          <div class="card-hero-overlay"></div>
          <span class="category-badge">${item.categoryLabel}</span>
          ${distanceHtml}
          <div class="rating-badge">
            <svg class="star-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>${item.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div class="card-content">
          <div class="card-header">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 4px;">
              <h3 class="restaurant-name" style="margin-bottom: 0;">${item.name}</h3>
              ${openBadgeHtml}
            </div>
            <p class="japanese-name">${item.japaneseName}</p>
            <span class="veg-status ${statusClass}">${item.vegStatusLabel}</span>
          </div>
          
          <p class="description">${item.description}</p>
          
          <div class="tags-container">
            ${tagsHtml}
          </div>
          
          <hr class="divider">
          
          <div class="info-list">
            <div class="info-item">
              <svg class="info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="info-text">${item.address}</span>
              <button class="copy-btn" onclick="copyAddress('${item.address}', this); event.stopPropagation();" title="複製地址">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            
            <div class="info-item">
              <svg class="info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span class="info-text highlight-transit">${item.transit}</span>
            </div>
            
            <div class="info-item">
              <svg class="info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="info-text"><strong>時間：</strong>${item.hours}</span>
            </div>
            
            <div class="info-item">
              <svg class="info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="info-text"><strong>公休：</strong><span class="closed-label">${item.closed}</span></span>
            </div>
            
            <div class="info-item">
              <svg class="info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:${item.tel}" class="info-text tel-link">${item.tel}</a>
            </div>
          </div>
          
          <div class="btn-group">
            <button onclick="focusOnMapItem(${item.id}, ${item.lat}, ${item.lng})" class="map-view-btn">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"></path>
              </svg>
              在地圖中查看
            </button>
            
            <a href="${item.mapUrl}" target="_blank" class="map-btn inline-btn">
              <svg class="map-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
              </svg>
              Google Maps 導航
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function formatDistance(distKm) {
  if (distKm < 1) {
    return `${Math.round(distKm * 1000)} 公尺`;
  }
  return `${distKm.toFixed(2)} 公里`;
}

// 6. 設定營業狀態篩選器 (單選按鈕)
function setupStatusFilter() {
  const radios = document.querySelectorAll("input[name='status-filter']");
  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      filterList();
    });
  });
}

// 7. 設定 Geolocation 定位
function setupGeolocation() {
  const geoBtn = document.getElementById("geo-btn");
  if (!geoBtn) return;

  geoBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      showToast("您的瀏覽器不支援定位功能 😭");
      return;
    }

    geoBtn.classList.add("loading");
    geoBtn.innerHTML = `
      <svg class="spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
      正在取得您當下的 GPS 位置...
    `;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        userCoords = { lat: latitude, lng: longitude };
        
        geoBtn.classList.remove("loading");
        geoBtn.innerHTML = `
          <svg class="geo-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          定位成功！已按距離為您排序
        `;
        geoBtn.classList.add("success");

        updateUserOnMap(latitude, longitude);
        calculateDistances(latitude, longitude);
        filterList();

        showToast("成功取得定位！已按照距離由近到遠為您排列餐廳 📍");
      },
      (error) => {
        console.error("定位出錯:", error);
        geoBtn.classList.remove("loading");
        geoBtn.innerHTML = `
          <svg class="geo-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          點擊取得我目前的位置
        `;
        let errorMsg = "無法取得位置，請確認您的瀏覽器是否已開啟 GPS 定位授權。";
        if (error.code === error.PERMISSION_DENIED) {
          errorMsg = "您已拒絕定位權限，請前往瀏覽器設定開啟。";
        }
        showToast(errorMsg);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  });
}

function updateUserOnMap(lat, lng) {
  if (!map) return;

  const userPulseIcon = L.divIcon({
    className: 'user-pulse-marker',
    html: `
      <div class="user-pulse-outer"></div>
      <div class="user-pulse-inner"></div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

  if (userMarker) {
    userMarker.setLatLng([lat, lng]);
  } else {
    userMarker = L.marker([lat, lng], { icon: userPulseIcon }).addTo(map);
  }

  const sortedByDist = [...currentRenderedData].sort((a, b) => a.distance - b.distance);
  if (sortedByDist.length > 0) {
    const nearest = sortedByDist[0];
    const bounds = L.latLngBounds([[lat, lng], [nearest.lat, nearest.lng]]);
    map.fitBounds(bounds, { padding: [60, 60] });
  } else {
    map.setView([lat, lng], 15);
  }
}

function calculateDistances(userLat, userLng) {
  restaurants.forEach(item => {
    item.distance = getHaversineDistance(userLat, userLng, item.lat, item.lng);
  });
}

function getHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// 8. 設置分類過濾
function setupFilters() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      filterList();
    });
  });
}

// 9. 設置搜尋
function setupSearch() {
  const searchInput = document.getElementById("search-bar");
  if (!searchInput) return;
  searchInput.addEventListener("input", () => {
    filterList();
  });
}

// 點擊標籤進行篩選
function filterByTag(tag) {
  const searchInput = document.getElementById("search-bar");
  if (searchInput) {
    searchInput.value = tag;
    window.scrollTo({
      top: document.getElementById("search-bar").offsetTop - 100,
      behavior: "smooth"
    });
    filterList();
  }
}

// 10. 綜合篩選邏輯 (搜尋 + 類別 + 營業中篩選)
function filterList() {
  const activeTab = document.querySelector(".tab-btn.active");
  const category = activeTab ? activeTab.getAttribute("data-filter") : "all";
  const searchInput = document.getElementById("search-bar");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  
  // 取得營業狀態單選過濾值
  const statusFilterEl = document.querySelector("input[name='status-filter']:checked");
  const statusFilter = statusFilterEl ? statusFilterEl.value : "all";

  let filtered = restaurants.filter(item => {
    // 1. 分類過濾
    const matchCategory = (category === "all" || item.category === category);
    
    // 2. 關鍵字過濾
    const matchQuery = !query || 
      item.name.toLowerCase().includes(query) ||
      item.japaneseName.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.address.toLowerCase().includes(query) ||
      item.transit.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query));
      
    // 3. 營業狀態過濾 (當選擇僅顯示營業中時)
    const matchStatus = (statusFilter === "all" || isOpenNow(item));

    return matchCategory && matchQuery && matchStatus;
  });
  
  if (userCoords) {
    filtered.sort((a, b) => a.distance - b.distance);
  }

  currentRenderedData = filtered;

  // 更新地圖標記與清單卡片
  updateMapMarkers(filtered);
  renderRestaurants(filtered);
  
  // 地圖展開時，若篩選結果有變，自動調焦以在畫面上展示所有過濾後的標記
  const mapContainer = document.getElementById("map-container");
  if (mapContainer && mapContainer.classList.contains("show")) {
    adjustMapToFitAll();
  }
}

// 複製地址
function copyAddress(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalIcon = btnElement.innerHTML;
    btnElement.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon success">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;
    btnElement.classList.add("copied");
    showToast("地址複製成功！可以直接在導航貼上囉 😊");
    setTimeout(() => {
      btnElement.innerHTML = originalIcon;
      btnElement.classList.remove("copied");
    }, 2000);
  }).catch(err => {
    console.error("無法複製地址: ", err);
    showToast("複製失敗，請手動選取地址複製");
  });
}

// 顯示 Toast
function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = "toast show";
  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}

// 註冊 PWA Service Worker
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          console.log('Service Worker 註冊成功，範圍:', reg.scope);
        })
        .catch(err => {
          console.warn('Service Worker 註冊失敗:', err);
        });
    });
  }
}
