import React, { Component } from 'react';
import { Container, Content, List, ListItem, Card, CardItem, Text, Left, Right, Icon, Button, Body, Thumbnail } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import s3_bucket from '../../AWS/s3_config';

export default class OfficeList extends Component {

    changeOfficeHandler = () => {
        this.props.navigator.push({
          screen: "IM3514_Project.ChangeOffice",
          title: "更改"
        });
      }
    
      addOfficeHandler = () => {
        this.props.navigator.push({
          screen: "IM3514_Project.AddOffice",
          title: "新增辦公室"
        });
      }

    render() {
        return (
            <Container>
            <Content>
              <List>
    
                <ListItem>
                  <Left>
                    <Text>SL201</Text>
                  </Left>
                  <TouchableOpacity onPress={this.changeOfficeHandler}>
                    <Right style={styles.rightStyle}>
                      <Text style={styles.changeText}>變更 </Text>
                      <Icon name="arrow-forward" />
                    </Right>
                  </TouchableOpacity>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>SL202</Text>
                  </Left>
                  <TouchableOpacity onPress={this.changeOfficeHandler}>
                    <Right style={styles.rightStyle}>
                      <Text style={styles.changeText}>變更 </Text>
                      <Icon name="arrow-forward" />
                    </Right>
                  </TouchableOpacity>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>SL203</Text>
                  </Left>
                  <TouchableOpacity onPress={this.changeOfficeHandler}>
                    <Right style={styles.rightStyle}>
                      <Text style={styles.changeText}>變更 </Text>
                      <Icon name="arrow-forward" />
                    </Right>
                  </TouchableOpacity>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>SL204</Text>
                  </Left>
                  <TouchableOpacity onPress={this.changeOfficeHandler}>
                    <Right style={styles.rightStyle}>
                      <Text style={styles.changeText}>檢視 </Text>
                      <Icon name="arrow-forward" />
                    </Right>
                  </TouchableOpacity>
                </ListItem>
                <Button
                  rounded
                  info
                  style={styles.buttonStyle}
                  onPress={this.addOfficeHandler}
                >
                  <Text>新增辦公室</Text>
                </Button>
              </List>
            </Content>
          </Container >
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
      marginTop: 10
    }
  });