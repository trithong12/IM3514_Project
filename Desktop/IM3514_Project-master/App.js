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
//Manager Page
import AddOffice from './src/screens/ManagerScreen/AddOffice';
import ChangeOffice from './src/screens/ManagerScreen/ChangeOffice';
import ManagerScreen from './src/screens/ManagerScreen/ManagerScreen';
import RobotHistory from './src/screens/ManagerScreen/RobotHistory';
import OfficeList from './src/screens/ManagerScreen/OfficeList'
////

import configureStore from './src/store/configureStore';
import AddAvailableTimeScreen from './src/screens/ProfileScreen/AddAvailableTimeScreen';

const store = configureStore();

// login & register page
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
////

// Home page & navigation
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
  "IM3514_Project.ManagerScreen",
  () => ManagerScreen
);
////
//Manager Page
Navigation.registerComponent(
  "IM3514_Project.OfficeList",
  () => OfficeList
);
Navigation.registerComponent(
  "IM3514_Project.AddOffice",
  () => AddOffice
);
Navigation.registerComponent(
  "IM3514_Project.ChangeOffice",
  () => ChangeOffice
);
Navigation.registerComponent(
  "IM3514_Project.RobotHistory",
  () => RobotHistory
);
////
//Robot Page

////
// Profile page
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
////

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "IM3514_Project.LoginScreen",
    title: "登入"
  }
});