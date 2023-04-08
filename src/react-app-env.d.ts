export interface Product {
  id: number,
  type: string,
  imageUrl: string,
  name: string,
  price: number,
  discount: number,
  color: string,
  capacity: string,
  vitamins: string,
  aroma: string,
}

export interface RootState {
  sortBy: string;
  allProducts: Product[],
  currentProductsForRender: Product[],
  favorits: number[],
  selectedcart: ObjectForCart[],
  query: string,
  error: string,
}

export interface ObjectForCart {
  id: number,
  quantity: number,
  product: Product,
}

export interface AddInfo {
  images: string[],
}

export interface ProductDetails {
  additionalFeatures: string,
  android: OSUI,
  availability: string[],
  battery: Battery,
  camera: Camera,
  connectivity: Connectivity,
  description: string,
  display: Display,
  hardware: Hardware,
  id: string,
  images: string[],
  name: string,
  sizeAndWeight: SizeAndWeight,
  storage: Storage,
}

export interface OSUI {
  os: string,
  ui: string,
}

export interface Battery {
  standbyTime: string,
  talkTime: string,
  type: string,
}

export interface Camera {
  features: string[],
  primary: string,
}

export interface Connectivity {
  bluetooth: string,
  cell: string,
  gps: boolean,
  infrared: boolean,
  wifi: string,
}

export interface Display {
  screenResolution: string,
  screenSize: string,
  touchScreen: boolean,
}

export interface Hardware {
  accelerometer: boolean,
  audioJack: string,
  cpu: string,
  fmRadio: boolean,
  physicalKeyboard: boolean,
  usb: string,
}

export interface SizeAndWeight {
  dimensions: string[],
  weight: string,
}

export interface Storage {
  flash: string,
  ram: string,
}

export interface Banner {
  id: number,
  name: string,
  imgUrl: string
}
