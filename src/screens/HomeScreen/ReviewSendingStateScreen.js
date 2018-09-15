import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Card, CardItem, Text, Button, Icon } from 'native-base';

class ReviewSendingStateScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        
    }

    backToHomeHandler = () => {
        this.props.navigator.resetTo({
            screen: "IM3514_Project.HomeScreen",
            title: "首頁"
        });
    }

    cancelRequestHandler = () => {

    }

    render() {
        return (
            <Container>
                <View style={{ alignSelf: "center", flexDirection: "row", marginTop: 30, marginBottom: 10 }}>
                    <Icon name="arrow-forward" style={{ fontSize: 100, color: "red" }} />
                    <Icon name="arrow-forward" style={{ fontSize: 100, color: "red" }} />
                    <Icon name="arrow-forward" style={{ fontSize: 100, color: "red" }} />
                </View>
                <View style={{ alignSelf: "center" }}>
                    <Text style={{ fontSize: 30 }}>寄送中...</Text>
                </View>
                <Card style={{ width: "80%", alignSelf: "center", marginTop:20 }}>
                    <CardItem></CardItem>
                    <CardItem style={{ alignSelf: "center" }}>
                        <Text>收件人：陳大龍</Text>
                    </CardItem>
                    <CardItem style={{ alignSelf: "center" }}>
                        <Text>辦公室：SL203</Text>
                    </CardItem>
                    <CardItem style={{ alignSelf: "center" }}>
                        <Text>工作排序：4</Text>
                    </CardItem>
                    <CardItem></CardItem>
                </Card>
                <View style={{ alignSelf: "center", flexDirection: "row", marginTop: 20 }}>
                    <Button block success onPress={this.backToHomeHandler}
                        style={{ marginRight: 20 }}>
                        <Text>Ok</Text>
                    </Button>
                    <Button block danger onPress={this.cancelRequestHandler}
                        style={{ marginLeft: 20 }}>
                        <Text>取消遞送</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

export default ReviewSendingStateScreen;