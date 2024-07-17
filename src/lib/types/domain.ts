export type Componenttype = {
  type: string;
  iconPath: string;
}

export type Part = {
  modelName: string;
  manufacturer: string;
  serialNumber?: string;
  dateOfInstallation?: string;
  type: string;
  isStock?: boolean;
  material?: string;
};

export type Bike = {
  manufacturer: string;
  bikeModel: string;
  serialNumber?: string;
  imagePath: string;
  price?: number;
  color?: string;
  size?: string;
  year?: number;
  manualLink?: string;
  id: string;
}

export type Bikedata = {
  bike: Bike;
  parts: Part[];
};


