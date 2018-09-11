import React, { Component } from 'react';

import { Container, Text, Input, Button, Label, Item, Form } from 'native-base';
import { StyleSheet, View } from 'react-native';

export default class ChangeOfficeScreen extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Form style={styles.inputContainer}>
                    <Item>
                        <Label>您目前辦公室：</Label>
                        <Input
                            value={"SL"+this.props.office}
                            editable={false}
                        />
                    </Item>
                    <Item>
                        <Label>請輸入新辦公室：</Label>
                        <Input />
                    </Item>
                </Form>
                <Button transparent style={styles.buttonStyle}>
                    <Text>確認</Text>
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