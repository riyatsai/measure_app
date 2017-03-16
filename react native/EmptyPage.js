'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class EmptyPage extends Component {
    render() {
        return (
  	    <View style={styles.container}>
	        <Text style={styles.description}>
            空白的初始頁面
	        </Text>
	    </View>
        );
    }
}


module.exports = EmptyPage;
