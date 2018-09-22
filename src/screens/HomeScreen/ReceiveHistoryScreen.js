import React, { Component } from 'react';
import { Container, List, ListItem, Left, Body, Right, Text } from 'native-base';

class ReceiveHistoryScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <List>
                    <ListItem>
                        <Left>
                            <Text>2018-09-18 </Text>
                            <Text>下午04:00</Text>
                        </Left>
                        <Body style={{ alignSelf: "center", paddingLeft:50 }}>
                            <Text note>收到</Text>
                        </Body>
                        <Text>林小華</Text>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>2018-09-16 </Text>
                            <Text>下午03:12</Text>
                        </Left>
                        <Body style={{ alignSelf: "center", paddingLeft:50 }}>
                            <Text note>收到</Text>
                        </Body>
                        <Text>黃大明</Text>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>2018-09-15 </Text>
                            <Text>上午11:57</Text>
                        </Left>
                        <Body style={{ alignSelf: "center", paddingLeft:50 }}>
                            <Text note>收到</Text>
                        </Body>
                        <Text>陳小花</Text>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>2018-09-15 </Text>
                            <Text>上午09:10</Text>
                        </Left>
                        <Body style={{ alignSelf: "center", paddingLeft:50 }}>
                            <Text note>收到</Text>
                        </Body>
                        <Text>范小翔</Text>
                    </ListItem>
                </List>
            </Container>
        );
    }
}

export default ReceiveHistoryScreen;