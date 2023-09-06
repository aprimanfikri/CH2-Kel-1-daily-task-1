const users = [
  {
    _id: "64f05238249bd68c850651a9",
    name: "Jo Mcintyre",
    eyeColor: "blue",
    age: 20,
    balance: "$2,530.99",
    gender: "female",
    company: "ULTRASURE",
    email: "jomcintyre@ultrasure.com",
    phone: "+1 (950) 448-3095",
    address: "247 Conselyea Street, Malo, Illinois, 1607",
    registered: "2014-09-24T08:36:11 -07:00",
    friends: [
      {
        id: 0,
        name: "Grace",
      },
      {
        id: 1,
        name: "Grace",
      },
      {
        id: 2,
        name: "Imam",
      },
    ],
    favoriteFruit: "strawberry",
  },
  {
    _id: "64f05238a9477db8e0f0a568",
    name: "Alyce Burris",
    eyeColor: "green",
    age: 30,
    balance: "$1,905.06",
    gender: "female",
    company: "MAXIMIND",
    email: "alyceburris@maximind.com",
    phone: "+1 (807) 576-3537",
    address: "632 Linden Street, Gila, Indiana, 7957",
    registered: "2015-11-12T12:35:01 -07:00",
    friends: [
      {
        id: 0,
        name: "Adrian",
      },
      {
        id: 1,
        name: "Irfi",
      },
      {
        id: 2,
        name: "Alim",
      },
    ],
    favoriteFruit: "apple",
  },
  {
    _id: "64f05238ff313c8e2ca16699",
    name: "Newton Chase",
    eyeColor: "blue",
    age: 40,
    balance: "$3,281.96",
    gender: "male",
    company: "EARTHPURE",
    email: "newtonchase@earthpure.com",
    phone: "+1 (972) 471-3897",
    address: "395 Emmons Avenue, Watchtower, Louisiana, 5317",
    registered: "2022-01-07T12:32:33 -07:00",
    friends: [
      {
        id: 0,
        name: "Alim",
      },
      {
        id: 1,
        name: "Adella",
      },
      {
        id: 2,
        name: "Alim",
      },
    ],
    favoriteFruit: "strawberry",
  },
  {
    _id: "64f0523815a4377cffd7df25",
    name: "Maxwell Sanders",
    eyeColor: "green",
    age: 22,
    balance: "$1,690.17",
    gender: "male",
    company: "ZIORE",
    email: "maxwellsanders@ziore.com",
    phone: "+1 (896) 545-3009",
    address: "302 Berriman Street, Carlton, North Dakota, 1520",
    registered: "2020-09-25T01:14:36 -07:00",
    friends: [
      {
        id: 0,
        name: "Grace",
      },
      {
        id: 1,
        name: "Adella",
      },
      {
        id: 2,
        name: "Imam",
      },
    ],
    favoriteFruit: "apple",
  },
  {
    _id: "64f05238df87f61e781c3143",
    name: "Monica Barry",
    eyeColor: "green",
    age: 38,
    balance: "$1,045.76",
    gender: "female",
    company: "BIZMATIC",
    email: "monicabarry@bizmatic.com",
    phone: "+1 (804) 557-3566",
    address: "997 Post Court, Davenport, Guam, 1908",
    registered: "2017-09-14T10:45:04 -07:00",
    friends: [
      {
        id: 0,
        name: "Alim",
      },
      {
        id: 1,
        name: "Adella",
      },
      {
        id: 2,
        name: "Adella",
      },
    ],
    favoriteFruit: "strawberry",
  },
  {
    _id: "64f05238f7d1c12c9420b381",
    name: "Shana Yates",
    eyeColor: "green",
    age: 25,
    balance: "$1,359.43",
    gender: "female",
    company: "ONTALITY",
    email: "shanayates@ontality.com",
    phone: "+1 (893) 518-2535",
    address: "938 Bushwick Avenue, Islandia, California, 7357",
    registered: "2017-11-06T03:45:28 -07:00",
    friends: [
      {
        id: 0,
        name: "Imam",
      },
      {
        id: 1,
        name: "Grace",
      },
      {
        id: 2,
        name: "Imam",
      },
    ],
    favoriteFruit: "banana",
  },
  {
    _id: "64f05238fb9b39e934a31f8e",
    name: "Gonzales Vance",
    eyeColor: "blue",
    age: 34,
    balance: "$3,866.19",
    gender: "male",
    company: "TROPOLIS",
    email: "gonzalesvance@tropolis.com",
    phone: "+1 (933) 458-2477",
    address: "763 Times Placez, Rote, Michigan, 8121",
    registered: "2019-04-24T05:56:01 -07:00",
    friends: [
      {
        id: 0,
        name: "Grace",
      },
      {
        id: 1,
        name: "Grace",
      },
      {
        id: 2,
        name: "Alim",
      },
    ],
    favoriteFruit: "banana",
  },
  {
    _id: "64f0523817319c5351e440d6",
    name: "Sharpe Chandler",
    eyeColor: "blue",
    age: 40,
    balance: "$1,607.56",
    gender: "male",
    company: "ASSITIA",
    email: "sharpechandler@assitia.com",
    phone: "+1 (940) 567-3912",
    address: "558 Dekoven Court, Lavalette, Oklahoma, 6391",
    registered: "2016-09-26T11:18:52 -07:00",
    friends: [
      {
        id: 0,
        name: "Adella",
      },
      {
        id: 1,
        name: "Grace",
      },
      {
        id: 2,
        name: "Alim",
      },
    ],
    favoriteFruit: "strawberry",
  },
];

const ageAndRegister = (data) => {
  // tempat penampungan hasil
  let result = [];
  // looping data dalam array
  for (let i = 0; i < data.length; i++) {
    // memeriksa apakah user berumur di bawah 30 dan terdaftar setelah tahun 2018
    if (data[i].age < 30 && data[i].registered.slice(0, 4) > "2018") {
      // jika iya maka push data kedalam result
      result.push(data[i]);
    }
  }
  // print total user yang berumur di bawah 30 dan terdaftar setelah tahun 2018
  console.log(
    `Jumlah user berumur di bawah 30 dan terdaftar setelah tahun 2018 adalah: ${result.length}`
  );
  console.log("==========================================");
  return result;
};
// panggil fungsi ageAndRegister dan print hasilnya di konsol
console.log(ageAndRegister(users));
