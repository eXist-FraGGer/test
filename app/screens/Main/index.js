import React, { Component } from 'react';
import { Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testItems: ['Wifi', 'BarcodeScanner', 'QRcodeGenerator']
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <ScrollView ref={(scrollView) => this.scrollView = scrollView}
                            automaticallyAdjustContentInsets={true}
                            style={{flex: 1}}>
                            {this.state.testItems.map((val, index) => {
                                return (
                                    <View key={index}>
                                        <TouchableOpacity onPress={Actions[val]}>
                                            <Text style={styles.textTestItem}>Test {val}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                </ScrollView>
            </View>
        );
    }
}

export default connect(state => ({
    testState: state,
}), dispatch => ({
}))(Main);