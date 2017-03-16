/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

let StartPage = require('./StartPage');

export default class camera extends Component {
  render() {
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute={{
      title: '首頁',
      component:StartPage
      }}/>
    );
  }
}


AppRegistry.registerComponent('camera', () => camera);
