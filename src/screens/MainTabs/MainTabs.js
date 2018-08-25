import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("ios-home", 30), // result 0
        Icon.getImageSource("logo-reddit", 30), // 1
        Icon.getImageSource("ios-contact", 30), // 2
        Icon.getImageSource("logo-octocat", 30), // 3
        Icon.getImageSource("ios-menu", 30), // 4
    ]).then(result => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Home', // tab label as appears under the icon in iOS (optional)
                    screen: 'IM3514_Project.HomeScreen', // unique ID registered with Navigation.registerScreen
                    icon: result[0], // local image asset for the tab icon unselected state (optional on iOS)
                    title: 'Home', // title of the screen as appears in the nav bar (optional)
                    titleImage: result[0], // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
                    navigatorButtons: { // Menu button to open the SideDrawer
                        leftButtons: [
                            {
                                icon: result[4],
                                title: "Menu",
                                id: "sideDrawerToggle",
                            }
                        ]
                    },
                },
                {
                    label: 'Robot',
                    screen: 'IM3514_Project.RobotScreen',
                    icon: result[1],
                    title: 'Robot',
                    titleImage: result[1],
                    navigatorButtons: { // Menu button to open the SideDrawer
                        leftButtons: [
                            {
                                icon: result[4],
                                title: "Menu",
                                id: "sideDrawerToggle",
                            }
                        ]
                    },
                },
                {
                    label: 'Profile',
                    screen: 'IM3514_Project.ProfileScreen',
                    icon: result[2],
                    title: 'Profile',
                    titleImage: result[2],
                    navigatorButtons: { // Menu button to open the SideDrawer
                        leftButtons: [
                            {
                                icon: result[4],
                                title: "Menu",
                                id: "sideDrawerToggle",
                            }
                        ]
                    },
                },
            ],
            tabsStyle: {
                initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
            },
            appStyle: {
                initialTabIndex: 0,
            },
            drawer: {
                left: {
                    screen: "IM3514_Project.SideDrawer",
                }
            }
        });
    });
}

export default startTabs;