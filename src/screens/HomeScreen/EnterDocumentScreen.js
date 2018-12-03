import React, { Component } from 'react';
import { Container, Label, Input, Form, Item, Thumbnail, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import db from '../../AWS/dynamodb_config';

class EnterDocumentScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {

    }

    sendRequestHandler = () => {
        const recordparams = {
            TableName: "Record",
            Item: {
                "user_id": this.props.currentUser.email, // Equals 'requester_id'
                "requester_name": this.props.currentUser.name,
                "receiver_id": this.props.targetUser.user_id,
                "receiver_name": this.props.targetUser.user_name,
                "request_time": new Date().toLocaleString(),
                "requester_office": this.props.currentUser.office,
                "receiver_office": this.props.targetUser.office,
                "finished": 0   
            }
        }
        db.put(recordparams, (err, data) => {
            if(err){
                console.log("err msgs: ", err)
            }
            else{
                console.log(data != null ? "Send request Succeess!" : "Send request fail...")
            }
            
        })
        
        this.goToReviewSendingStateHandler();
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
                        <Input editable={false}>{this.props.targetUser.user_name}</Input>
                    </Item>
                    <Item>
                        <Label>辦公室：</Label>
                        <Input value={this.props.targetUser.office.office_id} editable={false}></Input>
                    </Item>
                    <Item>
                        <Label>文件名稱：</Label>
                        <Input></Input>
                    </Item>
                    <Button block style={{ alignSelf: "center", marginTop: 10 }}
                            onPress={this.sendRequestHandler}>
                        <Text>確認送出</Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    };
};

export default connect(mapStateToProps)(EnterDocumentScreen);