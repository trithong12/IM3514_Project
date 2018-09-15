import React, { Component } from 'react';
import { Container, Label, Input, Form, Item, Thumbnail, Button, Text } from 'native-base';

class EnterDocumentScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {

    }

    goToReviewSendingStateHandler = () => {
        this.props.navigator.resetTo({
            screen: "IM3514_Project.ReviewSendingStateScreen",
            title: "寄送狀態"
        });
    }

    render() {
        return (
            <Container style={{ width: "85%", alignSelf: "center" }}>
                <Form style={{ marginTop: 10 }}>
                    <Item style={{ alignSelf: "center", marginTop: 10, marginBottom: 10 }} >
                        <Thumbnail large source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsr7EGKrpasXHvJEYZfvpMnIiA_PapHqWIXPvsYbDY3plT4zA4" }} />
                    </Item>
                    <Item>
                        <Label>收件人：</Label>
                        <Input editable={false}>陳大龍</Input>
                    </Item>
                    <Item>
                        <Label>辦公室：</Label>
                        <Input value={"SL203"}></Input>
                    </Item>
                    <Item>
                        <Label>文件名稱：</Label>
                        <Input></Input>
                    </Item>
                    <Button block style={{ alignSelf: "center", marginTop: 10 }}
                            onPress={this.goToReviewSendingStateHandler}>
                        <Text>確認送出</Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default EnterDocumentScreen;