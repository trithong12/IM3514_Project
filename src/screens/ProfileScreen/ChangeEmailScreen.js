import React, { Component } from 'react';

import { Container, Text, Input, Button, Label, Item } from 'native-base';
import { StyleSheet } from 'react-native';

export default class ChangeEmailScreen extends Component {
    render() {
        return (
            <Container>
                <Item>
                    <Label>Your current email:</Label>
                    <Input
                        value={"trithong12@gmail.com"}
                        editable={false}
                    />
                </Item>
                <Item>
                    <Label>New email:</Label>
                    <Input />
                </Item>
                <Button transparent style={styles.buttonStyle}>
                    <Text>Submit</Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 10,
        alignSelf: 'center',
    }
});