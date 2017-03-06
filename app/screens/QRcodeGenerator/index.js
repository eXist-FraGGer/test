import React, { Component } from 'react';
import { Text, View, StatusBar, ScrollView, Vibration, TextInput, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import QRCode from 'react-native-qrcode-svg';

import styles from './styles';

class QRcodeGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Test'
        };
    }

    render() {
        // 30px logo from base64 string with transparent background
        let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
        return (
            <View style={styles.container}>
                <QRCode
                    size={300}
                    value={this.state.text}
                    logo={{uri: base64Logo}}
                    logoSize={100}
                    logoBackgroundColor='transparent' />
                <View style={styles.statusBar}>
                    <TextInput
                        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text: text || 'Test'})}
                        value={this.state.text} />
                </View>
            </View>
        );
    }
}

export default connect(state => ({
    testState: state,
}), dispatch => ({
}))(QRcodeGenerator);