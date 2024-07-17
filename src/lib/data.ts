import { Bikedata } from "./types/domain";
import { Componenttype } from "./types/domain";

export const componentType: Componenttype = {
  type: "Rahmen",
  iconPath: "/src/assets/Bike Shop Icons [Converted]-02.svg"
}

export const bikes: Bikedata[] = [
  {
    bike: {
      manufacturer: "Merida",
      bikeModel: "CYCLO CROSS 9000",
      serialNumber: "89aisjdlfkasjdf",
      imagePath: "/bikeassets/Merida_Cyclo_Cross_9000.jpg",
      price: 3499,
      color: "schwarz (signalrot)",
      year: 2016,
      id: "838ece1033bf7c7468e873e79ba2a3ec"
    },
    parts: [
      {
        modelName: "CC Carbon Disk 15",
        type: "fork",
        manufacturer: "Shimano",
        isStock: true,
        partid: "f988784bfc643a0e6185d6c98218c899"
      },
      {
        modelName: "Rotor 160",
        type: "brake",
        manufacturer: "SRAM",
        isStock: true,
        partid: "7545c314a71ed7c9364af7c81658bb43"
      },
      {
        modelName: "CX One",
        type: "shiftlever",
        manufacturer: "SRAM",
        isStock: true,
        partid: "02f70606fd55429d191048eb47f28fc0"
      },
      {
        modelName: "Mud Wrestler 33 Fold",
        type: "wheel",
        manufacturer: "Maxxis",
        isStock: true,
        partid: "951bb1feb19913cf52069601b421bdc1"
      },
      {
        modelName: "R23 Spline cen/disk F15 R12",
        type: "rim",
        manufacturer: "DT Swiss",
        isStock: true,
        partid: "c46302d06505270c5dd657db101b15da"
      },
      {
        modelName: "Kappa 3",
        type: "seat",
        manufacturer: "Prologo",
        isStock: true,
        partid: "148a8a406f8ea822a3e48ee848505715"
      },
      {
        modelName: "carbon H SB15 27.2",
        type: "seatpost",
        manufacturer: "Merida",
        isStock: true,
        partid: "3c5b6ca185c0a0a8edeb0c93845362ff"
      },
      {
        modelName: "Aero 32 Allen ST",
        type: "seatclamp",
        manufacturer: "Merida",
        isStock: true,
        partid: "cf121977f6ded8acf53af0fc73f0b8c2"
      },
      {
        modelName: "Road Pro Cassic OS",
        type: "handlebar",
        manufacturer: "Merida",
        isStock: true,
        partid: "3c97f91afa8fb9af0794af239cbbb058"
      },
      {
        modelName: "pro Carbon OS-5",
        type: "stem",
        manufacturer: "Merida",
        isStock: true,
        partid: "805112f683848950febdebc1da9aebe8"
      },
      {
        modelName: "Road Pro 3D",
        type: "grip",
        manufacturer: "Merida",
        isStock: true,
        partid: "133a2da34e44398b8d9250af8fe7ce89"
      },
      {
        modelName: "BB410P/No.55E",
        type: "headset",
        manufacturer: "FSA",
        isStock: true,
        partid: "363feb99d7d6a66adc68cb99cb09a676"
      },
      {
        modelName: "CX one lever",
        type: "brakelever",
        manufacturer: "SRAM",
        isStock: true,
        partid: "cd5a394c659748ae1bb83d8faa457ac0"
      },
      {
        modelName: "",
        type: "bottombracket",
        manufacturer: "SRAM",
        isStock: true,
        partid: "0c2a028467e19fe82e183ace28777fa3"
      },
      {
        modelName: "Force CX1 40 (BB86)",
        type: "crankset",
        manufacturer: "SRAM",
        isStock: true,
        partid: "2f6a9607a631b2536640f517cec16928"
      },
      {
        modelName: "CS-5800-11 11-32",
        type: "sprockets",
        manufacturer: "Shimano",
        isStock: true,
        partid: "b638c5f88a442c1426680be7638f37c4"
      },
      {
        modelName: "X11EL",
        type: "chain",
        manufacturer: "KMC",
        isStock: true,
        partid: "29f28b23275418808c671aace06b49b0"
      },

    ]
  },
  {
    bike: {
      manufacturer: "Focus",
      bikeModel: "Jam²",
      serialNumber: "89aisjdlfkasjdf",
      imagePath: "/bikeassets/Focus-Jam2-6.9.png",
      price: 7399,
      color: "silver",
      size: "L",
      year: 2024,
      manualLink: "https://cdn2.webdamdb.com/md_YYPQs8d7yq61EFbE.jpg.pdf?v=1",
      id: "4243391df87e703d511b43df2552ee6b"
    },
    parts: [
      {
        modelName: "F.O.L.D. GEN2",
        type: "frame",
        manufacturer: "FOCUS",
        isStock: true,
        partid: "f96a481e0cdf9f9ebf8d42b36ee0e798"
      },
      {
        modelName: " Float Factory 29",
        type: "fork",
        manufacturer: "FOX 36",
        isStock: true,
        partid: "992e88d75013ce4e9c7f75e15c724a57"
      },
      {
        modelName: "Performance CX Gen4",
        type: "motor",
        manufacturer: "Bosch",
        isStock: true,
        partid: "572d10861748eaf5fee55f31a4ad0d47"
      },
      {
        modelName: "PowerTube Li-Ion 36V / 20,1Ah (750Wh)",
        type: "battery",
        manufacturer: "Bosch",
        isStock: true,
        partid: "b442a7ea921842516dfa55cc82452d78"
      },
      {
        modelName: "LED Remote + Kiox 300",
        type: "display",
        manufacturer: "Bosch",
        isStock: true,
        partid: "13512eb01f97a7ec75cd5cae7a2a22ec"
      },
      {
        modelName: "DB8, 4-piston",
        type: "brake",
        manufacturer: "SRAM",
        isStock: true,
        partid: "55ecfa5bb7dcf42f86b283f531b27549"
      },
      {
        modelName: "Deore XT M8100, 12-speed",
        type: "shiftlever",
        manufacturer: "Shimano",
        isStock: true,
        partid: "4503b1165c23a443ca23e876ae5ae99c"
      },
      {
        modelName: "Magic Mary, 2.6 Super Trail Soft, 65-622",
        type: "wheel",
        manufacturer: "Schwalbe",
        isStock: true,
        partid: "889f9a6982bb9ed7603cc345d33d9788"
      },
      {
        modelName: "H1900, 30-622",
        type: "rim",
        manufacturer: "DT Swiss",
        isStock: true,
        partid: "c6c4c258a7e0aca83cc33c8e8859ffc7"
      },
      {
        modelName: " Terra Aidon",
        type: "seat",
        manufacturer: "Fizik",
        isStock: true,
        partid: "fa3958f07f83028b156c6233831c2ce5"
      },
      {
        modelName: "PM-214, 34.9 mm",
        type: "seatpost",
        manufacturer: "Post Moderne",
        isStock: true,
        partid: "6ed39004e31803002311a40f1ec33394"
      },
      {
        modelName: "Atlas 35",
        type: "handlebar",
        manufacturer: "RaceFace",
        material: "aluminium",
        isStock: true,
        partid: "6621ab6c8ed41d84cc227753f403401b"
      },
      {
        modelName: "C.I.S. 50 mm, 0°, 35 mm,",
        type: "stem",
        manufacturer: "FOCUS",
        material: "aluminium",
        isStock: true,
        partid: "41d7c0fbaf6d31b9506be38bc3d4fd46"
      },
      {
        modelName: "Road Pro 3D",
        type: "grip",
        manufacturer: "Merida",
        isStock: true,
        partid: "e591db5c6545e70e0ba4908209fee238"
      },
      {
        modelName: 'ZS56/ZS66 (ICR), FOCUS C.I.S. Integrated, 1.5/1.8" angle headset',
        type: "headset",
        manufacturer: "ACROS",
        isStock: true,
        partid: "628977b9f79e3c30e1235acb7d90373a"
      },
      {
        modelName: "Aeffect R e-Optimized Bosch G4",
        type: "crankset",
        manufacturer: "RaceFace",
        isStock: true,
        partid: "a8af778e6db0706b7bee3d71b03834c2"
      },
      {
        modelName: "SLX M7100, 12-speed",
        type: "sprockets",
        manufacturer: "Shimano",
        isStock: true,
        partid: "92c6b4f710e408106ce3a97c4cb03ebc"
      },
      {
        modelName: "SLX CN-M7100, 12-speed",
        type: "chain",
        manufacturer: "Shimano",
        isStock: true,
        partid: "b360a2d322772883bf32ba497021170c"
      },
    ]
  }, {
    bike: {
      manufacturer: "ROSE",
      bikeModel: "Backroad AL GRX 610 1x12",
      serialNumber: "89aisjdlfkasjdf",
      imagePath: "/bikeassets/Rose-Backroad-AL-GRX-610-1x12.png",
      price: 2499,
      color: "roasted olive",
      size: "53",
      year: 2024,
      manualLink: "N/A",
      id: "d41d8cd98f00b204e9800998ecf8427e"
    },
    parts: [
      {
        modelName: 'Cross Backroad, Carbon 28"',
        type: "fork",
        manufacturer: "ROSE",
        isStock: true,
        partid: "fa807ea071ec1bbc9f3f2a9378df108f"
      },
      {
        modelName: "GRX, ST-RX610 / BR-RX410, schwarz 1700mm",
        type: "shiftlever",
        manufacturer: "Shimano",
        isStock: true,
        partid: "ff3d81092979d57592f0460d3a5582bd"
      },
      {
        modelName: "Terra Trail ProTection, Black / Transparent 40-584",
        type: "wheel",
        manufacturer: "Continental",
        isStock: true,
        partid: "a811399e8605919cfc55e4ac595e4011"
      },
      {
        modelName: 'G25, 27,5"',
        type: "rim",
        manufacturer: "ROSE",
        isStock: true,
        partid: "a41be77b5d9f029cf9edecb066bdcf3c"
      },
      {
        modelName: "Edition by Selle Italia, schwarz",
        type: "seat",
        manufacturer: "ROSE",
        isStock: true,
        partid: "908b2c4f40d5263ce467a9de2d8c4d7d"
      },
      {
        modelName: "WTB, 350mm, schwarz 27,2mm",
        type: "seatpost",
        manufacturer: "Ritchey",
        isStock: true,
        partid: "25d974a8e17b47ddf2a5875739536065"
      },
      {
        modelName: "",
        type: "seatclamp",
        manufacturer: "ROSE",
        isStock: true,
        partid: "da4861b76ad633e3ec1894d9e714d858"
      },
      {
        modelName: "Venture Max Comp, schwarz 40cm",
        type: "handlebar",
        manufacturer: "ROSE",
        isStock: true,
        partid: "723c035a8e7886469ef4db18aaada02f"
      },
      {
        modelName: "ALR, schwarz sand 70mm",
        type: "stem",
        manufacturer: "ROSE",
        isStock: true,
        partid: "eed5d57ca7465bd812729bc900609631"
      },
      {
        modelName: "Gel-Comfort, schwarz",
        type: "ROSE",
        manufacturer: "Merida",
        isStock: true,
        partid: "a54f7c3211d2aa49ee36149c2eaca336"
      },
      {
        modelName: "GRX, BL-RX610-L / BR-RX410 1000mm",
        type: "brakelever",
        manufacturer: "Shimano",
        isStock: true,
        partid: "304e1c0c47444ab9316c99ff164671cd"
      },
      {
        modelName: "FC-RX610-1, 40Z, 170mm",
        type: "crankset",
        manufacturer: "Shimano",
        isStock: true,
        partid: "021c1424b4361a822737c26b5160ddb3"
      },
      {
        modelName: "SLX, CS-M7100-12, 12-fach, 10-51",
        type: "sprockets",
        manufacturer: "Shimano",
        isStock: true,
        partid: "fc5f1fd474dc2f9de320d1f059c2130c"
      },
      {
        modelName: "Deore CN-M6100, Quick Link, 12-fach 122gl.",
        type: "chain",
        manufacturer: "Shimano",
        isStock: true,
        partid: "61cfa63112da4d69f57fa109ebf81e1d"
      },

    ]
  }
];


