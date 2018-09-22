import React, { Component } from 'react';
import { Container, Content, List, ListItem, Card, CardItem, Text, Left, Right, Icon, Button, Body, Thumbnail } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import s3_bucket from '../../AWS/s3_config';

export default class RobotHistory extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <List>

                        <ListItem>
                            <Left>
                                <Text>2018-09-11 18:09</Text>
                            </Left>
                            {/* <TouchableOpacity onPress={this.changeOfficeHandler}>
                                <Right style={styles.rightStyle}>
                                    <Text style={styles.changeText}>詳細查看 </Text>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </TouchableOpacity> */}
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>2018-09-11 18:09 </Text>
                            </Left>
                            {/* <TouchableOpacity onPress={this.changeOfficeHandler}>
                                <Right style={styles.rightStyle}>
                                    <Text style={styles.changeText}>詳細查看 </Text>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </TouchableOpacity> */}
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>2018-09-13 19:21</Text>
                            </Left>
                            {/* <TouchableOpacity onPress={this.changeOfficeHandler}>
                                <Right style={styles.rightStyle}>
                                    <Text style={styles.changeText}>詳細查看 </Text>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </TouchableOpacity> */}
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>2018-09-14 16:23</Text>
                            </Left>
                            {/* <TouchableOpacity onPress={this.changeOfficeHandler}>
                                <Right style={styles.rightStyle}>
                                    <Text style={styles.changeText}>詳細查看 </Text>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </TouchableOpacity> */}
                        </ListItem>

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