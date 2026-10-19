// بيانات منيو بلدة العصير — الأسعار بالريال السعودي
const categories = [
  {id:"single",ar:"العصائر الفردية",en:"Single Juices"},
  {id:"mixes",ar:"خلطات بلدة العصير",en:"Juice Town Mixes"},
  {id:"diet",ar:"صحة - دايت",en:"Diet & Healthy"},
  {id:"milkshakes",ar:"ميلك شيكس",en:"Milkshakes"},
  {id:"smoothies",ar:"سموديز",en:"Smoothies"},
  {id:"fruit-salad",ar:"سلطة الفواكه",en:"Fruit Salad"}
];

const profiles = [
  {
    sizes:[
      {id:"kids",ar:"أطفال",en:"Kids",price:7},
      {id:"12oz",ar:"12 أونصة",en:"12 oz",price:9},
      {id:"16oz",ar:"16 أونصة",en:"16 oz",price:11},
      {id:"1l",ar:"1 لتر",en:"1 L",price:19},
      {id:"1.5l",ar:"1.5 لتر",en:"1.5 L",price:28}
    ],
    addons:[
      {id:"small-fruit",ar:"إضافة فواكه صغيرة",en:"Small fruit add-on",price:2}
    ],
    note:{ar:"",en:""}
  },
  {
    sizes:[
      {id:"12oz",ar:"12 أونصة",en:"12 oz",price:12},
      {id:"14oz",ar:"14 أونصة",en:"14 oz",price:14},
      {id:"16oz",ar:"16 أونصة",en:"16 oz",price:20},
      {id:"1l",ar:"1 لتر",en:"1 L",price:28}
    ],
    addons:[
      {id:"small-fruit",ar:"إضافة فواكه صغيرة",en:"Small fruit add-on",price:2}
    ],
    note:{
      ar:"تُستخدم الفواكه المجمدة للخلطات",
      en:"Frozen fruit is used in these mixes"
    }
  },
  {
    sizes:[
      {id:"12oz",ar:"12 أونصة",en:"12 oz",price:12},
      {id:"14oz",ar:"14 أونصة",en:"14 oz",price:14},
      {id:"16oz",ar:"16 أونصة",en:"16 oz",price:16}
    ],
    addons:[],
    note:{ar:"",en:""}
  },
  {
    sizes:[
      {id:"12oz",ar:"12 أونصة",en:"12 oz",price:14},
      {id:"16oz",ar:"16 أونصة",en:"16 oz",price:16}
    ],
    addons:[
      {id:"cornflakes",ar:"إضافة كورن فليكس",en:"Cornflakes add-on",price:1},
      {id:"cream-chocolate",ar:"إضافة كريمة وشوكولاتة",en:"Cream & chocolate add-on",price:2}
    ],
    note:{ar:"",en:""}
  },
  {
    sizes:[
      {id:"12oz",ar:"12 أونصة",en:"12 oz",price:10},
      {id:"16oz",ar:"16 أونصة",en:"16 oz",price:12}
    ],
    addons:[],
    note:{ar:"",en:""}
  },
  {
    sizes:[
      {id:"small-plate",ar:"طبق صغير",en:"Small Plate",price:30},
      {id:"medium-plate",ar:"طبق وسط",en:"Medium Plate",price:40},
      {id:"large-plate",ar:"طبق كبير",en:"Large Plate",price:60},
      {id:"medium-cup",ar:"كوب وسط",en:"Medium Cup",price:13},
      {id:"big-cup",ar:"كوب كبير",en:"Big Cup",price:16},
      {id:"salad-box",ar:"علبة سلطة",en:"Salad Box",price:23},
      {id:"large-salad-box",ar:"علبة سلطة كبيرة",en:"Large Salad Box",price:29}
    ],
    addons:[
      {id:"cream-chocolate",ar:"إضافة كريمة وشوكولاتة",en:"Cream & chocolate add-on",price:2}
    ],
    note:{ar:"",en:""}
  }
];

