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
    serialNumber: string;
  };
  parts: Part[];
};
