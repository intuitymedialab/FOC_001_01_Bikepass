export type Componenttype = {
  type: string;
  iconPath: string;
}

export type Part = {
  modelName: string;
  manufacturer: string;
  serialNumber: string;
  type: string;
  isStock: boolean;
};



export type Bikedata = {
  bike: {
    manufacturer: string;
    bikeModel: string;
    serialNumber: string;
    imagePath: string;
    id: string;
  };
  parts: Part[];
};
