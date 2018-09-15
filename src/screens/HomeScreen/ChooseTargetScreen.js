import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text, List, ListItem, Left, Body, Thumbnail, Separator } from 'native-base';

class ChooseTargetScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {

    }

    goToEnterDocumentHandler = () => {
        this.props.navigator.push({
            screen: "IM3514_Project.EnterDocumentScreen",
            title: "確認並送出請求"
        });
    }

    render() {
        return (
            <Container>
                <List>
                    <Text note style={{textAlign:"center", paddingTop:10, paddingBottom:10}}>僅顯示目前可收件</Text>
                    <ListItem avatar onPress={this.goToEnterDocumentHandler}>
                        <Left>
                            <Thumbnail source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsr7EGKrpasXHvJEYZfvpMnIiA_PapHqWIXPvsYbDY3plT4zA4" }} />
                        </Left>
                        <Body>
                            <Text>陳小龍</Text>
                            <Text note>SL203</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: "https://orig00.deviantart.net/e997/f/2014/307/1/2/no_face_avatar_by_yoincauto-d8564jk.jpg" }} />
                        </Left>
                        <Body>
                            <Text>施大霖</Text>
                            <Text note>SL276</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH40w3WzxlFpg-n46fCFu4czGHxpUw-3w0ORAUuAg2G3q696vF" }} />
                        </Left>
                        <Body>
                            <Text>范小翔</Text>
                            <Text note>SL272</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJzmWgXsnWtKf3tr_SN1uuzPQ9KoUTCbVYXDWBYbsT09bfVxQ" }} />
                        </Left>
                        <Body>
                            <Text>莊小棠</Text>
                            <Text note>SL213</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: "data:image/png;base64,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" }} />
                        </Left>
                        <Body>
                            <Text>陳小花</Text>
                            <Text note>SL255</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: "https://png.pngtree.com/element_origin_min_pic/17/09/18/07d35e1b5ff71c52f75c6ed3b211dae5.jpg" }} />
                        </Left>
                        <Body>
                            <Text>李大明</Text>
                            <Text note>SL234</Text>
                        </Body>
                    </ListItem>
                </List>
            </Container>
        );
    }
}

export default ChooseTargetScreen;