import React from 'react';
import{
    Text,
    StyleSheet,
} from 'react-native';

const NormalText = (props) =>{
    return (<Text style={styles.textStyle}>{props.text}</Text>);
}

const styles = StyleSheet.create({
    textStyle : {
       fontSize:25,
       color: 'white',
       alignSelf:'center',
    },
})

export default NormalText;