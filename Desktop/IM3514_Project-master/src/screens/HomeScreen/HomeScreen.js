import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress" && event.id === "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left",
        animated: true,
      });
    }
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>訊息</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                歡迎使用本系統！
                </Text>
              </Body>
            </CardItem>

            
          </Card>
        </Content>
      </Container>
    );
  }
}