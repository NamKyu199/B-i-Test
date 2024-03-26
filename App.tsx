import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// AUTHENTICATION
import SignInScreen from '@/screens/Authentication/SignIn';
import SignUpScreen from '@/screens/Authentication/SignUp';
import SuccessfulScreen from '@/screens/Authentication/Successful';
import NotificationScreen from '@/screens/Authentication/Notification';
import RequestScreen from '@/screens/Authentication/Request';
import OrderScreen from '@/screens/Main/Order';
import HomeScreen from '@/screens/Main/Home';

export type RootStackParams = {
  // AUTHENTICATION SCREENS
  SignInScreen: undefined;
  SignUpScreen: undefined;
  SuccessfulScreen:undefined;
  NotificationScreen:undefined;
  RequestScreen:undefined;
  // MAIN SCREENS
  MainScreen: undefined;
  HomeScreen: undefined;
  OrderScreen:undefined;
};

const routes: Array<React.ComponentProps<typeof RootStack.Screen>> = [
  // AUTHENTICATION SCREENS
  {
    name: 'SignInScreen',
    component: SignInScreen,
  },

  {
    name:'SignUpScreen',
    component:SignUpScreen,
  },

  {
    name:'SuccessfulScreen',
    component:SuccessfulScreen,
  },

  {
    name:'NotificationScreen',
    component:NotificationScreen,
  },

  {
    name:'RequestScreen',
    component:RequestScreen,
  },

  {
    name:'OrderScreen',
    component:OrderScreen,
  },

  {
    name:'HomeScreen',
    component:HomeScreen,
  },
];

const RootStack = createNativeStackNavigator<RootStackParams>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'SignInScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        {routes.map(routeConfig => (
          <RootStack.Screen key={routeConfig.name} {...routeConfig} />
        ))}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
