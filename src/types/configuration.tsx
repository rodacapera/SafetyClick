export interface Configuration {
  countryCode: string;
  distance_panic: number;
  distance_range: string;
  expiration_time: number;
  price: number;
  versionAndroid: string;
  versionIOS: string;
  farm_random: number;
  vehicle_code: number;
  supported_cities: {city: string};
  videoLinks: VideoLinks;
  link_app: string;
  support_mail: string;
  emergency: string;
}

export type VideoLinks = {
  userNotFoundVideoUrl: string; // ok
  addUserVideo: string; //ok
  addButton: string; // ok
  buttonNotFoundVideoUrl: string; //ok
};
