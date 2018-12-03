import React, { Component } from "react";
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Button, Right, Left } from "native-base";
import { connect } from "react-redux";
import db from '../../AWS/dynamodb_config';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestedHistory: [],
      receivedHistory: []
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    this.loadUseHistory();
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress" && event.id === "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left",
        animated: true,
      });
    }
  }

  componentWillUnmount() {

  }

  loadUseHistory = () => {
    var requestedHistoryParams = {
      TableName: "Record",
      KeyConditionExpression: "#user_id = :user_id",
      ExpressionAttributeNames: { "#user_id": "user_id" },
      ExpressionAttributeValues: { ":user_id": this.props.currentUser.email },
      Limit: 3,
      ScanIndexForward: false
    }
    db.query(requestedHistoryParams, (err, data) => {
      if (err) {
        console.log("Query requested history error : ", err);
      }
      else {
        console.log("Query requested history success : ", data);
        this.setState({
          requestedHistory: data.Items.map((record, index) => {
            return {
              "key": index.toString(),
              "request_time": record.request_time.split(' ').join('\n'),
              "receiver_name": record.receiver_name
            };
          })
        })
      }
    });

    var receivedHistoryParams = {
      TableName: "Record",
      IndexName: "receiver_id-request_time-index",
      KeyConditionExpression: "#receiver_id = :receiver_id",
      ExpressionAttributeNames: { "#receiver_id": "receiver_id" },
      ExpressionAttributeValues: { ":receiver_id": this.props.currentUser.email },
      Limit: 3,
      ScanIndexForward: false
    }
    db.query(receivedHistoryParams, (err, data) => {
      if(err){
        console.log("Query received history error : ", err)
      }
      else{
        console.log("Query received history success : ", data);
        this.setState({
          receivedHistory: data.Items.map((record, index) => {
            return {
              "key": index.toString(),
              "request_time": record.request_time.split(' ').join('\n'),
              "requester_name": record.requester_name
            };
          })
        });
      }
    });
  }

  startRequestHandler = () => {
    this.props.navigator.push({
      screen: "IM3514_Project.ChooseTargetScreen",
      title: "遞送對象"
    });
  }

  goToSendHistoryHandler = () => {
    console.log("goToSendHistoryHandler");
    this.props.navigator.push({
      screen: "IM3514_Project.SendHistoryScreen",
      title: "遞送請求記錄"
    });
  }

  goToReceiveHistoryHandler = () => {
    this.props.navigator.push({
      screen: "IM3514_Project.ReceiveHistoryScreen",
      title: "收件記錄"
    });
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Button rounded danger
            style={{ alignSelf: "center", marginTop: 20, marginBottom: 20 }}
            onPress={this.startRequestHandler}>
            <Text>請求遞送文件</Text>
          </Button>

          <Card>
            <CardItem header style={{ alignSelf: "center" }} bordered>
              <Text>您最近的遞送請求記錄</Text>
            </CardItem>
            <FlatList
              data={this.state.requestedHistory}
              renderItem={info => (
                <CardItem>
                  <Left>
                    <Text>{info.item.request_time}</Text>
                  </Left>
                  <Body style={{ alignSelf: "center" }}>
                    <Text note>送出</Text>
                  </Body>
                  <Right>
                    <Text>{info.item.receiver_name}</Text>
                  </Right>
                </CardItem>
              )}
            />

            {/* <CardItem>
              <Left>
                <Text>2018-09-16 上午10:00</Text>
              </Left>
              <Body style={{ alignSelf: "center" }}>
                <Text note>送出</Text>
              </Body>
              <Right>
                <Text>李大龍</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>2018-09-15 下午03:30</Text>
              </Left>
              <Body style={{ alignSelf: "center" }}>
                <Text note>送出</Text>
              </Body>
              <Right>
                <Text>范大強</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>2018-09-15 上午09:30</Text>
              </Left>
              <Body style={{ alignSelf: "center" }}>
                <Text note>送出</Text>
              </Body>
              <Right>
                <Text>陳小花</Text>
              </Right>
            </CardItem> */}
            <CardItem footer bordered style={{ alignSelf: "center" }}>
              <TouchableOpacity onPress={this.goToSendHistoryHandler}>
                <View>
                  <Text>查看全部</Text>
                </View>
              </TouchableOpacity>
            </CardItem>
          </Card>

          <Card>
            <CardItem header style={{ alignSelf: "center" }} bordered>
              <Text>您最近的收件記錄</Text>
            </CardItem>
            <FlatList
              data={this.state.receivedHistory}
              renderItem={info => (
                <CardItem>
                  <Left>
                    <Text>{info.item.request_time}</Text>
                  </Left>
                  <Body style={{ alignSelf: "center" }}>
                    <Text note>收到</Text>
                  </Body>
                  <Right>
                    <Text>{info.item.requester_name}</Text>
                  </Right>
                </CardItem>
              )}
            />
            {/* <CardItem>
              <Left>
                <Text>2018-09-18 下午04:00</Text>
              </Left>
              <Body style={{ alignSelf: "center" }}>
                <Text note>收到</Text>
              </Body>
              <Right>
                <Text>林小華</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>2018-09-16 下午03:12</Text>
              </Left>
              <Body style={{ alignSelf: "center" }}>
                <Text note>收到</Text>
              </Body>
              <Right>
                <Text>黃大明</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>2018-09-15 上午11:57</Text>
              </Left>
              <Body style={{ alignSelf: "center" }}>
                <Text note>收到</Text>
              </Body>
              <Right>
                <Text>陳小花</Text>
              </Right>
            </CardItem> */}
            <CardItem footer bordered style={{ alignSelf: "center" }}>
              <TouchableOpacity onPress={this.goToReceiveHistoryHandler}>
                <View>
                  <Text>查看全部</Text>
                </View>
              </TouchableOpacity>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(HomeScreen);