import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("ios-home", 30),
        Icon.getImageSource("logo-reddit", 30),
        Icon.getImageSource("ios-contact", 30),
        Icon.getImageSource("logo-octocat", 30),
    ]).then(result => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Home', // tab label as appears under the icon in iOS (optional)
                    screen: 'IM3514_Project.HomeScreen', // unique ID registered with Navigation.registerScreen
                    icon: result[0], // local image asset for the tab icon unselected state (optional on iOS)
                    title: 'Home', // title of the screen as appears in the nav bar (optional)
                    titleImage: result[0], // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
                },
                {
                    label: 'Robot',
                    screen: 'IM3514_Project.RobotScreen',
                    icon: result[1],
                    title: 'Robot',
                    titleImage: result[1],
                },
                {
                    label: 'Profile',
                    screen: 'IM3514_Project.ProfileScreen',
                    icon: result[2],
                    title: 'Profile',
                    titleImage: result[2],
                },
            ],
            tabsStyle: {
                initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
            },
            appStyle: {
                initialTabIndex: 0,
            },
        });
    });
}

export default startTabs;