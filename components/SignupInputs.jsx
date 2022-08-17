import { StyleSheet, SafeAreaView, TextInput, ScrollView,  View, Text, KeyboardAvoidingView} from 'react-native';
import React from 'react'
// Icons
import { Zocial, Entypo, Ionicons, MaterialCommunityIcons    } from '@expo/vector-icons';


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
    bottom:50
  },
  input:{
    marginHorizontal:10,
    width:250,
    height:40
  },
})
const InputComponent = () => {
  return (
            <View style={styles.inputContainer}>
                <KeyboardAvoidingView enabled>
                <View style={styles.inputbox}>
                <Entypo name="user" size={24} color="gray" />
                <TextInput style={styles.input}
                backgroundColor= 'white' keyboardType='default' placeholder="Name"  />
            </View> 
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
            <View style={styles.inputbox}>
                <Entypo name="globe" size={24} color="gray" />
                <TextInput style={styles.input}
                backgroundColor= 'white' keyboardType='default' placeholder="Region"  />
            </View> 
            <View style={styles.inputbox}>
                <Ionicons name="flag" size={24} color="gray" />
                <TextInput style={styles.input}
                backgroundColor= 'white' keyboardType='default' placeholder="Country"  />
            </View> 
            <View style={styles.inputbox}>
                <MaterialCommunityIcons  name="home-city" size={24} color="gray" />
                <TextInput style={styles.input}
                backgroundColor= 'white' keyboardType='default' placeholder="City"  />
            </View> 
            </KeyboardAvoidingView>
            </View>
  )
}

export default InputComponent