import React, { Component } from 'react';

import { Container, Text, Input, Button, Label, Item, Form } from 'native-base';
import { StyleSheet } from 'react-native';

export default class ChangeEmailScreen extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Form style={styles.inputContainer}>
                    <Item>
                        <Label>Your current Password:</Label>
                        <Input secureTextEntry autoCorrect={false} autoCapitalize="none" />
                    </Item>
                    <Item>
                        <Label>Your new Password:</Label>
                        <Input secureTextEntry autoCorrect={false} autoCapitalize="none" />
                    </Item>
                    <Item>
                        <Label>Confirm new Password:</Label>
                        <Input secureTextEntry autoCorrect={false} autoCapitalize="none" />
                    </Item>
                </Form>
                <Button transparent style={styles.buttonStyle}>
                    <Text>Submit</Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        alignItems: 'center',
        width: "90%",
    },
    buttonStyle: {
        marginTop: 10,
        alignSelf: 'center',
    }
});