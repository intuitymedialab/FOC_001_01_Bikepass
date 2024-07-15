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
  };
  parts: Part[];
};
