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
    },
    "region": "sapporo",
    "mapLabel": "純素漢堡聖代"
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
    },
    "region": "sapporo",
    "mapLabel": "長壽有機壽司"
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
    },
    "region": "sapporo",
    "mapLabel": "全素藥膳拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "預約制純素麵"
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
    },
    "region": "sapporo",
    "mapLabel": "植物性湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "藥膳全素咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "印式蔬食咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "無麩純素千層"
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
    },
    "region": "sapporo",
    "mapLabel": "有機糙米便當"
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
    },
    "region": "sapporo",
    "mapLabel": "無麩純素司康"
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
    },
    "region": "sapporo",
    "mapLabel": "蔬菜味噌拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "蔬菜味噌拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "蔬菜味噌拉麵"
  },
  {
    "id": 14,
    "name": "Ippudo (一風堂 札幌狸小路店)",
    "japaneseName": "一風堂 札幌狸小路店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供 Plant-Based 赤丸拉麵)",
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
    },
    "region": "sapporo",
    "mapLabel": "植物性紅丸麵"
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
    },
    "region": "sapporo",
    "mapLabel": "蔬菜味噌拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "日式野菜拉麵"
  },
  {
    "id": 17,
    "name": "Ramen Shimajirou (ラーメン しま治)",
    "japaneseName": "ラーメン しま治",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供全素醬油拉麵/可去五辛)",
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
    },
    "region": "sapporo",
    "mapLabel": "日式野菜拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "蔬菜味噌拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "日式野菜拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "日式野菜拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "蔬菜味噌拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "日式野菜拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "蔬菜味噌拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "蔬菜味噌拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "日式野菜拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "蔬菜味噌拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "蔬菜味噌拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "日式野菜拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "日式野菜拉麵"
  },
  {
    "id": 30,
    "name": "Ramen Sapporo Ichiryuan (一粒庵 創成川店)",
    "japaneseName": "ラーメン札幌 一粒庵 創成川店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供純素味噌拉麵)",
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
    },
    "region": "sapporo",
    "mapLabel": "蔬菜味噌拉麵"
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
    },
    "region": "sapporo",
    "mapLabel": "20種野菜咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "20種野菜咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "串燒野菜咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "串燒野菜咖哩"
  },
  {
    "id": 35,
    "name": "Soup Curry Suage3",
    "japaneseName": "スープカレー すあげ3",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供純素野菜咖哩)",
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
    },
    "region": "sapporo",
    "mapLabel": "串燒野菜咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "人氣炙燒野菜"
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
    },
    "region": "sapporo",
    "mapLabel": "人氣炙燒野菜"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
  },
  {
    "id": 39,
    "name": "Soup Curry YELLOW",
    "japaneseName": "スープカレー イエロー",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供野菜豆腐咖哩/可選純素底)",
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
  },
  {
    "id": 44,
    "name": "Soup Curry lavi (札幌駅店)",
    "japaneseName": "スープカレー lavi JRタワー札幌エスタ店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供椰香蔬菜咖哩/可選昆布底)",
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
  },
  {
    "id": 48,
    "name": "Soup Curry Onions",
    "japaneseName": "スープカレー オニオンズ",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供季節野菜咖哩/純素底)",
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
  },
  {
    "id": 55,
    "name": "Soup Curry Cocoro (圓山店)",
    "japaneseName": "スープカレー ココロ 円山店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供有機野菜與豆乳咖哩)",
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
    },
    "region": "sapporo",
    "mapLabel": "野菜湯咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "北印香料咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "北印香料咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "北印香料咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "北印香料咖哩"
  },
  {
    "id": 60,
    "name": "Indian Restaurant Ram",
    "japaneseName": "インド料理 ラム",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供全素椰奶咖哩/無烤餅)",
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
    },
    "region": "sapporo",
    "mapLabel": "北印香料咖哩"
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
    },
    "region": "sapporo",
    "mapLabel": "平價披薩意麵"
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
    },
    "region": "sapporo",
    "mapLabel": "平價披薩意麵"
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
    },
    "region": "sapporo",
    "mapLabel": "平價披薩意麵"
  },
  {
    "id": 64,
    "name": "Pizza Salvatore Cuomo (Susukino)",
    "japaneseName": "ピッツァ サルヴァトーレ クオモ すすきの",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供馬利納拉披薩/去起司純素可)",
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
    },
    "region": "sapporo",
    "mapLabel": "精緻蔬食異國"
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
    },
    "region": "sapporo",
    "mapLabel": "精緻蔬食異國"
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
    },
    "region": "sapporo",
    "mapLabel": "精緻蔬食異國"
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
    },
    "region": "sapporo",
    "mapLabel": "純素酪梨生塔"
  },
  {
    "id": 68,
    "name": "Little Juice Bar (札幌本店)",
    "japaneseName": "リトルジュースバー 札幌本店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (葷食店附純素餐點) (植物性餐點)",
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
    },
    "region": "sapporo",
    "mapLabel": "精緻蔬食異國"
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
    },
    "region": "sapporo",
    "mapLabel": "純素糙米飯糰"
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
    },
    "region": "sapporo",
    "mapLabel": "精緻蔬食異國"
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
    },
    "region": "sapporo",
    "mapLabel": "精緻蔬食異國"
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
    },
    "region": "sapporo",
    "mapLabel": "精緻蔬食異國"
  },
  {
    "id": 73,
    "name": "Starbucks (Sapporo Station)",
    "japaneseName": "スターバックス 札幌紀伊國屋書店店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供植物肉堡/燕麥奶)",
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
    },
    "region": "sapporo",
    "mapLabel": "燕麥奶瑪芬杯"
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
    },
    "region": "sapporo",
    "mapLabel": "燕麥奶瑪芬杯"
  },
  {
    "id": 75,
    "name": "MOS Burger (Sapporo Station)",
    "japaneseName": "モスバーガー 札幌駅北口店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供植物肉綠漢堡)",
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
    },
    "region": "sapporo",
    "mapLabel": "植物肉綠漢堡"
  },
  {
    "id": 76,
    "name": "MOS Burger (Susukino)",
    "japaneseName": "モスバーガー すすきの店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供植物肉綠漢堡)",
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
    },
    "region": "sapporo",
    "mapLabel": "植物肉綠漢堡"
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
    },
    "region": "sapporo",
    "mapLabel": "植系咖哩飯"
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
    },
    "region": "sapporo",
    "mapLabel": "植系咖哩飯"
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
    },
    "region": "sapporo",
    "mapLabel": "精緻蔬食異國"
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
    },
    "region": "sapporo",
    "mapLabel": "精緻蔬食異國"
  },
  {
    "id": 81,
    "name": "Rokkatei (Sapporo Honten)",
    "japaneseName": "六花亭 札幌本店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素甜點/無肉成分)",
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
    },
    "region": "sapporo",
    "mapLabel": "日式紅豆年糕"
  },
  {
    "id": 82,
    "name": "Rokkatei (Maruyama)",
    "japaneseName": "六花亭 円山店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素甜點/無肉成分)",
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
    },
    "region": "sapporo",
    "mapLabel": "日式紅豆年糕"
  },
  {
    "id": 83,
    "name": "Ryugetsu (Sapporo Station)",
    "japaneseName": "柳月 札幌エスタ店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (傳統日式大福/大眾甜點)",
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
    },
    "region": "sapporo",
    "mapLabel": "傳統日式大福"
  },
  {
    "id": 84,
    "name": "Kinotoya (Sapporo Station)",
    "japaneseName": "洋菓子 きのとや 札幌駅店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素甜點/無肉成分)",
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
    },
    "region": "sapporo",
    "mapLabel": "現烤乳酪塔"
  },
  {
    "id": 85,
    "name": "Kinotoya Odori Koen",
    "japaneseName": "きのとや 大通公園店 - 大通ビッセ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素甜點/無肉成分)",
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
    },
    "region": "sapporo",
    "mapLabel": "現烤乳酪塔"
  },
  {
    "id": 86,
    "name": "Fruitcake Factory (本店)",
    "japaneseName": "フルーツケーキファクトリー 総本店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素甜點/無肉成分)",
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
    },
    "region": "sapporo",
    "mapLabel": "精緻甜點烘焙"
  },
  {
    "id": 87,
    "name": "Kitakara (北菓楼 札幌本館)",
    "japaneseName": "北菓楼 札幌本館",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素甜點/無肉成分)",
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
    },
    "region": "sapporo",
    "mapLabel": "精緻甜點烘焙"
  },
  {
    "id": 88,
    "name": "Shiroi Koibito Park Cafe",
    "japaneseName": "白い恋人パーク カフェ・チョコレートココア",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素甜點/無肉成分)",
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
    },
    "region": "sapporo",
    "mapLabel": "精緻甜點烘焙"
  },
  {
    "id": 89,
    "name": "Ishiya Cafe (札幌大通店)",
    "japaneseName": "イシヤ カフェ 札幌大通西4大ビル店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素甜點/無肉成分)",
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
    },
    "region": "sapporo",
    "mapLabel": "精緻甜點烘焙"
  },
  {
    "id": 90,
    "name": "White Cosy (よつ葉ホワイトコージ)",
    "japaneseName": "よつ葉ホワイトコージ 札幌ステラプレイス店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素甜點/無肉成分)",
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
    },
    "region": "sapporo",
    "mapLabel": "牛乳聖代鬆餅"
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
    },
    "region": "sapporo",
    "mapLabel": "無麩純素貝果"
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
    },
    "region": "sapporo",
    "mapLabel": "精緻甜點烘焙"
  },
  {
    "id": 93,
    "name": "Tsukisamu Anpan (月寒あんぱん)",
    "japaneseName": "月寒あんぱん 総本店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素甜點/無肉成分)",
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
    },
    "region": "sapporo",
    "mapLabel": "精緻甜點烘焙"
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
    },
    "region": "sapporo",
    "mapLabel": "無麩純素貝果"
  },
  {
    "id": 95,
    "name": "Fruit & Salad Cafe",
    "japaneseName": "フルーツ＆サラダ カフェ 大通店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供新鮮水果沙拉盤與巴西莓碗)",
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
    },
    "region": "sapporo",
    "mapLabel": "精緻甜點烘焙"
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
    },
    "region": "sapporo",
    "mapLabel": "無麩純素貝果"
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
    },
    "region": "sapporo",
    "mapLabel": "精緻甜點烘焙"
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
    },
    "region": "sapporo",
    "mapLabel": "精緻甜點烘焙"
  },
  {
    "id": 99,
    "name": "Rokatei Cafe (北店)",
    "japaneseName": "六花亭 北店 カフェ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素甜點/無肉成分)",
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
    },
    "region": "sapporo",
    "mapLabel": "精緻甜點烘焙"
  },
  {
    "id": 100,
    "name": "Ryugetsu Odori",
    "japaneseName": "柳月 大通店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (傳統日式大福/大眾甜點)",
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
    },
    "region": "sapporo",
    "mapLabel": "傳統日式大福"
  },
  {
    "id": 101,
    "name": "Otaru Canal Vegetable Sushi",
    "japaneseName": "小樽運河野菜寿司",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供專屬野菜壽司)",
    "tags": [
      "壽司",
      "近運河",
      "日式無五辛",
      "精緻簡餐",
      "小樽"
    ],
    "rating": 4.6,
    "description": "小樽運河旁的知名壽司店。特別針對不吃肉、魚的旅客，推出以當季山藥、香菇、醃漬蘿蔔及竹筍製作的「純素野菜壽司定食」，味道清甜高雅。",
    "address": "北海道小樽市港町5-4",
    "transit": "小樽站步行約 8 分鐘",
    "hours": "11:30 - 20:30",
    "closed": "每週三公休",
    "tel": "+81-134-21-1001",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Otaru+Canal+Vegetable+Sushi+小樽",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.1932,
    "lng": 141.0088,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "20:30"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "蔬食壽司"
  },
  {
    "id": 102,
    "name": "Cafe White Otaru",
    "japaneseName": "カフェ ホワイト 小樽店",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供素食義大利麵與輕食)",
    "tags": [
      "咖啡廳",
      "古民家",
      "燕麥奶可",
      "精緻簡餐",
      "小樽"
    ],
    "rating": 4.5,
    "description": "由小樽傳統老屋改造的現代風咖啡廳。提供以特製番茄羅勒醬熬製的蔬菜義大利麵，以及全素酪梨烤吐司，燕麥奶咖啡極受歡迎。",
    "address": "北海道小樽市色内2-1-2",
    "transit": "小樽站步行約 10 分鐘",
    "hours": "11:00 - 18:00",
    "closed": "無特定公休日",
    "tel": "+81-134-22-1002",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+White+Otaru+小樽",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.1945,
    "lng": 141.0021,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "18:00"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "義式麵咖啡"
  },
  {
    "id": 103,
    "name": "ISO Italian Otaru",
    "japaneseName": "小樽洋食餐酒館 ISO",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (瑪格麗特比薩/去起司純素可)",
    "tags": [
      "窯烤比薩",
      "歷史建築",
      "浪漫氛圍",
      "精緻簡餐",
      "小樽"
    ],
    "rating": 4.7,
    "description": "位於紅磚歷史建築內的經典洋食館。設有石窯，能為素食者製作經典瑪格麗特比薩（蛋奶素），或去起司的純素馬利納拉比薩，焦香十足。",
    "address": "北海道小樽市色内2-2-14",
    "transit": "小樽站步行約 9 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "每週三公休",
    "tel": "+81-134-23-1003",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=ISO+Italian+Otaru+小樽",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.1951,
    "lng": 141.0033,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "窯烤比薩"
  },
  {
    "id": 104,
    "name": "Otaru Soba (小樽手打蕎麥麵)",
    "japaneseName": "手打ちそば 小樽蕎麦屋",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供純野菜天婦羅與素醬汁)",
    "tags": [
      "蕎麥麵",
      "十割蕎麥",
      "無肉高湯可",
      "精緻簡餐",
      "小樽"
    ],
    "rating": 4.4,
    "description": "傳統日式手打蕎麥麵店。可要求提供「昆布香菇素食醬汁」而非柴魚醬汁，搭配現炸的北海道南瓜、土豆與舞菇天婦羅（野菜天麩羅）。",
    "address": "北海道小樽市稻穗3-10-5",
    "transit": "小樽站步行約 3 分鐘",
    "hours": "11:00 - 19:30",
    "closed": "每週一公休",
    "tel": "+81-134-24-1004",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Otaru+Soba+(小樽手打蕎麥麵)+小樽",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.1972,
    "lng": 141.0011,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "19:30"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "蕎麥麵天婦"
  },
  {
    "id": 105,
    "name": "Green Cafe Otaru",
    "japaneseName": "グリーンカフェ 小樽店",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (綠色健康輕食)",
    "tags": [
      "純素昔",
      "有機沙拉",
      "排毒果汁",
      "精緻簡餐",
      "小樽"
    ],
    "rating": 4.6,
    "description": "小樽運河旁的有機果汁與輕食吧。全店不使用動物成分。主打鮮榨綠色排毒蔬果昔、糙米蔬菜沙拉碗及純素藍莓馬芬，是逛街防毒的好去處。",
    "address": "北海道小樽市港町4-3",
    "transit": "小樽站步行約 7 分鐘",
    "hours": "10:00 - 17:00",
    "closed": "無特定公休日",
    "tel": "+81-134-25-1005",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Green+Cafe+Otaru+小樽",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.1925,
    "lng": 141.0095,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "17:00"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "有機沙拉昔"
  },
  {
    "id": 106,
    "name": "Otaru Ramen Tokiya",
    "japaneseName": "小樽らーめん ときや",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (特製素醬油拉麵)",
    "tags": [
      "拉麵",
      "無肉湯底",
      "近大正硝子",
      "拉麵",
      "小樽"
    ],
    "rating": 4.3,
    "description": "鄰近大正硝子館的家庭拉麵店。店家特別為素食旅客準備了以昆布和香菇粉熬製的純素醬油拉麵，搭配滿滿的豆芽、青蔥與海苔，口味清爽溫和。",
    "address": "北海道小樽市色内1-12-8",
    "transit": "小樽站步行約 11 分鐘",
    "hours": "11:00 - 20:00",
    "closed": "每週四公休",
    "tel": "+81-134-26-1006",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Otaru+Ramen+Tokiya+小樽",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.1921,
    "lng": 141.0042,
    "businessHours": {
      "closedDays": [
        4
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "20:00"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "時光蔬菜麵"
  },
  {
    "id": 107,
    "name": "Soup Curry Guy Otaru",
    "japaneseName": "スープカレー ガイ 小樽店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供椰奶純蔬菜湯底)",
    "tags": [
      "湯咖哩",
      "南瓜土豆",
      "辣度可選",
      "湯咖哩",
      "小樽"
    ],
    "rating": 4.5,
    "description": "小樽當地的湯咖哩人氣店。其「野菜湯咖哩」可客製為純植物性高湯，使用北海道特產黃金土豆、南瓜、蓮藕與秋葵，香料濃郁意境深刻。",
    "address": "北海道小樽市花園1-4-20",
    "transit": "南小樽站步行約 10 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "每週二公休",
    "tel": "+81-134-27-1007",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Guy+Otaru+小樽",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.1901,
    "lng": 140.9999,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "野菜湯咖哩"
  },
  {
    "id": 108,
    "name": "Otaru LeTAO Path (甜點)",
    "japaneseName": "LeTAO 小樽洋菓子本店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素雙層起司蛋糕)",
    "tags": [
      "起司蛋糕",
      "伴手禮",
      "下午茶",
      "甜點烘焙",
      "小樽"
    ],
    "rating": 4.8,
    "description": "小樽最著名的甜點巨頭 LeTAO 本店。其招牌「雙層起司蛋糕 (Double Fromage)」為蛋奶素（無肉無魚介底），入口即化，是小樽最經典的下午茶甜點。",
    "address": "北海道小樽市堺町7-16",
    "transit": "南小樽站步行約 6 分鐘",
    "hours": "09:00 - 18:00",
    "closed": "無特定公休日",
    "tel": "+81-134-31-4500",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Otaru+LeTAO+Path+(甜點)+小樽",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.1911,
    "lng": 141.0079,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "09:00",
          "close": "18:00"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "雙層起司塔"
  },
  {
    "id": 109,
    "name": "Yamanaka Dairy Farm Otaru",
    "japaneseName": "山中牧場 小樽店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素牛乳霜淇淋)",
    "tags": [
      "霜淇淋",
      "天然乳源",
      "極濃郁",
      "甜點烘焙",
      "小樽"
    ],
    "rating": 4.7,
    "description": "來自赤井川山中牧場的直營霜淇淋店。使用優質牛乳製成，乳香味極重，為蛋奶素，是夏季造訪小樽運河時人手一支的避暑聖品。",
    "address": "北海道小樽市色内1-6-18",
    "transit": "小樽站步行約 7 分鐘",
    "hours": "11:00 - 18:00",
    "closed": "無特定公休日",
    "tel": "+81-134-27-5123",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Yamanaka+Dairy+Farm+Otaru+小樽",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.1936,
    "lng": 141.0039,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "18:00"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "牛乳霜淇淋"
  },
  {
    "id": 110,
    "name": "Otaru Canal Cafeteria (中華蔬食)",
    "japaneseName": "小樽運河食堂 菜の香",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供炒野菜與素炒飯)",
    "tags": [
      "大空間",
      "中華料理",
      "炒野菜",
      "精緻簡餐",
      "小樽"
    ],
    "rating": 4.2,
    "description": "位於運河食堂內。提供現點現做的「中華風炒時蔬」與「蛋素炒飯」，可跟廚師溝通不使用雞粉或豬肉，適合想吃熱炒的旅客。",
    "address": "北海道小樽市港町6-5 小樽運河食堂內",
    "transit": "小樽站步行約 8 分鐘",
    "hours": "11:00 - 21:30",
    "closed": "無特定公休日",
    "tel": "+81-134-21-2200",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Otaru+Canal+Cafeteria+(中華蔬食)+小樽",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.1928,
    "lng": 141.0099,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:30"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "中華野菜炒"
  },
  {
    "id": 111,
    "name": "Asahikawa Ramen Aoba",
    "japaneseName": "旭川らぅめん青葉 本店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (必須預先告知不加叉燒魚介底)",
    "tags": [
      "醬油拉麵",
      "老字號",
      "無肉高湯可",
      "拉麵",
      "旭川"
    ],
    "rating": 4.6,
    "description": "創立於昭和22年的超老字號旭川拉麵店。可跟店家特別點選「無叉燒、昆布香菇醬油拉麵（素食版本）」，以醬油乾炒筍乾和海苔，保留旭川拉麵的懷舊美味。",
    "address": "北海道旭川市2条通8丁目左8",
    "transit": "旭川站步行約 5 分鐘",
    "hours": "09:30 - 20:00",
    "closed": "每週三公休",
    "tel": "+81-166-23-2820",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Asahikawa+Ramen+Aoba+旭川",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.7668,
    "lng": 142.3592,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "09:30",
          "close": "20:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "醬油素拉麵"
  },
  {
    "id": 112,
    "name": "Baikouken Asahikawa",
    "japaneseName": "梅光軒 旭川本店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬菜味噌拉麵)",
    "tags": [
      "拉麵",
      "經典旭川",
      "高麗菜豆芽",
      "拉麵",
      "旭川"
    ],
    "rating": 4.5,
    "description": "榮獲旭川拉麵大獎的著名店家。為素食者提供「蔬菜增量味噌拉麵」，不加叉燒，高麗菜、洋蔥和豆芽在大火上炒出濃郁焦香，湯頭極為香醇。",
    "address": "北海道旭川市2条通8丁目 ピアザビル B1F",
    "transit": "旭川站步行約 4 分鐘",
    "hours": "11:00 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-166-24-4575",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Baikouken+Asahikawa+旭川",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.7669,
    "lng": 142.3585,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "蔬菜味噌麵"
  },
  {
    "id": 113,
    "name": "Soup Curry Suage Asahikawa",
    "japaneseName": "スープカレー すあげ 旭川店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (串燒野菜咖哩，純素底)",
    "tags": [
      "湯咖哩",
      "近旭川站",
      "野菜多樣",
      "湯咖哩",
      "旭川"
    ],
    "rating": 4.6,
    "description": "Suage 在旭川的直營店。提供深受喜愛的「野菜湯咖哩」，可選擇全植物性無肉咖哩底，炸胡蘿蔔、秋葵、土豆穿在竹籤上，美味又好玩。",
    "address": "北海道旭川市5条通8丁目1253-1",
    "transit": "旭川站步行約 8 分鐘",
    "hours": "11:30 - 21:30",
    "closed": "無特定公休日",
    "tel": "+81-166-22-2622",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soup+Curry+Suage+Asahikawa+旭川",
    "gradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "lat": 43.7712,
    "lng": 142.3599,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:30"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "串燒野菜咖"
  },
  {
    "id": 114,
    "name": "Cafe Libera Asahikawa",
    "japaneseName": "カフェ リベラ 旭川店",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (自家有機栽種野菜簡餐)",
    "tags": [
      "純素定食",
      "有機糙米",
      "無蛋奶",
      "精緻簡餐",
      "旭川"
    ],
    "rating": 4.7,
    "description": "旭川市郊外的純素療癒咖啡廳。使用自家菜園栽種的有機蔬菜，提供「日式大豆素排定食」、「純素蔬菜咖哩」以及無乳製品的有機手作蛋糕，環境非常清幽。",
    "address": "北海道旭川市神楽3条12丁目2-12",
    "transit": "神樂岡站步行約 12 分鐘",
    "hours": "11:30 - 17:00",
    "closed": "每週日、一公休",
    "tel": "+81-166-61-1234",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+Libera+Asahikawa+旭川",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.7488,
    "lng": 142.3611,
    "businessHours": {
      "closedDays": [
        0
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "17:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "手作純素餐"
  },
  {
    "id": 115,
    "name": "Sunnyside Cafe (Asahikawa)",
    "japaneseName": "サニーサイド カフェ 旭川店",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (美式純素漢堡專賣)",
    "tags": [
      "植物漢堡",
      "炸薯條",
      "燕麥奶昔",
      "精緻簡餐",
      "旭川"
    ],
    "rating": 4.8,
    "description": "主打美式純素餐點。招牌為「天貝燕麥排漢堡」與「大豆起司漢堡」，醬汁亦完全使用全素美乃滋，搭配特製脆皮薯條與燕麥奶昔，非素食者也讚不絕口。",
    "address": "北海道旭川市1条通15丁目2-5",
    "transit": "旭川站步行約 15 分鐘",
    "hours": "11:00 - 20:00",
    "closed": "每週二公休",
    "tel": "+81-166-25-5678",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sunnyside+Cafe+(Asahikawa)+旭川",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.7655,
    "lng": 142.3688,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "20:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "植物肉漢堡"
  },
  {
    "id": 116,
    "name": "Indian Restaurant Taj Mahal Asahikawa",
    "japaneseName": "タージ・マ哈爾 旭川店",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (標示清晰的北印素咖哩)",
    "tags": [
      "印度料理",
      "烤餅",
      "無蛋烤餅",
      "精緻簡餐",
      "旭川"
    ],
    "rating": 4.4,
    "description": "泰姬瑪哈在旭川的分店。提供多款無蛋奶純素豆咖哩、香料薯仔椰菜，烤饢餅可指定不刷牛油。廚師可配合製作無五辛（無蔥蒜）咖哩。",
    "address": "北海道旭川市川端町7条10丁目1-22",
    "transit": "旭川站搭乘巴士約 10 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-166-55-1102",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Indian+Restaurant+Taj+Mahal+Asahikawa+旭川",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.7855,
    "lng": 142.3388,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:30",
          "close": "21:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "北印素咖哩"
  },
  {
    "id": 117,
    "name": "Asahikawa Organic Diner",
    "japaneseName": "旭川有機食養食堂",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (正宗食養Macrobiotic套餐)",
    "tags": [
      "食養定食",
      "無糖甜點",
      "無添加",
      "精緻簡餐",
      "旭川"
    ],
    "rating": 4.7,
    "description": "秉持長壽飲食法（Macrobiotic）的旭川小食堂。提供「季節時蔬食養木盒套餐」，包含酵素糙米、有機煮野菜和醃菜，不含動物食材及精製糖，對身體極無負擔。",
    "address": "北海道旭川市東光5条3丁目2-8",
    "transit": "旭川四条站步行約 15 分鐘",
    "hours": "11:30 - 15:00",
    "closed": "每週三、四公休",
    "tel": "+81-166-33-0099",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Asahikawa+Organic+Diner+旭川",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.7544,
    "lng": 142.3855,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "15:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "有機糙米飯"
  },
  {
    "id": 118,
    "name": "Bakery Shop Organic Bread",
    "japaneseName": "オーガニック ブレッド 旭川",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (天然酵母有機小麥麵包店)",
    "tags": [
      "純素麵包",
      "天然酵母",
      "無蛋奶",
      "甜點烘焙",
      "旭川"
    ],
    "rating": 4.6,
    "description": "旭川當地人極推的純素麵包坊。主打全店無蛋、無牛奶、無奶油。採用北海道產有機小麥與自家培育的蘋果酵母，其吐司與雜糧麵包麥香十足。",
    "address": "北海道旭川市旭神2条4丁目2-10",
    "transit": "綠丘站步行約 10 分鐘",
    "hours": "10:00 - 18:00",
    "closed": "每週一、二公休",
    "tel": "+81-166-65-8899",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bakery+Shop+Organic+Bread+旭川",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.7299,
    "lng": 142.3789,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "10:00",
          "close": "18:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "天然酵母包"
  },
  {
    "id": 119,
    "name": "Asahikawa Zoo Cafe (甜點)",
    "japaneseName": "旭川動物園中央食堂 カフェ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (蛋奶素水果聖代與點心)",
    "tags": [
      "動物園",
      "水果杯",
      "炸薯片",
      "甜點烘焙",
      "旭川"
    ],
    "rating": 4.3,
    "description": "位於旭山動物園內。為遊客提供美味的「北海道哈密瓜聖代」與「男爵土豆炸薯片」，皆為蛋奶素，是在動物園遊玩時的甜點好選擇。",
    "address": "北海道旭川市東旭川町倉沼 旭山動物園內",
    "transit": "旭川站搭乘動物園線巴士約 40 分鐘",
    "hours": "10:30 - 16:30",
    "closed": "配合動物園休園日",
    "tel": "+81-166-36-5588",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Asahikawa+Zoo+Cafe+(甜點)+旭川",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.7688,
    "lng": 142.4832,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:30",
          "close": "16:30"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "水果聖代杯"
  },
  {
    "id": 120,
    "name": "Asahikawa Ramen Village Veggie Bowl",
    "japaneseName": "旭川ラーメン村 菜の香",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供蔬食鹽味拉麵)",
    "tags": [
      "拉麵村",
      "無叉燒拉麵",
      "彩虹野菜",
      "拉麵",
      "旭川"
    ],
    "rating": 4.2,
    "description": "位於旭川拉麵村內。提供客製化的「彩虹野菜素食鹽味拉麵」，使用全蔬菜與海鹽湯底，不含動物油及叉燒，麵條極具嚼勁。",
    "address": "北海道旭川市永山11条4丁目119-48 旭川拉麵村內",
    "transit": "南永山站步行約 8 分鐘",
    "hours": "11:00 - 20:00",
    "closed": "無特定公休日",
    "tel": "+81-166-48-2153",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Asahikawa+Ramen+Village+Veggie+Bowl+旭川",
    "gradient": "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
    "lat": 43.7911,
    "lng": 142.4088,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "20:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "大盛蔬菜麵"
  },
  {
    "id": 121,
    "name": "Furano Cafe Goryo",
    "japaneseName": "カフェ 五葉 (Goryo)",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (百年古民家農園咖哩)",
    "tags": [
      "古民家",
      "田園咖哩",
      "有機番茄",
      "精緻簡餐",
      "富良野"
    ],
    "rating": 4.9,
    "description": "富良野極富盛名的百年老屋咖啡廳。主打「五陵蔬食咖哩飯」，咖哩醬以自家農園栽種的番茄與數十種香料精熬，100%純素無蛋奶無肉，搭配香Q玄米，環境如詩如畫。",
    "address": "北海道富良野市五十子乙2-1",
    "transit": "富良野站搭乘計程車約 8 分鐘",
    "hours": "11:00 - 20:00",
    "closed": "每週二公休",
    "tel": "+81-167-23-5139",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Furano+Cafe+Goryo+富良野",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.3288,
    "lng": 142.3421,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "20:00"
        }
      ]
    },
    "region": "furano",
    "mapLabel": "田園蔬食咖"
  },
  {
    "id": 122,
    "name": "Yuiga Doxon",
    "japaneseName": "唯我独尊 咖哩店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供野菜咖哩，可選素醬汁)",
    "tags": [
      "特色咖哩",
      "人氣名店",
      "無肉醬汁可",
      "湯咖哩",
      "富良野"
    ],
    "rating": 4.7,
    "description": "富良野森林樹屋造型的人氣咖哩店。其招牌「自家製野菜咖哩」可向店員要求使用「無肉洋蔥基底醬汁（Vegan Sauce）」，焦香洋蔥與濃郁香料極具衝擊力！",
    "address": "北海道富良野市日の出町11-8",
    "transit": "富良野站步行約 5 分鐘",
    "hours": "11:00 - 21:00",
    "closed": "每週一公休",
    "tel": "+81-167-23-4784",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Yuiga+Doxon+富良野",
    "gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "lat": 43.3444,
    "lng": 142.3888,
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
    },
    "region": "furano",
    "mapLabel": "香料野菜咖"
  },
  {
    "id": 123,
    "name": "Furano Wine House",
    "japaneseName": "ふらのワインハウス",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (起司鍋與瑪格麗特比薩)",
    "tags": [
      "起司鍋",
      "葡萄美酒",
      "高樓景觀",
      "精緻簡餐",
      "富良野"
    ],
    "rating": 4.5,
    "description": "座落於山丘上，能俯瞰富良野盆地。提供以富良野特產起司製作的「雙人起司起司鍋 (Fondue)」及新鮮時蔬盤，為蛋奶素（無肉無魚介），美景配美食極為享受。",
    "address": "北海道富良野市清水山",
    "transit": "富良野站搭乘計程車約 5 分鐘",
    "hours": "11:00 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-167-23-4155",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Furano+Wine+House+富良野",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.3611,
    "lng": 142.3712,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    },
    "region": "furano",
    "mapLabel": "起司火鍋披"
  },
  {
    "id": 124,
    "name": "Furano Cheese Factory Cafe",
    "japaneseName": "富良野チーズ工房 ピッツァ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (起司工房現烤起司塔與冰淇淋)",
    "tags": [
      "現烤披薩",
      "手作起司",
      "手工Gelato",
      "甜點烘焙",
      "富良野"
    ],
    "rating": 4.7,
    "description": "富良野起司工房內的附設餐飲區。提供現點現烤的「雙重起司瑪格麗特披薩」及手工製作的牛奶義式冰淇淋 (Gelato)，皆為蛋奶素，起司香氣撲鼻。",
    "address": "北海道富良野市中五区",
    "transit": "富良野站搭乘計程車約 9 分鐘",
    "hours": "09:00 - 17:00",
    "closed": "無特定公休日",
    "tel": "+81-167-25-1010",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Furano+Cheese+Factory+Cafe+富良野",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.3321,
    "lng": 142.3688,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "09:00",
          "close": "17:00"
        }
      ]
    },
    "region": "furano",
    "mapLabel": "起司義式冰"
  },
  {
    "id": 125,
    "name": "Furano Cafe Mujyoki",
    "japaneseName": "ふらの無心庵",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "100% 純素 (傳統日式手作純素和菓子)",
    "tags": [
      "和菓子",
      "抹茶紅豆",
      "純素無麩",
      "甜點烘焙",
      "富良野"
    ],
    "rating": 4.6,
    "description": "富良野森林旁的日式老茶屋。全店甜點不使用蛋、奶。提供精緻的手作醬油烤糰子、黑糖蜜蕨餅及季節紅豆大福，配上一杯手點日本有機抹茶，氣氛寧靜平和。",
    "address": "北海道富良野市下御料",
    "transit": "學田站步行約 15 分鐘",
    "hours": "12:00 - 17:00",
    "closed": "每週三、四公休",
    "tel": "+81-167-22-3456",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Furano+Cafe+Mujyoki+富良野",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.3211,
    "lng": 142.3512,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "12:00",
          "close": "17:00"
        }
      ]
    },
    "region": "furano",
    "mapLabel": "純素和菓子"
  },
  {
    "id": 126,
    "name": "Lavender East Cafe (甜點)",
    "japaneseName": "ラベンダーイースト カフェ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素薰衣草霜淇淋)",
    "tags": [
      "薰衣草",
      "富良野哈密瓜",
      "霜淇淋",
      "甜點烘焙",
      "富良野"
    ],
    "rating": 4.6,
    "description": "富良野最大薰衣草田內的露天咖啡座。提供「經典薰衣草霜淇淋」及現切「富良野哈密瓜切片」，純天然無添加防腐劑，皆為蛋奶素，是夏季賞花必吃！",
    "address": "北海道空知郡上富良野町東6線北16号",
    "transit": "中富良野站搭乘計程車約 10 分鐘",
    "hours": "09:00 - 16:30",
    "closed": "配合薰衣草花季營業",
    "tel": "+81-167-39-3939",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lavender+East+Cafe+(甜點)+富良野",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.4355,
    "lng": 142.4412,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "09:00",
          "close": "16:30"
        }
      ]
    },
    "region": "furano",
    "mapLabel": "薰衣草霜淇"
  },
  {
    "id": 127,
    "name": "Furano Soba Sansen",
    "japaneseName": "ふらの蕎麦屋 三線",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (野菜天婦羅手打蕎麥麵)",
    "tags": [
      "蕎麥麵",
      "天婦羅",
      "手打細麵",
      "精緻簡餐",
      "富良野"
    ],
    "rating": 4.4,
    "description": "富良野市中心的手打蕎麥麵店。點選「野菜天婦羅蕎麥麵（可要求改為昆布醬油底）」，使用當地的南瓜、舞菇、茄子和紫蘇葉酥炸，搭配十割手打蕎麥麵。",
    "address": "北海道富良野市幸町12-5",
    "transit": "富良野站步行約 3 分鐘",
    "hours": "11:30 - 15:00 / 17:30 - 20:30",
    "closed": "每週二公休",
    "tel": "+81-167-22-1111",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Furano+Soba+Sansen+富良野",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.3455,
    "lng": 142.3855,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "15:00"
        }
      ]
    },
    "region": "furano",
    "mapLabel": "野菜天婦羅"
  },
  {
    "id": 128,
    "name": "Furano Herb Hill",
    "japaneseName": "富良野ハーブヒル レストラン",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (北海道時蔬沙拉自助餐)",
    "tags": [
      "自助餐",
      "時蔬吃到飽",
      "近富良野",
      "精緻簡餐",
      "富良野"
    ],
    "rating": 4.3,
    "description": "位於薰衣草觀光農園內的大型餐廳。中午提供豐富的北海道蔬菜自助餐 (Buffet)，設有巨大的新鮮沙拉吧、烤男爵土豆、蒸甜玉米及各式水果，極適合素食者補充葉綠素。",
    "address": "北海道空知郡中富良野町西1線北14号",
    "transit": "中富良野站步行約 15 分鐘",
    "hours": "11:00 - 15:00",
    "closed": "無特定公休日",
    "tel": "+81-167-44-2200",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Furano+Herb+Hill+富良野",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.4111,
    "lng": 142.4212,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "15:00"
        }
      ]
    },
    "region": "furano",
    "mapLabel": "時蔬沙拉吧"
  },
  {
    "id": 129,
    "name": "Farm Tomita Potato House",
    "japaneseName": "ファーム富田 とうきびハウス",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蒸玉米與炸土豆餅)",
    "tags": [
      "富田農場",
      "男爵土豆",
      "奶油玉米",
      "甜點烘焙",
      "富良野"
    ],
    "rating": 4.5,
    "description": "富田農場內的熱食攤位。提供現蒸「富良野超甜玉米」與現烤「起司男爵土豆（蛋奶素）」，自然原味不添加多餘調料，能吃到最甜美的北海道土產。",
    "address": "北海道空知郡中富良野町基線北15号 富田農場內",
    "transit": "中富良野站步行約 20 分鐘",
    "hours": "08:30 - 17:00",
    "closed": "無特定公休日",
    "tel": "+81-167-39-3939",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Farm+Tomita+Potato+House+富良野",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.4188,
    "lng": 142.4288,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "08:30",
          "close": "17:00"
        }
      ]
    },
    "region": "furano",
    "mapLabel": "炸男爵土豆"
  },
  {
    "id": 130,
    "name": "Furano Kan Kan Mura Cafe",
    "japaneseName": "富良野 歓寒村カフェ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (森林咖啡與熱豆乳)",
    "tags": [
      "森林小屋",
      "小木屋",
      "熱飲",
      "甜點烘焙",
      "富良野"
    ],
    "rating": 4.4,
    "description": "新富良野王子大飯店旁的森林小屋區。冬日裡在燈光夢幻的木屋中點一杯「熱燕麥奶拿鐵」或「熱紅豆湯年糕（純素）」，在白雪皚皚的森林中極具詩意。",
    "address": "北海道富良野市中御料 新富良野王子飯店旁",
    "transit": "富良野站搭乘巴士約 15 分鐘",
    "hours": "16:00 - 20:00",
    "closed": "冬季特定期間營業",
    "tel": "+81-167-22-1111",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Furano+Kan+Kan+Mura+Cafe+富良野",
    "gradient": "linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%)",
    "lat": 43.3235,
    "lng": 142.3544,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "16:00",
          "close": "20:00"
        }
      ]
    },
    "region": "furano",
    "mapLabel": "豆乳熱咖啡"
  },
  {
    "id": 131,
    "name": "Biei Senka Cafe",
    "japaneseName": "美瑛選果 こむぎ工房",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (美瑛現烤麵包與小麥點心)",
    "tags": [
      "小麥麵包",
      "男爵馬鈴薯",
      "排隊排長",
      "甜點烘焙",
      "美瑛"
    ],
    "rating": 4.7,
    "description": "美瑛最知名的在地農產品推廣中心。其附設麵包坊「こむぎ工房」每天早上現烤多款美瑛小麥麵包，招牌「黑豆麵包」及「玉米麵包」為蛋奶素，不含肉類，麥香極其航向。",
    "address": "北海道上川郡美瑛町大町2丁目 美瑛選果內",
    "transit": "美瑛站步行約 10 分鐘",
    "hours": "09:00 - 17:00",
    "closed": "無特定公休日",
    "tel": "+81-166-92-4400",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Biei+Senka+Cafe+美瑛",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.5933,
    "lng": 142.4502,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "09:00",
          "close": "17:00"
        }
      ]
    },
    "region": "biei",
    "mapLabel": "美瑛男爵燒"
  },
  {
    "id": 132,
    "name": "Cafe Biei Hill",
    "japaneseName": "カフェ 美瑛の丘",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供美瑛時蔬咖哩盤)",
    "tags": [
      "景觀餐廳",
      "拼布之丘",
      "蔬菜咖哩",
      "精緻簡餐",
      "美瑛"
    ],
    "rating": 4.6,
    "description": "位於拼布之路丘陵上的景觀餐廳。提供使用美瑛產洋蔥慢火精燉的「美瑛野菜咖哩定食（無肉底）」，搭配酥炸的南瓜、西蘭花與聖女番茄，能一邊眺望美瑛丘陵一邊用餐。",
    "address": "北海道上川郡美瑛町大久保",
    "transit": "美瑛站搭乘計程車約 7 分鐘",
    "hours": "11:00 - 16:00",
    "closed": "每週四公休",
    "tel": "+81-166-92-1234",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+Biei+Hill+美瑛",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.6088,
    "lng": 142.4411,
    "businessHours": {
      "closedDays": [
        4
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "16:00"
        }
      ]
    },
    "region": "biei",
    "mapLabel": "美瑛野菜咖"
  },
  {
    "id": 133,
    "name": "Cafe de La Paix",
    "japaneseName": "カフェ・ド・ラ・ペ (La Paix)",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (熱溶拉可雷特起司與男爵馬鈴薯)",
    "tags": [
      "森林老屋",
      "烤起司",
      "歐洲風情",
      "精緻簡餐",
      "美瑛"
    ],
    "rating": 4.8,
    "description": "隱身於美瑛針葉林中的北歐風小木屋。主打正宗瑞士「拉可雷特起司 (Raclette)」。將融化的焦香起司厚厚地刮在現蒸的美瑛男爵土豆與紅蘿蔔上，為起司素食的極致美味！",
    "address": "北海道上川郡美瑛町美澤雙葉",
    "transit": "美瑛站搭乘計程車約 12 分鐘",
    "hours": "10:00 - 18:00",
    "closed": "每週四公休",
    "tel": "+81-166-92-3489",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+de+La+Paix+美瑛",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.5702,
    "lng": 142.4902,
    "businessHours": {
      "closedDays": [
        4
      ],
      "periods": [
        {
          "open": "10:00",
          "close": "18:00"
        }
      ]
    },
    "region": "biei",
    "mapLabel": "瑞士烤起司"
  },
  {
    "id": 134,
    "name": "Biei Wheat Cafe",
    "japaneseName": "美瑛小麥 カフェ",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (手作時蔬起司三明治)",
    "tags": [
      "三明治",
      "有機沙拉",
      "現烤小麥",
      "精緻簡餐",
      "美瑛"
    ],
    "rating": 4.5,
    "description": "使用美瑛當地小麥製作吐司。提供「起司酪梨烤蔬菜三明治」，配以豐富的生菜沙拉與小麥豆乳茶，口感鬆軟麥香迷人，非常適合素食者吃輕食午餐。",
    "address": "北海道上川郡美瑛町本町1-5",
    "transit": "美瑛站步行約 2 分鐘",
    "hours": "10:00 - 18:00",
    "closed": "無特定公休日",
    "tel": "+81-166-92-5678",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Biei+Wheat+Cafe+美瑛",
    "gradient": "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "lat": 43.5905,
    "lng": 142.4588,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "18:00"
        }
      ]
    },
    "region": "biei",
    "mapLabel": "小麥野菜堡"
  },
  {
    "id": 135,
    "name": "Biei Blue Pond Cafe (甜點)",
    "japaneseName": "青い池売店 ブルーポンド",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蛋奶素青池汽水布丁與聖代)",
    "tags": [
      "白金青池",
      "藍色布丁",
      "網美打卡",
      "甜點烘焙",
      "美瑛"
    ],
    "rating": 4.4,
    "description": "位於世界級美景「美瑛白金青池」入口處。提供視覺驚豔的「青池藍色布丁」與「青池霜淇淋」，以彈珠汽水口味與牛奶調和，為蛋奶素（無明膠成分），打卡拍照首選！",
    "address": "北海道上川郡美瑛町白金 美瑛白金青池旁",
    "transit": "美瑛站搭乘美瑛町營巴士約 20 分鐘",
    "hours": "09:00 - 17:00",
    "closed": "無特定公休日",
    "tel": "+81-166-94-3355",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Biei+Blue+Pond+Cafe+(甜點)+美瑛",
    "gradient": "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
    "lat": 43.4911,
    "lng": 142.6133,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "09:00",
          "close": "17:00"
        }
      ]
    },
    "region": "biei",
    "mapLabel": "青池汽水布"
  },
  {
    "id": 136,
    "name": "Cafe Koeru Biei",
    "japaneseName": "カフェ こえる (Koeru)",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供野菜咖哩烏龍麵，可去肉)",
    "tags": [
      "烏龍麵",
      "咖哩烏龍",
      "近美瑛站",
      "精緻簡餐",
      "美瑛"
    ],
    "rating": 4.4,
    "description": "美瑛站旁的溫馨餐館。提供美瑛特產「咖哩烏龍麵」，可要求更換為無肉的野菜咖哩高湯底，配上炸土豆與南瓜，烏龍麵條極具彈性。",
    "address": "北海道上川郡美瑛町栄町1-2",
    "transit": "美瑛站步行約 1 分鐘",
    "hours": "11:00 - 15:00 / 17:00 - 20:30",
    "closed": "每週二公休",
    "tel": "+81-166-92-5531",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+Koeru+Biei+美瑛",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.5902,
    "lng": 142.4579,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "15:00"
        }
      ]
    },
    "region": "biei",
    "mapLabel": "炸烏龍麵定"
  },
  {
    "id": 137,
    "name": "Biei Milk Farm (甜點)",
    "japaneseName": "美瑛放牧酪農場 カフェ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (現烤起司塔與鮮乳霜淇淋)",
    "tags": [
      "酪農場",
      "起司塔",
      "放牧牛乳",
      "甜點烘焙",
      "美瑛"
    ],
    "rating": 4.7,
    "description": "美瑛山丘上放牧牛群的酪農場。直營咖啡座提供「美瑛放牧鮮乳霜淇淋」及「手工現烤起司塔」，完全使用農場當天擠出的鮮乳，口感細滑濃郁，蛋奶素可。",
    "address": "北海道上川郡美瑛町字新星平和",
    "transit": "美瑛站搭乘計程車約 15 分鐘",
    "hours": "10:00 - 17:00",
    "closed": "無特定公休日",
    "tel": "+81-166-68-1234",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Biei+Milk+Farm+(甜點)+美瑛",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.5188,
    "lng": 142.4288,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "17:00"
        }
      ]
    },
    "region": "biei",
    "mapLabel": "現烤起司塔"
  },
  {
    "id": 138,
    "name": "Biei Soba Ten",
    "japaneseName": "美瑛蕎麦 天",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (提供十割蕎麥與野菜天婦羅)",
    "tags": [
      "十割蕎麥",
      "天婦羅",
      "健康手作",
      "精緻簡餐",
      "美瑛"
    ],
    "rating": 4.5,
    "description": "使用 100% 美瑛產蕎麥磨製的十割蕎麥麵。可請店家提供特製「昆布鹽」或「無魚介純醬油底」沾汁，配上剛出爐的脆皮南瓜與蓮藕天婦羅，原汁原味。",
    "address": "北海道上川郡美瑛町大町1-1",
    "transit": "美瑛站步行約 5 分鐘",
    "hours": "11:00 - 15:00 / 17:00 - 19:30",
    "closed": "每週三公休",
    "tel": "+81-166-92-0011",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Biei+Soba+Ten+美瑛",
    "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "lat": 43.5921,
    "lng": 142.4555,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "15:00"
        }
      ]
    },
    "region": "biei",
    "mapLabel": "十割蕎麥麵"
  },
  {
    "id": 139,
    "name": "Pizza & Pasta Biei",
    "japaneseName": "ピッツァ＆パスタ 美瑛店",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (新鮮番茄茄汁麵與鮮菇比薩)",
    "tags": [
      "義大利麵",
      "聖女番茄",
      "時蔬比薩",
      "精緻簡餐",
      "美瑛"
    ],
    "rating": 4.4,
    "description": "使用美瑛當地生產的番茄與鮮香菇。素食者可點「美瑛聖女番茄茄汁義大利麵」及「奶油綜合鮮菇披薩」，茄汁酸甜爽口，分量十足。",
    "address": "北海道上川郡美瑛町中町1-4",
    "transit": "美瑛站步行約 3 分鐘",
    "hours": "11:30 - 20:30",
    "closed": "每週一公休",
    "tel": "+81-166-92-2211",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pizza+&+Pasta+Biei+美瑛",
    "gradient": "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    "lat": 43.5888,
    "lng": 142.4592,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "20:30"
        }
      ]
    },
    "region": "biei",
    "mapLabel": "鮮菇茄汁麵"
  },
  {
    "id": 140,
    "name": "Biei Potato House",
    "japaneseName": "美瑛ポテトの家",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (蒸烤美瑛五彩土豆與番薯塔)",
    "tags": [
      "五彩土豆",
      "烤番薯塔",
      "在地農產",
      "甜點烘焙",
      "美瑛"
    ],
    "rating": 4.5,
    "description": "專門推廣美瑛土豆的特色小店。提供「五彩蒸土豆拼盤」，內含不同顏色的美瑛地產土豆，只撒少許海鹽即極為香甜甜美，另有手作烤番薯塔甜點（蛋奶素）。",
    "address": "北海道上川郡美瑛町美澤",
    "transit": "美瑛站搭乘計程車約 8 分鐘",
    "hours": "10:00 - 16:30",
    "closed": "無特定公休日",
    "tel": "+81-166-92-9900",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Biei+Potato+House+美瑛",
    "gradient": "linear-gradient(135deg, #854d0e 0%, #713f12 100%)",
    "lat": 43.5611,
    "lng": 142.4811,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "16:30"
        }
      ]
    },
    "region": "biei",
    "mapLabel": "烤男爵地瓜"
  }
]// 全域地圖與定位相關變數
let map = null;
let mapMarkers = {};
let userMarker = null;
let userCoords = null;
let currentRenderedData = [...restaurants];

