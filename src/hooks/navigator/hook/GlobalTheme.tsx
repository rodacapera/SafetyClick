import {ThemeContext} from '@src/types/contextTypes';
import {useContext} from 'react';

const ActualTheme = () => {
  const {
    customTheme: {colors, dark},
    customTheme,
    setDarkTheme,
    setLightTheme
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useContext(ThemeContext);
  return {
    theme: customTheme,
    colors: colors,
    dark,
    setDarkTheme,
    setLightTheme
  };
};
export {ActualTheme};
