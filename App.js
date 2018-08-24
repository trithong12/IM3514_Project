import { Navigation } from 'react-native-navigation';

import LoginScreen from './src/screens/RegisterAndLogin/LoginScreen'

Navigation.registerComponent(
  "IM3514_Project.LoginScreen",
  () => LoginScreen
);

Navigation.startSingleScreenApp({
  screen: {
    screen: "IM3514_Project.LoginScreen",
    title: "Login"
  }
});