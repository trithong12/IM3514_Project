import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Left, Right, Icon, Button } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
export default class ProfileScreen extends Component {
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

  changeEmailHandler = () => {
    this.props.navigator.push({
      screen: "IM3514_Project.ChangeEmailScreen",
      title: "Change Email"
    });
  }
  changeNameHandler = () => {
    this.props.navigator.push({
      screen: "IM3514_Project.ChangeNameScreen",
      title: "Change Name"
    });
  }
  changeOfficeHandler = () => {
    this.props.navigator.push({
      screen: "IM3514_Project.ChangeOfficeScreen",
      title: "Change Office"
    });
  }
  changePasswordHandler = () => {
    this.props.navigator.push({
      screen: "IM3514_Project.ChangePasswordScreen",
      title: "Change Password"
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Left>
                <Text>Email: </Text>
                <Text>trithong12@gmail.com</Text>
              </Left>
              <TouchableOpacity onPress={this.changeEmailHandler}>
                <Right style={styles.rightStyle}>
                  <Text style={styles.changeText}>Change </Text>
                  <Icon name="arrow-forward" />
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Username: </Text>
                <Text>Tran Tri Thong</Text>
              </Left>
              <TouchableOpacity onPress={this.changeNameHandler}>
                <Right style={styles.rightStyle}>
                  <Text style={styles.changeText}>Change </Text>
                  <Icon name="arrow-forward" />
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Office: </Text>
                <Text>SL245</Text>
              </Left>
              <TouchableOpacity onPress={this.changeOfficeHandler}>
                <Right style={styles.rightStyle}>
                  <Text style={styles.changeText}>Change </Text>
                  <Icon name="arrow-forward" />
                </Right>
              </TouchableOpacity>
            </ListItem>
            <Button
              rounded
              info
              style={styles.buttonStyle}
              onPress={this.changePasswordHandler}
            >
              <Text>Change Password</Text>
            </Button>
          </List>
        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
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
    marginTop: 10
  }
});