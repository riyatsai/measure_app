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

class MeasurePhoneHeight extends Component {
    render() {
        return (
  	    <View style={styles.container}>
	        <Text style={styles.description}>
        	  就是一些文字看看
	        </Text>
	    </View>
        );
    }
}

module.exports = MeasurePhoneHeight;
