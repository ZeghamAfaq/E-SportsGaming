import React, {useState} from 'react'
import { StyleSheet,TextInput, View, Image, 
  KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, 
  Text, TouchableOpacity,Alert} from 'react-native';

// Exports Components
import Header from '../components/Header';

//Export icons
import { Ionicons, Zocial } from '@expo/vector-icons';

//style component
const styles = StyleSheet.create({
  //keyboard avoiding view
  KeyboardAvoidingViewContainer:{
    flex:1,
    backgroundColor: '#030A04',
  },
  //main container
  container: {
    flex:1,
    padding:10,
    flexDirection:'column'
  },
  //header container
  header:{
    flex:.5,
    marginBottom:48
  },
  //image section
  imgContainer: {
    flex:1,
    height:150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },
  imgtxt:{
    color:'#FFB85D',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize:25,
    fontWeight:'bold'
  },
  //logo section
  logo: {
    width: 250,
    height: 150,
  },
  //text input container
  inputContainer:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
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
    width:250,
    height:40
  },
  buttonContainer:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn:{
    justifyContent: 'flex-start',
    paddingHorizontal:10,
    paddingVertical:14,
    backgroundColor: '#FF5412',
    borderRadius:10
  },
  backIcon:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FF5412',
    borderRadius: 36,
    marginBottom:48,

  },
});

const ForgetPassword = ({navigation}) => {
const [email, setEmail] = useState('');
const handlesubmit =()=>{
  if(!email){
    Alert.alert('Please enter email address')
  }
  else{
    Alert.alert('Pasword reset link sent successfully')
  }
}

  return (
    <KeyboardAvoidingView style={styles.KeyboardAvoidingViewContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* main container */}
          <View style={styles.container}>

            {/* header import */}
            <View style={styles.header}>
              <Header />
            </View>
            

            {/* image container */}
            <View style={styles.imgContainer}>
              <Image
                style={styles.logo}
                source={require('../assets/images/6.png')}
              />
              <Text style={styles.imgtxt}>Reset Password</Text>
            </View>


            {/* input container */}
            <View style={styles.inputContainer}>
              <View style={styles.inputbox}>
              {/* icon */}
              <Zocial name="email" size={24} color="gray" />
              <TextInput style={styles.input} autoFocus={true} 
                value={email}
                onChangeText={(data)=>setEmail(data)}
                placeholder="Email" backgroundColor= 'white' />
              </View>
            </View>
            <View style={styles.buttonContainer}>
               <TouchableOpacity
              style={styles.btn}
              onPress={handlesubmit}>
               <Text style={{color:'white',fontSize:16}}>Submit</Text> 
            </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
               <TouchableOpacity
              style={styles.backIcon}
              onPress={() => navigation.navigate('Login')}>
              <Ionicons name="arrow-back-circle-outline" size={40} color="white"
               />
            </TouchableOpacity>
            </View>
        </View>    
    </TouchableWithoutFeedback>   
  </KeyboardAvoidingView>

  )
  }; export default ForgetPassword
