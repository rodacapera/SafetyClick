export type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export interface LatLng {
  lat?: number | undefined;
  lng?: number | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
}

export type GetLocationParams = {
  accuracy?: number;
  altitude: number;
  bearing?: number;
  latitude: number;
  longitude: number;
  provider?: string;
  speed: number;
  time: number;
};

export type GetLocationProps = {
  accuracy: number;
  altitude: number;
  course: number;
  latitude: number;
  longitude: number;
  speed: number;
  time: number;
  verticalAccuracy: number;
};

export interface PlusCode {
  compound_code: string;
  global_code: string;
}

export interface GeocoderResponse {
  plus_code: PlusCode;
  results: {
    address_components: {
      long_name: string;
      short_name: string;
      types: string[];
    }[];
    formatted_address: string;
    geometry: {
      bounds: {
        northeast: LatLng;
        southwest: LatLng;
      };
      location: LatLng;
      location_type: 'APPROXIMATE' | 'ROOFTOP' | string;
      viewport: {
        northeast: LatLng;
        southwest: LatLng;
      };
    };
    place_id: string;
    types: string[];
    plus_code: PlusCode;
  }[];
  status: 'OK' | string;
}

export type ResultLocationItems = {
  long_name: string;
  short_name: string;
  types: string[];
};

export type ResultLocations = {
  address: string;
  city: ResultLocationItems;
  state: ResultLocationItems;
  country: ResultLocationItems;
  zipCode: ResultLocationItems;
  location: LatLng;
};
