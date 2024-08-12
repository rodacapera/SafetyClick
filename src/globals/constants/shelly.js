import {SERVER_PANIC_URL_PATH} from './panicService';

export const API = 'http://192.168.33.1';
export const BUTTON_ACTION = reference => [
  `/settings/actions?index=0&name=shortpush_url&enabled=true&urls[]=${SERVER_PANIC_URL_PATH}api/pushB?id=${reference}`
];
export const GET_NETWORKS = `${API}/wifiscan`;
export const SET_STA = `${API}/settings/sta?`;
export const MQTT = `${API}/settings?mqtt`;
export const STATUS = `${API}/status`;
export const ACTIONS = `${API}/settings/actions`;
