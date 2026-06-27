// 札幌素食與純素餐廳資料庫 (10 家精選正常營業店家，2026年最新版，含地理座標及營業時間規則)
const restaurants = [
  {
    "id": 1,
    "name": "Holistic Bio Cafe Veggy Way",
    "japaneseName": "ホリスティックバイオカフェ ベジウェイ",
    "category": "bistro",
    "categoryLabel": "精緻異國/咖啡廳",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "name": "拉麵札幌一粒庵 (Ichiryuan)",
    "japaneseName": "ラーメン札幌 一粒庵",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "近札幌站",
      "排隊名店",
      "預約限定純素",
      "大豆肉叉燒"
    ],
    "rating": 4.5,
    "description": "此店為素食者提供專屬且乾淨的『純素味噌拉麵』（使用昆布與香菇熬製之無肉高湯，可指定去除行者大蒜為無五辛純素），搭配大豆肉片，湯頭極為香醇濃郁，適合嚴格素食者。",
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
    "id": 4,
    "name": "Soup Curry Nagi (soup curry 凪)",
    "japaneseName": "スープカレー 凪",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "古民家風",
      "無五辛可",
      "無麩質湯底",
      "當季時蔬"
    ],
    "rating": 4.7,
    "description": "此店提供100%植物性且無麩質的專用素食湯底，不含任何動物骨頭或魚介成分。其野菜湯咖哩加入大量北海道在地時蔬，湯頭鮮甜，且可要求不加蔥蒜等五辛，是嚴格純素者能安心食用的乾淨素食！",
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
    "id": 5,
    "name": "JYOTI The Door to India",
    "japaneseName": "ジョティ インド料理店",
    "category": "bistro",
    "categoryLabel": "精緻異國/印度料理",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "狸小路旁",
      "高樓景觀",
      "標示明確",
      "英文可溝通"
    ],
    "rating": 4.4,
    "description": "道地北印度料理。提供鷹嘴豆與蔬菜咖哩（不含大骨、柴魚成分，但使用洋蔥與大蒜五辛）。印度廚師可配合製作『無五辛』咖哩（需提前告知），烤餅可指定不刷黃油（去蛋奶），對素食者非常友善且安全。",
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
    "id": 6,
    "name": "Maison CHATONS (原 CHaT Vegan)",
    "japaneseName": "メゾン シャトン (旧 チャット ヴィーガン＆グルテンフリー)",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 7,
    "name": "Vegan Sweets & Deli 3beans",
    "japaneseName": "スリービーンズ ヴィーガンスイーツ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙/輕食餐盒",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 8,
    "name": "à petits pas. (アプティパ)",
    "japaneseName": "アプティパ カフェ＆ベーカリー",
    "category": "bakery",
    "categoryLabel": "甜點烘焙/古民家咖啡廳",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 9,
    "name": "Ippudo (一風堂 札幌狸小路店)",
    "japaneseName": "一風堂 札幌狸小路店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "拉麵",
      "近捷運",
      "純素",
      "大豆肉",
      "熱門鬧區"
    ],
    "rating": 4.2,
    "description": "位於狸小路5丁目。店內推出了「Plant-Based Akamaru (植物性赤丸)」，從湯頭到麵條完全使用植物性原料與椰乳，是植物性五辛素拉麵的福音（含蔥大蒜五辛）！",
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
    "id": 10,
    "name": "Ramen Shimajirou (ラーメン しま治)",
    "japaneseName": "ラーメン しま治",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 11,
    "name": "Ramen Sapporo Ichiryuan (一粒庵 創成川店)",
    "japaneseName": "ラーメン札幌 一粒庵 創成川店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "拉麵",
      "近捷運",
      "純素",
      "大豆肉",
      "Odori區"
    ],
    "rating": 4.4,
    "description": "此店為素食者提供專屬且乾淨的『純素味噌拉麵』（使用昆布與香菇熬製之無肉高湯，可指定去除行者大蒜為無五辛純素），搭配大豆肉片，湯頭極為香醇濃郁，適合嚴格素食者。",
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
    "id": 12,
    "name": "Soup Curry Suage3",
    "japaneseName": "スープカレー すあげ3",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 13,
    "name": "Soup Curry YELLOW",
    "japaneseName": "スープカレー イエロー",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "純素底",
      "無蛋奶",
      "Susukino地區"
    ],
    "rating": 4.6,
    "description": "提供專門的『野菜豆腐湯底（無肉、無魚介、無柴魚高湯，但包含洋蔥等五辛）』，是乾淨的植物性五辛素選項，不含動物成分，適合五辛素與嚴格蔬食者。",
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
    "id": 14,
    "name": "Soup Curry lavi (札幌駅店)",
    "japaneseName": "スープカレー lavi JRタワー札幌エスタ店",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "純素底",
      "無蛋奶",
      "Sapporo Station地區"
    ],
    "rating": 4.5,
    "description": "點餐時可指定更換為昆布蔬菜素高湯（不含動物骨與魚介，但含洋蔥五辛），為乾淨的五辛素選項，適合不介意五辛的蔬食者。",
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
    "id": 15,
    "name": "Soup Curry Onions",
    "japaneseName": "スープカレー オニオンズ",
    "category": "soupcurry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "湯咖哩",
      "當季時蔬",
      "純素底",
      "無蛋奶",
      "Odori地區"
    ],
    "rating": 4.8,
    "description": "強調使用北海道洋蔥慢熬的無化學添加湯咖哩。提供「季節野菜咖哩（植物性五辛素底，含洋蔥）」且自然甜味非常濃厚。",
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
    "id": 16,
    "name": "Taj Mahal (Sapporo Station)",
    "japaneseName": "タージ・マハール 札幌駅前店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 17,
    "name": "Taj Mahal (Susukino)",
    "japaneseName": "タージ・マハール すすきの店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 18,
    "name": "Mohan Disha (モハンディシャ)",
    "japaneseName": "印度料理 モハンディシャ",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 19,
    "name": "Royal Indian Restaurant",
    "japaneseName": "ロイヤルインド 札幌店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 20,
    "name": "Indian Restaurant Ram",
    "japaneseName": "インド料理 ラム",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 21,
    "name": "Saizeriya (Susukino)",
    "japaneseName": "サイゼリヤ すすきの駅前店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
    "tags": [
      "精緻異國",
      "平價義式",
      "披薩意麵",
      "Susukino周邊"
    ],
    "rating": 4.8,
    "description": "此店提供瑪格麗特披薩與佛卡夏（為蛋奶素，無肉無五辛，含牛奶起司），但其義大利麵等醬汁可能含有肉類或五辛萃取物，適合蛋奶素旅客簡單用餐，建議點餐前與店員再次確認。",
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
    "id": 22,
    "name": "Saizeriya (Sapporo Station)",
    "japaneseName": "サイゼリヤ 札幌駅北口店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
    "tags": [
      "精緻異國",
      "平價義式",
      "披薩意麵",
      "Sapporo Station周邊"
    ],
    "rating": 4.9,
    "description": "此店提供瑪格麗特披薩與佛卡夏（為蛋奶素，無肉無五辛，含牛奶起司），但其義大利麵等醬汁可能含有肉類或五辛萃取物，適合蛋奶素旅客簡單用餐，建議點餐前與店員再次確認。",
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
    "id": 23,
    "name": "Saizeriya (Odori)",
    "japaneseName": "サイゼリヤ 札幌狸小路店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
    "tags": [
      "精緻異國",
      "平價義式",
      "披薩意麵",
      "Tanukikoji周邊"
    ],
    "rating": 4.1,
    "description": "此店提供瑪格麗特披薩與佛卡夏（為蛋奶素，無肉無五辛，含牛奶起司），但其義大利麵等醬汁可能含有肉類或五辛萃取物，適合蛋奶素旅客簡單用餐，建議點餐前與店員再次確認。",
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
    "id": 24,
    "name": "Pizza Salvatore Cuomo (Susukino)",
    "japaneseName": "ピッツァ サルヴァトーレ クオモ すすきの",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Susukino周邊"
    ],
    "rating": 4.2,
    "description": "知名正宗窯烤披薩。提供正宗的拿坡里「瑪格麗特披薩」與「馬利納拉五辛素披薩（無起司，僅使用番茄醬、大蒜與奧勒岡葉）」，窯烤香氣十足。",
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
    "id": 25,
    "name": "Cafe Blue (カフェブルー)",
    "japaneseName": "Cafe Blue 円山",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 26,
    "name": "Cafe RAWLIFE",
    "japaneseName": "Cafe RAWLIFE",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 27,
    "name": "Little Juice Bar (札幌本店)",
    "japaneseName": "リトルジュースバー 札幌本店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
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
    "id": 28,
    "name": "Agt Cafe Rainbow",
    "japaneseName": "Agt カフェ レインボー",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 29,
    "name": "Organic Cafe Organ",
    "japaneseName": "オーガニックカフェ オルガン",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 30,
    "name": "Muji Cafe (Sapporo Parco)",
    "japaneseName": "Café&Meal MUJI 札幌パルコ",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 31,
    "name": "Royal Host (札幌駅前店)",
    "japaneseName": "ロイヤルホスト 札幌駅前店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "精緻異國",
      "網美咖啡",
      "有機健康",
      "Sapporo Station周邊"
    ],
    "rating": 4.1,
    "description": "此店提供『Plant-Based 蔬菜咖哩』（為植物性五辛素，無肉無蛋奶，含洋蔥與大蒜五辛，不刷動物油），但牛肝菌菇義大利麵通常含有雞肉萃取物。適合五辛素與方便素旅客，點餐前請確認。",
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
    "id": 32,
    "name": "Starbucks (Sapporo Station)",
    "japaneseName": "スターバックス 札幌紀伊國屋書店店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
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
    "id": 33,
    "name": "Starbucks (Odori Park)",
    "japaneseName": "スターバックス 札幌大通ベビー店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 34,
    "name": "MOS Burger (Sapporo Station)",
    "japaneseName": "モスバーガー 札幌駅北口店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
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
    "id": 35,
    "name": "MOS Burger (Susukino)",
    "japaneseName": "モスバーガー すすきの店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
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
    "id": 36,
    "name": "CoCo Ichibanya (Sapporo Station)",
    "japaneseName": "カレーハウスCoCo壱番屋 JR札幌駅パセオ店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "精緻異國",
      "咖哩飯",
      "連鎖店",
      "Sapporo Station周邊",
      "五辛素咖哩"
    ],
    "rating": 4.6,
    "description": "提供專屬『蔬菜咖哩醬（無肉無蛋奶，但包含洋蔥與大蒜五辛）』，為乾淨的五辛素咖哩（無法去除五辛），適合吃五辛素的旅客。其餘一般配菜可能與葷食共用炸鍋，介意者請選水煮配菜。",
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
    "id": 37,
    "name": "CoCo Ichibanya (Susukino)",
    "japaneseName": "カレーハウスCoCo壱番屋 中央区すすきの店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "精緻異國",
      "咖哩飯",
      "連鎖店",
      "Susukino周邊",
      "五辛素咖哩"
    ],
    "rating": 4.7,
    "description": "提供專屬『蔬菜咖哩醬（無肉無蛋奶，但包含洋蔥與大蒜五辛）』，為乾淨的五辛素咖哩（無法去除五辛），適合吃五辛素的旅客。其餘一般配菜可能與葷食共用炸鍋，介意者請選水煮配菜。",
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
    "id": 38,
    "name": "Dotour Coffee (Sapporo Station)",
    "japaneseName": "ドトールコーヒーショップ 札幌駅地下街店",
    "category": "bistro",
    "categoryLabel": "精緻異國/餐酒館",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
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
    "id": 39,
    "name": "Rokkatei (Sapporo Honten)",
    "japaneseName": "六花亭 札幌本店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 40,
    "name": "Rokkatei (Maruyama)",
    "japaneseName": "六花亭 円山店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 41,
    "name": "Ryugetsu (Sapporo Station)",
    "japaneseName": "柳月 札幌エスタ店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (傳統日式大福/無五辛)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "純素無蛋奶",
      "健康低糖",
      "Sapporo Station區"
    ],
    "rating": 4.9,
    "description": "以三方六（年輪蛋糕）聞名。此店主要販售含蛋奶的洋菓子，但亦提供多款傳統日式和菓子、大福及紅豆銅鑼燒，大部分傳統和菓子皆不含蛋奶與五辛，適合蛋奶素者及尋找純素點心的旅客。",
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
    "id": 42,
    "name": "Kinotoya (Sapporo Station)",
    "japaneseName": "洋菓子 きのとや 札幌駅店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 43,
    "name": "Kinotoya Odori Koen",
    "japaneseName": "きのとや 大通公園店 - 大通ビッセ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 44,
    "name": "Fruitcake Factory (本店)",
    "japaneseName": "フルーツケーキファクトリー 総本店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 45,
    "name": "Kitakara (北菓楼 札幌本館)",
    "japaneseName": "北菓楼 札幌本館",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 46,
    "name": "Shiroi Koibito Park Cafe",
    "japaneseName": "白い恋人パーク カフェ・チョコレートココア",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 47,
    "name": "Ishiya Cafe (札幌大通店)",
    "japaneseName": "イシヤ カフェ 札幌大通西4大ビル店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 48,
    "name": "White Cosy (よつ葉ホワイトコージ)",
    "japaneseName": "よつ葉ホワイトコージ 札幌ステラプレイス店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 49,
    "name": "Sana (Vegan Bakery)",
    "japaneseName": "Sana ビーガンベーカリー",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 50,
    "name": "Cafe Clin d'oeil",
    "japaneseName": "カフェ クランドゥイ游",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 51,
    "name": "Tsukisamu Anpan (月寒あんぱん)",
    "japaneseName": "月寒あんぱん 総本店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 52,
    "name": "Sana Cafe (西区店)",
    "japaneseName": "Sana カフェ 西区山の手店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 53,
    "name": "Fruit & Salad Cafe",
    "japaneseName": "フルーツ＆サラダ カフェ 大通店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
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
    "id": 54,
    "name": "Sana Pan (北区店)",
    "japaneseName": "Sana パン 北24条店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
    "tags": [
      "甜點烘焙",
      "伴手禮",
      "純素無蛋奶",
      "健康低糖",
      "Kita-ku區"
    ],
    "rating": 4.4,
    "description": "北24條附近的純素外帶麵包店。每天提供 15 款以上的米粉純素麵包，包括無五辛的純素咖哩麵包與巧克力螺旋麵包，無動物成分。",
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
    "id": 55,
    "name": "Natural Sweets Cafe",
    "japaneseName": "ナチュラルスイーツカフェ 中央店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 56,
    "name": "Japanese Sweets Kanoya",
    "japaneseName": "和菓子 鹿乃屋",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 57,
    "name": "Rokatei Cafe (北店)",
    "japaneseName": "六花亭 北店 カフェ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 58,
    "name": "Ryugetsu Odori",
    "japaneseName": "柳月 大通店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (傳統日式大福/無五辛)",
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
    "id": 59,
    "name": "Otaru Canal Vegetable Sushi",
    "japaneseName": "小樽運河野菜寿司",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 60,
    "name": "Green Cafe Otaru",
    "japaneseName": "グリーンカフェ 小樽店",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
    "tags": [
      "純素昔",
      "有機沙拉",
      "排毒果汁",
      "精緻簡餐",
      "小樽"
    ],
    "rating": 4.6,
    "description": "小樽運河旁的有機果汁與輕食吧。全店不使用動物成分。主打鮮榨綠色排毒蔬果昔、糙米蔬菜沙拉碗及純素藍莓馬芬，醬汁與食材均不含五辛與蛋奶，是逛街防毒的好去處。",
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
    "id": 61,
    "name": "Otaru Ramen Tokiya",
    "japaneseName": "小樽らーめん ときや",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "拉麵",
      "無肉湯底",
      "近大正硝子",
      "拉麵",
      "小樽"
    ],
    "rating": 4.3,
    "description": "以昆布和香菇粉熬製的植物性醬油拉麵（不含動物成分與魚介，但含青蔥），是乾淨的五辛素拉麵，適合能吃蔥蒜五辛的蔬食者。",
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
    "id": 62,
    "name": "Otaru LeTAO Path (甜點)",
    "japaneseName": "LeTAO 小樽洋菓子本店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 63,
    "name": "Yamanaka Dairy Farm Otaru",
    "japaneseName": "山中牧場 小樽店",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 64,
    "name": "Cafe Libera Asahikawa",
    "japaneseName": "カフェ リベラ 旭川店",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
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
    "id": 65,
    "name": "Sunnyside Cafe (Asahikawa)",
    "japaneseName": "サニーサイド カフェ 旭川店",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
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
    "id": 66,
    "name": "Indian Restaurant Taj Mahal Asahikawa",
    "japaneseName": "タージ・マ哈爾 旭川店",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 67,
    "name": "Asahikawa Organic Diner",
    "japaneseName": "旭川有機食養食堂",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
    "tags": [
      "食養定食",
      "無糖甜點",
      "無添加",
      "精緻簡餐",
      "旭川"
    ],
    "rating": 4.7,
    "description": "秉持長壽飲食法（Macrobiotic）的旭川小食堂。提供「季節時蔬食養木盒套餐」，包含酵素糙米、有機煮野菜和醃菜，不含動物食材、五辛及精製糖，對身體極無負擔。",
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
    "id": 68,
    "name": "Bakery Shop Organic Bread",
    "japaneseName": "オーガニック ブレッド 旭川",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 69,
    "name": "Asahikawa Zoo Cafe (甜點)",
    "japaneseName": "旭川動物園中央食堂 カフェ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 70,
    "name": "Furano Cafe Goryo",
    "japaneseName": "カフェ 五葉 (Goryo)",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
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
    "id": 71,
    "name": "Furano Wine House",
    "japaneseName": "ふらのワインハウス",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 72,
    "name": "Furano Cheese Factory Cafe",
    "japaneseName": "富良野チーズ工房 ピッツァ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
    "tags": [
      "現烤披薩",
      "手作起司",
      "手工Gelato",
      "甜點烘焙",
      "富良野"
    ],
    "rating": 4.7,
    "description": "富良野起司工房內的附設餐飲區。主要提供手工製作的牛奶義式冰淇淋 (Gelato) 與起司甜點（皆為蛋奶素，無肉無魚介無五辛），起司香氣撲鼻。",
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
    "id": 73,
    "name": "Furano Cafe Mujyoki",
    "japaneseName": "ふらの無心庵",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "純素 (無肉蛋奶五辛)",
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
    "id": 74,
    "name": "Lavender East Cafe (甜點)",
    "japaneseName": "ラベンダーイースト カフェ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 75,
    "name": "Furano Herb Hill",
    "japaneseName": "富良野ハーブヒル レストラン",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
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
    "id": 76,
    "name": "Farm Tomita Potato House",
    "japaneseName": "ファーム富田 とうきびハウス",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 77,
    "name": "Furano Kan Kan Mura Cafe",
    "japaneseName": "富良野 歓寒村カフェ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
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
    "id": 78,
    "name": "Biei Senka Cafe",
    "japaneseName": "美瑛選果 こむぎ工房",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 79,
    "name": "Cafe Biei Hill",
    "japaneseName": "カフェ 美瑛の丘",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
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
    "id": 80,
    "name": "Cafe de La Paix",
    "japaneseName": "カフェ・ド・ラ・ペ (La Paix)",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 81,
    "name": "Biei Wheat Cafe",
    "japaneseName": "美瑛小麥 カフェ",
    "category": "bistro",
    "categoryLabel": "精緻異國",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
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
    "id": 82,
    "name": "Biei Blue Pond Cafe (甜點)",
    "japaneseName": "青い池売店 ブルーポンド",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 83,
    "name": "Biei Milk Farm (甜點)",
    "japaneseName": "美瑛放牧酪農場 カフェ",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
    "id": 84,
    "name": "Biei Potato House",
    "japaneseName": "美瑛ポテトの家",
    "category": "bakery",
    "categoryLabel": "甜點烘焙",
    "vegStatus": "lacto-ovo",
    "vegStatusLabel": "蛋奶素 (含蛋奶/無肉無五辛)",
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
  },
  {
    "name": "Holistic Bio Cafe Veggy Way",
    "japaneseName": "ホリスティックバイオカフェ ヴェッジウェイ",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "純素拉麵",
      "素食聖代",
      "無蛋無奶",
      "Maruyama周邊"
    ],
    "rating": 4.8,
    "description": "位於圓山區的 100% 純素咖啡廳。招牌為大豆素肉漢堡與無五辛味噌拉麵，甜點聖代均不使用蛋奶，是極為安全的純素餐廳。",
    "address": "北海道札幌市中央区大通西27丁目2-3",
    "transit": "地鐵「圓山公園站」4號出口步行約 2 分鐘",
    "hours": "11:30 - 18:00 (L.O. 17:00)",
    "closed": "每週日、一公休",
    "tel": "+81-11-624-7632",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Holistic+Bio+Cafe+Veggy+Way+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0568,
    "lng": 141.3195,
    "businessHours": {
      "closedDays": [
        0,
        1
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "18:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "純素養生拉麵",
    "id": 85
  },
  {
    "name": "Itadakizen Sapporo (いただきますぜん 札幌店)",
    "japaneseName": "いただきぜん 札幌店",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "有機全素",
      "素食定食",
      "昆布湯底",
      "圓山公園"
    ],
    "rating": 4.7,
    "description": "圓山區的有機全素日式餐廳。提供傳統素食定食、野菜天婦羅與全素壽司，湯底完全使用昆布與香菇慢熬，乾淨無五辛。",
    "address": "北海道札幌市中央区南2条西23丁目2-1",
    "transit": "地鐵「圓山公園站」步行約 5 分鐘",
    "hours": "11:30 - 15:00 / 17:00 - 21:00",
    "closed": "每週二公休",
    "tel": "+81-11-676-8438",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Itadakizen+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0559,
    "lng": 141.3172,
    "businessHours": {
      "closedDays": [
        2
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
      ]
    },
    "region": "sapporo",
    "mapLabel": "有機食養料理",
    "id": 86
  },
  {
    "name": "AIN SOPH. Journey Sapporo",
    "japaneseName": "アインソフ ジャーニー 札幌店",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "純素鬆餅",
      "純素漢堡",
      "無麩質",
      "札幌車站"
    ],
    "rating": 4.6,
    "description": "日本知名純素連鎖品牌。提供純素起司漢堡、植物肉義大利麵與招牌純素鬆餅，不含肉蛋奶五辛，對素食者非常友善安全。",
    "address": "北海道札幌市北区北7条西5丁目",
    "transit": "JR「札幌站」北口步行約 3 分鐘",
    "hours": "11:30 - 20:00 (L.O. 19:00)",
    "closed": "不定期公休",
    "tel": "+81-11-788-2627",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=AIN+SOPH+Journey+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0673,
    "lng": 141.3508,
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
    "mapLabel": "純素鬆餅與漢堡",
    "id": 87
  },
  {
    "name": "Lohas (Natural Food Dining Lohas)",
    "japaneseName": "ローハス",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "生食蔬食",
      "堅果壽司",
      "狸小路",
      "全素無五辛"
    ],
    "rating": 4.7,
    "description": "狸小路商店街旁的生食與有機蔬食餐廳。招牌為堅果代替米飯製作的蔬食壽司，蕎麥麵可更換為昆布植物醬汁，全素無五辛可。",
    "address": "北海道札幌市中央区南2条西7丁目6-1",
    "transit": "地鐵「大通站」或「薄野站」步行約 6 分鐘",
    "hours": "11:00 - 19:00 (L.O. 18:30)",
    "closed": "每週三公休",
    "tel": "+81-11-222-5567",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lohas+Natural+Food+Dining+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0578,
    "lng": 141.3512,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "19:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "生食有機健康餐",
    "id": 88
  },
  {
    "name": "Aoi Sora Organic Cafe (青い空流れる)",
    "japaneseName": "青い空流れる",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "有機玄米",
      "宏觀純素",
      "手作甜點",
      "圓山公園"
    ],
    "rating": 4.8,
    "description": "位於圓山區的有機與宏觀全素咖啡廳。餐點全無肉蛋奶與五辛，提供每日有機玄米餐盤與手作純素甜品，食材溫和健康。",
    "address": "北海道札幌市中央区南1条西22丁目1-17",
    "transit": "地鐵「圓山公園站」步行約 7 分鐘",
    "hours": "12:00 - 18:00 (L.O. 17:00)",
    "closed": "每週日、一公休",
    "tel": "+81-11-623-3887",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Aoi+Sora+Organic+Cafe+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.056,
    "lng": 141.3102,
    "businessHours": {
      "closedDays": [
        0,
        1
      ],
      "periods": [
        {
          "open": "12:00",
          "close": "18:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "純素有機玄米飯",
    "id": 89
  },
  {
    "name": "Salloga (さるが)",
    "japaneseName": "さるが",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "養生味噌",
      "玄米飯糰",
      "無大骨柴魚",
      "圓山區"
    ],
    "rating": 4.6,
    "description": "主打多款傳統味噌養生料理的有機全素咖啡廳。提供純素味噌飯糰、蔬菜燉菜，不使用柴魚大骨與五辛，深受蔬食者喜愛。",
    "address": "北海道札幌市中央区南3条西23丁目1-6",
    "transit": "地鐵「圓山公園站」步行約 6 分鐘",
    "hours": "11:30 - 17:00",
    "closed": "每週四公休",
    "tel": "+81-11-688-6629",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Salloga+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0531,
    "lng": 141.3214,
    "businessHours": {
      "closedDays": [
        4
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "17:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "和風味噌素食",
    "id": 90
  },
  {
    "name": "Vegan French Restaurant L'Espérance (レスペランス)",
    "japaneseName": "レスペランス",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "純素法式",
      "精緻套餐",
      "無五辛",
      "中島公園"
    ],
    "rating": 4.9,
    "description": "札幌極為稀有的全植物性精緻法式餐廳。主廚悉心打造多道精緻蔬食套餐，不使用蛋奶、肉類及五辛，用餐氛圍極具儀式感。",
    "address": "北海道札幌市中央区南14条西8丁目",
    "transit": "地鐵「中島公園站」或電車站步行約 8 分鐘",
    "hours": "18:00 - 22:00 (預約制)",
    "closed": "每週三公休",
    "tel": "+81-11-532-1552",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=L'Esperance+Vegan+French+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0458,
    "lng": 141.3562,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "18:00",
          "close": "22:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "純素精緻法餐",
    "id": 91
  },
  {
    "name": "Agt Organic Cafe (Agt)",
    "japaneseName": "アジト",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "小麥無麩質",
      "烤米飯糰",
      "味噌鹽麴",
      "幌平橋"
    ],
    "rating": 4.7,
    "description": "主打日本米食與味噌的有機全素咖啡廳。提供以天然鹽麴做成的小麥無麩質三明治與烤米飯糰，無蛋奶無五辛，對健康十分注重。",
    "address": "北海道札幌市中央区南16条西4丁目1-10",
    "transit": "地鐵「幌平橋站」步行約 4 分鐘",
    "hours": "10:00 - 17:00",
    "closed": "每週四公休",
    "tel": "+81-11-552-3729",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Agt+Organic+Cafe+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0428,
    "lng": 141.3551,
    "businessHours": {
      "closedDays": [
        4
      ],
      "periods": [
        {
          "open": "10:00",
          "close": "17:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "純素米食三明治",
    "id": 92
  },
  {
    "name": "Petit Caco",
    "japaneseName": "プティ カコ",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "RawVegan",
      "純素巧克力",
      "無麩質",
      "札幌車站"
    ],
    "rating": 4.8,
    "description": "札幌唯一的生食純素甜點店。所有巧克力與蛋糕均不經過高溫烘烤，不含小麥、蛋奶、精製糖及五辛，嚴格全素者甜點天堂。",
    "address": "北海道札幌市北区北6条西8丁目",
    "transit": "JR「札幌站」西口口步行約 8 分鐘",
    "hours": "12:00 - 18:00",
    "closed": "每週一、二公休",
    "tel": "+81-11-736-2200",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Petit+Caco+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0612,
    "lng": 141.3541,
    "businessHours": {
      "closedDays": [
        1,
        2
      ],
      "periods": [
        {
          "open": "12:00",
          "close": "18:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "純素生食甜點",
    "id": 93
  },
  {
    "name": "Cafe178miyanosawa",
    "japaneseName": "カフェ178 宮の沢",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "有機飯糰",
      "無麩質甜點",
      "宮之澤",
      "純素"
    ],
    "rating": 4.7,
    "description": "宮之澤站附近的有機咖啡廳。提供嚴選有機時蔬捏製的飯糰定食，可完全去除蛋奶、大骨柴魚湯及五辛，是讓人安心的乾淨全素。",
    "address": "北海道札幌市西区宮の沢2条1丁目11-1",
    "transit": "地鐵「宮之澤站」步行約 6 分鐘",
    "hours": "11:00 - 17:00",
    "closed": "每週日、一公休",
    "tel": "+81-11-699-5178",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe178miyanosawa+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0901,
    "lng": 141.2782,
    "businessHours": {
      "closedDays": [
        0,
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "17:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "健康純素餐盒",
    "id": 94
  },
  {
    "name": "organic cafe Aoshi (オーガニックカフェ青し)",
    "japaneseName": "オーガニックカフェ青し",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "糙米定食",
      "有機時蔬",
      "中島公園附近",
      "無大骨柴魚"
    ],
    "rating": 4.7,
    "description": "有機咖啡廳。提供每日更替的全素糙米菜盤，使用無化學農藥食材與昆布高湯，無蛋奶、無大骨柴魚、無五辛，乾淨且養生。",
    "address": "北海道札幌市中央区南11条西8丁目1-31",
    "transit": "地鐵「中島公園站」步行約 10 分鐘",
    "hours": "11:30 - 17:30",
    "closed": "每週三、四公休",
    "tel": "+81-11-533-3112",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=organic+cafe+Aoshi+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0582,
    "lng": 141.3412,
    "businessHours": {
      "closedDays": [
        3,
        4
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "17:30"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "全素糙米菜盤",
    "id": 95
  },
  {
    "name": "Chiba House (チバハウス)",
    "japaneseName": "チバハウス",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "全素麵包",
      "天然酵母",
      "北18條",
      "不含蛋奶"
    ],
    "rating": 4.6,
    "description": "手作天然酵母全素麵包與自家烘焙咖啡。所有麵包與點心均不使用蛋、牛奶、白砂糖及五辛，對全素與過敏者非常貼心安全。",
    "address": "北海道札幌市北区北18条西5丁目1-8",
    "transit": "地鐵「北18條站」步行約 2 分鐘",
    "hours": "12:00 - 19:00",
    "closed": "每週一、二公休",
    "tel": "+81-11-757-5518",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Chiba+House+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0721,
    "lng": 141.3468,
    "businessHours": {
      "closedDays": [
        1,
        2
      ],
      "periods": [
        {
          "open": "12:00",
          "close": "19:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "天然酵母全素烘焙",
    "id": 96
  },
  {
    "name": "Relish Cafe (レリッシュ カフェ)",
    "japaneseName": "レリッシュ カフェ",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "宏觀蔬食",
      "全素甜點",
      "札幌大通",
      "養生食療"
    ],
    "rating": 4.7,
    "description": "札幌市中心的宏觀素食咖啡廳。提供精緻的時令野菜定食與純素甜點，完全不使用動物油、蛋奶及五辛，口味清爽，環境優雅。",
    "address": "北海道札幌市中央区北1条西3丁目3",
    "transit": "地鐵「大通站」步行約 4 分鐘",
    "hours": "11:30 - 16:30",
    "closed": "每週日公休",
    "tel": "+81-11-218-1212",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Relish+Cafe+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0611,
    "lng": 141.3482,
    "businessHours": {
      "closedDays": [
        0
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "16:30"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "宏觀全素食療",
    "id": 97
  },
  {
    "name": "Raw Sweets Preparo (プレパロ)",
    "japaneseName": "生シフォン プレパロ",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "生食蛋糕",
      "堅果起司",
      "西28丁目",
      "無五辛"
    ],
    "rating": 4.8,
    "description": "主打 Raw Vegan 生食甜點。起司蛋糕與塔類甜點皆使用堅果與椰子油在低溫下製作，保留酵素，不含蛋奶、小麥及五辛。",
    "address": "北海道札幌市中央区北3条西28丁目2-1",
    "transit": "地鐵「西28丁目站」步行約 3 分鐘",
    "hours": "11:00 - 18:00",
    "closed": "每週三公休",
    "tel": "+81-11-676-5590",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Preparo+Raw+Sweets+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0631,
    "lng": 141.3325,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "18:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "低溫酵素純素甜品",
    "id": 98
  },
  {
    "name": "Hachico Cafe (ハチコカフェ)",
    "japaneseName": "ハチコカフェ",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "米粉烘焙",
      "純素無麩質",
      "琴似站",
      "低敏"
    ],
    "rating": 4.7,
    "description": "主打純素且無麩質的甜點專賣店。使用米粉替代麵粉，完全不含蛋、牛乳及五辛，是嚴格全素者的安心甜點首選。",
    "address": "北海道札幌市西区琴似2条5丁目2-2",
    "transit": "地鐵「琴似站」步行約 4 分鐘",
    "hours": "11:00 - 17:00",
    "closed": "每週一公休",
    "tel": "+81-11-688-8858",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hachico+Cafe+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0682,
    "lng": 141.3255,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "17:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "純素米粉糕點",
    "id": 99
  },
  {
    "name": "White Cosme Cafe (ホワイトコスメカフェ)",
    "japaneseName": "ホワイトコスメカフェ",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "大豆冰淇淋",
      "全素烘焙",
      "美妝概念",
      "大通公園"
    ],
    "rating": 4.6,
    "description": "純素甜點概念店。提供全素大豆冰淇淋、純素杯子蛋糕與排毒果汁，無蛋奶無五辛，深受追求健康的客群歡迎。",
    "address": "北海道札幌市中央区大通西6丁目1",
    "transit": "地鐵「大通站」步行約 5 分鐘",
    "hours": "11:00 - 19:30",
    "closed": "無特定公休日",
    "tel": "+81-11-211-1200",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=White+Cosme+Cafe+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0591,
    "lng": 141.3522,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "19:30"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "全素大豆冰淇淋",
    "id": 100
  },
  {
    "name": "Mame no Ki (豆の木)",
    "japaneseName": "豆の木",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "豆乳布丁",
      "純素手工餅乾",
      "苗穗站",
      "無五辛"
    ],
    "rating": 4.7,
    "description": "手作純素布丁與餅乾專賣店。使用大豆製成豆乳，代替牛奶和雞蛋製作滑順的全素布丁，乾淨且無五辛，食材非常安全。",
    "address": "北海道札幌市東区北8条東12丁目1-8",
    "transit": "JR「苗穗站」步行約 6 分鐘",
    "hours": "12:00 - 18:00",
    "closed": "每週二、三公休",
    "tel": "+81-11-799-0099",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mame+no+Ki+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0652,
    "lng": 141.3612,
    "businessHours": {
      "closedDays": [
        2,
        3
      ],
      "periods": [
        {
          "open": "12:00",
          "close": "18:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "手工大豆豆乳布丁",
    "id": 101
  },
  {
    "name": "Sujatha Indian Vegetarian (スジャータ)",
    "japaneseName": "スジャータ",
    "category": "curry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "正宗印素",
      "佛教素可",
      "無蛋無奶",
      "北24條"
    ],
    "rating": 4.8,
    "description": "札幌極具盛名的傳統印度蔬食餐館。餐點完全不使用肉類、魚貝或蛋奶，提供乾淨的鷹嘴豆咖哩，並可為佛教素客製無五辛。",
    "address": "北海道札幌市北区北24条西3丁目1-1",
    "transit": "地鐵「北24條站」步行約 2 分鐘",
    "hours": "11:30 - 14:30 / 17:30 - 21:00",
    "closed": "每週一公休",
    "tel": "+81-11-758-2202",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sujatha+Indian+Vegetarian+Sapporo",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.0782,
    "lng": 141.3528,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "14:30"
        },
        {
          "open": "17:30",
          "close": "21:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "正宗印度蔬食",
    "id": 102
  },
  {
    "name": "Mame Kitchen Maruyama (まめキッチン円山)",
    "japaneseName": "まめキッチン円山",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "豆沙拉",
      "全素飯糰",
      "去五辛可",
      "外帶專門"
    ],
    "rating": 4.7,
    "description": "北海道豆料理專賣店。提供乾淨的植物性豆乳昔與全素飯糰（無大骨柴魚、無蛋奶，含洋蔥五辛），可客製化完全去五辛。",
    "address": "北海道札幌市中央区北2条西25丁目1-1",
    "transit": "地鐵「西28丁目站」步行約 3 分鐘",
    "hours": "11:00 - 18:30",
    "closed": "每週三公休",
    "tel": "+81-11-611-3323",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mame+Kitchen+Maruyama+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0588,
    "lng": 141.3182,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "18:30"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "植物大豆餐包飯糰",
    "id": 103
  },
  {
    "name": "Cafe Raw Life",
    "japaneseName": "カフェ ローライフ",
    "category": "cafe",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "植物奶咖啡",
      "去肉去起司",
      "含五辛",
      "札幌西區"
    ],
    "rating": 4.5,
    "description": "提供蔬食咖哩與義大利麵（無大骨、柴魚底，含洋蔥蒜五辛）。可為素食者去肉與去起司，提供植物燕麥奶，無法去五辛。",
    "address": "北海道札幌市西区二十四軒4条4丁目",
    "transit": "地鐵「二十四軒站」步行約 4 分鐘",
    "hours": "11:30 - 18:00",
    "closed": "每週四公休",
    "tel": "+81-11-615-5590",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+Raw+Life+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0658,
    "lng": 141.3412,
    "businessHours": {
      "closedDays": [
        4
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "18:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "蔬食咖哩與植物奶",
    "id": 104
  },
  {
    "name": "Green Cafe (グリーンカフェ)",
    "japaneseName": "グリーンカフェ",
    "category": "cafe",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "小農蔬菜",
      "沙拉盤",
      "去五辛客製",
      "大通公園"
    ],
    "rating": 4.6,
    "description": "有機時蔬餐廳。提供生菜沙拉盤與全素胡蘿蔔蛋糕，不含大骨及柴魚成分。可要求去肉、去蛋奶與去五辛，食材乾淨健康。",
    "address": "北海道札幌市中央区大通西12丁目",
    "transit": "地鐵「西11丁目站」步行約 3 分鐘",
    "hours": "11:00 - 17:00",
    "closed": "每週一公休",
    "tel": "+81-11-200-1178",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Green+Cafe+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0688,
    "lng": 141.3542,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "17:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "小農有機沙拉",
    "id": 105
  },
  {
    "name": "Wawawa Cafe (わわわカフェ)",
    "japaneseName": "わわわカフェ",
    "category": "cafe",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "無肉高湯",
      "去蛋奶起司",
      "含五辛",
      "豐平區"
    ],
    "rating": 4.5,
    "description": "有機咖啡廳。限量蔬菜咖哩定食使用全蔬菜湯底（無大骨柴魚），可客製去除起司與蛋奶，含洋蔥五辛（咖哩底無法去除五辛）。",
    "address": "北海道札幌市豊平区旭町3丁目",
    "transit": "地鐵「學園前站」步行約 5 分鐘",
    "hours": "11:30 - 17:30",
    "closed": "每週日、一公休",
    "tel": "+81-11-822-1133",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Wawawa+Cafe+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0488,
    "lng": 141.3812,
    "businessHours": {
      "closedDays": [
        0,
        1
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "17:30"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "社區風蔬菜咖哩",
    "id": 106
  },
  {
    "name": "Cafe Chienoki (札幌ちえのき)",
    "japaneseName": "カフェちえのき",
    "category": "cafe",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "大豆肉咖哩",
      "去五辛可",
      "不含蛋奶",
      "札幌中央"
    ],
    "rating": 4.6,
    "description": "素食友善書香咖啡廳。提供大豆肉片咖哩與純素烤麵包（無肉無大骨柴魚，不含蛋奶，含洋蔥五辛），可客製去五辛（吐司可）。",
    "address": "北海道札幌市中央区北1条西8丁目1-8",
    "transit": "地鐵「大通站」或「西11丁目站」步行約 6 分鐘",
    "hours": "11:00 - 18:00",
    "closed": "每週日公休",
    "tel": "+81-11-200-8899",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+Chienoki+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0601,
    "lng": 141.3592,
    "businessHours": {
      "closedDays": [
        0
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "18:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "大豆肉養生咖哩",
    "id": 107
  },
  {
    "name": "Cocoon Nest (コクーンネスト)",
    "japaneseName": "コクーンネスト",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "植物肉漢堡",
      "去五辛客製",
      "無蛋無奶",
      "西28丁目"
    ],
    "rating": 4.7,
    "description": "健康概念餐廳。提供專用植物肉漢堡與燕麥奶果昔（無肉無大骨柴魚，無蛋奶，含洋蔥五辛），可客製去除五辛與大蒜。",
    "address": "北海道札幌市中央区北4条西28丁目",
    "transit": "地鐵「西28丁目站」步行約 2 分鐘",
    "hours": "11:00 - 19:00",
    "closed": "每週三公休",
    "tel": "+81-11-676-4488",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cocoon+Nest+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0522,
    "lng": 141.3122,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "19:00"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "健康植物肉漢堡",
    "id": 108
  },
  {
    "name": "TERRA Farm to Table",
    "japaneseName": "テラ ファームトゥテーブル",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "純素漢堡",
      "沙拉吧",
      "去五辛客製",
      "中島公園"
    ],
    "rating": 4.5,
    "description": "有機溫室設計餐廳。有清晰標註的純素漢堡與沙拉吧（不含大骨與魚介成分），可客製化去肉、去蛋奶與五辛，非常適合聚餐。",
    "address": "北海道札幌市中央区南9条西2丁目2-10",
    "transit": "地鐵「中島公園站」步行約 2 分鐘",
    "hours": "11:30 - 21:00",
    "closed": "無特定公休日",
    "tel": "+81-11-512-3456",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=TERRA+Farm+to+Table+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0482,
    "lng": 141.3532,
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
    "mapLabel": "溫室蔬食沙拉吧",
    "id": 109
  },
  {
    "name": "Organic Plus (オーガニックプラス)",
    "japaneseName": "オーガニックプラス",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "有機蔬食套餐",
      "無柴魚大骨",
      "去蛋奶",
      "去五辛"
    ],
    "rating": 4.6,
    "description": "有機蔬食餐酒館。有專門的蔬食套餐，不使用柴魚與大骨高湯，且可為顧客特別客製化去除蛋、奶、五辛與肉類，吃法非常彈性。",
    "address": "北海道札幌市中央区南3条西6丁目",
    "transit": "地鐵「大通站」或「薄野站」步行約 5 分鐘",
    "hours": "17:30 - 22:30",
    "closed": "每週二公休",
    "tel": "+81-11-222-7788",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Organic+Plus+Sapporo",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.0528,
    "lng": 141.3548,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "17:30",
          "close": "22:30"
        }
      ]
    },
    "region": "sapporo",
    "mapLabel": "有機客製蔬食餐",
    "id": 110
  },
  {
    "name": "Taniguchi Shoten (谷口商店)",
    "japaneseName": "谷口商店",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "有機便當",
      "錢函海灘",
      "去五辛可",
      "無蛋無奶"
    ],
    "rating": 4.7,
    "description": "小樽錢函的有機全素便當與小點專賣店。餐點不含任何肉類與大骨柴魚高湯，且提供無蛋奶與無五辛的健康家常飯盒與配菜。",
    "address": "北海道小樽市銭函2丁目3-4",
    "transit": "JR「錢函站」步行約 4 分鐘",
    "hours": "11:00 - 17:00",
    "closed": "每週一、二公休",
    "tel": "+81-134-64-5512",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Taniguchi+Shoten+Otaru",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.1412,
    "lng": 141.2182,
    "businessHours": {
      "closedDays": [
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
    "region": "otaru",
    "mapLabel": "有機蔬食餐盒",
    "id": 111
  },
  {
    "name": "Nakaya Soba (蕎麦 なかや)",
    "japaneseName": "蕎麦 なかや",
    "category": "japanese",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "昆布沾汁",
      "去柴魚大骨",
      "野菜天婦羅",
      "小樽站"
    ],
    "rating": 4.6,
    "description": "小樽稀有的素食友善蕎麥麵店。點餐時可指定使用不含柴魚的昆布醬汁，且提供不含蛋奶的野菜天婦羅，對嚴格素食者十分友善。",
    "address": "北海道小樽市稲穂2丁目",
    "transit": "JR「小樽站」步行約 6 分鐘",
    "hours": "11:30 - 15:00 / 17:00 - 20:00",
    "closed": "每週三公休",
    "tel": "+81-134-22-1188",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nakaya+Soba+Otaru",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.1901,
    "lng": 141.0022,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "15:00"
        },
        {
          "open": "17:00",
          "close": "20:00"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "昆布醬手打蕎麥",
    "id": 112
  },
  {
    "name": "Otaru Churros",
    "japaneseName": "小樽チュロス",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "吉拿棒",
      "無蛋無奶",
      "純素甜點",
      "小樽運河"
    ],
    "rating": 4.5,
    "description": "手工吉拿棒專賣店。炸吉拿棒不使用蛋與牛奶，多種口味皆為純素（無五辛），提供大豆乳霜沾醬，可客製去除牛奶奶油。",
    "address": "北海道小樽市港町5-4",
    "transit": "JR「小樽站」步行約 8 分鐘",
    "hours": "11:00 - 18:00",
    "closed": "無特定公休日",
    "tel": "+81-134-31-0022",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Otaru+Churros",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.1942,
    "lng": 141.0048,
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
    "mapLabel": "純素手工吉拿棒",
    "id": 113
  },
  {
    "name": "PetitBaril (プティバリル)",
    "japaneseName": "プティバリル",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "純素麵包",
      "無麩質司康",
      "小樽運河",
      "無五辛"
    ],
    "rating": 4.8,
    "description": "全素無麩質麵包烘焙坊。所有麵包、司康與蛋糕均不使用牛奶、蛋、小麥及五辛，對嚴格純素者與過敏者是絕佳的小點心站。",
    "address": "北海道小樽市色内1丁目",
    "transit": "JR「小樽站」步行約 9 分鐘",
    "hours": "10:30 - 17:30",
    "closed": "每週一、四公休",
    "tel": "+81-134-23-4482",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=PetitBaril+Otaru",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.1922,
    "lng": 141.0082,
    "businessHours": {
      "closedDays": [
        1,
        4
      ],
      "periods": [
        {
          "open": "10:30",
          "close": "17:30"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "無麩質純素麵包",
    "id": 114
  },
  {
    "name": "Chikyuu No Uta Organic (地球のうた)",
    "japaneseName": "地球のうた",
    "category": "cafe",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "大豆肉飯",
      "去五辛客製",
      "無柴魚大骨",
      "小樽市"
    ],
    "rating": 4.6,
    "description": "小樽有機老屋咖啡廳。午餐提供大豆素肉飯與全素司康（無大骨柴魚、無蛋奶，含洋蔥五辛），可客製化去五辛，食材非常溫和。",
    "address": "北海道小樽市花園2丁目",
    "transit": "JR「南小樽站」步行約 8 分鐘",
    "hours": "11:30 - 17:00",
    "closed": "每週二、三公休",
    "tel": "+81-134-64-1122",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Chikyuu+No+Uta+Organic+Otaru",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.1812,
    "lng": 141.0122,
    "businessHours": {
      "closedDays": [
        2,
        3
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "17:00"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "有機大豆肉玄米飯",
    "id": 115
  },
  {
    "name": "Yururi-an (ゆるり庵)",
    "japaneseName": "ゆるり庵",
    "category": "cafe",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "養生定食",
      "去肉去蛋奶",
      "昆布湯底",
      "南小樽"
    ],
    "rating": 4.6,
    "description": "提供糙米飯定食、野菜漢堡排、純素義大利麵與咖哩（無肉無蛋奶，不含大骨柴魚湯底，部分含蔥蒜五辛可去，需提前告知店員）。",
    "address": "北海道小樽市住吉町",
    "transit": "JR「南小樽站」步行約 4 分鐘",
    "hours": "11:00 - 17:30",
    "closed": "每週二公休",
    "tel": "+81-134-25-3300",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Yururi-an+Otaru",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.1988,
    "lng": 141.0012,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "17:30"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "糙米養生野菜簡餐",
    "id": 116
  },
  {
    "name": "Nahana Hahana (菜はな)",
    "japaneseName": "菜はな",
    "category": "japanese",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "無肉無柴魚",
      "烏龍麵",
      "去五辛可",
      "小樽市"
    ],
    "rating": 4.5,
    "description": "家庭日式料理。可為素食者特別製作『無肉無柴魚醬汁』的野菜烏龍麵與豆腐定食，不含大骨成分，可去蛋奶，五辛可去。",
    "address": "北海道小樽市最上1丁目",
    "transit": "JR「小樽站」搭乘巴士約 10 分鐘至最上町步行 2 分鐘",
    "hours": "11:30 - 15:00 / 17:30 - 20:30",
    "closed": "每週一公休",
    "tel": "+81-134-24-1182",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nahana+Hahana+Otaru",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.1882,
    "lng": 141.0092,
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
          "open": "17:30",
          "close": "20:30"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "純素醬汁家庭料理",
    "id": 117
  },
  {
    "name": "Yabuhan Soba (籔半蕎麦)",
    "japaneseName": "籔半蕎麦",
    "category": "japanese",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "昆布蔬菜沾醬",
      "無蛋麵衣",
      "去肉",
      "百年老店"
    ],
    "rating": 4.6,
    "description": "小樽極富歷史的手打蕎麥麵店。點餐時可跟店員指定提供『昆布蔬菜沾醬』（無柴魚大骨），野菜天婦羅可做無蛋麵衣，去肉可。",
    "address": "北海道小樽市稲穂3丁目19-14",
    "transit": "JR「小樽站」步行約 5 分鐘",
    "hours": "11:00 - 15:00 / 17:00 - 20:30",
    "closed": "每週二公休",
    "tel": "+81-134-33-1212",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Yabuhan+Soba+Otaru",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.1952,
    "lng": 141.0008,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "15:00"
        },
        {
          "open": "17:00",
          "close": "20:30"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "傳統手打植物沾汁蕎麥",
    "id": 118
  },
  {
    "name": "Namishibuki (波しぶき 小樽店)",
    "japaneseName": "波しぶき 小樽店",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "蔬菜拉麵",
      "無柴魚大骨",
      "去蛋去肉",
      "含五辛大蒜"
    ],
    "rating": 4.4,
    "description": "運河旁的拉麵店。可向店員要求提供專用蔬菜醬油拉麵（不使用大骨與柴魚高湯，含五辛大蒜），配料可客製去肉、去蛋，無法去五辛。",
    "address": "北海道小樽市堺町",
    "transit": "JR「小樽站」步行約 11 分鐘",
    "hours": "11:00 - 21:00",
    "closed": "每週三公休",
    "tel": "+81-134-25-8833",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Namishibuki+Otaru",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.1982,
    "lng": 141.0055,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "21:00"
        }
      ]
    },
    "region": "otaru",
    "mapLabel": "客製無骨湯醬油拉麵",
    "id": 119
  },
  {
    "name": "Vegan Ramen Meguri (めぐり)",
    "japaneseName": "ヴィーガンラーメン めぐり",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "100%純素",
      "燕麥奶味噌",
      "無五辛大蒜",
      "旭川站"
    ],
    "rating": 4.9,
    "description": "旭川極為罕見的 100% 純素拉麵店。湯頭以昆布、香菇與燕麥奶調製，完全不含蔥蒜五辛、大骨、柴魚或蛋奶，全素與佛素者安全首選。",
    "address": "北海道旭川市2条通7丁目",
    "transit": "JR「旭川站」步行約 4 分鐘",
    "hours": "11:30 - 14:30 / 17:30 - 20:30",
    "closed": "每週一公休",
    "tel": "+81-166-22-8890",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Vegan+Ramen+Meguri+Asahikawa",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.7712,
    "lng": 142.3612,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "14:30"
        },
        {
          "open": "17:30",
          "close": "20:30"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "100%純素燕麥奶拉麵",
    "id": 120
  },
  {
    "name": "Ganso Asahikawa Ramen “ICHIKURA” (一蔵)",
    "japaneseName": "旭川ラーメン 一蔵",
    "category": "ramen",
    "categoryLabel": "日式拉麵",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "專用蔬食湯底",
      "純素餃子",
      "無蔥無蒜",
      "旭川"
    ],
    "rating": 4.6,
    "description": "提供專門的『蔬食拉麵與全素餃子（不含大骨、柴魚高湯，且不使用大蒜與洋蔥五辛）』，是乾淨且美味的植物性拉麵選項。",
    "address": "北海道旭川市3条通7丁目",
    "transit": "JR「旭川站」步行約 5 分鐘",
    "hours": "11:00 - 04:00 (夜間營業)",
    "closed": "不定期公休",
    "tel": "+81-166-24-8887",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ganso+Asahikawa+Ramen+ICHIKURA+Asahikawa",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.7682,
    "lng": 142.3592,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "04:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "無五辛專用素拉麵",
    "id": 121
  },
  {
    "name": "Kotobuki Spice (寿スパイス)",
    "japaneseName": "寿スパイス",
    "category": "curry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "老屋香料咖哩",
      "去肉去起司",
      "含五辛",
      "旭川"
    ],
    "rating": 4.7,
    "description": "老屋香料咖哩店。提供野菜香料咖哩與香料飯（不含大骨、柴魚成分，含洋蔥五辛，無蛋奶），可客製化去肉片、去起司，無法去五辛。",
    "address": "北海道旭川市東光9条2丁目2-4",
    "transit": "JR「旭川站」搭乘巴士約 15 分鐘至東光路口步行約 3 分鐘",
    "hours": "11:30 - 15:00",
    "closed": "每週三公休",
    "tel": "+81-166-33-0022",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Kotobuki+Spice+Asahikawa",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.7752,
    "lng": 142.3512,
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
    "mapLabel": "老屋素食香料咖哩",
    "id": 122
  },
  {
    "name": "Cafe Konii (カフェ コニー)",
    "japaneseName": "カフェ コニー",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "大豆素雞丁",
      "燕麥奶拿鐵",
      "去肉去蛋奶",
      "旭川"
    ],
    "rating": 4.6,
    "description": "溫馨咖啡廳。提供以大豆植物肉製成的糖醋素雞丁、素筆管麵，可去肉、去蛋奶，並提供燕麥奶與多種純素甜點，部分含五辛。",
    "address": "北海道旭川市4条通22丁目1-1",
    "transit": "地鐵或JR「旭川四条站」步行約 8 分鐘",
    "hours": "11:00 - 18:00",
    "closed": "每週二公休",
    "tel": "+81-166-34-5178",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+Konii+Asahikawa",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.7601,
    "lng": 142.3782,
    "businessHours": {
      "closedDays": [
        2
      ],
      "periods": [
        {
          "open": "11:00",
          "close": "18:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "大豆肉糖醋定食",
    "id": 123
  },
  {
    "name": "Soba Yukiya (そば雪家)",
    "japaneseName": "そば雪家",
    "category": "japanese",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "昆布素沾汁",
      "無蛋麵衣",
      "去柴魚大骨",
      "旭川"
    ],
    "rating": 4.5,
    "description": "手打蕎麥麵店。點餐時可跟店員指定更換為『全昆布素食沾醬』（無柴魚大骨成分），天婦羅可安排單獨油鍋炸時蔬，可去蛋奶五辛。",
    "address": "北海道旭川市3条通8丁目",
    "transit": "JR「旭川站」步行約 6 分鐘",
    "hours": "11:30 - 14:30 / 17:30 - 21:00",
    "closed": "每週一公休",
    "tel": "+81-166-23-0088",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Soba+Yukiya+Asahikawa",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.7652,
    "lng": 142.3608,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "14:30"
        },
        {
          "open": "17:30",
          "close": "21:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "昆布素沾汁手打蕎麥",
    "id": 124
  },
  {
    "name": "Ygeia (イゲア)",
    "japaneseName": "イゲア",
    "category": "curry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "有機香料咖哩",
      "去大骨去柴魚",
      "含洋蔥五辛",
      "旭川"
    ],
    "rating": 4.5,
    "description": "健康有機香料咖哩。其野菜香料咖哩醬汁完全不使用動物骨頭或柴魚（含洋蔥五辛），不含蛋奶，非常適合吃五辛素的旅客。",
    "address": "北海道旭川市緑町15丁目",
    "transit": "JR「旭川站」搭乘公車約 12 分鐘至綠町步行 2 分鐘",
    "hours": "11:30 - 15:00 / 17:30 - 20:00",
    "closed": "每週四公休",
    "tel": "+81-166-55-1212",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ygeia+Asahikawa",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.7801,
    "lng": 142.3482,
    "businessHours": {
      "closedDays": [
        4
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "15:00"
        },
        {
          "open": "17:30",
          "close": "20:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "有機無肉野菜香料咖哩",
    "id": 125
  },
  {
    "name": "Ryotei Kabuto (料亭 かぶと)",
    "japaneseName": "料亭 かぶと",
    "category": "japanese",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "料亭蔬食",
      "無蛋麵衣天婦羅",
      "去大骨柴魚",
      "預約制"
    ],
    "rating": 4.6,
    "description": "老字號料亭。可特別預訂『植物性天婦羅丼』（使用全蔬菜、無蛋麵衣炸製），並提供不含柴魚大骨的昆布甜醬油，可去蛋奶五辛。",
    "address": "北海道旭川市3条通11丁目",
    "transit": "JR「旭川站」步行約 12 分鐘",
    "hours": "12:00 - 14:00 / 17:00 - 21:00",
    "closed": "每週日公休",
    "tel": "+81-166-22-3438",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Ryotei+Kabuto+Asahikawa",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.7612,
    "lng": 142.3688,
    "businessHours": {
      "closedDays": [
        0
      ],
      "periods": [
        {
          "open": "12:00",
          "close": "14:00"
        },
        {
          "open": "17:00",
          "close": "21:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "日式全素天婦羅丼",
    "id": 126
  },
  {
    "name": "Rawlaw by Voreas",
    "japaneseName": "ローロー バイ ヴォレアス",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "植物肉捲餅",
      "大豆肉咖哩",
      "無蛋無奶",
      "去肉"
    ],
    "rating": 4.6,
    "description": "概念健康咖啡廳。提供純素大豆肉咖哩、植物肉捲餅及烤馬鈴薯（無肉無蛋奶，含五辛），是補給綠色能量與無蛋奶的優質點。",
    "address": "北海道旭川市2条通6丁目",
    "transit": "JR「旭川站」步行約 3 分鐘",
    "hours": "10:00 - 19:00",
    "closed": "每週日公休",
    "tel": "+81-166-29-1122",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Rawlaw+by+Voreas+Asahikawa",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.7711,
    "lng": 142.3588,
    "businessHours": {
      "closedDays": [
        0
      ],
      "periods": [
        {
          "open": "10:00",
          "close": "19:00"
        }
      ]
    },
    "region": "asahikawa",
    "mapLabel": "健康植物肉墨西哥捲餅",
    "id": 127
  },
  {
    "name": "Cafe House Navo (ナボ)",
    "japaneseName": "カフェハウス ナボ",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "小木屋全素",
      "無五辛可",
      "糙米套餐",
      "富良野"
    ],
    "rating": 4.9,
    "description": "富良野極珍貴的 100% 全素小木屋咖啡廳。餐點完全不使用任何肉類、柴魚、蛋奶，且可提供無五辛的玄米飯套餐與純素馬芬。",
    "address": "北海道富良野市下五区",
    "transit": "JR「學田站」步行約 15 分鐘，或富良野站開車約 6 分鐘",
    "hours": "11:30 - 18:00 (L.O. 17:00)",
    "closed": "每週二、三公休",
    "tel": "+81-167-22-2234",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+House+Navo+Furano",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 43.3422,
    "lng": 142.3822,
    "businessHours": {
      "closedDays": [
        2,
        3
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "18:00"
        }
      ]
    },
    "region": "furano",
    "mapLabel": "純素森林小木屋",
    "id": 128
  },
  {
    "name": "Lounge 1909",
    "japaneseName": "ラウンジ 1909",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "預約制純素套餐",
      "有機時蔬",
      "無大骨柴魚",
      "富良野"
    ],
    "rating": 4.8,
    "description": "富良野精緻料理。晚餐可預訂『專屬全素精緻法式套餐』（不含大骨柴魚、無蛋奶無五辛），使用富良野頂級有機蔬菜烹調。",
    "address": "北海道富良野市中御料",
    "transit": "JR「富良野站」開車約 8 分鐘至富良野度假園區內",
    "hours": "18:00 - 21:30 (預約制)",
    "closed": "不定期公休",
    "tel": "+81-167-22-1909",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Lounge+1909+Furano",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.3511,
    "lng": 142.3909,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "18:00",
          "close": "21:30"
        }
      ]
    },
    "region": "furano",
    "mapLabel": "法式手作蔬食晚餐",
    "id": 129
  },
  {
    "name": "Surya Furano (スリヤ富良野)",
    "japaneseName": "スリヤ富良野",
    "category": "curry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "尼泊爾咖哩",
      "去肉",
      "去奶",
      "含洋蔥五辛"
    ],
    "rating": 4.5,
    "description": "尼泊爾咖哩。提供專門的扁豆咖哩與野菜咖哩（無肉無魚介底，不含蛋奶，含洋蔥五辛），饢餅可指定不抹奶油，可去肉。",
    "address": "北海道富良野市若葉町",
    "transit": "JR「富良野站」步行約 12 分鐘",
    "hours": "11:00 - 15:00 / 17:00 - 21:00",
    "closed": "每週三公休",
    "tel": "+81-167-23-5590",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Surya+Furano",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.3452,
    "lng": 142.3852,
    "businessHours": {
      "closedDays": [
        3
      ],
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
    "region": "furano",
    "mapLabel": "尼泊爾植物扁豆咖哩",
    "id": 130
  },
  {
    "name": "Cafe Goryo (カフェ ゴリョウ)",
    "japaneseName": "カフェ ゴリョウ",
    "category": "cafe",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "古民家咖啡",
      "自產野菜",
      "無肉無柴魚底",
      "去五辛可"
    ],
    "rating": 4.7,
    "description": "古民家咖啡廳。提供自產有機野菜製作的番茄時蔬義大利麵與香料咖哩，高湯不含肉與魚介，可去除奶酪、去五辛（咖哩除外），去蛋可。",
    "address": "北海道富良野市上五区",
    "transit": "JR「富良野站」開車約 10 分鐘，近五區神社",
    "hours": "11:00 - 20:00",
    "closed": "每週二公休",
    "tel": "+81-167-23-5139",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+Goryo+Furano",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.3282,
    "lng": 142.4102,
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
    "mapLabel": "古民家自產蔬食麵",
    "id": 131
  },
  {
    "name": "Amadeus Biei (アマデウス)",
    "japaneseName": "アマデウス",
    "category": "curry",
    "categoryLabel": "特色湯咖哩",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "椰奶香菇咖哩",
      "無蛋無奶",
      "大豆肉片",
      "含五辛"
    ],
    "rating": 4.6,
    "description": "美瑛的咖哩店。提供『全素腰果鮮菇咖哩』（使用椰奶調配無肉底，無蛋奶，含洋蔥五辛），大豆肉片口感豐富，無法去五辛。",
    "address": "北海道上川郡美瑛町美沢",
    "transit": "JR「美瑛站」開車約 10 分鐘，往白金溫泉方向",
    "hours": "11:00 - 16:00",
    "closed": "每週四公休",
    "tel": "+81-166-92-2338",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Amadeus+Biei",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 43.5901,
    "lng": 142.4512,
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
    "mapLabel": "椰奶大豆肉咖哩",
    "id": 132
  },
  {
    "name": "Taom Hakodate (タオム)",
    "japaneseName": "タオム",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "函館純素",
      "有機定食",
      "手工麻薯",
      "無五辛"
    ],
    "rating": 4.8,
    "description": "函館極受歡迎的全素餐廳。提供主打有機在地蔬菜的味噌湯、糙米飯、豆腐與手工麻糬等精緻和風定食，無蛋奶五辛，極具營養。",
    "address": "北海道函館市元町",
    "transit": "函館路面電車「十字街站」步行約 5 分鐘",
    "hours": "11:30 - 17:00",
    "closed": "每週三公休",
    "tel": "+81-138-84-1188",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Taom+Hakodate",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 41.7612,
    "lng": 140.7182,
    "businessHours": {
      "closedDays": [
        3
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "17:00"
        }
      ]
    },
    "region": "other",
    "mapLabel": "函館純素糙米定食",
    "id": 133
  },
  {
    "name": "Yasai Bar Miruya (野菜バル 芽瑠屋)",
    "japaneseName": "野菜バル 芽瑠屋",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "蔬食居酒屋",
      "大豆素肉",
      "去五辛客製",
      "函館"
    ],
    "rating": 4.6,
    "description": "函館蔬食居酒屋。提供傳統素食和食、大豆素肉料理與野菜壽司，不含大骨或柴魚高湯。可去肉、去蛋奶，且可客製去除五辛。",
    "address": "北海道函館市本町",
    "transit": "路面電車「五稜郭公園前站」步行約 3 分鐘",
    "hours": "17:30 - 23:00",
    "closed": "每週日公休",
    "tel": "+81-138-83-5590",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Yasai+Bar+Miruya+Hakodate",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 41.7701,
    "lng": 140.7282,
    "businessHours": {
      "closedDays": [
        0
      ],
      "periods": [
        {
          "open": "17:30",
          "close": "23:00"
        }
      ]
    },
    "region": "other",
    "mapLabel": "有機大豆肉串居酒屋",
    "id": 134
  },
  {
    "name": "Vege Vege Kitchen (ベジベジキッチン)",
    "japaneseName": "ベジベジキッチン",
    "category": "bistro",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "農夫廚房",
      "無五辛",
      "天婦羅定食",
      "函館"
    ],
    "rating": 4.7,
    "description": "由農夫自家經營的全素餐廳。餐點皆使用自家栽培的無農藥有機蔬菜，提供野菜天婦羅與健康燉菜，乾淨無五辛，對全素者十分友好。",
    "address": "北海道函館市湯川町",
    "transit": "路面電車「湯之川站」步行約 6 分鐘",
    "hours": "11:30 - 15:30",
    "closed": "每週二、三公休",
    "tel": "+81-138-57-1122",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Vege+Vege+Kitchen+Hakodate",
    "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    "lat": 41.7801,
    "lng": 140.7512,
    "businessHours": {
      "closedDays": [
        2,
        3
      ],
      "periods": [
        {
          "open": "11:30",
          "close": "15:30"
        }
      ]
    },
    "region": "other",
    "mapLabel": "農家全素天婦羅",
    "id": 135
  },
  {
    "name": "Hoteiya Sandwich Stand Hakodate",
    "japaneseName": "ホテイヤサンドイッチ",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "豆腐三明治",
      "去起司",
      "燕麥奶抹茶",
      "函館五稜郭"
    ],
    "rating": 4.5,
    "description": "五稜郭旁的輕食鋪。提供專門的大豆豆腐排三明治與酪梨三明治（無肉無蛋奶，含洋蔥五辛），可客製去除起司，無法去除洋蔥五辛。",
    "address": "北海道函館市梁川町",
    "transit": "路面電車「五稜郭公園前站」步行約 5 分鐘",
    "hours": "08:30 - 16:00",
    "closed": "每週一公休",
    "tel": "+81-138-51-0022",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Hoteiya+Sandwich+Stand+Hakodate",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 41.7901,
    "lng": 140.7412,
    "businessHours": {
      "closedDays": [
        1
      ],
      "periods": [
        {
          "open": "08:30",
          "close": "16:00"
        }
      ]
    },
    "region": "other",
    "mapLabel": "大豆豆腐排三明治",
    "id": 136
  },
  {
    "name": "Pennennolde Chitose (ペンネンノルデ)",
    "japaneseName": "ペンネンノルデ",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "純素馬芬",
      "支笏湖畔",
      "無五辛甜點",
      "去蛋奶"
    ],
    "rating": 4.7,
    "description": "支笏湖畔的森林咖啡廳。每天烘焙新鮮的無蛋奶純素馬芬、全素肉桂捲與米粉蛋糕，提供燕麥奶，甜點無五辛，去蛋奶可。",
    "address": "北海道千歳市支笏湖温泉",
    "transit": "從千歲站搭乘巴士約 40 分鐘至支笏湖溫泉步行 3 分鐘",
    "hours": "10:00 - 17:00",
    "closed": "每週二、三公休",
    "tel": "+81-123-25-2234",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Pennennolde+Chitose",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 42.7988,
    "lng": 141.4012,
    "businessHours": {
      "closedDays": [
        2,
        3
      ],
      "periods": [
        {
          "open": "10:00",
          "close": "17:00"
        }
      ]
    },
    "region": "other",
    "mapLabel": "湖畔森林全素馬芬",
    "id": 137
  },
  {
    "name": "Gelato Lico Lico Chitose",
    "japaneseName": "リコリコ 千歳店",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "pure-vegan",
    "vegStatusLabel": "全素 (無蛋奶/無肉無五辛)",
    "tags": [
      "純素水果雪酪",
      "夕張哈密瓜",
      "無蛋無奶",
      "千歲站"
    ],
    "rating": 4.6,
    "description": "義式冰淇淋店。每天提供數款不含牛奶與雞蛋的純素水果雪酪（Sorbet），如哈密瓜與草莓，乾淨無五辛，甜點全素可食。",
    "address": "北海道千歳市栄町4丁目",
    "transit": "JR「千歲站」步行約 4 分鐘",
    "hours": "11:00 - 19:00",
    "closed": "無特定公休日",
    "tel": "+81-123-27-2288",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Gelato+Lico+Lico+Chitose",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 42.8252,
    "lng": 141.6455,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "19:00"
        }
      ]
    },
    "region": "other",
    "mapLabel": "純素哈密瓜雪酪",
    "id": 138
  },
  {
    "name": "Asombroso Chitose Airport (アソンブロッソ)",
    "japaneseName": "アソンブロッソ 新千歳空港店",
    "category": "cafe",
    "categoryLabel": "甜點與烘焙",
    "vegStatus": "alliums-vegan",
    "vegStatusLabel": "五辛素 (無肉蛋奶/有五辛)",
    "tags": [
      "純素美乃滋",
      "北海道男爵馬鈴薯",
      "無蛋無奶",
      "新千歲空港"
    ],
    "rating": 4.5,
    "description": "新千歲空港國內線。主打北海道男爵土豆炸製的脆皮薯條，可搭配特製的純素豆腐美乃滋醬（無肉無蛋奶，含大蒜五辛，無法去五辛）。",
    "address": "北海道千歳市美々 新千歳空港ターミナルビル 2F",
    "transit": "新千歲機場國內線航廈 2 樓",
    "hours": "10:00 - 20:00",
    "closed": "無特定公休日",
    "tel": "+81-123-46-5590",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Asombroso+New+Chitose+Airport",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 42.7882,
    "lng": 141.6882,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "10:00",
          "close": "20:00"
        }
      ]
    },
    "region": "other",
    "mapLabel": "男爵薯條純素美乃滋",
    "id": 139
  },
  {
    "name": "Bishoku Sensai CTS (美食千歲)",
    "japaneseName": "美食千歳",
    "category": "japanese",
    "categoryLabel": "精緻異國/食養",
    "vegStatus": "vegan-friendly",
    "vegStatusLabel": "素食友善 (可完全客製：去肉/去蛋/去奶/去五辛)",
    "tags": [
      "純素昆布高湯",
      "烏龍麵",
      "去五辛可",
      "新千歲機場"
    ],
    "rating": 4.5,
    "description": "新千歲機場國內線3樓。提供特別研發的『純素昆布烏龍麵』（使用昆布與香菇高湯，無大骨與柴魚），可客製去除蔥花五辛、去蛋奶。",
    "address": "北海道千歳市美々 新千歳空港ターミナルビル 3F",
    "transit": "新千歲機場國內線航廈 3 樓餐廳區",
    "hours": "11:00 - 20:30 (L.O. 20:00)",
    "closed": "無特定公休日",
    "tel": "+81-123-45-8588",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bishoku+Sensai+New+Chitose+Airport",
    "gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    "lat": 42.7872,
    "lng": 141.6872,
    "businessHours": {
      "closedDays": [],
      "periods": [
        {
          "open": "11:00",
          "close": "20:30"
        }
      ]
    },
    "region": "other",
    "mapLabel": "純素昆布烏龍麵",
    "id": 140
  }
];// 全域地圖與定位相關變數
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
    } else if (item.vegStatus === "alliums-vegan") {
      statusClass = "status-alliums-vegan";
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
