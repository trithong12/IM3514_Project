import React, { Component } from 'react';
import { Form, Item, Input, Label, Button, Text, Container } from 'native-base';
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';

import userPool from '../../AWS/cognito_config';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            office: ""
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    registerHandler = () => {
        const attributeList = [];
        attributeList.push(new CognitoUserAttribute({ Name: 'email', Value: this.state.email }));
        attributeList.push(new CognitoUserAttribute({ Name: 'name', Value: this.state.name }));
        attributeList.push(new CognitoUserAttribute({ Name: 'custom:office', Value: this.state.office }));
        var cognitoUser;
        
        //Call SignUp function
        userPool.signUp(this.state.email, this.state.password,
            attributeList, null, (err, result) => {
                if (err) {
                    console.log('Error at signup', err);
                    return;
                }
                cognitoUser = result.user;
                console.log('cognitoUser', cognitoUser)
                this.props.navigator.resetTo({
                    screen: 'IM3514_Project.ConfirmationScreen', // unique ID registered with Navigation.registerScreen
                    title: 'Confirm Email', // title of the screen as appears in the nav bar (optional)
                    passProps: {
                        email: this.state.email
                    },
                    animated: true,
                    animationType: 'fade',
                });
            }
        );
    }

    render() {
        return (
            // 按外面會收起鍵盤
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <Container style={styles.container}>
                        <KeyboardAvoidingView behavior="padding">
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
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Input
                                        secureTextEntry
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        getRef={(input) => this.passwordInput = input}
                                        returnKeyType="next"
                                        onSubmitEditing={(event) => this.confirmPasswordInput._root.focus()}
                                        value={this.state.password}
                                        onChangeText={(inputPassword) => this.setState({ password: inputPassword })}
                                    />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Confirm Password</Label>
                                    <Input
                                        secureTextEntry
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        getRef={(input) => this.confirmPasswordInput = input}
                                        returnKeyType="next"
                                        onSubmitEditing={(event) => this.nameInput._root.focus()}
                                        value={this.state.confirmPassword}
                                        onChangeText={(inputConfirmPassword) => this.setState({ confirmPassword: inputConfirmPassword })}
                                    />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Name</Label>
                                    <Input
                                        autoCorrect={false}
                                        getRef={(input) => this.nameInput = input}
                                        returnKeyType="next"
                                        onSubmitEditing={(event) => this.officeInput._root.focus()}
                                        value={this.state.name}
                                        onChangeText={(inputName) => this.setState({ name: inputName })}
                                    />
                                </Item>
                                <Item floatingLabel last>
                                    <Label>Office (SL)</Label>
                                    <Input
                                        autoCorrect={false}
                                        getRef={(input) => this.officeInput = input}
                                        keyboardType="numeric"
                                        returnKeyType="go"
                                        onSubmitEditing={(event) => this.registerHandler()}
                                        value={this.state.office}
                                        onChangeText={(inputOffice) => this.setState({ office: inputOffice })}
                                    />
                                </Item>

                                <View style={styles.buttonContainer}>
                                    <Button
                                        bordered success
                                        style={styles.registerButton}
                                        onPress={this.registerHandler}
                                    >
                                        <Text>Confirm to register</Text>
                                    </Button>
                                </View>
                            </Form>
                        </KeyboardAvoidingView>
                    </Container>
                </ScrollView>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    form: {
        width: "90%",
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    registerButton: {
        padding: 10,
        margin: 20,
        alignSelf: 'center',
    }
});