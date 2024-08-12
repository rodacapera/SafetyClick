import {NavigationContainer} from '@react-navigation/native';
import ThemeProvider from './src/hooks/context/themeContext/ThemeContext';
import '@src/hooks/i18n';
import {LateralDrawer} from './src/hooks/navigator/LateralDrawer';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PaperProvider} from 'react-native-paper';
import CustomTheme from '@src/globals/constants/customTheme';

// Create a client
const queryClient = new QueryClient();

function App(): JSX.Element {
  const {customDefaultTheme} = CustomTheme();
  return (
    <ThemeProvider>
      <PaperProvider theme={customDefaultTheme}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <LateralDrawer />
          </QueryClientProvider>
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}
export default App;
