import React, { Component } from 'react';
import { Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import wifi from 'react-native-android-wifi';

import styles from './styles';

class Wifi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wifiList: [],
        }
    }

    componentDidMount() {
        console.log(wifi);
        wifi.loadWifiList(
            (wifiStringList) => {
                console.log(JSON.parse(wifiStringList));
                
                return this.setState({ wifiList: JSON.parse(wifiStringList) })
            },
            (error) => console.log(error)
        );
        wifi.isEnabled( (isEnabled) => this.setState({ enabled: isEnabled }) );
    }

    handleEnabledWifi = () => {
        wifi.setEnabled(!this.state.enabled);
        wifi.isEnabled( (isEnabled) => this.setState({ enabled: isEnabled }) );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <TouchableOpacity onPress={this.handleEnabledWifi}>
                    <Text>Wifi: {this.state.enabled ? 'Enabled' : 'Disabled'}</Text>
                </TouchableOpacity>
                <ScrollView ref={(scrollView) => this.scrollView = scrollView}
                            automaticallyAdjustContentInsets={true}
                            style={{flex: 1}}>
                            {this.state.wifiList.map((val, index, message) => {
                                return <View key={index}><Text>{JSON.stringify(val)}</Text></View>
                            })}
                </ScrollView>
                <Text>Wifi`s</Text>
            </View>
        );
    }
}

export default connect(state => ({
    testState: state,
}), dispatch => ({
}))(Wifi);
