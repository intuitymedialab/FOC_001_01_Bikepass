export type Componenttype = {
  type: string;
  iconPath: string;
}

export type Part = {
  modelName: string;
  manufacturer: string;
  serialNumber: string;
  dateOfInstallation: string;
  type: string;
  isStock: boolean;
};

export type Bike = {
  manufacturer: string;
  bikeModel: string;
  serialNumber: string;
  imagePath: string;
  price: number;
  color: string;
  size: string;
  year: number;
  id: string;
}

export type Bikedata = {
  bike: Bike;
  parts: Part[];
};


