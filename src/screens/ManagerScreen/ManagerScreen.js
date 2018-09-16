import React, { Component } from 'react';
import { Container, Content, Text, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ManagerScreen extends Component {
    constructor(props) {
        super(props);
        Promise.all([
            Icon.getImageSource("ios-menu", 30, color = "blue"), // result 0
        ]).then(result => {
            this.props.navigator.setButtons({
                leftButtons: [
                    {
                        title: '登出',
                        icon: result[0],
                        id: 'sideDrawerToggle',
                    }
                ],
                animated: true
            });
        });
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress" && event.id === "sideDrawerToggle") {
            this.props.navigator.toggleDrawer({
                side: "left",
            });
        }
    }

    goToOfficeListHandler = () => {
        this.props.navigator.push({
            screen: "IM3514_Project.OfficeList",
            title: "辦公室管理"
        });
    }

    goToRobotHistoryHandler = () => {
        this.props.navigator.push({
            screen: "IM3514_Project.RobotHistory",
            title: "機器人使用紀錄"
        });
    }

    goToRobotStateHandler = () => {
        this.props.navigator.push({
            screen: "IM3514_Project.RobotState",
            title: "機器人狀態"
        });
    }

    goToUserListHandler = () => {
        this.props.navigator.push({
            screen: "IM3514_Project.UserList",
            title: "使用者清單"
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                <Button
                    rounded
                    info
                    style={styles.buttonStyle}
                    onPress={this.goToOfficeListHandler}
                >
                    <Text>辦公室名單管理</Text>
                </Button>

                <Button
                    rounded
                    info
                    style={styles.buttonStyle}
                    onPress={this.goToRobotHistoryHandler}
                >
                    <Text>機器人使用紀錄</Text>
                </Button>

                <Button
                    rounded
                    info
                    style={styles.buttonStyle}
                    onPress={this.goToRobotStateHandler}
                >
                    <Text>機器人狀態</Text>
                </Button>

                <Button
                    rounded
                    info
                    style={styles.buttonStyle}
                    onPress={this.goToUserListHandler}
                >
                    <Text>使用者清單</Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        marginBottom: 30,
        alignSelf: 'center'
    }
});