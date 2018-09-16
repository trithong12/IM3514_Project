import React, { Component } from 'react';
import { Container, Content, List, ListItem, Card, CardItem, Text, Left, Right, Icon, Button, Body, Thumbnail } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import s3_bucket from '../../AWS/s3_config';
export default class RobotScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress" && event.id === "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left",        
      });
    }
  }
  
  goToOfficeListHandler = () => {
    this.props.navigator.push({
      screen: "IM3514_Project.OfficeList",
      title: "辦公室名單管理"
    });
  }

  goToRobotHistoryHandler = () => {
    this.props.navigator.push({
      screen: "IM3514_Project.RobotHistory",
      title: "機器人使用紀錄"
    });
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Button
              rounded
              info
              style={styles.buttonStyle}
              onPress={this.goToOfficeListHandler}
            >
              <Text>辦公室名單管理</Text>
            </Button>

            <Button
              rounded
              info
              style={styles.buttonStyle}
              onPress={this.goToRobotHistoryHandler}
            >
              <Text>機器人使用紀錄</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    alignSelf: 'center'
  },
  rightStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    fontWeight: '100',
    fontSize: 14
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 30 
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});