// كل صنف: المعرف، القسم، الاسم العربي، الاسم الإنجليزي، السعرات التقريبية، مجموعة الأحجام
const rows = [
  ["orange","single","برتقال","Orange",45,0],
  ["lemon","single","ليمون","Lemon",120.86,0],
  ["mango","single","مانجو","Mango",80.5,0],
  ["cocktail","single","كوكتيل","Cocktail",90.84,0],
  ["strawberry","single","فراولة","Strawberry",50.4,0],
  ["guava","single","جوافة","Guava",84.65,0],
  ["pineapple","single","أناناس","Pineapple",97.51,0],
  ["avocado","single","أفوكادو","Avocado",177.13,0],
  ["pomegranate","single","رمان","Pomegranate",83.6,0],
  ["melon","single","شمام","Melon",40.7,0],
  ["banana","single","موز","Banana",125,0],
  ["carrot","single","جزر","Carrot",41.22,0],
  ["raspberry","single","توت","Raspberry",75.9,0],
  ["milk-shake-juice","single","ميلك شيك","Milk Shake",75.8,0],
  ["kiwi","single","كيوي","Kiwi",60.1,0],
  ["apple","single","تفاح","Apple",55,0],
  ["grape","single","عنب","Grape",60,0],
  ["ginger","single","زنجبيل","Ginger",85.93,0],
  ["watermelon","single","بطيخ","Watermelon",41,0],
  ["papaya","single","بابايا","Papaya",50.4,0],

  ["awar-gal","mixes","عوار قلب","Awar Gal",153.76,1],
  ["asoola","mixes","عسولة","Asoola",85.13,1],
  ["aramny","mixes","عرايسي","Araisy",177.01,1],
  ["avocado-mix","mixes","أفوكادو ميكس","Avocado Mix",193.18,1],
  ["pacto","mixes","بسيتو","Pasito",100.42,1],
  ["moroccan-cocktail","mixes","كوكتيل مغربي","Moroccan Cocktail",94.6,1],
  ["asfhani","mixes","أصفهاني","Asfhani",118.07,1],
  ["kouwat-jabal","mixes","قوة جبل","Kouwat Jabal",152.59,1],
  ["town-mix","mixes","خلطة بلدة العصير","The Town Mix",78.78,1],
  ["blood-booster","mixes","فقر دم","Blood Booster",91.85,1],

  ["healthy-cocktail","diet","كوكتيل صحي","Healthy Cocktail",140.42,2],
  ["ruby-tuesday","diet","روبي تيوزداي","Ruby Tuesday",98.49,2],
  ["fitness","diet","فتنس","Fitness",70.47,2],

  ["nutella","milkshakes","نوتيلا","Nutella",141.2,3],
  ["oreo","milkshakes","أوريو","Oreo",124,3],
  ["bounty","milkshakes","باونتي","Bounty",96.54,3],
  ["kitkat","milkshakes","كيت كات","KitKat",130.43,3],
  ["ferrero","milkshakes","فيريرو روشيه","Ferrero Rocher",150.95,3],
  ["twix-mix","milkshakes","نويكس مكس","Twix Mix",97.24,3],
  ["galaxy","milkshakes","جالكسي","Galaxy",83.2,3],
  ["mars","milkshakes","مارس","Mars",87.41,3],
  ["m-and-m","milkshakes","إم آند إم","M&M",108.62,3],
  ["snickers","milkshakes","سنيكرز","Snickers",91.4,3],

  ["watermelon-mint","smoothies","سمودي بطيخ بالنعناع","Watermelon Smoothie with Mint",84.1,4],
  ["lemon-mint","smoothies","سمودي ليمون بالنعناع","Lemon Mint Smoothie",86.4,4],
  ["pomegranate-smoothie","smoothies","سمودي رمان","Pomegranate Smoothie",118.78,4],
  ["strawberry-smoothie","smoothies","سمودي فراولة","Strawberry Smoothie",111.4,4],

  ["fruit-salad","fruit-salad","سلطة الفواكه","Fruit Salad",null,5]
];

window.JUICE_TOWN_MENU = {
  shop:{
    name:"بلدة العصير",
    englishName:"Juice Town",
    currency:"SAR"
  },
  categories,
  products:rows.map(([id,category,ar,en,calories,profile])=>({
    id,
    category,
    name:{ar,en},
    calories,
    sizes:profiles[profile].sizes.map(size=>({...size})),
    addons:profiles[profile].addons.map(addon=>({...addon})),
    note:{...profiles[profile].note}
  }))
};