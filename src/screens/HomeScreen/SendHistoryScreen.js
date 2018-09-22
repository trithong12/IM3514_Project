import React, { Component } from 'react';
import { Container, List, ListItem, Left, Body, Right, Text } from 'native-base';

class SendHistoryScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <List>
                    <ListItem>
                        <Left>
                            <Text>2018-09-16 </Text>
                            <Text>上午10:00</Text>
                        </Left>
                        <Body style={{ alignSelf: "center", paddingLeft:50 }}>
                            <Text note>送出</Text>
                        </Body>
                        <Text>李大龍</Text>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>2018-09-15 </Text>
                            <Text>下午03:30</Text>
                        </Left>
                        <Body style={{ alignSelf: "center", paddingLeft:50 }}>
                            <Text note>送出</Text>
                        </Body>
                        <Text>范大強</Text>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>2018-09-15 </Text>
                            <Text>上午09:30</Text>
                        </Left>
                        <Body style={{ alignSelf: "center", paddingLeft:50 }}>
                            <Text note>送出</Text>
                        </Body>
                        <Text>陳小花</Text>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>2018-09-14 </Text>
                            <Text>上午09:10</Text>
                        </Left>
                        <Body style={{ alignSelf: "center", paddingLeft:50 }}>
                            <Text note>送出</Text>
                        </Body>
                        <Text>范小翔</Text>
                    </ListItem>
                </List>
            </Container>
        );
    }
}

export default SendHistoryScreen;