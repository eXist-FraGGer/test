import React, { Component } from 'react';
import { Text, View, StatusBar, ScrollView, Vibration, TouchableOpacity, BackAndroid, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import BarcodeScanner from 'react-native-barcodescanner';

import styles from './styles';

class BarcodeScannerApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            barcode: '',
            cameraType: 'back',
            text: 'Scan Barcode',
            torchMode: 'off',
            type: '',

            showing: false
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ showing: true }), 500);

        let listener;
        if (Platform.OS == "android" && listener == null) {
            listener = BackAndroid.addEventListener("hardwareBackPress", () => {
                this.setState({ showing: false });
            })
        }
    }
 
    barcodeReceived(e) {
        if (e.data !== this.state.barcode || e.type !== this.state.type) Vibration.vibrate();

        this.setState({
            barcode: e.data,
            text: `${e.data} (${e.type})`,
            type: e.type,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.showing &&
                    <BarcodeScanner
                        onBarCodeRead={this.barcodeReceived.bind(this)}
                        style={{ flex: 1 }}
                        torchMode={this.state.torchMode}
                        cameraType={this.state.cameraType} />
                }
                <View style={styles.statusBar}>
                    <Text style={styles.statusBarText}>{this.state.text}</Text>
                </View>
            </View>
        );
    }
}

export default connect(state => ({
    testState: state,
}), dispatch => ({
}))(BarcodeScannerApp);