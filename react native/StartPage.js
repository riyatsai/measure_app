'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btn:{
	  width:150,
	  height:45,
	  justifyContent:'center',
	  alignItems:'center',
	  borderRadius:10,
	  marginTop:20,
  },
  btnText:{
	  color:'#FFF',
	  textAlign:'center',
	  lineHeight:40,
  },
  spColorG:{
	  backgroundColor:'#24936E',
  },
  spColorB:{
  	  backgroundColor:'#005CAF',
  },
  spColorO:{
  	  backgroundColor:'#ED784A',
  },
});

let MeasurePhoneHeight = require('./MeasurePhoneHeight');
let EmptyPage          = require('./EmptyPage');
let CameraPage         = require('./CameraPage');

class StartPage extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
        		<TouchableOpacity onPress={this.goTo.bind(this,0)}>
        		  <View style={[styles.btn,styles.spColorG]}><Text style={styles.btnText}>開始</Text></View>
        		</TouchableOpacity>
        		<TouchableOpacity onPress={this.goTo.bind(this,1)}>
        		  <View style={[styles.btn,styles.spColorB]}><Text style={styles.btnText} >記錄</Text></View>
        		</TouchableOpacity>
        		<TouchableOpacity onPress={this.goTo.bind(this,2)}>
        		  <View style={[styles.btn,styles.spColorO]}><Text style={styles.btnText} >介紹</Text></View>
        		</TouchableOpacity>
          </View>
        );
    }
}

StartPage.prototype.goTo = function(index){//CameraPage
  let NAV_ARR = [['測試手機高度',MeasurePhoneHeight],['記錄',EmptyPage],['介紹',EmptyPage]];
  this.props.navigator.push({
    component:NAV_ARR[index][1],
    title:NAV_ARR[index][0],
    rightButtonTitle:'說明',
    onRightButtonPress:function(){
      alert('說明');
    }
  });
}

module.exports = StartPage;
