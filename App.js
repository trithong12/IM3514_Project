import { Navigation } from 'react-native-navigation';

import LoginScreen from './src/screens/RegisterAndLogin/LoginScreen';
import RegisterScreen from './src/screens/RegisterAndLogin/RegisterScreen';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import RobotScreen from './src/screens/RobotScreen/RobotScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import ChangeEmailScreen from './src/screens/ProfileScreen/ChangeEmailScreen';
import ChangeNameScreen from './src/screens/ProfileScreen/ChangeNameScreen';
import ChangeOfficeScreen from './src/screens/ProfileScreen/ChangeOfficeScreen';
import ChangePasswordScreen from './src/screens/ProfileScreen/ChangePasswordScreen';

Navigation.registerComponent(
  "IM3514_Project.LoginScreen",
  () => LoginScreen
);

Navigation.registerComponent(
  "IM3514_Project.RegisterScreen",
  () => RegisterScreen
);

Navigation.registerComponent(
  "IM3514_Project.SideDrawer",
  () => SideDrawer
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
  "IM3514_Project.ChangeEmailScreen",
  () => ChangeEmailScreen
);
Navigation.registerComponent(
  "IM3514_Project.ChangeNameScreen",
  () => ChangeNameScreen
);
Navigation.registerComponent(
  "IM3514_Project.ChangeOfficeScreen",
  () => ChangeOfficeScreen
);
Navigation.registerComponent(
  "IM3514_Project.ChangePasswordScreen",
  () => ChangePasswordScreen
);


Navigation.startSingleScreenApp({
  screen: {
    screen: "IM3514_Project.LoginScreen",
    title: "Login"
  }
});