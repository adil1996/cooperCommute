/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
//import Normaltext from '../Component/Text';
//import EditText from '../Component/TextInput';
//import SampleButton from '../Component/SButton';
type Props = {};
export default class Login extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: 'Book Cab'
}


  render() {
    return (
      <ScrollView style={styles.container}>
       <Image style={styles.ImageStyle}
       source = {require('../Image/bookCab.png')}>
       </Image>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54C0EB',
    },
  ImageStyle: {
    justifyContent: 'flex-start',
    marginTop: 40,
    },
});
