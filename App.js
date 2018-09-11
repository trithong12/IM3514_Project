import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import LoginScreen from './src/screens/RegisterAndLogin/LoginScreen';
import RegisterScreen from './src/screens/RegisterAndLogin/RegisterScreen';
import ConfirmationScreen from './src/screens/RegisterAndLogin/ConfirmationScreen';
import ConfirmSuccessScreen from './src/screens/RegisterAndLogin/ConfirmSuccessScreen';
import ForgotPasswordScreen from './src/screens/RegisterAndLogin/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/RegisterAndLogin/ResetPasswordScreen';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import RobotScreen from './src/screens/RobotScreen/RobotScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import ChangeEmailScreen from './src/screens/ProfileScreen/ChangeEmailScreen';
import ChangeNameScreen from './src/screens/ProfileScreen/ChangeNameScreen';
import ChangeOfficeScreen from './src/screens/ProfileScreen/ChangeOfficeScreen';
import ChangePasswordScreen from './src/screens/ProfileScreen/ChangePasswordScreen';
import AvailableListScreen from './src/screens/ProfileScreen/AvailableListScreen';

import configureStore from './src/store/configureStore';
import AddAvailableTimeScreen from './src/screens/ProfileScreen/AddAvailableTimeScreen';

const store = configureStore();

Navigation.registerComponent(
  "IM3514_Project.LoginScreen",
  () => LoginScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "IM3514_Project.RegisterScreen",
  () => RegisterScreen
);

Navigation.registerComponent(
  "IM3514_Project.ConfirmationScreen",
  () => ConfirmationScreen
);

Navigation.registerComponent(
  "IM3514_Project.ConfirmSuccessScreen",
  () => ConfirmSuccessScreen
);

Navigation.registerComponent(
  "IM3514_Project.ForgotPasswordScreen",
  () => ForgotPasswordScreen
);

Navigation.registerComponent(
  "IM3514_Project.ResetPasswordScreen",
  () => ResetPasswordScreen
);

Navigation.registerComponent(
  "IM3514_Project.SideDrawer",
  () => SideDrawer,
  store,
  Provider
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
  () => ProfileScreen,
  store,
  Provider
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
Navigation.registerComponent(
  "IM3514_Project.AvailableListScreen",
  () => AvailableListScreen
);
Navigation.registerComponent(
  "IM3514_Project.AddAvailableTimeScreen",
  () => AddAvailableTimeScreen
);


export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "IM3514_Project.LoginScreen",
    title: "登入"
  }
});