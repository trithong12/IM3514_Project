import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class AvailableListScreen extends Component {
    constructor(props) {
        super(props);
        Promise.all([
            Icon.getImageSource("ios-add", 30), // result 0
        ]).then(result => {
            this.props.navigator.setButtons({
                rightButtons: [
                    {
                        title: '新增可收件時間',
                        icon: result[0],
                        // passProps: {},
                        id: 'addAvailableTime',
                        // testID: 'e2e_is_awesome',
                        // disabled: true,
                        // disableIconTint: true,
                        buttonColor: 'blue',
                        // buttonFontSize: 14,
                        // buttonFontWeight: '600'
                    }
                ],
                animated: true
            });
        });
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress" && event.id === "addAvailableTime") {
            this.props.navigator.push({
                screen: "IM3514_Project.AddAvailableTimeScreen",
                title: "新增可收件時間"
            });
        }
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View></View>
        );
    }
}

export default AvailableListScreen;