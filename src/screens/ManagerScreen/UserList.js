import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class UserList extends Component {
  render() {
    return (
      <Container>
        <List style={{marginTop:10}}>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: 'https://static6.depositphotos.com/1066172/603/v/950/depositphotos_6038085-stock-illustration-turtle-cartoon.jpg' }} />
            </Left>
            <Body>
              <Text>Tony</Text>
              <Text note numberOfLines={1}>SL201</Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: 'https://static6.depositphotos.com/1066172/603/v/950/depositphotos_6038085-stock-illustration-turtle-cartoon.jpg' }} />
            </Left>
            <Body>
              <Text>Cow</Text>
              <Text note numberOfLines={1}>SL202</Text>
            </Body>
          </ListItem>
        </List>

        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: 'https://static6.depositphotos.com/1066172/603/v/950/depositphotos_6038085-stock-illustration-turtle-cartoon.jpg' }} />
            </Left>
            <Body>
              <Text>Eric</Text>
              <Text note numberOfLines={1}>SL203</Text>
            </Body>
          </ListItem>
        </List>

        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: 'https://static6.depositphotos.com/1066172/603/v/950/depositphotos_6038085-stock-illustration-turtle-cartoon.jpg' }} />
            </Left>
            <Body>
              <Text>Yuzheng</Text>
              <Text note numberOfLines={1}>SL204</Text>
            </Body>
          </ListItem>
        </List>

        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: 'https://static6.depositphotos.com/1066172/603/v/950/depositphotos_6038085-stock-illustration-turtle-cartoon.jpg' }} />
            </Left>
            <Body>
              <Text>Weitung</Text>
              <Text note numberOfLines={1}>SL205</Text>
            </Body>
          </ListItem>
        </List>
      </Container>


    );
  }
}