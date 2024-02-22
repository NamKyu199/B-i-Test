import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// AUTHENTICATION
// import SignInScreen from '@/screens/Authentication/SignIn';
import SignInScreen from './src/screens/Authentication/SignIn';

export type RootStackParams = {
  // AUTHENTICATION SCREENS
  SignInScreen: undefined;
  // MAIN SCREENS
  MainScreen: undefined;
  HomeScreen: undefined;
  SettingScreen: undefined;
};

const routes: Array<React.ComponentProps<typeof RootStack.Screen>> = [
  // AUTHENTICATION SCREENS
  {
    name: 'SignInScreen',
    component: SignInScreen,
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
