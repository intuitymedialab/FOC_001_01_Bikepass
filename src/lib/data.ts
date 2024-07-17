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
      },
      {
        modelName: "Rotor 160",
        type: "brake",
        manufacturer: "SRAM",
        isStock: true,
      },
      {
        modelName: "CX One",
        type: "shiftlever",
        manufacturer: "SRAM",
        isStock: true,
      },
      {
        modelName: "Mud Wrestler 33 Fold",
        type: "wheel",
        manufacturer: "Maxxis",
        isStock: true,
      },
      {
        modelName: "R23 Spline cen/disk F15 R12",
        type: "rim",
        manufacturer: "DT Swiss",
        isStock: true,
      },
      {
        modelName: "Kappa 3",
        type: "seat",
        manufacturer: "Prologo",
        isStock: true,
      },
      {
        modelName: "carbon H SB15 27.2",
        type: "seatpost",
        manufacturer: "Merida",
        isStock: true,
      },
      {
        modelName: "Aero 32 Allen ST",
        type: "seatclamp",
        manufacturer: "Merida",
        isStock: true,
      },
      {
        modelName: "Road Pro Cassic OS",
        type: "handlebar",
        manufacturer: "Merida",
        isStock: true,
      },
      {
        modelName: "pro Carbon OS-5",
        type: "stem",
        manufacturer: "Merida",
        isStock: true,
      },
      {
        modelName: "Road Pro 3D",
        type: "grip",
        manufacturer: "Merida",
        isStock: true,
      },
      {
        modelName: "BB410P/No.55E",
        type: "headset",
        manufacturer: "FSA",
        isStock: true,
      },
      {
        modelName: "CX one lever",
        type: "brakelever",
        manufacturer: "SRAM",
        isStock: true,
      },
      {
        modelName: "",
        type: "bottombracket",
        manufacturer: "SRAM",
        isStock: true,
      },
      {
        modelName: "Force CX1 40 (BB86)",
        type: "crankset",
        manufacturer: "SRAM",
        isStock: true,
      },
      {
        modelName: "CS-5800-11 11-32",
        type: "sprockets",
        manufacturer: "Shimano",
        isStock: true,
      },
      {
        modelName: "X11EL",
        type: "chain",
        manufacturer: "KMC",
        isStock: true,
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
      },
      {
        modelName: "36 Float Factory 29",
        type: "fork",
        manufacturer: "FOX",
        isStock: true,
      },
      {
        modelName: "Performance CX Gen4",
        type: "motor",
        manufacturer: "Bosch",
        isStock: true,
      },
      {
        modelName: "PowerTube Li-Ion 36V / 20,1Ah (750Wh)",
        type: "battery",
        manufacturer: "Bosch",
        isStock: true,
      },
      {
        modelName: "LED Remote + Kiox 300",
        type: "display",
        manufacturer: "Bosch",
        isStock: true,
      },
      {
        modelName: "DB8, 4-piston",
        type: "brake",
        manufacturer: "SRAM",
        isStock: true,
      },
      {
        modelName: "Deore XT M8100, 12-speed",
        type: "shiftlever",
        manufacturer: "Shimano",
        isStock: true,
      },
      {
        modelName: "Magic Mary, 2.6 Super Trail Soft, 65-622",
        type: "wheel",
        manufacturer: "Schwalbe",
        isStock: true,
      },
      {
        modelName: "H1900, 30-622",
        type: "rim",
        manufacturer: "DT Swiss",
        isStock: true,
      },
      {
        modelName: " Terra Aidon",
        type: "seat",
        manufacturer: "Fizik",
        isStock: true,
      },
      {
        modelName: "PM-214, 34.9 mm",
        type: "seatpost",
        manufacturer: "Post Moderne",
        isStock: true,
      },
      {
        modelName: "Atlas 35",
        type: "handlebar",
        manufacturer: "RaceFace",
        material: "aluminium",
        isStock: true,
      },
      {
        modelName: "C.I.S. 50 mm, 0°, 35 mm,",
        type: "stem",
        manufacturer: "FOCUS",
        material: "aluminium",
        isStock: true,
      },
      {
        modelName: "Road Pro 3D",
        type: "grip",
        manufacturer: "Merida",
        isStock: true,
      },
      {
        modelName: 'ZS56/ZS66 (ICR), FOCUS C.I.S. Integrated, 1.5/1.8" angle headset',
        type: "headset",
        manufacturer: "ACROS",
        isStock: true,
      },
      {
        modelName: "Aeffect R e-Optimized Bosch G4",
        type: "crankset",
        manufacturer: "RaceFace",
        isStock: true,
      },
      {
        modelName: "SLX M7100, 12-speed",
        type: "sprockets",
        manufacturer: "Shimano",
        isStock: true,
      },
      {
        modelName: "SLX CN-M7100, 12-speed",
        type: "chain",
        manufacturer: "Shimano",
        isStock: true,
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
      },
      {
        modelName: "GRX, ST-RX610 / BR-RX410, schwarz 1700mm",
        type: "shiftlever",
        manufacturer: "Shimano",
        isStock: true,
      },
      {
        modelName: "Terra Trail ProTection, Black / Transparent 40-584",
        type: "wheel",
        manufacturer: "Continental",
        isStock: true,
      },
      {
        modelName: 'G25, 27,5"',
        type: "rim",
        manufacturer: "ROSE",
        isStock: true,
      },
      {
        modelName: "Edition by Selle Italia, schwarz",
        type: "seat",
        manufacturer: "ROSE",
        isStock: true,
      },
      {
        modelName: "WTB, 350mm, schwarz 27,2mm",
        type: "seatpost",
        manufacturer: "Ritchey",
        isStock: true,
      },
      {
        modelName: "",
        type: "seatclamp",
        manufacturer: "ROSE",
        isStock: true,
      },
      {
        modelName: "Venture Max Comp, schwarz 40cm",
        type: "handlebar",
        manufacturer: "ROSE",
        isStock: true,
      },
      {
        modelName: "ALR, schwarz sand 70mm",
        type: "stem",
        manufacturer: "ROSE",
        isStock: true,
      },
      {
        modelName: "Gel-Comfort, schwarz",
        type: "ROSE",
        manufacturer: "Merida",
        isStock: true,
      },
      {
        modelName: "GRX, BL-RX610-L / BR-RX410 1000mm",
        type: "brakelever",
        manufacturer: "Shimano",
        isStock: true,
      },
      {
        modelName: "FC-RX610-1, 40Z, 170mm",
        type: "crankset",
        manufacturer: "Shimano",
        isStock: true,
      },
      {
        modelName: "SLX, CS-M7100-12, 12-fach, 10-51",
        type: "sprockets",
        manufacturer: "Shimano",
        isStock: true,
      },
      {
        modelName: "Deore CN-M6100, Quick Link, 12-fach 122gl.",
        type: "chain",
        manufacturer: "Shimano",
        isStock: true,
      },

    ]
  }
];


