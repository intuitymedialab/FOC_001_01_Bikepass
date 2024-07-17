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

export type Bike = {
  manufacturer: string;
  bikeModel: string;
  serialNumber: string;
  imagePath: string;
  id: string;
}

export type Bikedata = {
  bike: Bike;
  parts: Part[];
};