// 初始化網頁與事件監聽
document.addEventListener("DOMContentLoaded", () => {
  setupFilters();
  setupSearch();
  setupStatusFilter();
  initLeafletMap();
  setupMapToggle();
  setupGeolocation();
  registerServiceWorker();
  // 依據畫面上初始勾選狀態進行第一次篩選與渲染
  filterList();
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

  // 監聽縮放事件，當地圖放大至 14 級以上時，自動顯示 Pin 點上方的 8 字簡短描述
  map.on("zoomend", () => {
    const currentZoom = map.getZoom();
    const mapDiv = document.getElementById("map");
    if (mapDiv) {
      if (currentZoom >= 14) {
        mapDiv.classList.add("map-zoomed-in");
      } else {
        mapDiv.classList.remove("map-zoomed-in");
      }
    }
  });

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
    
    // 綁定氣泡標籤 (Tooltip)，顯示 8 字內描述
    marker.bindTooltip(item.mapLabel || "素食友善", {
      permanent: true,
      direction: 'top',
      className: 'map-marker-tooltip',
      offset: [0, -32]
    });
    
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
    } else if (item.vegStatus === "lacto-ovo") {
      statusClass = "status-lacto-ovo";
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

// 8. 設置分類與地區複選過濾
function setupFilters() {
  // 取得所有的複選膠囊按鈕
  const checkboxes = document.querySelectorAll(".checkbox-pill-input");
  checkboxes.forEach(box => {
    box.addEventListener("change", () => {
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

// 10. 綜合篩選邏輯 (搜尋 + 地區複選 + 類別複選 + 素食分類複選 + 營業中篩選)
function filterList() {
  // 1. 取得地區複選值
  const checkedRegions = Array.from(document.querySelectorAll("#region-filter-group .checkbox-pill-input:checked"))
    .map(el => el.value);
  
  // 2. 取得類別複選值
  const checkedCategories = Array.from(document.querySelectorAll("#category-filter-group .checkbox-pill-input:checked"))
    .map(el => el.value);
    
  // 3. 取得素食種類複選值
  const checkedVegTypes = Array.from(document.querySelectorAll("#veg-filter-group .checkbox-pill-input:checked"))
    .map(el => el.value);

  const searchInput = document.getElementById("search-bar");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  
  // 取得營業狀態單選過濾值
  const statusFilterEl = document.querySelector("input[name='status-filter']:checked");
  const statusFilter = statusFilterEl ? statusFilterEl.value : "all";

  let filtered = restaurants.filter(item => {
    // A. 地區過濾
    const matchRegion = checkedRegions.includes(item.region);

    // B. 類別過濾
    const matchCategory = checkedCategories.includes(item.category);

    // C. 素食類型過濾
    const matchVegType = checkedVegTypes.includes(item.vegStatus);
    
    // D. 關鍵字過濾
    const matchQuery = !query || 
      item.name.toLowerCase().includes(query) ||
      item.japaneseName.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.address.toLowerCase().includes(query) ||
      item.transit.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query));
      
    // E. 營業狀態過濾 (當選擇僅顯示營業中時)
    const matchStatus = (statusFilter === "all" || isOpenNow(item));

    return matchRegion && matchCategory && matchVegType && matchQuery && matchStatus;
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
