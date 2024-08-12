import {User} from '@src/types/userTypes';

export const shop = {
  address: 'cl 10 86 90',
  city: 'Ibagué',
  state: 'Tolima',
  alias: 'La vaca'
};

export const employees = [
  {title: 'employee one', subtitle: 'Tienda la vaca'},
  {title: 'employee two', subtitle: 'Tienda parcero'}
];

export const buttons = [
  {title: 'button one', subtitle: 'Tienda la vaca'},
  {title: 'button two', subtitle: 'Tienda parcero'}
];

export const networks = [
  {name: 'casa one'},
  {name: 'casa two'},
  {name: 'casa thre'}
];

export const fakePosition = {
  latitude: 4.441886,
  longitude: -75.197092,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121
};

export const fakeMarkers = [
  {
    latlng: {
      latitude: 4.443289,
      longitude: -75.198824
    },
    title: 'casa 1',
    description: 'description 1'
  },
  {
    latlng: {
      latitude: 4.441203,
      longitude: -75.198556
    },
    title: 'casa 2',
    description: 'description 2'
  }
];

export const userInitialData = {
  user: undefined as unknown as User,
  panicsObserver: undefined,
  employeesObserver: undefined,
  buttonsObserver: undefined
};
export const shopInitialData = {
  address: undefined,
  alias: undefined,
  city: undefined,
  countryCode: undefined,
  department: undefined,
  location: undefined,
  nit: undefined,
  phone: undefined,
  zipcode: undefined
};

export const userFakeData = {
  address: null,
  administrator: null,
  alias: null,
  avatar: null,
  city: null,
  countryCode: null,
  created: null,
  date: null,
  departament: null,
  devices: [],
  email: null,
  lastname: null,
  location: null,
  name: null,
  pay: false,
  phone: null,
  shop: null,
  type: null,
  user_uid: null,
  zipcode: null,
  group_number: null,
  group_name: null
} as unknown as User;
