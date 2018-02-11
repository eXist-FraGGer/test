import React, { Component } from 'react';
import { View, Text, Image, StatusBar, Modal } from 'react-native';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';

import {
    Main,
    Wifi,
    BarcodeScanner,
    QRcodeGenerator,
    Camera
} from './screens';

import configureStore from './store/configureStore';

import styles from './styles/main';

const store = configureStore({});

class App extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Router>
                    <Scene key="root" hideNavBar={true}>
                        <Scene key="Main" component={Main} type="reset" />
                        <Scene key="Wifi" component={Wifi} />
                        <Scene key="BarcodeScanner" component={BarcodeScanner} />
                        <Scene key="QRcodeGenerator" component={QRcodeGenerator} />
                        <Scene key="Camera" component={Camera} />
                    </Scene>
                </Router>
            </View>
        );
    }
}

export default class Test extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
