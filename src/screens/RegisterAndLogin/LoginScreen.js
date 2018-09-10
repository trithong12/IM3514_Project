import React, { Component } from 'react';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userPool from '../../AWS/cognito_config';
import MainTabs from '../MainTabs/MainTabs';

import { connect } from 'react-redux';
import { setCognitoUser } from '../../store/actions/authActions';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            user: "",
        };
    }

    loginHandler = () => {
        const authenticationDetails = new AuthenticationDetails({
            Username: this.state.email,
            Password: this.state.password
        });
        const cognitoUser = new CognitoUser({
            Username: this.state.email,
            Pool: userPool
        });
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                console.log('onSuccess', typeof(result), result);
                console.log('access token + ' + result.getAccessToken().getJwtToken());
                console.log("CognitoUser1: ", typeof(cognitoUser), cognitoUser);
                this.props.setCognitoUser(cognitoUser);
                cognitoUser.setDeviceStatusRemembered({
                    onSuccess: function (result) {
                        console.log('call result: ' + result);
                    },
                    onFailure: function(err) {
                        alert(err);
                    }
                });
                MainTabs();
            },
            onFailure: (err) => {
                console.log('onFailure', err);
                alert(err);
            },
            mfaRequired: (codeDeliveryDetails) => {
                console.log('mfaRequired', codeDeliveryDetails),
                alert(codeDeliveryDetails);
            }
        });
    }
    goToRegisterHandler = () => {
        this.props.navigator.push({
            screen: "IM3514_Project.RegisterScreen",
            title: "Registeration",
            animationType: 'fade'
        });
    }
    goToForgotPasswordHandler = () => {
        this.props.navigator.push({
            screen: "IM3514_Project.ForgotPasswordScreen",
            title: "Forgot Password",
            animationType: 'fade'
        })
    }

    render() {
        return (
            // 按外面會收起鍵盤
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>
                    <KeyboardAvoidingView style={styles.container} behavior="padding">
                        <Text style={{ fontSize: 22, fontFamily: "Arial" }}>Please login!</Text>
                        <Form style={styles.form}>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={(event) => this.passwordInput._root.focus()}
                                    value={this.state.email}
                                    onChangeText={(inputEmail) => this.setState({ email: inputEmail })}
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
                                    value={this.state.password}
                                    onChangeText={(inputPassword) => this.setState({ password: inputPassword })}
                                />
                            </Item>

                            <View style={styles.buttonContainer}>
                                <Button
                                    bordered
                                    style={styles.loginButton}
                                    onPress={this.loginHandler}
                                >
                                    <Text>Login</Text>
                                </Button>
                                <Button
                                    bordered
                                    style={styles.loginButton}
                                    onPress={this.goToRegisterHandler}>
                                    <Text>Register an Account</Text>
                                </Button>
                                <Button
                                    transparent
                                    style={styles.loginButton}
                                    onPress={this.goToForgotPasswordHandler}>
                                    <Text>Forgot Password</Text>
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
        flexDirection: 'column',
    },
    loginButton: {
        padding: 10,
        marginTop: 10,
        margin: 5,
        alignSelf: 'center',
    }
});

const mapStateToProps = state => {
    return {
        cognitoUser: state.cognitoUser
    }
}

export default connect(null, {setCognitoUser})(LoginScreen);
// export default LoginScreen;