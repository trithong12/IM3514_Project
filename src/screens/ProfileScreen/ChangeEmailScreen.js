import React, { Component } from 'react';

import { Container, Text, Input, Button, Label, Item, Form } from 'native-base';
import { StyleSheet } from 'react-native';

export default class ChangeEmailScreen extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Form style={styles.inputContainer}>
                    <Item>
                        <Label>Your current Email:</Label>
                        <Input
                            value={"trithong12@gmail.com"}
                            editable={false}
                        />
                    </Item>
                    <Item>
                        <Label>New Email:</Label>
                        <Input />
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