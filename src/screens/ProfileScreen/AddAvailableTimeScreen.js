import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Form, Picker, Item, Text } from 'native-base';
import MultiSelect from 'react-native-multiple-select';


class AddAvailableTimeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [],
        };

        this.items = [{
            id: '1',
            name: '一',
        }, {
            id: '2',
            name: '二',
        }, {
            id: '3',
            name: '三',
        }, {
            id: '4',
            name: '四',
        }, {
            id: '5',
            name: '五',
        }, {
            id: '6',
            name: '六',
        }, {
            id: '7',
            name: '日',
        }];
    }

    componentWillUnmount() {

    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
    };

    render() {
        const { selectedItems } = this.state;
        return (
            <Container style={styles.container}>
                <Content>
                    <Form>
                        <Text>星期</Text>
                        <MultiSelect
                            hideTags
                            items={this.items}
                            uniqueKey="id"
                            ref={(component) => { this.multiSelect = component }}
                            onSelectedItemsChange={this.onSelectedItemsChange}
                            selectedItems={selectedItems}
                            selectText="請選擇星期"
                            // searchInputPlaceholderText="Search Items..."
                            onChangeInput={(text) => console.log(text)}
                            // altFontFamily="ProximaNova-Light"
                            tagRemoveIconColor="#CCC"
                            tagBorderColor="#CCC"
                            tagTextColor="#CCC"
                            selectedItemTextColor="#CCC"
                            selectedItemIconColor="#CCC"
                            itemTextColor="#000"
                            displayKey="name"
                            searchInputStyle={{ color: '#CCC' }}
                            submitButtonColor="#CCC"
                            submitButtonText="確認"
                        />
                        <View>
                            {this.multiSelect ? this.multiSelect.getSelectedItemsExt(selectedItems) : null}
                        </View>

                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: "85%",
        paddingTop: 20
    }
});

export default AddAvailableTimeScreen;