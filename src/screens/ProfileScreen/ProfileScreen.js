import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Left, Right, Icon, Button } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      office: ""
    }
    this.loadData();
    
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  loadData = () => {
    const cognitoUser = this.props.cognitoUser;
    const outerThis = this;
    cognitoUser.getUserAttributes(function (err, result) {
      if (err) {
        alert(err);
        return;
      }
      for (i = 0; i < result.length; i++) {
        console.log('attribute [' + i + '] ' + result[i].getName() + ' has value ' + result[i].getValue());
      }
      outerThis.setState({
        email: result[4].getValue(),
        name: result[2].getValue(),
        office: result[3].getValue()
      });
    });  
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
      title: "Change Email",
      passProps: {
        email: this.state.email
      }
    });
  }
  changeNameHandler = () => {
    this.props.navigator.push({
      screen: "IM3514_Project.ChangeNameScreen",
      title: "Change Name",
      passProps: {
        name: this.state.name
      }
    });
  }
  changeOfficeHandler = () => {
    this.props.navigator.push({
      screen: "IM3514_Project.ChangeOfficeScreen",
      title: "Change Office",
      passProps: {
        office: this.state.office
      }
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
                <Text>{this.state.email}</Text>
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
                <Text>Name: </Text>
                <Text>{this.state.name}</Text>
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
                <Text>SL{this.state.office}</Text>
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

const mapStateToProps = state => {
  return {
    cognitoUser: state.auth.cognitoUser
  }
}

export default connect(mapStateToProps)(ProfileScreen);