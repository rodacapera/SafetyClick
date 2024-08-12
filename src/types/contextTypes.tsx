import {createContext} from 'react';
import {MD3Theme} from 'react-native-paper';

export type ThemeContextMode = MD3Theme & {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
};

export interface TeamContextProps {
  customTheme: ThemeContextMode;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as TeamContextProps);
