import { Bikedata } from "./types/domain";
import { Componenttype } from "./types/domain";

export const componentType: Componenttype = {
  type: "Rahmen",
  iconPath: "/src/assets/Bike Shop Icons [Converted]-02.svg"
}



export const bikeData: Bikedata = {
  bike: {
    manufacturer: "Focus",
    bikeModel: "Jam3",
    serialNumber: "89aisjdlfkasjdf",
    imagePath: "/src/assets/Jam-Small.png",
    id: "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5"
  },
  parts: [
    {
      modelName: "XT Disc Brake Calipers",
      type: "brake",
      manufacturer: "Shimano",
      serialNumber: "XTR9120CALPR0001",
      isStock: true,
    },
    {
      modelName: "Float 36 Factory Fork",
      type: "brake",
      manufacturer: "Fox Racing Shox",
      serialNumber: "F36FKT000012345",
      isStock: true,
    },
    {
      modelName: "Nobby Nic",
      type: "brake",
      manufacturer: "Schwalbe",
      serialNumber: "8asdfkajsdlfjasd",
      isStock: true,
    },
    {
      modelName: "XT Drivetrain",
      type: "brake",
      manufacturer: "Shimano",
      serialNumber: "XTDRN0987654321",
      isStock: true,
    },
    {
      modelName: "Performance Line CX Motor",
      type: "brake",
      manufacturer: "Bosch",
      serialNumber: "BSCHCX0123456789",
      isStock: true,
    },
    {
      modelName: "XM 1501 Wheelset",
      type: "brake",
      manufacturer: "DT Swiss",
      serialNumber: "XM1501WS12345678",
      isStock: true,
    },
    {
      modelName: "GE1 Grips",
      type: "brake",
      manufacturer: "Ergon",
      serialNumber: "ERGGE10000000001",
      isStock: true,
    },
    {
      modelName: "Fatbar Lite Handlebar",
      type: "brake",
      manufacturer: "Renthal",
      serialNumber: "RNTFBL00000000XY",
      isStock: true,
    },
    {
      modelName: "XT Pedals",
      type: "brake",
      manufacturer: "Shimano",
      serialNumber: "XTPD98765432109",
      isStock: true,
    },
    {
      modelName: "Reverb Stealth Dropper Post",
      type: "brake",
      manufacturer: "Rockshox",
      serialNumber: "RSRVBSTH00000001",
      isStock: true,
    },
  ],
};
