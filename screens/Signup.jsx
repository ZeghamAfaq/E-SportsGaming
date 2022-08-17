import  React,{useState} from 'react';
import { StyleSheet, View,
   Image, TouchableWithoutFeedback, Keyboard
    ,Text,TextInput,Alert,ScrollView } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

// import components
import Buttons from '../components/Buttons';
import Header from '../components/Header';
// Icons
import { Zocial, Entypo, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';



//style component
const styles = StyleSheet.create({
  //keyboard avoiding view container
  KeyboardAvoidingContainer:{
    flex:1,
  },
  //main container
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#030A04',

  },
  //header container
  headerComponent:{
    flex:1,
  },
  //image section
  imgContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:48,
    marginBottom:24
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
    width: 150,
    height: 100,
  },
  //signup inputs component
  signupComponent:{
    flex:2,
    marginTop:60
  },
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
  },
  input:{
    marginHorizontal:10,
    width:250,
    height:40
  },
  buttonContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:10,
    paddingVertical:14,
    marginTop:48,
  },
  
  //  Have Account section
  login:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  HaveAccount:{
    fontSize:16,
    color: 'white',
  },
  loginText:{
    fontSize:16,
    color: '#FF5412',
  }
});



const SignUp = ({ navigation } ) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [region, setRegion] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const handlesubmit =()=>{
  if(!name && !email && !password && !region && !country && !city){
    Alert.alert('please fill out fields first')
  }
  else{
    Alert.alert('Signup successfully')
    navigation.navigate('Login')
  }
}
  return (
    <KeyboardAwareScrollView style={styles.KeyboardAvoidingContainer} 
    enableAutomaticScroll={true} enableOnAndroid={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           {/* main container */}
        <View style={styles.container}>
          <View style={styles.headerComponent}>
            <Header />
          </View>
          
          {/* image container */}
          <View style={styles.imgContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/images/6.png')}
            />
             <Text style={styles.imgtxt}>SignUp</Text>
          </View>


          {/* signup inputs component */}
          <View style={styles.signupComponent}>
            <View style={styles.inputContainer}>
                <View style={styles.inputbox}>
                <Entypo name="user" size={24} color="gray" />
                <TextInput 
                style={styles.input}
                backgroundColor= 'white' 
                placeholder="Name"
                value={name}
                onChangeText={userData=>setName(userData)}  />
            </View> 
            <View style={styles.inputbox}>
                {/* icon */}
                <Zocial name="email" size={24} color="gray" />
                <TextInput style={styles.input} autoFocus={true}
                placeholder="Email" backgroundColor= 'white'
                value={email}
                onChangeText={userData=>setEmail(userData)} />
            </View>
            <View style={styles.inputbox}>
                <Entypo name="lock" size={24} color="gray" />
                <TextInput 
                style={styles.input}
                maxLength={15}
                backgroundColor= 'white'
                secureTextEntry={true} 
                placeholder="Password"
                value={password}
                onChangeText={userData=>setPassword(userData)}   />
            </View> 
            <View style={styles.inputbox}>
                <Entypo name="globe" size={24} color="gray" />
                <TextInput 
                style={styles.input}
                backgroundColor= 'white'
                placeholder="Region"
                value={region}
                onChangeText={userData=>setRegion(userData)}   />
            </View> 
            <View style={styles.inputbox}>
                <Ionicons name="flag" size={24} color="gray" />
                <TextInput 
                style={styles.input}
                backgroundColor= 'white'  
                placeholder="Country"
                value={country}
                onChangeText={userData=>setCountry(userData)}   />
            </View> 
            <View style={styles.inputbox}>
                <MaterialCommunityIcons  name="home-city" size={24} color="gray" />
                <TextInput 
                style={styles.input}
                backgroundColor= 'white'  
                placeholder="City"
                value={city}
                onChangeText={userData=>setCity(userData)}   />
            </View> 
            </View>
          </View>
        

           {/* submit button */}
          <View style={styles.buttonContainer}>
            <Buttons text='signup' onPress={handlesubmit}  />
             {/* if user already have an account */}
          <View style={styles.login}>
                <Text style={styles.HaveAccount}>Have an account?</Text>
                <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>Login</Text>
          </View>
          </View>

        </View>
      </TouchableWithoutFeedback>  
    </KeyboardAwareScrollView>
  )
  }; export default SignUp
