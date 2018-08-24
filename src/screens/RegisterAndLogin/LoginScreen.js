import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Body, Button, Text } from 'native-base';
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
export default class LoginScreen extends Component {
    render() {
        return (
            // 按外面會收起鍵盤
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>
                    <KeyboardAvoidingView style={styles.container} behavior="padding">
                        <Text style={{ fontSize: 22, fontFamily: "Arial" }}>Login</Text>
                        <Form style={styles.form}>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={(event) => this.passwordInput._root.focus()}
                                    blurOnSubmit={false}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    getRef={(input) => this.passwordInput = input}
                                    returnKeyType="go"
                                />
                            </Item>

                            <View style={styles.buttonContainer}>
                                <Button bordered style={styles.loginButton}>
                                    <Text>Login</Text>
                                </Button>
                                <Button bordered style={styles.loginButton}>
                                    <Text>Sign up</Text>
                                </Button>
                            </View>
                        </Form>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: "#85C1E9",
    },
    form: {
        width: "80%",
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    loginButton: {
        padding: 10,
        // marginTop: 20,
        margin: 20,
        alignSelf: 'center',
    }
});