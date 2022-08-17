import { StyleSheet,TextInput, View, Text} from 'react-native';
import React from 'react'
// Icons
import { Zocial, Entypo  } from '@expo/vector-icons';


const styles = StyleSheet.create({
    //text input container
  inputContainer:{
    flex:1,
    alignItems:'center',
  },
  inputbox:{
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth:1,
    width: '90%',
    paddingHorizontal:8,
    borderRadius:11,
    marginTop:10,
    backgroundColor:'white'
  },
  input:{
    marginHorizontal:10,
    width:'80%',
    height:40
  },
})
const InputComponent = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputbox}>
        {/* icon */}
        <Zocial name="email" size={24} color="gray" />
        <TextInput style={styles.input} autoFocus={true} keyboardType='email-address'
           placeholder="Email" backgroundColor= 'white' />
      </View>
      <View style={styles.inputbox}>
        <Entypo name="lock" size={24} color="gray" />
        <TextInput style={styles.input}
          backgroundColor= 'white' keyboardType='default' secureTextEntry={true} placeholder="Password"  />
      </View> 
    </View>
  )
}

export default InputComponent