import React, { Component } from 'react';
import { Container, Content, List, ListItem, Card, CardItem, Text, Left, Right, Icon, Button, Thumbnail } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import s3_bucket from '../../AWS/s3_config';

export default class ChangeOffice extends Component{
    render() {
        return (
          <Container>
            <Content padder>
              <Button
                  rounded
                  info
                  style={styles.buttonStyle}
                  //onPress={this.goToOfficeListHandler}
                >
                  <Text>更改此辦公室名稱</Text>
                </Button>
    
                <Button
                  rounded
                  info
                  style={styles.buttonStyle}
                  //onPress={this.goToRobotHistoryHandler}
                >
                  <Text>刪除此辦公室</Text>
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