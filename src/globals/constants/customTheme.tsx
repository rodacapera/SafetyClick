import {darkTheme} from '@src/hooks/darkMode';
import {lightTheme} from '@src/hooks/lightMode';
import {ThemeContextMode} from '@src/types/contextTypes';
import {useColorScheme} from 'react-native';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

const CustomTheme = () => {
  const colorScheme = useColorScheme();

  const customDefaultTheme = (
    colorScheme === 'dark'
      ? {...MD3DarkTheme, colors: darkTheme.colors}
      : {...MD3LightTheme, colors: lightTheme.colors}
  ) as ThemeContextMode;

  return {customDefaultTheme};
};

export default CustomTheme;
