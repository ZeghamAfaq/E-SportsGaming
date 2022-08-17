import React, {useState} from 'react'
import { StyleSheet,KeyboardAvoidingView,TouchableWithoutFeedback,
  Keyboard , View, Image,Text,Alert,TextInput } from 'react-native';

//Exports Components
import Buttons from '../components/Buttons';
import Header from '../components/Header';
//export icons
import { Zocial, Entypo  } from '@expo/vector-icons';
//style component
const styles = StyleSheet.create({
  //main container
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#030A04'
  },
  // inner container
  inner:{
    padding:10,
    flex: 1,
    justifyContent: "space-around"
  },
  //image section
  imgContainer: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    width: 200,
    height: 150,
  },
  //input container
  inputComponentContainer:{
    flex:1,
     justifyContent:'flex-end',
      alignItems: 'center',
      marginTop:48
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
    backgroundColor:'white'
  },
  input:{
    marginHorizontal:10,
    width:'80%',
    height:40
  },
  buttonContainer:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal:10,
    paddingVertical:14,
  },
  signupContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  signuptext:{
    color: 'white',
    paddingHorizontal:10,
    fontSize:16
  },
  signup:{
    textDecorationLine: 'underline',
    color: '#FF5412',
    fontWeight: 'bold'
  },
  
  //  forget password section
  forgetContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    marginTop:20
  },
  forget:{
    fontSize:16,
    color: '#FF5412',
  },
});


const Login = ({navigation}) => {
   const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const handleValidation =()=>{
    if(!email && !password){
      Alert.alert('please fillout fields')
    }
}
  const handlesubmit =()=>{
    if(email === 'zegham.afaq786@gmail.com' && password === '78662722'){
      Alert.alert('Login Successfully')
    }
    else{
      Alert.alert('Wrong email and password')
    }
}
  return (
    //  main container
    <KeyboardAvoidingView behavior='height'
      style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              {/* import header component */}
              <View style={{flex:1}}>
                <Header />
              </View>
              
              {/* image container */}
              <View style={styles.imgContainer}>
                <Image
                  style={styles.logo}
                  source={require('../assets/images/6.png')}
                />
                <Text style={styles.imgtxt}>Login</Text>
              </View>

              {/* import input component */}
              <View style={styles.inputComponentContainer}>
                <View style={styles.inputContainer}>
                  <View style={styles.inputbox}>
                    {/* icon */}
                    <Zocial name="email" size={24} color="gray" />
                    <TextInput style={styles.input} autoFocus={true} keyboardType='email-address'
                      placeholder="Email" backgroundColor= 'white' value={email}
                      onBlur={handleValidation}
                      onChangeText={text=>setEmail(text)} 
                      autoCapitalize='none'/>
              
                      </View>
                      <View style={styles.inputbox}>
                      <Entypo name="lock" size={24} color="gray" />
                      <TextInput style={styles.input}
                        backgroundColor= 'white' keyboardType='default'      
                        onBlur={handleValidation}
                        secureTextEntry={true} placeholder="Password" value={password}
                        onChangeText={text=>setPassword(text)}
                          />
                     </View> 
                  </View>
              </View>
            
               {/* forget password section */}
              <View style={styles.forgetContainer}>
                <Text style={styles.forget} onPress={() => navigation.navigate('ForgetPassword')} >
                  Forget password?
                  </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Buttons text='login' onPress={handlesubmit} />
                <View style={styles.signupContainer}>
                  <Text style={styles.signuptext}>Don't have an account?</Text>
                  <Text style={styles.signup} onPress={() => navigation.navigate('Signup')} >SignUp</Text>
                </View>
              </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
  }; export default Login
