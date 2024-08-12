import AsyncStorage from '@react-native-async-storage/async-storage';
import {customDarkTheme, customLightTheme} from '@src/globals/constants/theme';
import {ThemeContext, ThemeContextMode} from '@src/types/contextTypes';
import {SetStateAction, useCallback, useEffect, useState} from 'react';
import CustomTheme2 from '@src/globals/constants/customTheme2';

const ThemeProvider = ({children}: any) => {
  const {customDefaultTheme} = CustomTheme2();
  const [currentCustomTheme, setCurrentCustomTheme] =
    useState<ThemeContextMode>(customLightTheme);

  const setDarkTheme = useCallback(async () => {
    await AsyncStorage.setItem('@theme', 'dark');
    setCurrentCustomTheme(customDarkTheme);
  }, []);

  const setLightTheme = useCallback(async () => {
    await AsyncStorage.setItem('@theme', 'light');
    setCurrentCustomTheme(customLightTheme);
  }, []);

  const getCurrentTheme = useCallback(
    async (customDefaultTheme: SetStateAction<ThemeContextMode>) => {
      const myCurrentTheme = await AsyncStorage.getItem('@theme');
      if (myCurrentTheme) {
        myCurrentTheme === 'dark' ? setDarkTheme() : setLightTheme();
      } else {
        setCurrentCustomTheme(customDefaultTheme);
      }
    },
    [setDarkTheme, setLightTheme]
  );

  useEffect(() => {
    !currentCustomTheme && getCurrentTheme(customDefaultTheme);
  }, [currentCustomTheme, customDefaultTheme, getCurrentTheme]);

  return (
    currentCustomTheme && (
      <ThemeContext.Provider
        value={{customTheme: currentCustomTheme, setDarkTheme, setLightTheme}}>
        {children}
      </ThemeContext.Provider>
    )
  );
};
export default ThemeProvider;
