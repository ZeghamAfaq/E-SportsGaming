import { StyleSheet,TextInput, View, Text} from 'react-native';
import React, {useState} from 'react'
// Icons
import { Zocial, Entypo  } from '@expo/vector-icons';
import { useState } from 'react';


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
    backgroundColor:'white',
    bottom:12
  },
  input:{
    marginHorizontal:10,
    width:250,
    height:40
  }
})
const [email, setEmail] = useState('');
const InputComponent = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputbox}>
        {/* icon */}
        <Zocial name="email" size={24} color="gray" />
        <TextInput style={styles.input} autoFocus={true} 
          keyboardType='email-address' value='email' onChangeText={text=>setName(text)}
          placeholder="Email" backgroundColor= 'white' />
      </View>
    </View>
  )
}

export default InputComponent