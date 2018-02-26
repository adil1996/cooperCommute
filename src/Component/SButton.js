import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';

const SampleButton = (props)=>{
    return(
        <TouchableOpacity style={styles.buttonStyle}
        onPress={props.onPress}
        >
           <Text style={styles.TextStyle}>{props.buttonText}</Text>
        </TouchableOpacity>   
    );
}

const styles=StyleSheet.create({
    buttonStyle:{
        alignSelf:'stretch',
        marginHorizontal:16,
        borderRadius:25,
        marginTop:10,
        height:50,
        backgroundColor: 'black',
    },
    TextStyle:{
        color:'white',
        fontSize:20,
        alignSelf:'center',
    }
});
export default SampleButton;