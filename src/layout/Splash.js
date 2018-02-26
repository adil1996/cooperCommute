/**=
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

    static navigationOptions = {
        header:null
    }
    componentWillMount (){
        setTimeout (() =>{
            this.props.navigation.navigate('Login');
        },2000);
    }
    render() {
    return (
      <View style={styles.container}>
       <Image source = {require('../Image/MrCooperLogo.png')}>
       </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
