import React, { Component } from 'react';

import { Container, Text, Input, Button, Label, Item, Form } from 'native-base';
import { StyleSheet, View } from 'react-native';

export default class ChangeOfficeScreen extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Form style={styles.inputContainer}>
                    <Item>
                        <Label>Your current Office:</Label>
                        <Input
                            value={"SL245"}
                            editable={false}
                        />
                    </Item>
                    <Item>
                        <Label>New Office:</Label>
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
        width: "90%",
        alignItems: 'center',
    },
    buttonStyle: {
        marginTop: 10,
        alignSelf: 'center',
    }
});