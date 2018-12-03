import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Text, List, ListItem, Left, Body, Thumbnail, Separator } from 'native-base';
import { connect } from 'react-redux';
import db from '../../AWS/dynamodb_config';

class ChooseTargetScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targets: []
        }
        this.loadTarget();
    }

    componentWillUnmount() {

    }

    loadTarget = () => {
        const params = {
            TableName: "User",
            ExpressionAttributeNames: {"#user_id":"user_id"},
            ExpressionAttributeValues: {":user_id": this.props.currentUser.email},
            FilterExpression: "#user_id <> :user_id"
            //ProjectionExpression: "user_id, user_name, office_id"
        }
        db.scan(params, (err, data) => {
            console.log("Target List : ", data);
            this.setState({
                targets: data.Items.map((user, i) => {
                    console.log("user = ", user);
                        return {
                            key: i.toString(),
                            user_id: user.user_id,
                            //office_id: user.office_id.S,
                            user_name: user.user_name,
                            office: user.office
                        }
                    
                    
                })
            });
        })
    }

    goToEnterDocumentHandler = (targetUser) => {
        this.props.navigator.push({
            screen: "IM3514_Project.EnterDocumentScreen",
            title: "確認並送出請求",
            passProps: {
                targetUser: targetUser
            }
        });
    }

    render() {
        personalImageArray = [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsr7EGKrpasXHvJEYZfvpMnIiA_PapHqWIXPvsYbDY3plT4zA4",
            "https://orig00.deviantart.net/e997/f/2014/307/1/2/no_face_avatar_by_yoincauto-d8564jk.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH40w3WzxlFpg-n46fCFu4czGHxpUw-3w0ORAUuAg2G3q696vF",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJzmWgXsnWtKf3tr_SN1uuzPQ9KoUTCbVYXDWBYbsT09bfVxQ",
            "https://png.pngtree.com/element_origin_min_pic/17/09/18/07d35e1b5ff71c52f75c6ed3b211dae5.jpg"
        ]
        return (
            <Container>
                <List>
                    <Text note style={{ textAlign: "center", paddingTop: 10, paddingBottom: 10 }}>僅顯示目前可收件</Text>
                    <FlatList
                        data={this.state.targets}
                        renderItem={info => (
                            <ListItem avatar onPress={() => this.goToEnterDocumentHandler(info.item)}>
                                <Left>
                                    <Thumbnail source={{ uri: personalImageArray[parseInt(Math.random() * 4 | 0)] }} />
                                </Left>
                                <Body>
                                    <Text>{info.item.user_name}</Text>
                                    <Text note>{info.item.office.office_id}</Text>
                                </Body>
                            </ListItem>
                        )}
                    />
                </List>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps)(ChooseTargetScreen);