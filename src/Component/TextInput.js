import React from 'react';
import {
    TextInput,
    StyleSheet,

} from 'react-native';

const EditText = (props)=> {
   return(
       <TextInput
       style = {styles.EditStyle}
       underlineColorAndroid='rgba(0,0,0,0)' 
       placeholder={props.placeText}
       placehoderTextColor = 'black'/>
   );
}

const styles = StyleSheet.create({
    EditStyle:{
        backgroundColor: 'white',
        alignSelf: 'stretch',
        marginTop:10,
        marginHorizontal:16,
        borderRadius:25,
    }
});
export default EditText;