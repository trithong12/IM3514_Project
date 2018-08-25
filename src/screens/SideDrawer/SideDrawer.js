import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Icon, Left, Body, } from 'native-base';

export default class SideDrawer extends Component {
    render() {
        return (
            <View style={[styles.container, { width: Dimensions.get("window").width * 0.75 }]}>
                <TouchableOpacity>
                    <ListItem style={styles.drawerItem}>
                        <Icon ios="ios-log-out" android="md-log-out" style={styles.drawerIcon} />
                        <Text>Sign out</Text>
                    </ListItem>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: "#FFF",
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    drawerIcon: {
        marginRight: 10,
    }
});