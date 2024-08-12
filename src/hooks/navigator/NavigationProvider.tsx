import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyOnboarding from '@src/components/onboarding/MyOnboarding';
import {RootStackParamList} from '@src/types/globalTypes';
import Buttons from '@src/views/buttons/Buttons';
import Employees from '@src/views/employees/Employees';
import Home from '@src/views/home/Home';
import Login from '@src/views/login/Login';
import Notify from '@src/views/notify/Notify';
import Profile from '@src/views/profile/Profile';
import Register from '@src/views/register/Register';
import LoginSplash from '../../views/login/LoginSplash';
import Splash from '../../views/splash/Splash';
import QrScanner from '@src/views/qrScanner/QrScanner';

const NavigationProvider = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="MyOnboarding"
        component={MyOnboarding}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="LoginSplash"
        component={LoginSplash}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Employees"
        component={Employees}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Buttons"
        component={Buttons}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Notify"
        component={Notify}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="QrScanner"
        component={QrScanner}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationProvider;
