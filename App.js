import { Navigation } from 'react-native-navigation';

import LoginScreen from './src/screens/RegisterAndLogin/LoginScreen';
import RegisterScreen from './src/screens/RegisterAndLogin/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import RobotScreen from './src/screens/RobotScreen/RobotScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';

Navigation.registerComponent(
  "IM3514_Project.LoginScreen",
  () => LoginScreen
);

Navigation.registerComponent(
  "IM3514_Project.HomeScreen",
  () => HomeScreen
);

Navigation.registerComponent(
  "IM3514_Project.RobotScreen",
  () => RobotScreen
);

Navigation.registerComponent(
  "IM3514_Project.ProfileScreen",
  () => ProfileScreen
);

Navigation.registerComponent(
  "IM3514_Project.RegisterScreen",
  () => RegisterScreen
);

Navigation.startSingleScreenApp({
  screen: {
    screen: "IM3514_Project.LoginScreen",
    title: "Login"
  }
});